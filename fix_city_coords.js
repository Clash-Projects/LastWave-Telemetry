const fs = require('fs');
const path = require('path');

const vectorFilePath = path.join(__dirname, 'world-vector.js');
const citiesFilePath = path.join(__dirname, 'world-cities.js');

// 1. Load world-vector.js
let window = {};
eval(fs.readFileSync(vectorFilePath, 'utf8'));
const vectorMap = window.WORLD_VECTOR_MAP;

// Add missing country paths
vectorMap.paths['SG'] = {
  name: 'Singapore',
  path: 'M680.38,411.14l0.83,0.00l0.18,0.25l-0.50,0.28l-0.55,0.00l0.00,-0.28l0.05,-0.25Z'
};
vectorMap.paths['HK'] = {
  name: 'Hong Kong',
  path: 'M705.98,356.81l1.00,0.00l0.25,0.43l-0.25,0.54l-0.90,0.00l-0.18,-0.54l0.08,-0.43Z'
};
vectorMap.paths['BH'] = {
  name: 'Bahrain',
  path: 'M547.36,346.47l0.45,0.11l-0.15,1.34l-0.43,0.00l-0.03,-1.11l0.15,-0.33Z'
};

// Add Andaman, Nicobar, Lakshadweep to IN
vectorMap.paths['IN'].path += 'M653.60,380.43l0.25,1.03l-0.25,1.80l-0.25,1.79l-0.25,0.89l-0.50,0.00l0.25,-0.89l0.25,-1.79l0.25,-1.80l0.25,-1.03ZM652.97,391.41l2.25,2.03l0.75,3.54l0.00,0.76l-0.50,0.00l-0.25,-1.01l-0.50,-3.28l-1.75,-2.03ZM603.17,386.58l-0.25,1.78l2.50,1.27l-0.50,0.00l-2.50,-1.02l0.25,-2.04l0.50,0.00Z';

// Add Mallorca to ES
vectorMap.paths['ES'].path += 'M428.73,305.55l0.95,0.49l-0.70,1.62l-1.13,0.00l-1.00,-0.65l0.08,-0.81l0.80,-0.65l1.00,0.00Z';

// Add Oahu to US
vectorMap.paths['US'].path += 'M25.58,359.08l0.33,0.11l0.38,0.62l0.13,0.54l-1.18,0.00l-0.40,-0.40l0.33,-0.54l0.43,-0.32Z';

// Write updated world-vector.js
const vectorOutput = 'window.WORLD_VECTOR_MAP = ' + JSON.stringify(vectorMap) + ';\n';
fs.writeFileSync(vectorFilePath, vectorOutput, 'utf8');
console.log('Successfully updated world-vector.js with island polygons (SG, HK, BH, Andaman/Nicobar/Lakshadweep, Mallorca, Oahu)');

// 2. Load world-cities.js
window = {};
eval(fs.readFileSync(citiesFilePath, 'utf8'));
const cities = window.WORLD_CITIES;

// Projection math
const PROJ_RADIUS = 6378137;
const PROJ_RAD_DEG = Math.PI / 180;
const PROJ_BBOX = [
  { x: -20004297.151525836, y: -18449355.69035302 },
  { x: 20026572.394749384, y: 7485321.539093307 }
];
const WORLD_W = 900;
const WORLD_H = 583.0802520919394;
const CENTRAL_MERIDIAN = 11.5;

function latLngToCoords(lat, lng) {
  let diff = lng - CENTRAL_MERIDIAN;
  while (diff < -180) diff += 360;
  while (diff > 180) diff -= 360;
  const clampedLat = Math.max(-84.5, Math.min(84.5, lat));
  const projX = PROJ_RADIUS * diff * PROJ_RAD_DEG;
  const projY = -PROJ_RADIUS * Math.log(Math.tan(Math.PI / 4 + (clampedLat * Math.PI) / 360));
  const x = ((projX - PROJ_BBOX[0].x) / (PROJ_BBOX[1].x - PROJ_BBOX[0].x)) * WORLD_W;
  const y = ((projY - PROJ_BBOX[0].y) / (PROJ_BBOX[1].y - PROJ_BBOX[0].y)) * WORLD_H;
  return { x, y };
}

function coordsToLatLng(x, y) {
  const projX = (x / WORLD_W) * (PROJ_BBOX[1].x - PROJ_BBOX[0].x) + PROJ_BBOX[0].x;
  const projY = (y / WORLD_H) * (PROJ_BBOX[1].y - PROJ_BBOX[0].y) + PROJ_BBOX[0].y;
  const diff = projX / (PROJ_RADIUS * PROJ_RAD_DEG);
  let lng = diff + CENTRAL_MERIDIAN;
  while (lng < -180) lng += 360;
  while (lng > 180) lng -= 360;
  const lat = (Math.atan(Math.exp(-projY / PROJ_RADIUS)) - Math.PI / 4) * 360 / Math.PI;
  return { lat, lng };
}

function parseSvgPathToPolygons(d) {
  const tokens = d.match(/([a-zA-Z]|[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)/g);
  let polygons = [];
  let currentPoly = [];
  let curX = 0, curY = 0;
  let startX = 0, startY = 0;
  let i = 0;

  while (i < tokens.length) {
    let t = tokens[i];
    if (t === 'M') {
      if (currentPoly.length > 2) polygons.push(currentPoly);
      curX = parseFloat(tokens[++i]);
      curY = parseFloat(tokens[++i]);
      startX = curX; startY = curY;
      currentPoly = [{x: curX, y: curY}];
      i++;
    } else if (t === 'm') {
      if (currentPoly.length > 2) polygons.push(currentPoly);
      curX += parseFloat(tokens[++i]);
      curY += parseFloat(tokens[++i]);
      startX = curX; startY = curY;
      currentPoly = [{x: curX, y: curY}];
      i++;
    } else if (t === 'L') {
      curX = parseFloat(tokens[++i]);
      curY = parseFloat(tokens[++i]);
      currentPoly.push({x: curX, y: curY});
      i++;
    } else if (t === 'l') {
      curX += parseFloat(tokens[++i]);
      curY += parseFloat(tokens[++i]);
      currentPoly.push({x: curX, y: curY});
      i++;
    } else if (t === 'Z' || t === 'z') {
      if (currentPoly.length > 2) polygons.push(currentPoly);
      currentPoly = [];
      curX = startX; curY = startY;
      i++;
    } else {
      i++;
    }
  }
  if (currentPoly.length > 2) polygons.push(currentPoly);
  return polygons;
}

function pointInPoly(pt, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i].x, yi = poly[i].y;
    const xj = poly[j].x, yj = poly[j].y;
    const intersect = ((yi > pt.y) !== (yj > pt.y)) &&
      (pt.x < (xj - xi) * (pt.y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

function pointInCountry(pt, polys) {
  let inside = false;
  for (const poly of polys) {
    if (pointInPoly(pt, poly)) inside = !inside;
  }
  return inside;
}

function pointToSegmentDistSq(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  if (dx === 0 && dy === 0) {
    const dpx = px - x1, dpy = py - y1;
    return dpx*dpx + dpy*dpy;
  }
  let t = ((px - x1) * dx + (py - y1) * dy) / (dx*dx + dy*dy);
  t = Math.max(0, Math.min(1, t));
  const nx = x1 + t * dx;
  const ny = y1 + t * dy;
  const dpx = px - nx, dpy = py - ny;
  return dpx*dpx + dpy*dpy;
}

function distToPolygons(pt, polygons) {
  let minDistSq = Infinity;
  for (const poly of polygons) {
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const dSq = pointToSegmentDistSq(pt.x, pt.y, poly[j].x, poly[j].y, poly[i].x, poly[i].y);
      if (dSq < minDistSq) minDistSq = dSq;
    }
  }
  return Math.sqrt(minDistSq);
}

const countryPolys = {};
for (const code in vectorMap.paths) {
  countryPolys[code] = parseSvgPathToPolygons(vectorMap.paths[code].path);
}

const countryNameToCode = {};
for (const code in vectorMap.paths) {
  countryNameToCode[vectorMap.paths[code].name.toLowerCase()] = code;
}
countryNameToCode['united states'] = 'US';
countryNameToCode['usa'] = 'US';
countryNameToCode['united kingdom'] = 'GB';
countryNameToCode['uk'] = 'GB';
countryNameToCode['russia'] = 'RU';
countryNameToCode['south korea'] = 'KR';
countryNameToCode['czech republic'] = 'CZ';
countryNameToCode['ivory coast'] = 'CI';
countryNameToCode['dr congo'] = 'CD';
countryNameToCode['republic of the congo'] = 'CG';
countryNameToCode['tanzania'] = 'TZ';
countryNameToCode['uae'] = 'AE';
countryNameToCode['united arab emirates'] = 'AE';
countryNameToCode['iran'] = 'IR';
countryNameToCode['syria'] = 'SY';
countryNameToCode['vietnam'] = 'VN';
countryNameToCode['laos'] = 'LA';
countryNameToCode['bolivia'] = 'BO';
countryNameToCode['venezuela'] = 'VE';
countryNameToCode['moldova'] = 'MD';
countryNameToCode['macedonia'] = 'MK';
countryNameToCode['brunei'] = 'BN';
countryNameToCode['timor-leste'] = 'TL';
countryNameToCode['dominican republic'] = 'DO';
countryNameToCode['singapore'] = 'SG';
countryNameToCode['hong kong'] = 'HK';
countryNameToCode['bahrain'] = 'BH';

// Deduplicate 16 pairs
const dupIdsToRemove = new Set([
  'in-ndl', 'in-myq', 'in-slv', 'in-vga', 'in-ixm',
  'us-dfw', 'us-iah', 'us-dtw', 'ca-yyz', 'jp-uky',
  'cn-pek', 'cn-xiy', 'jp-cts', 'uk-lpl', 'us-mco', 'mx-pbc'
]);

let deduplicatedCities = cities.filter(c => !dupIdsToRemove.has(c.id));
console.log('Deduplicated cities count:', deduplicatedCities.length, '(removed 16 duplicate entries)');

// Update Delhi name to New Delhi (NCR)
const delCity = deduplicatedCities.find(c => c.id === 'in-del');
if (delCity) delCity.name = 'New Delhi (NCR)';

function findInlandPoint(p0, polys, requiredMargin) {
  if (pointInCountry(p0, polys)) {
    const d = distToPolygons(p0, polys);
    if (d >= requiredMargin) return p0;
  }
  for (let r = 0.05; r <= 3.5; r += 0.05) {
    const steps = Math.max(36, Math.round(r * 24));
    for (let s = 0; s < steps; s++) {
      const angle = (s / steps) * 2 * Math.PI;
      const testPt = {
        x: p0.x + r * Math.cos(angle),
        y: p0.y + r * Math.sin(angle)
      };
      if (pointInCountry(testPt, polys)) {
        const edgeDist = distToPolygons(testPt, polys);
        if (edgeDist >= requiredMargin) {
          return testPt;
        }
      }
    }
  }
  for (let r = 0.05; r <= 3.5; r += 0.05) {
    const steps = Math.max(36, Math.round(r * 24));
    for (let s = 0; s < steps; s++) {
      const angle = (s / steps) * 2 * Math.PI;
      const testPt = {
        x: p0.x + r * Math.cos(angle),
        y: p0.y + r * Math.sin(angle)
      };
      if (pointInCountry(testPt, polys)) {
        const edgeDist = distToPolygons(testPt, polys);
        if (edgeDist >= 0.2) {
          return testPt;
        }
      }
    }
  }
  return null;
}

let adjustedCount = 0;
deduplicatedCities.forEach(c => {
  const code = countryNameToCode[c.country.toLowerCase()];
  if (!code || !countryPolys[code]) {
    console.error('Missing polygon for country:', c.country, c.id);
    return;
  }
  const p0 = latLngToCoords(c.lat, c.lng);
  const isInside = pointInCountry(p0, countryPolys[code]);
  const margin = isInside ? distToPolygons(p0, countryPolys[code]) : 0;
  
  if (!isInside || margin < 0.4) {
    const inland = findInlandPoint(p0, countryPolys[code], 0.6);
    if (inland) {
      const newLL = coordsToLatLng(inland.x, inland.y);
      c.lat = parseFloat(newLL.lat.toFixed(4));
      c.lng = parseFloat(newLL.lng.toFixed(4));
      adjustedCount++;
    } else {
      console.error('FAILED TO SNAP:', c.id, c.name, c.country);
    }
  }
});

console.log('Successfully snapped', adjustedCount, 'cities safely onto land within their country polygons');

// Strict verification
let outsideFinal = 0;
deduplicatedCities.forEach(c => {
  const code = countryNameToCode[c.country.toLowerCase()];
  const pt = latLngToCoords(c.lat, c.lng);
  if (!pointInCountry(pt, countryPolys[code])) {
    outsideFinal++;
    console.error('VERIFICATION FAILURE: City outside polygon:', c.id, c.name, c.country);
  }
});

if (outsideFinal > 0) {
  console.error('Fatal: ' + outsideFinal + ' cities still outside country polygon!');
  process.exit(1);
} else {
  console.log('100% VERIFICATION PASSED: All ' + deduplicatedCities.length + ' cities are squarely inside their country polygon!');
}

// Write out updated world-cities.js
const citiesOutput = `/**
 * LastWave Live - Global World Cities Database (Geocoded & Land-Snapped)
 * Comprehensive geospatial dataset of 522 global cities across all continents.
 * All coordinates mathematically snapped onto vector land boundaries with verified point-in-polygon containment.
 * Realtime listener counts and songs are populated dynamically from live telemetry.
 */

const _rootScope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_rootScope.WORLD_CITIES = ${JSON.stringify(deduplicatedCities, null, 2)};
`;

fs.writeFileSync(citiesFilePath, citiesOutput, 'utf8');
console.log('Successfully wrote updated world-cities.js with', deduplicatedCities.length, 'cities!');

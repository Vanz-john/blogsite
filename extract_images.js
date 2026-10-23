import fs from 'fs';
import path from 'path';

function log(msg) {
  console.log(msg);
  fs.appendFileSync('extract.log', msg + '\n');
}

try {
  fs.writeFileSync('extract.log', 'Starting extraction...\n');
  const pdfPath = 'C:/Users/HP Ryzen 5/Downloads/OJT/JIAR - NARRATIVE REPORT.pdf';
  log('Checking file exists: ' + fs.existsSync(pdfPath));

  const outDir = path.resolve('public/images');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
    log('Created dir: ' + outDir);
  }

  const data = fs.readFileSync(pdfPath);
  log('Read PDF bytes: ' + data.length);

  const startMarker = Buffer.from([0xFF, 0xD8, 0xFF]);
  const endMarker = Buffer.from([0xFF, 0xD9]);

  let count = 0;
  let pos = 0;

  while (pos < data.length) {
    const start = data.indexOf(startMarker, pos);
    if (start === -1) break;

    const end = data.indexOf(endMarker, start + 3);
    if (end === -1) break;

    const actualEnd = end + 2;
    const len = actualEnd - start;

    if (len > 15000) { // Keep substantial photos
      count++;
      const imgBuffer = data.subarray(start, actualEnd);
      const filename = `week_img_${count}.jpg`;
      fs.writeFileSync(path.join(outDir, filename), imgBuffer);
      log(`Saved ${filename}: ${Math.round(len / 1024)} KB`);
    }

    pos = actualEnd;
  }

  log(`Done! Total images saved: ${count}`);
} catch (err) {
  log('Error: ' + err.stack);
}

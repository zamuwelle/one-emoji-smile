const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDirectory, 'entry.txt');
// One warm, readable emoji that needs no caption.
const entry = '🫶';

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, entry, 'utf8');

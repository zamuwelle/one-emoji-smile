const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// One warm, readable emoji that needs no caption.
const entry = '🫶';

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'entry.txt'), entry, 'utf8');

import fs from 'fs';
import yaml from 'js-yaml';

const src = 'src/lib/data.yaml';
const dest = 'src/lib/data.json';

const data = yaml.load(fs.readFileSync(src, 'utf8'));
fs.writeFileSync(dest, JSON.stringify(data, null, 2));

console.log('✅ Converted YAML → JSON');

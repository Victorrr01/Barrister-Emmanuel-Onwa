import fs from 'fs';
let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

const sectionsToRemoveRegex = /\{\/\*\s*WHY CHOOSE ME SECTION.*?\*\/\}\s*<section[\s\S]*?<\/section>/g;
content = content.replace(sectionsToRemoveRegex, '');

fs.writeFileSync('src/pages/Home.tsx', content);

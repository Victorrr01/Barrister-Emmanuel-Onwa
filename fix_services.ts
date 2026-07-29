import fs from 'fs';
let content = fs.readFileSync('src/pages/Services.tsx', 'utf-8');

// Remove PROVEN_PROCESS import
content = content.replace(/, PROVEN_PROCESS/g, '');
content = content.replace(/import { FeeEstimator } from '\.\.\/components\/FeeEstimator';\n/g, '');

const sectionsToRemoveRegex = /\{\/\*\s*(WHAT THE 3-STEP PROVEN PROCESS LOOKS LIKE|TRANSPARENT FEE ESTIMATOR INTEGRATION)\s*\*\/\}\s*<section[\s\S]*?<\/section>/g;
content = content.replace(sectionsToRemoveRegex, '');

fs.writeFileSync('src/pages/Services.tsx', content);

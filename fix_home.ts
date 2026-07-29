import fs from 'fs';
let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Remove imports
content = content.replace(/, TRUST_PILLARS, TESTIMONIALS/g, '');
content = content.replace(/import { ReadinessAssessment } from '\.\.\/components\/ReadinessAssessment';\n/g, '');
content = content.replace(/import { FeeEstimator } from '\.\.\/components\/FeeEstimator';\n/g, '');

// Remove sections
const sectionsToRemoveRegex = /\{\/\*\s*(WHY CHOOSE ME SECTION|INTERACTIVE SELF-ASSESSMENT CALCULATOR|TRANSPARENT FEE ESTIMATOR SECTION|TESTIMONIALS \/ SOCIAL PROOF PLACEHOLDER)\s*\*\/\}\s*<section[\s\S]*?<\/section>/g;
content = content.replace(sectionsToRemoveRegex, '');

fs.writeFileSync('src/pages/Home.tsx', content);

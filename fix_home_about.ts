import fs from 'fs';

let homeContent = fs.readFileSync('src/pages/Home.tsx', 'utf-8');
let aboutContent = fs.readFileSync('src/pages/About.tsx', 'utf-8');

// Extract TEAM_MEMBERS from legalData to import
homeContent = homeContent.replace(
  /import { ATTORNEY_INFO, PRACTICE_AREAS } from '\.\.\/data\/legalData';/,
  "import { ATTORNEY_INFO, PRACTICE_AREAS, TEAM_MEMBERS } from '../data/legalData';"
);

// We need to extract the HISTORY & FIRM VALUES section
// Start from {/* HISTORY & FIRM VALUES */} to just before {/* CORPORATE SOCIAL RESPONSIBILITY */}
const historySectionMatch = aboutContent.match(/\{\/\* HISTORY & FIRM VALUES \*\/\}([\s\S]*?)\{\/\* CORPORATE SOCIAL RESPONSIBILITY \*\/\}/);
const csrSectionMatch = aboutContent.match(/\{\/\* CORPORATE SOCIAL RESPONSIBILITY \*\/\}([\s\S]*?)\{\/\* LAWYERS PROFILE \*\/\}/);
const lawyersSectionMatch = aboutContent.match(/\{\/\* LAWYERS PROFILE \*\/\}([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/);

if (historySectionMatch && csrSectionMatch && lawyersSectionMatch) {
  const replacement = historySectionMatch[0] + csrSectionMatch[0] + lawyersSectionMatch[0] + "\n</div>\n</div>\n</section>\n";
  
  // Replace the BRIEF BIO section in Home.tsx
  const bioRegex = /\{\/\* BRIEF BIO & VALUE PROPOSITION \*\/\}([\s\S]*?)\{\/\* KEY PRACTICE AREAS OVERVIEW \*\/\}/;
  homeContent = homeContent.replace(bioRegex, replacement + '\n{/* KEY PRACTICE AREAS OVERVIEW */}');
  
  fs.writeFileSync('src/pages/Home.tsx', homeContent);
} else {
  console.log("Could not find sections");
}


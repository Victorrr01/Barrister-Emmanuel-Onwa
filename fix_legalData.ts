import fs from 'fs';
let content = fs.readFileSync('src/data/legalData.ts', 'utf-8');

// Find the start of TRUST_PILLARS
const trustPillarsStart = content.indexOf('export const TRUST_PILLARS');
// Find the start of TEAM_MEMBERS
const teamMembersStart = content.indexOf('export const TEAM_MEMBERS');

if (trustPillarsStart !== -1 && teamMembersStart !== -1) {
  content = content.substring(0, trustPillarsStart) + content.substring(teamMembersStart);
  fs.writeFileSync('src/data/legalData.ts', content);
}

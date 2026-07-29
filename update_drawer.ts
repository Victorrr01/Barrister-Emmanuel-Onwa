import fs from 'fs';
let content = fs.readFileSync('src/components/AiAssistantDrawer.tsx', 'utf-8');

content = content.replace(
  /I am Barrister Emmanuel Onwa's AI Legal Assistant\./,
  `I am Redemption Chambers' AI Legal Assistant.`
);

content = content.replace(
  /directly with Barrister Emmanuel Onwa\./g,
  `directly with our legal team.`
);

content = content.replace(
  /Barrister Emmanuel Onwa operates/g,
  `Redemption Chambers operates`
);

fs.writeFileSync('src/components/AiAssistantDrawer.tsx', content);

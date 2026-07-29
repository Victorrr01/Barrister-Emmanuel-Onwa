import fs from 'fs';
let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

content = content.replace(
  /Barrister Emmanuel Onwa/g,
  `Redemption Chambers`
);

content = content.replace(
  /Emmanuel Onwa & Co\./g,
  `I.E. ONWA & CO.`
);

content = content.replace(
  /18\+ Years/g,
  `14+ Years`
);

content = content.replace(
  /18 years/g,
  `14 years`
);

fs.writeFileSync('src/pages/Home.tsx', content);

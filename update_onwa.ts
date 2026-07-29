import fs from 'fs';
let content = fs.readFileSync('src/data/legalData.ts', 'utf-8');

content = content.replace(
  /Barrister Emmanuel Onwa helped us/g,
  `Redemption Chambers helped us`
);

content = content.replace(
  /Barrister Emmanuel Onwa personally drafts/g,
  `Our partners personally draft`
);

content = content.replace(
  /Barrister Emmanuel Onwa ensures/g,
  `Redemption Chambers ensures`
);

content = content.replace(
  /Barrister Emmanuel Onwa's flat-fee/g,
  `Redemption Chambers' flat-fee`
);

content = content.replace(
  /Barrister Emmanuel Onwa/g,
  `ONWA EMMANUEL IFEANYI ESQ`
);

fs.writeFileSync('src/data/legalData.ts', content);

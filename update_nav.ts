import fs from 'fs';
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf-8');

content = content.replace(
  /Barrister Emmanuel Onwa/g,
  `Redemption Chambers`
);

content = content.replace(
  /<span className="font-serif font-bold text-slate-900 tracking-tight text-xl hidden sm:inline-block">\s*Emmanuel Onwa & Co\.\s*<\/span>/,
  `<span className="font-serif font-bold text-slate-900 tracking-tight text-xl hidden sm:inline-block">I.E. ONWA & CO.</span>`
);

fs.writeFileSync('src/components/Navbar.tsx', content);

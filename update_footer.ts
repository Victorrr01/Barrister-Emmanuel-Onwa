import fs from 'fs';
let content = fs.readFileSync('src/components/Footer.tsx', 'utf-8');

content = content.replace(
  /<span className="font-serif text-xl font-bold text-white tracking-tight">\s*BARRISTER EMMANUEL ONWA\s*<\/span>/,
  `<span className="font-serif text-xl font-bold text-white tracking-tight">I.E. ONWA & CO.</span>`
);

content = content.replace(
  /About Barrister Emmanuel Onwa/,
  `About Redemption Chambers`
);

content = content.replace(
  /Barrister Emmanuel Onwa is enrolled as a Barrister & Solicitor of the Supreme Court of Nigeria and a member of the Nigerian Bar Association \(NBA, Ilorin Branch\)\./,
  `Our partners are enrolled as Barristers & Solicitors of the Supreme Court of Nigeria.`
);

content = content.replace(
  /Providing strategic legal representation, land conveyancing \(C of O \/ Title Perfection\), High Court probate administration, and CAC corporate law across all 36 States of Nigeria & FCT Abuja \(Chambers in Ilorin, Kwara State\)\./,
  `Providing high quality legal services across Litigation, Corporate Practice, Property Consultancy, and Telecommunication sectors in Nigeria and abroad.`
);

content = content.replace(
  /<span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500\/10 text-amber-400 border border-amber-500\/30">\s*18\+ Years Legal Practice\s*<\/span>/,
  `<span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">14+ Years Legal Practice</span>`
);

fs.writeFileSync('src/components/Footer.tsx', content);

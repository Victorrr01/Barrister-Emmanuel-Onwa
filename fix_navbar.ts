import fs from 'fs';
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf-8');

const regex = /<span className="block text-\[10px\] sm:text-\[11px\] font-medium uppercase tracking-widest text-amber-400\/90">\s*Legal Practitioner & Solicitor • Nationwide Practice Across Nigeria\s*<\/span>/g;

content = content.replace(regex, '');

fs.writeFileSync('src/components/Navbar.tsx', content);

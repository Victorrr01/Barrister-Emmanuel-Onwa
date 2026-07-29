import fs from 'fs';
let content = fs.readFileSync('src/components/Footer.tsx', 'utf-8');

const footerLinkRegex = /<li>\s*<button onClick=\{\(\) => onNavigate\('about'\)\} className="hover:text-amber-300 transition-colors">\s*About Redemption Chambers\s*<\/button>\s*<\/li>/;

content = content.replace(footerLinkRegex, '');

fs.writeFileSync('src/components/Footer.tsx', content);

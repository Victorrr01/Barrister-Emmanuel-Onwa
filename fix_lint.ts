import fs from 'fs';

// App.tsx
let appContent = fs.readFileSync('src/App.tsx', 'utf-8');
appContent = appContent.replace(/\{currentPage === 'about' && \(\s*<About\s*onOpenBooking=\{\(\) => handleOpenBooking\(\)\}\s*\/>\s*\)\}/g, '');
fs.writeFileSync('src/App.tsx', appContent);

// Navbar.tsx
let navContent = fs.readFileSync('src/components/Navbar.tsx', 'utf-8');
navContent = navContent.replace(/<button\s+onClick=\{\(\) => onNavigate\('about'\)\}\s+className=\{`text-sm font-semibold tracking-wide uppercase transition-colors \$\{[\s\S]*?\} >\s*About\s*<\/button>/g, '');
navContent = navContent.replace(/<button\s+onClick=\{\(\) => \{\s*onNavigate\('about'\);\s*setIsMobileMenuOpen\(false\);\s*\}\}\s+className=\{`text-left text-sm font-bold tracking-wide uppercase px-4 py-3 rounded-xl \$\{[\s\S]*?\} >\s*About Firm\s*<\/button>/g, '');
fs.writeFileSync('src/components/Navbar.tsx', navContent);

// Home.tsx
let homeContent = fs.readFileSync('src/pages/Home.tsx', 'utf-8');
homeContent = homeContent.replace(/import \{ Building, RadioTower, Landmark, Target, Users, ShieldCheck,/, 'import { Building, RadioTower, Landmark, Target, ShieldCheck,');
fs.writeFileSync('src/pages/Home.tsx', homeContent);


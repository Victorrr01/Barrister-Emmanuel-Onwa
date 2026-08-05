import fs from 'fs';

let content = fs.readFileSync('src/components/Navbar.tsx', 'utf-8');

content = content.replace(/text-base sm:text-lg' : 'text-lg sm:text-xl/g, "text-sm sm:text-base md:text-lg' : 'text-base sm:text-lg md:text-xl");

fs.writeFileSync('src/components/Navbar.tsx', content);


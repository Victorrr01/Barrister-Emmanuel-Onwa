import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Adjust paddings
content = content.replace(/py-20 lg:py-32/g, 'py-16 sm:py-20 lg:py-32');
content = content.replace(/py-20/g, 'py-12 sm:py-20');

// Adjust font sizes for mobile
content = content.replace(/text-xl sm:text-2xl/g, 'text-lg sm:text-2xl');
content = content.replace(/text-lg text-slate-700/g, 'text-base sm:text-lg text-slate-700');
content = content.replace(/text-lg text-slate-800/g, 'text-base sm:text-lg text-slate-800');
content = content.replace(/text-3xl md:text-4xl/g, 'text-2xl sm:text-3xl md:text-4xl');
content = content.replace(/text-3xl md:text-5xl/g, 'text-3xl md:text-5xl'); // This one is fine
content = content.replace(/text-xl md:text-2xl/g, 'text-lg sm:text-xl md:text-2xl');

// Email overflow on team members
content = content.replace(/<a href=\{`mailto:\$\{member\.email\}`\} className="text-amber-700 hover:underline">/g, '<a href={`mailto:${member.email}`} className="text-amber-700 hover:underline break-all">');

// Address font size on mobile
content = content.replace(/<p className="text-xl md:text-2xl font-serif">\{CONTACT_INFO\.address\}<\/p>/, '<p className="text-lg sm:text-xl md:text-2xl font-serif">{CONTACT_INFO.address}</p>');

// Email and Telephone font sizes in contact section
content = content.replace(/className="block text-lg text-amber-400 hover:text-amber-300 transition-colors"/g, 'className="block text-base sm:text-lg text-amber-400 hover:text-amber-300 transition-colors break-all"');

fs.writeFileSync('src/pages/Home.tsx', content);


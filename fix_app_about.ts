import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Remove import
content = content.replace(/import { About } from '\.\/pages\/About';\n/, '');

// Remove rendering
const renderRegex = /\{currentPage === 'about' && <About onOpenBooking=\{handleOpenBooking\} \/>\}/;
content = content.replace(renderRegex, '');

fs.writeFileSync('src/App.tsx', content);

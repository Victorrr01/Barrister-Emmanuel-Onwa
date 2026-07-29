import fs from 'fs';

for (let file of ['src/pages/Home.tsx', 'src/pages/Services.tsx', 'src/components/PracticeAreaModal.tsx']) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // add to lucide-react import
    if (!content.includes('Building,')) {
      content = content.replace(/import\s*\{\s*([^}]+)\}\s*from\s*'lucide-react';/, (match, p1) => {
        return `import { Building, RadioTower, Landmark, Scale, ${p1}} from 'lucide-react';`;
      });
    }

    // add to getIcon
    content = content.replace(/case 'Briefcase': return Briefcase;/, 
      `case 'Briefcase': return Briefcase;\n      case 'Building': return Building;\n      case 'RadioTower': return RadioTower;\n      case 'Landmark': return Landmark;\n      case 'Scale': return Scale;`);

    fs.writeFileSync(file, content);
  }
}

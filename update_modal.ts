import fs from 'fs';
let content = fs.readFileSync('src/components/ConsultationModal.tsx', 'utf-8');

content = content.replace(
  /Directly with Barrister Emmanuel Onwa/g,
  `Directly with Redemption Chambers`
);

content = content.replace(
  /Barrister Emmanuel Onwa's chambers have received your booking\./g,
  `Redemption Chambers has received your booking.`
);

fs.writeFileSync('src/components/ConsultationModal.tsx', content);

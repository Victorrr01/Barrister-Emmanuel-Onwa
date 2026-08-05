import fs from 'fs';
let content = fs.readFileSync('src/components/BookingModal.tsx', 'utf-8');
content = content.replace(
  /<form action="https:\/\/formspree.io\/f\/YOUR_FORM_ID" method="POST" onSubmit=\{handleSubmit\} className="space-y-6">/,
  '<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onSubmit={handleSubmit} className="space-y-6">\n              <input type="hidden" name="_subject" value="New Consultation Request - Redemption Chambers" />'
);
fs.writeFileSync('src/components/BookingModal.tsx', content);

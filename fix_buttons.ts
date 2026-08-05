import fs from 'fs';

// 1. Navbar.tsx
let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf-8');
navbar = navbar.replace(
  /<nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">/g,
  `<div className="hidden xl:flex items-center space-x-4">
            <nav className="flex items-center space-x-1 lg:space-x-2">`
);
navbar = navbar.replace(
  /<\/nav>\s*<div className="xl:hidden flex items-center">/g,
  `</nav>
            <a href="#contact" className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95">
              <Calendar className="w-4 h-4" />
              <span>Book a Meeting</span>
            </a>
          </div>
          <div className="xl:hidden flex items-center">`
);
navbar = navbar.replace(/import \{ Menu, X, Phone, Mail, MapPin, Shield, MessageCircle \} from 'lucide-react';/, "import { Menu, X, Phone, Mail, MapPin, Shield, MessageCircle, Calendar } from 'lucide-react';");
fs.writeFileSync('src/components/Navbar.tsx', navbar);

// 2. Home.tsx
let home = fs.readFileSync('src/pages/Home.tsx', 'utf-8');
home = home.replace(
  /Delivering high quality legal and general services to public and private sector clients in Nigeria and abroad\.\s*<\/p>\s*<\/div>\s*<\/section>/,
  `Delivering high quality legal and general services to public and private sector clients in Nigeria and abroad.
          </p>
          <div className="pt-8 flex justify-center">
            <a href="#contact" className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95">
               <Calendar className="w-5 h-5" />
               <span>Book a Consultation</span>
            </a>
          </div>
        </div>
      </section>`
);
home = home.replace(/import \{ Landmark, Scale, ShieldCheck, HeartHandshake, Users, PhoneCall, CheckCircle \} from 'lucide-react';/, "import { Landmark, Scale, ShieldCheck, HeartHandshake, Users, PhoneCall, CheckCircle, Calendar } from 'lucide-react';");
fs.writeFileSync('src/pages/Home.tsx', home);

// 3. App.tsx
let app = fs.readFileSync('src/App.tsx', 'utf-8');
app = app.replace(
  /<div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-auto">/,
  `<div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
        <a
          href="#contact"
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold h-11 w-11 sm:w-auto sm:px-4 rounded-full shadow-md flex items-center justify-center sm:space-x-2 text-xs hover:scale-105 active:scale-95 transition-all duration-200 border border-amber-300"
        >
          <Calendar className="w-4 h-4" />
          <span className="hidden sm:inline">Book a Meeting</span>
        </a>`
);
fs.writeFileSync('src/App.tsx', app);


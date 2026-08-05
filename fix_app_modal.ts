import fs from 'fs';

let app = fs.readFileSync('src/App.tsx', 'utf-8');
if (!app.includes('BookingModal')) {
    app = app.replace(
        "import { MessageCircle, Calendar } from 'lucide-react';",
        "import { MessageCircle, Calendar } from 'lucide-react';\nimport { BookingModal } from './components/BookingModal';\nimport { AdminDashboard } from './components/AdminDashboard';"
    );
    app = app.replace(
        "export default function App() {",
        "export default function App() {\n  const [isBookingOpen, setIsBookingOpen] = useState(false);\n  const [isAdminOpen, setIsAdminOpen] = useState(false);\n"
    );
    app = app.replace(
        /<Navbar \/>/g,
        "<Navbar onOpenBooking={() => setIsBookingOpen(true)} />"
    );
    app = app.replace(
        /<Home \/>/g,
        "<Home onOpenBooking={() => setIsBookingOpen(true)} />"
    );
    app = app.replace(
        /<Footer \/>/g,
        "<Footer onOpenAdmin={() => setIsAdminOpen(true)} />"
    );
    // Replace the href="#contact" book meeting button in floating action
    app = app.replace(
        /<a\s+href="#contact"\s+className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold h-11 w-11 sm:w-auto sm:px-4 rounded-full shadow-md flex items-center justify-center sm:space-x-2 text-xs hover:scale-105 active:scale-95 transition-all duration-200 border border-amber-300"\s*>\s*<Calendar className="w-4 h-4" \/>\s*<span className="hidden sm:inline">Book a Meeting<\/span>\s*<\/a>/,
        `<button
          onClick={() => setIsBookingOpen(true)}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold h-11 w-11 sm:w-auto sm:px-4 rounded-full shadow-md flex items-center justify-center sm:space-x-2 text-xs hover:scale-105 active:scale-95 transition-all duration-200 border border-amber-300"
        >
          <Calendar className="w-4 h-4" />
          <span className="hidden sm:inline">Book a Meeting</span>
        </button>`
    );

    app = app.replace(
        "</div>\n  );\n}",
        `      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
}`
    );
    fs.writeFileSync('src/App.tsx', app);
}

let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf-8');
navbar = navbar.replace(
    "export const Navbar: React.FC = () => {",
    "export const Navbar: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {"
);
navbar = navbar.replace(
    /<a href="#contact" className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-amber-500\/20 transition-all hover:scale-105 active:scale-95">\s*<Calendar className="w-4 h-4" \/>\s*<span>Book a Meeting<\/span>\s*<\/a>/,
    `<button onClick={onOpenBooking} className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95">
              <Calendar className="w-4 h-4" />
              <span>Book a Meeting</span>
            </button>`
);
fs.writeFileSync('src/components/Navbar.tsx', navbar);

let home = fs.readFileSync('src/pages/Home.tsx', 'utf-8');
home = home.replace(
    "export const Home: React.FC = () => {",
    "export const Home: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {"
);
home = home.replace(
    /<a href="#contact" className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold shadow-lg shadow-amber-500\/20 transition-all hover:scale-105 active:scale-95">\s*<Calendar className="w-5 h-5" \/>\s*<span>Book a Consultation<\/span>\s*<\/a>/,
    `<button onClick={onOpenBooking} className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95">
               <Calendar className="w-5 h-5" />
               <span>Book a Consultation</span>
            </button>`
);
fs.writeFileSync('src/pages/Home.tsx', home);


let footer = fs.readFileSync('src/components/Footer.tsx', 'utf-8');
footer = footer.replace(
    "export const Footer: React.FC = () => {",
    "export const Footer: React.FC<{ onOpenAdmin: () => void }> = ({ onOpenAdmin }) => {"
);
footer = footer.replace(
    "<p>© {new Date().getFullYear()} {FIRM_NAME}. All rights reserved.</p>",
    `<div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-center">
            <p>© {new Date().getFullYear()} {FIRM_NAME}. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <button onClick={onOpenAdmin} className="text-slate-500 hover:text-amber-500 transition-colors">Admin Login</button>
          </div>`
);
fs.writeFileSync('src/components/Footer.tsx', footer);


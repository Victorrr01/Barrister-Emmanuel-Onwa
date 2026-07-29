import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Remove import
content = content.replace(/import { AiAssistantDrawer } from '\.\/components\/AiAssistantDrawer';\n/g, '');

// Remove state
content = content.replace(/const \[aiAssistantOpen, setAiAssistantOpen\] = useState\(false\);\n/g, '');

// Remove button
const buttonRegex = /<button[\s\S]*?id="floating-ai-assistant-btn"[\s\S]*?<\/button>/;
content = content.replace(buttonRegex, '');

// Remove component
content = content.replace(/<AiAssistantDrawer\s*isOpen={aiAssistantOpen}\s*onClose=\{\(\) => setAiAssistantOpen\(false\)\}\s*onOpenBooking=\{\(\) => handleOpenBooking\(\)\}\s*\/>/g, '');

fs.writeFileSync('src/App.tsx', content);

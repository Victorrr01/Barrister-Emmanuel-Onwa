import fs from 'fs';

let content = fs.readFileSync('src/data/legalData.ts', 'utf-8');

// Correction 1
content = content.replace(
  /"Redemption Chambers currently maintains strong links across the continent with international law firms and across borders within Africa\."/g,
  '"Redemption Chambers currently maintains strong professional links with international law firms and legal practitioners across Africa."'
);

// Correction 2
content = content.replace(
  /"Over 14 years of practice, the firm has developed ideas and legal concepts across a wide range of practice areas, including litigation, property consultancy, arbitration, mediation, corporate law practice, transport and telecommunications, and banking and financial services including project financing and infrastructure\."/g,
  '"Over the past 14 years of practice, the firm has developed extensive expertise and innovative legal solutions across a broad range of practice areas, including litigation, property consultancy, arbitration, mediation, corporate law practice, transport and telecommunications, as well as banking and financial services, including project finance and infrastructure development."'
);

// Correction 3
content = content.replace(
  /"The firm works to ensure a positive impact in the legal and wider community, guided by values of excellence, innovation, and pro bono service\. Redemption Chambers states it opposes cheating and fraud and works against inhumane treatment of clients and non-clients\."/g,
  '"The firm works to ensure a positive impact in the legal and wider community, guided by the values of excellence, innovation, and pro bono service. Redemption Chambers opposes cheating and fraud and works against the inhumane treatment of clients and non-clients."'
);

// Correction 4
content = content.replace(
  /"Redemption Chambers is committed to building long-term strategic relationships with carefully chosen causes and charities\. Partners actively engage in pro bono services for indigent citizens of Nigeria and Africa, including physical court representation and case filing\. Partners are also patrons of various NGOs, charitable organizations, and churches, and the firm provides free legal advice to churches and NGOs through its own NGO, REDEEMERS INITIATIVE FOR YOUTH AWARENESS AND EMPOWERMENT\."/g,
  '"Redemption Chambers is committed to building long-term strategic relationships with carefully chosen causes and charities. Partners actively engage in pro bono services for indigent citizens of Nigeria and Africa, including physical court representation and case filing. Partners are also patrons of various NGOs, charitable organizations, and churches. The firm also provides free legal advice to churches and NGOs through its own NGO, REDEEMERS INITIATIVE FOR YOUTH AWARENESS AND EMPOWERMENT."'
);

// Correction 5
content = content.replace(
  /"08141858840"/g,
  '"09052910649"'
);

fs.writeFileSync('src/data/legalData.ts', content);

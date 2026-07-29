import fs from 'fs';
let content = fs.readFileSync('src/data/legalData.ts', 'utf-8');

content = content.replace(
  /export const ATTORNEY_INFO = \{[\s\S]*?\n\};\n/m,
  `export const ATTORNEY_INFO = {
  name: "Barrister Emmanuel Onwa",
  title: "Principal Partner",
  firmName: "I.E. ONWA & CO. (REDEMPTION CHAMBERS)",
  tagline: "Nationwide Legal Practice • Principal Chambers in Ilorin, Kwara State",
  experienceYears: 14,
  clientsServed: "1,500+",
  assetsManaged: "₦12.5B+",
  successRate: "99.2%",
  phone: "+234 806 471 0262",
  whatsapp: "+2348064710262",
  whatsappFormatted: "+234 806 471 0262",
  email: "lawyeronwajr@gmail.com",
  officeAddress: "43, DELE ABUBAKAR STREET (STADIUM ROAD)",
  cityStateZip: "ILORIN, KWARA STATE",
  officeHours: "Monday – Friday: 8:00 AM – 5:30 PM WAT",
  barAdmissions: [
    "Solicitor & Advocate of the Supreme Court of Nigeria"
  ],
  ctaPhrases: [
    "Schedule Legal Consultation",
    "Protect Your Assets Across Nigeria",
    "Request Corporate & Litigation Review"
  ]
};
`
);

content = content.replace(
  /export const PRACTICE_AREAS: PracticeArea\[\] = \[[\s\S]*?\];\n\nexport const TRUST_PILLARS/m,
  `export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "litigation-dispute",
    title: "Litigation and Dispute Resolution",
    shortDesc: "Aggressive and strategic representation in complex litigation and dispute resolution across all courts.",
    fullDesc: "We provide formidable representation in contentious and non-contentious issues, underpinned by rich and many years of involvement in litigation and arbitration cases. Our approach ensures strong advocacy in the Supreme Court, Court of Appeal, and High Courts.",
    iconName: "Scale",
    keyDeliverables: [
      "Civil & Commercial Litigation",
      "Arbitration & Mediation",
      "Appellate Practice",
      "Dispute Strategy & Risk Management"
    ],
    idealFor: [
      "Corporations facing commercial disputes",
      "Individuals requiring strong court representation",
      "Parties seeking alternative dispute resolution"
    ]
  },
  {
    id: "corporate-practice",
    title: "Corporate Practice",
    shortDesc: "Comprehensive legal advice and strategy for corporate commercial sectors.",
    fullDesc: "Our fully integrated commercial law firm represents clients from a range of industries and service sectors, both public and private. We offer expert legal advice on all aspects of corporate and commercial activity, leveraging our extensive referral network to help clients meet their commercial objectives.",
    iconName: "Building",
    keyDeliverables: [
      "Corporate Governance & Compliance",
      "Mergers & Acquisitions",
      "Commercial Contracts & Agreements",
      "Business Structuring & Formation"
    ],
    idealFor: [
      "Startups and emerging companies",
      "Established corporate entities",
      "Foreign investors in Nigeria"
    ]
  },
  {
    id: "property-infrastructure",
    title: "Property Consultants / Infrastructure",
    shortDesc: "Specialist property acquisition, conveyancing, and infrastructure project financing.",
    fullDesc: "We specialize in the property/real estate sector, offering international and regional ability to acquire property for our clients globally. With an experienced approach and professional negotiation, we secure desired properties in choice locations at attractive prices.",
    iconName: "FileCheck",
    keyDeliverables: [
      "Property Acquisition & Conveyancing",
      "Infrastructure & Project Financing",
      "Real Estate Due Diligence",
      "Title Perfection & Registration"
    ],
    idealFor: [
      "Real estate investors and developers",
      "Individuals acquiring property globally",
      "Infrastructure project sponsors"
    ]
  },
  {
    id: "telecommunication",
    title: "Telecommunication",
    shortDesc: "Navigating the complex regulatory landscape of the telecommunications sector.",
    fullDesc: "Our firm has developed ideas and legal concepts across the telecommunication sector. We advise on regulatory compliance, licensing, spectrum allocation, and dispute resolution for telecom operators and service providers.",
    iconName: "RadioTower",
    keyDeliverables: [
      "Regulatory Compliance & Licensing",
      "Spectrum Allocation Advice",
      "Infrastructure Sharing Agreements",
      "Telecom Dispute Resolution"
    ],
    idealFor: [
      "Telecommunication operators",
      "Internet Service Providers (ISPs)",
      "Tech companies & investors"
    ]
  },
  {
    id: "banking-capital-markets",
    title: "Banking / Capital Markets",
    shortDesc: "Expert legal solutions for banking, project financing, and capital market transactions.",
    fullDesc: "We provide specialist integrated legal services to the banking and financial services sector. Our expertise covers project financing, regulatory compliance, loan syndications, and capital market operations.",
    iconName: "Landmark",
    keyDeliverables: [
      "Project & Corporate Financing",
      "Capital Market Compliance",
      "Loan Syndications & Agreements",
      "Financial Regulatory Advisory"
    ],
    idealFor: [
      "Banks and financial institutions",
      "Corporate borrowers",
      "Capital market participants"
    ]
  }
];

export const TRUST_PILLARS`
);

fs.writeFileSync('src/data/legalData.ts', content);

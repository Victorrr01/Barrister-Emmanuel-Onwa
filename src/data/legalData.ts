import { PracticeArea, Testimonial, CredentialItem, ProcessStep } from '../types';

export const ATTORNEY_INFO = {
  name: "Barrister Emmanuel Onwa",
  title: "Legal Practitioner & Solicitor of the Supreme Court of Nigeria",
  firmName: "Emmanuel Onwa & Co. (Legal Practitioners & Fiduciaries)",
  tagline: "Nationwide Legal Practice Across Nigeria (All 36 States & FCT) • Principal Chambers in Ilorin, Kwara State",
  experienceYears: 18,
  clientsServed: "1,500+",
  assetsManaged: "₦12.5B+",
  successRate: "99.2%",
  phone: "+234 806 471 0262",
  whatsapp: "+2348064710262",
  whatsappFormatted: "+234 806 471 0262",
  email: "barrister.emmanuel.onwa@gmail.com",
  officeAddress: "No. 14 Taiwo Isale Road (Opp. Challenge Junction)",
  cityStateZip: "Ilorin, Kwara State, Nigeria (Nationwide Representation Across All 36 States & FCT Abuja)",
  officeHours: "Monday – Friday: 8:00 AM – 5:30 PM WAT (Weekend & Nationwide Virtual Consultations Available)",
  barAdmissions: [
    "Solicitor & Advocate of the Supreme Court of Nigeria (Licensed Nationwide)",
    "Call to Bar, Nigeria Law School (Bagauda Campus, Kano)",
    "Member, Nigerian Bar Association (NBA Ilorin Branch & National NBA)"
  ],
  ctaPhrases: [
    "Schedule Legal Consultation (Nationwide & Virtual)",
    "Protect Your Land & Property Assets Across Nigeria",
    "Request High Court Probate & Estate Review"
  ]
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "land-conveyancing",
    title: "Land & Property Law (C of O & Kwara Land Registry)",
    shortDesc: "Guiding real estate acquisitions, Deed of Assignment, Governor's Consent, and KWAGIS land searches in Ilorin and across Nigeria.",
    fullDesc: "Navigating Nigerian land transactions requires rigorous legal due diligence to prevent fraudulent titles and encroachment. We conduct official searches at Kwara State Geographic Information Service (KWAGIS), prepare unassailable Deeds of Assignment, and process Governor's Consent and Certificates of Occupancy (C of O).",
    iconName: "FileCheck",
    keyDeliverables: [
      "KWAGIS & Ministry of Lands Title Search Report",
      "Deed of Assignment & Contract of Sale Drafting",
      "Governor's Consent & C of O Processing",
      "Perfection of Title & Stamp Duty Filing",
      "Boundary Dispute & Encroachment Safeguards"
    ],
    idealFor: [
      "Property buyers and real estate investors in Ilorin & Nigeria",
      "Diaspora Nigerians purchasing land in Kwara State",
      "Families perfecting ancestral land ownership titles"
    ]
  },
  {
    id: "probate-administration",
    title: "Probate & Estate Administration (High Court Ilorin)",
    shortDesc: "Guiding executors and families through the High Court Probate Registry for Letters of Administration and Will Execution.",
    fullDesc: "Losing a loved one without structured probate clearance can lock bank accounts and real estate for years. Barrister Emmanuel Onwa handles Letters of Administration, Probate Applications at the High Court of Kwara State Registry, debt settlements, and peaceful beneficiary asset sharing.",
    iconName: "ShieldCheck",
    keyDeliverables: [
      "Application for Letters of Administration / Probate Grant",
      "Inventory & Asset Valuation for High Court Registry",
      "Gazette Publication & Notice to Creditors",
      "Release of Bank Accounts & Shares Transfer",
      "Deed of Distribution & Beneficiary Vesting"
    ],
    idealFor: [
      "Executors named in a deceased family member's Will",
      "Heirs seeking Letters of Administration without a Will",
      "Families seeking transparent estate asset distribution in Nigeria"
    ]
  },
  {
    id: "wills-living-trusts",
    title: "Wills Drafting & Customary Family Trusts",
    shortDesc: "Crafting binding Wills, Family Living Trusts, and customary succession blueprints in accordance with Nigerian Law.",
    fullDesc: "Ensure your spouse, children, and chosen heirs inherit your hard-earned property without family acrimony. We draft legally sound Wills lodged at the High Court Probate Vault, alongside private Family Living Trusts that bypass lengthy court probate.",
    iconName: "Scroll",
    keyDeliverables: [
      "Custom Will Drafting & Lodgment at High Court Registry",
      "Family Living Trust Deeds & Fiduciary Safeguards",
      "Executor & Legal Guardian Nominations",
      "Medical Directives & Power of Attorney",
      "Asset & Bank Account Titling Directives"
    ],
    idealFor: [
      "Parents seeking clear inheritance directives for children",
      "Landowners wishing to prevent family inheritance disputes",
      "Business owners structuring long-term family trusts"
    ]
  },
  {
    id: "civil-dispute-litigation",
    title: "Civil Litigation & Dispute Resolution",
    shortDesc: "Aggressive courtroom representation and Alternative Dispute Resolution (ADR) in Kwara State High Courts & Appeal Courts.",
    fullDesc: "When legal disputes escalate, Barrister Emmanuel Onwa offers over 18 years of seasoned trial advocacy across Magistrates Courts, State High Courts, and the Court of Appeal. We handle land ownership disputes, contractual breaches, and chieftaincy/tenancy matters.",
    iconName: "Lock",
    keyDeliverables: [
      "Court Representation in High Court & Court of Appeal",
      "Writs of Summons & Defense Filings",
      "Out-of-Court Settlement Negotiations (ADR)",
      "Interlocutory Injunctions & Stay of Execution",
      "Enforcement of Court Judgments"
    ],
    idealFor: [
      "Individuals facing land encroachment or breach of contract",
      "Landlords and tenants requiring legal enforcement",
      "Clients seeking seasoned court advocacy in Ilorin and Kwara State"
    ]
  },
  {
    id: "corporate-cac-law",
    title: "CAC Corporate Law & Business Registration",
    shortDesc: "Corporate Affairs Commission (CAC) company formations, regulatory compliance, shareholder agreements, and contract drafting.",
    fullDesc: "Build your enterprise on a solid legal foundation. We handle Corporate Affairs Commission (CAC) registrations for Limited Liability Companies (Ltd), Business Names, and Incorporated Trustees (NGOs/Churches), alongside drafting commercial partnerships and contracts.",
    iconName: "Briefcase",
    keyDeliverables: [
      "CAC Limited Liability Company & Business Registration",
      "Shareholders' Agreements & Articles of Association",
      "Post-Incorporation Filings & Annual Returns",
      "Commercial Contracts & Lease Agreements",
      "Regulatory Compliance & Board Resolutions"
    ],
    idealFor: [
      "Entrepreneurs launching new ventures in Kwara & Nigeria",
      "SMEs restructuring corporate equity and partners",
      "NGOs, Associations, and Religious Bodies registering with CAC"
    ]
  },
  {
    id: "fiduciary-asset-shielding",
    title: "Asset Shielding & Family Legacy Fiduciary",
    shortDesc: "Protecting commercial assets, real estate holdings, and chieftaincy/matrimonial interests from third-party liabilities.",
    fullDesc: "Safeguard your life savings and real estate portfolio from aggressive litigation and debts. We construct legal holding structures, joint venture deeds, and fiduciary arrangements tailored to Nigerian property and statutory frameworks.",
    iconName: "HeartHandshake",
    keyDeliverables: [
      "Real Estate Holding Company Structuring",
      "Joint Venture & Development Agreements",
      "Matrimonial & Spousal Asset Protection Deeds",
      "Family Business Succession & Governance Charters",
      "Fiduciary Management & Oversight Protocols"
    ],
    idealFor: [
      "High-net-worth estate owners and commercial landlords",
      "Business founders planning multi-generational continuity",
      "Diaspora investors managing assets remotely in Nigeria"
    ]
  }
];

export const TRUST_PILLARS = [
  {
    title: "18+ Years Supreme Court & Nationwide Mastery",
    description: "Licensed to advocate in all Courts of Record across Nigeria — Federal High Courts, State High Courts, Court of Appeal & Supreme Court.",
    icon: "Award"
  },
  {
    title: "100% Transparent Flat-Fee Rates",
    description: "No hidden charges or unexpected billings. Every client receives an explicit, written fee quote before legal work commences.",
    icon: "DollarSign"
  },
  {
    title: "Nationwide Coverage & Diaspora Desk",
    description: "Chambers in Ilorin, Kwara State with active litigation, conveyancing, and corporate representation in Abuja, Lagos, Port Harcourt, and across all 36 States.",
    icon: "Users"
  },
  {
    title: "Uncompromising Integrity & Ethics",
    description: "Built on rigorous professional standards, quick turnaround times, and relentless advocacy for every client's rights.",
    icon: "RefreshCw"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    clientName: "Alhaji Kayode Jimoh",
    role: "Real Estate Investor & Merchant",
    location: "Ilorin, Kwara State",
    rating: 5,
    quote: "Barrister Emmanuel Onwa helped us secure Governor's Consent and perfected the C of O for our commercial property along Fate Road, Ilorin. His diligence at KWAGIS saved us from purchasing a encumbered property.",
    serviceUsed: "Land Conveyancing & Title Perfection"
  },
  {
    id: "2",
    clientName: "Chief & Mrs. Olabisi Adeleke",
    role: "Diaspora Clients",
    location: "London, UK / Ilorin",
    rating: 5,
    quote: "Living abroad, we were nervous about managing my late father's estate in Nigeria. Barrister Onwa secured Letters of Administration at the High Court in record time and transparently handled all bank account releases.",
    serviceUsed: "Probate & Estate Administration"
  },
  {
    id: "3",
    clientName: "Dr. Clement Nwachukwu",
    role: "Medical Director & Entrepreneur",
    location: "Offa / Ilorin",
    rating: 5,
    quote: "Barrister Onwa drafted our comprehensive Family Living Trust and registered our medical clinic with the CAC. His clear flat-fee rates and high legal mastery gave our entire family total confidence.",
    serviceUsed: "Wills, Living Trust & Corporate Law"
  }
];

export const CREDENTIALS: CredentialItem[] = [
  {
    category: "Legal Qualification",
    title: "Barrister at Law (B.L.) & Call to Bar",
    institution: "Nigeria Law School (Bagauda Campus, Kano)",
    year: "Call to Bar",
    details: "Enrolled as Solicitor & Advocate of the Supreme Court of Nigeria"
  },
  {
    category: "Education",
    title: "Bachelor of Laws (LL.B Hons) Degree",
    institution: "Ebonyi State University",
    year: "LL.B Graduate",
    details: "Specialization in Property Law, Jurisprudence & Equity"
  },
  {
    category: "Secondary Education",
    title: "Senior Secondary Certificate",
    institution: "Madonna Catholic Secondary School",
    year: "Alumnus"
  },
  {
    category: "Professional Bar Membership",
    title: "Member, Nigerian Bar Association (NBA)",
    institution: "Ilorin Branch, Kwara State",
    year: "Active Member",
    details: "Practicing Legal Practitioner in Good Standing"
  },
  {
    category: "Practice Jurisdictions",
    title: "Supreme Court of Nigeria & All Inferior Courts",
    institution: "High Courts of Kwara State, Court of Appeal",
    year: "18+ Years Experience",
    details: "Authorized to advocate across all 36 States of Nigeria & FCT Abuja"
  },
  {
    category: "Certifications",
    title: "Corporate & Property Fiduciary Specialist",
    institution: "CAC Accredited Agent & KWAGIS Legal Consultant",
    year: "Certified"
  }
];

export const PROVEN_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Legal Consultation & Title Audit",
    subtitle: "We analyze your legal needs, property documents, or probate facts",
    description: "During our 45-minute consultation at our Ilorin office or via Phone/Zoom, we examine your property titles, family structure, or corporate needs and conduct initial land or probate registry audits.",
    deliverables: ["Legal Status & KWAGIS Search Report", "Probate & Succession Checklist", "Transparent Flat-Fee Proposal"]
  },
  {
    number: "02",
    title: "Drafting, Perfection & Court Lodgment",
    subtitle: "Precision drafting of unassailable legal instruments",
    description: "Barrister Emmanuel Onwa personally drafts your Deeds of Assignment, Wills, Trust Instruments, or High Court filings, ensuring strict compliance with Nigerian Statutes and Land Use Acts.",
    deliverables: ["Executed Deed of Assignment / Will", "High Court Probate Registry Filings", "CAC Corporate Registration Certificate"]
  },
  {
    number: "03",
    title: "Final Execution & Perpetual Fiduciary Safeguards",
    subtitle: "Governor's Consent, C of O issuance, and ongoing advocacy",
    description: "We complete stamp duty payments, obtain Governor's Consent, lodge finalized Wills at the High Court vault, and provide continuous legal representation whenever needed.",
    deliverables: ["Perfected C of O / Title Deed Binder", "High Court Lodgment Receipt", "Lifetime Legal Stewardship"]
  }
];

export const FEE_ESTIMATOR_OPTIONS = [
  {
    id: "essential-plan",
    name: "Essential Legal & Will Package",
    price: "₦150,000",
    priceNum: 150000,
    subtitle: "Ideal for individual property owners, professionals, and families",
    includes: [
      "Custom Will Drafting & High Court Lodgment",
      "Power of Attorney (Financial & Property)",
      "Medical & Next-of-Kin Healthcare Proxy",
      "Digital & Bank Account Beneficiary Directives",
      "Formal Execution & Commissioner for Oaths Witnessing"
    ]
  },
  {
    id: "property-trust-plan",
    name: "Property Conveyancing & Family Trust Bundle",
    price: "₦280,000",
    priceNum: 280000,
    popular: true,
    subtitle: "Our most requested package for landowners and business owners",
    includes: [
      "Deed of Assignment & Contract of Sale Drafting",
      "KWAGIS & Ministry of Lands Title Search",
      "Family Living Trust Deed Creation",
      "Governor's Consent & C of O Application Filings",
      "Power of Attorney & Pour-Over Wills",
      "1st Year Free Title Perfection & Legal Monitoring"
    ]
  },
  {
    id: "probate-assistance",
    name: "High Court Probate & Letters of Administration",
    price: "₦350,000+",
    priceNum: 350000,
    subtitle: "Full-service executor assistance for High Court probate clearance",
    includes: [
      "High Court Ilorin Probate Petition & Inventory",
      "Gazette Publication & Notice to Creditors",
      "Bank Accounts Release & Shares Transfer",
      "Beneficiary Distribution Agreements & Releases",
      "Final High Court Registry Clearing & Vesting Deeds"
    ]
  }
];

export const FREQUENT_QUESTIONS = [
  {
    q: "Why do I need a Deed of Assignment & C of O for my land in Kwara State?",
    a: "Without an executed Deed of Assignment registered at KWAGIS and an approved Certificate of Occupancy (C of O) or Governor's Consent, your ownership title remains vulnerable to double-allocation, boundary disputes, or government acquisition. Barrister Emmanuel Onwa ensures your title is legally perfected."
  },
  {
    q: "What is the difference between a Will and a Family Living Trust under Nigerian Law?",
    a: "A Will must pass through the High Court Probate Registry after passing away (which can take months and involves probate taxes). A Family Living Trust transfers ownership of real estate and bank accounts to your designated heirs privately and immediately without court probate."
  },
  {
    q: "How does Barrister Emmanuel Onwa's flat-fee pricing work?",
    a: "After our initial consultation, we provide a guaranteed, written flat-fee quote covering all drafting, court filings, and searches. You will never face surprise hourly charges or unannounced fees."
  },
  {
    q: "Can Barrister Onwa handle legal matters for Diaspora Nigerians outside the country?",
    a: "Yes. We regularly represent Nigerians residing in the UK, US, Canada, and Europe for land purchases, C of O processing, property management, and probate administration in Kwara State and across Nigeria via video consultations and power of attorney."
  }
];


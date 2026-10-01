/* ======================================================================
   SRM IMT — SITE CONTENT
   Single source of truth. Every page renders its text from this object.
   ====================================================================== */

const SITE_DATA = {

  brand: {
    name: "Trichy SRM Specialty Hospital",
    programme: "Internal Medicine Training",
    programmeShort: "IMT Stage 1 — UK",
    tagline: "Joint Royal Colleges of Physicians Training Board aligned curriculum",
    phone: "+91 431 225 8738",
    email: "imt@mchrc.srmtrichy.edu.in",
    address: "Trichy SRM Specialty Hospital, SRM Nagar, Trichy – Chennai Highway, Irungalur Village, Tiruchirappalli, Tamil Nadu 621105",
    mapEmbed: "https://www.google.com/maps?q=Tiruchirappalli,Tamil+Nadu&output=embed"
  },

  nav: [
    { label: "Home", href: "index.html" },
    { label: "Programme", href: "programme.html" },
    { label: "Admissions & Fees", href: "admissions.html" }
  ],

  hero: {
    eyebrow: "IMT Stage 1 · UK Curriculum",
    headline: "Internal Medicine Training",
    headlineAccent: "(IMT Stage 1 – UK)",
    subheading: "Train to UK standards. Learn from international faculty. Build your future in Internal Medicine.",
    ctas: [
      { label: "Apply Now", href: "admissions.html#apply", primary: true },
      { label: "Download Brochure", href: "#brochure", primary: false },
      { label: "Curriculum", href: "programme.html#curriculum", primary: false },
      { label: "Contact Us", href: "admissions.html#contact", primary: false }
    ]
  },

  stats: [
    { value: 1575, suffix: "+", label: "Bed tertiary care teaching hospital" },
    { value: 3, suffix: "", label: "Year structured IMT Stage 1 programme" },
    { value: 6, suffix: "", label: "Seats per intake" },
    { value: 17, suffix: "", label: "Clinical rotation specialties" }
  ],

  whyChoose: {
    heading: "Why Choose Trichy SRM Specialty Hospital?",
    intro: "A teaching hospital built for volume, variety and structured, UK-aligned physician training.",
    items: [
      {
        icon: "hospital",
        title: "1575+ Bed Teaching Hospital",
        text: "One of the region's largest tertiary care campuses, giving trainees exposure across every major discipline under one roof."
      },
      {
        icon: "pulse",
        title: "High-Volume, Diverse Exposure",
        text: "High daily patient volume across acute and chronic presentations builds pattern recognition faster than low-throughput settings."
      },
      {
        icon: "globe",
        title: "UK-Aligned Curriculum",
        text: "Structured against the JRCPTB Internal Medicine Training curriculum, with the same workplace-based assessment framework."
      },
      {
        icon: "sim",
        title: "Simulation-Based Learning",
        text: "A dedicated simulation centre for acute scenarios, procedural skills and crisis resource management, away from patient risk."
      },
      {
        icon: "mentor",
        title: "Experienced Educational Supervisors",
        text: "Every trainee is paired with a named Educational Supervisor for continuous, individualised progress review."
      },
      {
        icon: "research",
        title: "Research & Quality Improvement",
        text: "Structured time and mentorship for audit, quality improvement projects, and peer-reviewed publication."
      }
    ]
  },

  overview: {
    heading: "Programme Overview",
    text: "A three-year structured IMT Stage 1 programme combining core and specialty clinical rotations, academic teaching, workplace-based assessments, a maintained ePortfolio, annual ARCP review, and named mentorship throughout training.",
    points: [
      "Three-year structured IMT Stage 1 programme",
      "Clinical rotations across core and specialty disciplines",
      "Structured academic teaching programme",
      "Workplace-based assessments (WPBAs)",
      "Maintained ePortfolio",
      "Annual ARCP progression review",
      "Named mentor for the full three years"
    ]
  },

  structure: {
    heading: "Programme Structure",
    intro: "Three progressive years, each building the clinical judgement and independence the next stage demands.",
    years: [
      {
        year: "Year 1",
        title: "Foundations of Acute Care",
        text: "Core Internal Medicine, Acute Medicine, ICU and Emergency Medicine — building the safety-critical skills every physician needs first."
      },
      {
        year: "Year 2",
        title: "Specialty Breadth",
        text: "Specialty rotations, structured research exposure, early leadership responsibility, and dedicated MRCP preparation."
      },
      {
        year: "Year 3",
        title: "Registrar Readiness",
        text: "Advanced Internal Medicine with registrar-level responsibilities, culminating in ARCP completion and Stage 1 sign-off."
      }
    ]
  },

  rotations: {
    heading: "Clinical Rotations",
    intro: "Seventeen specialties, one continuous training pathway.",
    list: [
      "Internal Medicine", "Cardiology", "Respiratory Medicine", "Gastroenterology",
      "Neurology", "Nephrology", "Endocrinology", "Rheumatology",
      "Infectious Diseases", "Geriatrics", "ICU", "Emergency Medicine",
      "Oncology", "Dermatology", "Psychiatry", "Palliative Care", "Radiology"
    ]
  },

  curriculum: {
    heading: "Curriculum",
    intro: "Ten domains, taught and assessed continuously across all three years.",
    sections: [
      { title: "Acute Medicine", text: "Recognition and initial management of the acutely unwell patient, including deterioration and escalation pathways." },
      { title: "Clinical Skills", text: "History taking, examination and procedural competence assessed directly against JRCPTB standards." },
      { title: "Leadership", text: "Ward-level leadership, task delegation, and decision-making under time pressure." },
      { title: "Communication", text: "Patient, family and interdisciplinary communication, including breaking difficult news." },
      { title: "Ethics", text: "Consent, capacity, confidentiality and end-of-life decision-making frameworks." },
      { title: "Patient Safety", text: "Incident reporting, human factors, and systems-based approaches to reducing harm." },
      { title: "Research & Audit", text: "Designing, conducting and presenting clinical audits and quality improvement projects." },
      { title: "Teaching Skills", text: "Structured training in bedside teaching and feedback for junior colleagues and students." },
      { title: "Simulation", text: "Scenario-based simulation for high-acuity, low-frequency events and procedural rehearsal." },
      { title: "Professional Development", text: "Portfolio building, career planning, and preparation for MRCP and Stage 2 training." }
    ]
  },

  assessment: {
    heading: "Assessment",
    intro: "Continuous, evidence-based assessment throughout the programme — the same workplace-based tools used across UK IMT.",
    methods: [
      { abbr: "Mini-CEX", name: "Mini Clinical Evaluation Exercise" },
      { abbr: "CBD", name: "Case-Based Discussion" },
      { abbr: "ACAT", name: "Acute Care Assessment Tool" },
      { abbr: "DOPS", name: "Direct Observation of Procedural Skills" },
      { abbr: "MSF", name: "Multi-Source Feedback" },
      { abbr: "Reflective Practice", name: "Structured reflective entries" },
      { abbr: "Supervisor Reviews", name: "Regular Educational Supervisor review" },
      { abbr: "Annual ARCP", name: "Annual Review of Competence Progression" }
    ]
  },

  faculty: {
    heading: "Faculty",
    intro: "A dedicated training team, from programme leadership to day-to-day clinical supervision.",
    members: [
      { role: "Programme Director", name: "Programme Director", detail: "Overall responsibility for curriculum delivery and ARCP outcomes." },
      { role: "Deputy Programme Director", name: "Deputy Programme Director", detail: "Supports day-to-day programme delivery and trainee welfare." },
      { role: "Educational Supervisors", name: "Departmental Educational Supervisors", detail: "One named supervisor per trainee for the duration of training." },
      { role: "Clinical Supervisors", name: "Rotation Clinical Supervisors", detail: "Rotation-specific supervision and direct workplace assessment." },
      { role: "Programme Administrator", name: "Programme Administration Office", detail: "Applications, scheduling, and day-to-day programme coordination." }
    ]
  },

  facilities: {
    heading: "Facilities",
    intro: "Purpose-built infrastructure to support structured, hands-on training.",
    items: [
      { icon: "sim", title: "Simulation Centre", text: "High-fidelity manikins and scenario rooms for acute and procedural training." },
      { icon: "icu", title: "ICU", text: "Full-scale intensive care unit for critical care exposure from Year 1." },
      { icon: "library", title: "Digital Library", text: "24/7 access to clinical references, journals and e-learning resources." },
      { icon: "lab", title: "Skills Lab", text: "Dedicated space for procedural practice outside clinical hours." },
      { icon: "research", title: "Research Facilities", text: "Support and infrastructure for audit, QI projects and publication." },
      { icon: "hall", title: "Conference Halls", text: "Regular grand rounds, teaching sessions and academic meetings." }
    ]
  },

  eligibility: {
    heading: "Eligibility",
    intro: "Requirements to apply for IMT Stage 1 at Trichy SRM Specialty Hospital.",
    criteria: [
      "MBBS degree from a recognised National or International Medical Institution.",
      "Completed mandatory internship.",
      "Valid registration with the Medical Council of India (MCI) or a State Medical Council.",
      "Selection through a formal interview process."
    ]
  },

  admissionProcess: {
    heading: "Admission Process",
    intro: "Seven steps from application to orientation.",
    steps: [
      { title: "Online Application", text: "Submit the application form online with required documents." },
      { title: "Document Verification", text: "Academic and registration documents are verified by the admissions office." },
      { title: "Interview", text: "Shortlisted candidates attend a formal interview." },
      { title: "Selection", text: "Final candidate list is published following interview review." },
      { title: "Fee Payment", text: "Selected candidates complete counselling and fee payment." },
      { title: "Enrollment", text: "Formal enrollment into the IMT Stage 1 programme." },
      { title: "Orientation", text: "Induction to departments, supervisors, and the ePortfolio system." }
    ]
  },

  fees: {
    heading: "Fee Structure",
    intro: "Transparent, all-inclusive structure for the three-year programme.",
    table: [
      { label: "Programme", value: "Internal Medicine Training (IMT Stage 1 – UK)" },
      { label: "Programme Duration", value: "3 Years" },
      { label: "Number of Seats", value: "6 per Intake" },
      { label: "Application Process", value: "Online Application" },
      { label: "Session Commencement", value: "November (Each Intake)" },
      { label: "Application Fee", value: "₹10,000" },
      { label: "Programme Fee", value: "₹17,70,000 per annum + GST (as applicable)" },
      { label: "Stipend — Year 1", value: "₹35,000 / month" },
      { label: "Stipend — Year 2", value: "₹37,500 / month" },
      { label: "Stipend — Year 3", value: "₹45,000 / month" }
    ],
    includes: [
      "Three years of structured IMT Stage 1 training",
      "Clinical rotations across core and specialty disciplines",
      "Educational & Clinical Supervisor support",
      "Workplace-Based Assessments (WPBAs)",
      "Annual ARCP reviews",
      "Access to ePortfolio",
      "Academic teaching programme",
      "Simulation-based training",
      "Digital library access",
      "Research, audit and quality improvement opportunities",
      "Career guidance and mentorship"
    ],
    excludes: [
      "MRCP(UK) examination fees",
      "Royal College registration fees (if applicable)",
      "Accommodation and personal living expenses",
      "Travel, visa and incidental expenses"
    ]
  },

  faq: {
    heading: "Frequently Asked Questions",
    items: [
      { q: "Where is the programme delivered?", a: "All clinical rotations and teaching take place at Trichy SRM Specialty Hospital, Tiruchirappalli." },
      { q: "How many seats are available per intake?", a: "Six seats are available per intake, with sessions commencing every November." },
      { q: "Is MRCP(UK) included in the programme fee?", a: "No. MRCP(UK) examination fees are not included in the programme fee and are paid separately by the trainee." },
      { q: "What assessment tools are used?", a: "Mini-CEX, CBD, ACAT, DOPS, MSF, reflective practice, supervisor reviews and the Annual ARCP." },
      { q: "Is there a stipend during training?", a: "Yes. Stipends increase each year, from ₹35,000/month in Year 1 to ₹45,000/month in Year 3." },
      { q: "How do I apply?", a: "Applications are submitted online. Shortlisted candidates are invited for a formal interview before final selection." },
      { q: "What happens after selection?", a: "Selected candidates complete counselling and fee payment, followed by enrollment and a structured orientation." }
    ]
  },

  footer: {
    about: "A three-year, UK-aligned Internal Medicine Training programme at Trichy SRM Specialty Hospital — structured rotations, workplace-based assessment, and named mentorship throughout.",
    quickLinks: [
      { label: "Programme Overview", href: "index.html#overview" },
      { label: "Curriculum", href: "programme.html#curriculum" },
      { label: "Faculty", href: "programme.html#faculty" },
      { label: "Fee Structure", href: "admissions.html#fees" },
      { label: "FAQs", href: "admissions.html#faq" }
    ],
    copyright: "© 2026 Trichy SRM Specialty Hospital. All rights reserved."
  }

};

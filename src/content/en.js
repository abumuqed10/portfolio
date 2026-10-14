/* English content. Items with sample: true are illustrative placeholders:
   replace them with real details, then set sample: false (or delete them). */
export default {
  ui: {
    pageTitle: "Muflih Al-Otaibi | Tourism & Hospitality",
    skip: "Skip to content", fullName: "Muflih Al-Otaibi", brand: "Muflih",
    navAbout: "About", navProjects: "Projects", navSkills: "Skills", navExperience: "Experience",
    navEducation: "Education", navCerts: "Certifications", navLanguages: "Languages", navContact: "Contact",
    langGroup: "Language", menu: "Menu", mainNav: "Main", close: "Close",
    sampleTag: "Sample",
    sampleNote: "Items marked Sample (projects, figures, experience, certificates and their dates) are placeholders and will be replaced with real details.",
    location: "Riyadh, Saudi Arabia", grad: "Expected graduation 2027",
    first: "Muflih", last: "Al-Otaibi",
    role: "Tourism & Hospitality Management Student", university: "King Saud University",
    intro: "I enjoy turning hospitality data into clear decisions, from occupancy and pricing to reservations and reports. Accuracy and organisation guide everything I work on.",
    avail: "Open to co-op placements from next semester",
    ctaCv: "Download CV", ctaWork: "View my work", linkedin: "LinkedIn", email: "Email",
    cv: "/cv/Muflih-Al-Otaibi-CV-EN.pdf",
    repTag: "A sample of my work", repOpen: "Open the full project",

    aboutKicker: "About me",
    aboutTitle: "The numbers behind every stay",
    aboutP1: "I study Tourism & Hospitality Management at King Saud University and expect to graduate in 2027. My coursework showed me where I do my best work: analysing figures, organising details and turning them into reports a team can act on.",
    aboutP2: "I'm building my skills in Excel, data analysis and hotel systems, and I follow the growth of Saudi tourism under Vision 2030 through its performance figures. I'm looking for a co-op placement where careful, well-organised work makes a real difference.",
    aboutQuote: "Good decisions in hospitality start with a clear report.",

    projKicker: "Projects",
    projTitle: "Case studies from my coursework",
    projLead: "Analysis, costing and planning projects. Open one to see the goal, my role, the tools and the results.",
    viewProject: "View project",

    skillsKicker: "Skills",
    skillsTitle: "Knowledge, tools and work habits",
    skillsLead: "What I know about the industry, the tools I use, and how I work.",
    lvlAdv: "Advanced", lvlInt: "Intermediate", lvlLearn: "Learning",

    expKicker: "Experience",
    expTitle: "Hands-on experience",
    expLead: "Training and volunteering in reservations, coordination and data.",

    eduKicker: "Education", eduTitle: "Academic foundation",
    eduCourses: "Relevant coursework", eduActivities: "Activities",

    certKicker: "Certifications",
    certTitle: "My certification roadmap",
    certLead: "What I've completed, what I'm studying now, and what comes next.",
    stDone: "Completed", stStudy: "In progress", stPlan: "Planned",

    langKicker: "Languages", langTitle: "Clear in both languages",
    levelOf: "Level {n} of 5",

    contactKicker: "Contact",
    contactTitle: "Let's work together",
    contactLead: "Available for a co-op placement from next semester, in hotels, travel companies or tourism organisations.",
    cEmail: "Email", cLinkedin: "LinkedIn", cLocation: "Based in",
    copy: "Copy", copied: "Copied",
    formTitle: "Send a message",
    fName: "Full name", fEmail: "Email address", fType: "Type of enquiry",
    fTypes: [["coop", "Co-op / training"], ["job", "Job opportunity"], ["project", "Project or collaboration"], ["other", "Other"]],
    fMessage: "Message", fSend: "Send message",
    fNote: "Your message comes straight to my inbox.",
    formInvalid: "Please fill in your name, a valid email address and your message.",
    formSending: "Sending…",
    formSent: "Thank you, your message has been sent. I'll get back to you soon.",
    formFailed: "Sorry, the message couldn't be sent. Please try again or write to abu.muqed10@gmail.com.",
    mailSubject: "Portfolio enquiry",
    footerRights: "© 2026 Muflih Al-Otaibi", backTop: "Back to top",

    dIdea: "Goal", dRole: "My role", dTools: "Tools", dResults: "Key results", dChart: "Chart",
    dFiles: "Project files", filesSoon: "The full report and Excel file will be added here.",
    season: "Riyadh Season",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },

  focus: ["Excel", "Data analysis", "Reporting", "Bilingual (AR / EN)"],

  facts: [
    ["University", "King Saud University"],
    ["Major", "Tourism & Hospitality Management"],
    ["Graduation", "2027 (expected)"],
    ["Based in", "Riyadh"],
    ["Languages", "Arabic · English (B1)"],
  ],

  projects: [
    {
      sample: true, course: "Hotel Revenue Management course",
      title: "Riyadh hotel occupancy during Riyadh Season",
      summary: "Compared occupancy and average daily rate in season months against the rest of the year.",
      tools: "Excel · Word", meta: ["Individual", "Fall 2025"],
      idea: "Measure how Riyadh Season affects hotel performance, using monthly data for a sample of 4- and 5-star hotels.",
      role: ["Collected and cleaned the monthly data in Excel", "Calculated occupancy, ADR and RevPAR", "Built a chart dashboard and wrote three pricing recommendations"],
      stats: [["+24%", "Occupancy lift in season months"], ["81%", "Peak occupancy (December)"], ["3", "Pricing recommendations"]],
      chart: [58, 61, 64, 60, 55, 52, 57, 63, 66, 74, 79, 81], season: [9, 11],
      chartCap: "Monthly occupancy (%) · sample data",
    },
    {
      sample: true, course: "Tour Programme Planning course",
      title: "Costing and scheduling a Diriyah tour programme",
      summary: "A detailed budget and timetable for a three-day visitor programme, with supplier comparisons.",
      tools: "Excel · Word", meta: ["Individual", "Fall 2024"],
      idea: "Handle the administrative side of a three-day programme: costing every item, scheduling the stops and comparing supplier quotes.",
      role: ["Built an Excel costing sheet for every programme item", "Compared quotes from 4 transport and accommodation suppliers", "Prepared a timetable with a fallback plan for each day"],
      stats: [["32", "Cost items calculated"], ["4", "Suppliers compared"], ["2", "Versions: standard and premium"]],
    },
    {
      sample: true, course: "Front Office & Reservations course",
      title: "Group booking tracker for a 40-guest trip",
      summary: "An Excel tool that tracks a group booking from first request to final rooming list.",
      tools: "Excel · Google Sheets", meta: ["Team of 3", "Spring 2025"],
      idea: "Replace scattered messages with one tracker for a university group trip: rooming list, payments, deadlines and supplier confirmations.",
      role: ["Designed the tracker structure and data-validation rules", "Built payment and deadline status columns with conditional formatting", "Wrote a one-page guide so the team could update it"],
      stats: [["40", "Guests tracked"], ["5", "Status stages per booking"], ["1", "Shared source of truth"]],
    },
  ],

  skills: [
    {
      title: "Industry knowledge",
      items: [
        ["Revenue management", "Occupancy, ADR, RevPAR, seasonal pricing"],
        ["Reservations & distribution", "Direct bookings, OTAs and GDS basics"],
        ["Hotel & travel operations", "How departments and suppliers work together"],
        ["Saudi tourism market", "Vision 2030 and sector performance indicators"],
      ],
    },
    {
      title: "Tools",
      items: [
        ["Excel", "Pivot tables, lookups, charts", "adv"],
        ["Word & PowerPoint", "Business documents and presentations", "adv"],
        ["Reporting & dashboards", "Recurring reports and tracking sheets", "int"],
        ["Oracle OPERA PMS", "Reservations and front-office workflows", "learn"],
        ["Power BI", "Interactive dashboards", "learn"],
      ],
    },
    {
      title: "Work habits",
      items: [
        ["Accuracy", "Careful with data, figures and documents"],
        ["Organisation", "Several tasks against fixed deadlines"],
        ["Written communication", "Formal correspondence in Arabic and English"],
        ["Discretion", "Handling guest and booking data responsibly"],
      ],
    },
  ],

  experience: [
    {
      sample: true, type: "Training", date: "Jun – Aug 2026",
      role: "Reservations Office Trainee", org: "4-star hotel · Riyadh",
      points: ["Entered and amended reservations in the hotel's PMS under supervision.", "Prepared the daily arrivals list and checked it against OTA bookings.", "Answered booking emails in Arabic and English using approved templates."],
    },
    {
      sample: true, type: "Volunteering", date: "Feb 2026",
      role: "Registration & Data Volunteer", org: "Tourism exhibition · Riyadh Front",
      points: ["Entered and checked visitor and exhibitor registration data.", "Prepared a daily attendance report for the organisers."],
    },
    {
      sample: true, type: "Volunteering", date: "Nov 2025",
      role: "Volunteer Admin Coordinator", org: "Event during Riyadh Season",
      points: ["Organised volunteer shift rosters in a shared spreadsheet.", "Tracked supply requests and followed up with vendors."],
    },
  ],

  education: {
    university: "King Saud University",
    college: "College of Tourism and Archaeology",
    degree: "Bachelor of Tourism & Hospitality Management",
    dates: "2023 – 2027 (expected)", datesSample: true,
    courses: ["Hotel Revenue Management", "Front Office & Reservations", "Tour Programme Planning", "Hospitality Accounting", "Tourism Statistics", "Entrepreneurship in Tourism"],
    activities: [{ sample: true, text: "Member, Tourism Students Club (reports team)" }],
  },

  certs: [
    { sample: true, st: "study", name: "Microsoft Office Specialist: Excel", issuer: "Microsoft" },
    { sample: true, st: "plan", name: "Power BI Data Analyst (PL-300)", issuer: "Microsoft" },
    { sample: true, st: "plan", name: "Oracle OPERA PMS", issuer: "Oracle Hospitality" },
    { sample: true, st: "plan", name: "Amadeus Selling Platform basics", issuer: "Amadeus" },
  ],

  languages: [
    { name: "Arabic", level: "Native", n: 5, desc: "First language, for formal writing and speaking." },
    { name: "English", level: "Intermediate (B1)", n: 3, desc: "Comfortable with booking emails and everyday conversations, and actively improving." },
  ],
};

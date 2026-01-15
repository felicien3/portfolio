// Language Data
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.badge": "Available for opportunities",
    "hero.title": "Felicien <span>Niyonsenga</span>",
    "hero.subtitle": "IT Professional & Software Developer",
    "hero.description":
      "Passionate IT specialist with expertise in software development, web applications, and IT infrastructure. Currently pursuing a Diploma in Information Technology with hands-on experience in healthcare IT systems and software solutions.",
    "hero.contactBtn": "Contact Me",
    "hero.downloadBtn": "Download CV",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "Get to know my professional background and journey",
    "about.educationTitle": "Education",
    "about.experienceTitle": "Experience",
    "about.personalTitle": "Professional Information",
    "education.diploma": "Diploma in Information Technology",
    "education.advanced": "Advanced Level Certificate in Software Development",
    "education.ordinary": "Ordinary Level Certificate",
    "experience.itIntern": "IT Intern",
    "experience.cashier": "Cashier",
    "experience.dataEntry": "Data Entry Specialist",
    "info.location": "Location",
    "info.status": "Status",
    "info.statusValue": "Available for opportunities",
    "info.certifications": "Certifications",
    "info.languages": "Languages",

    // Skills Section
    "skills.title": "Technical Skills",
    "skills.subtitle":
      "My expertise across various domains of IT and development",
    "skills.programming": "Programming Languages",
    "skills.web": "Web Development",
    "skills.app": "Application Development",
    "skills.database": "Database & Systems",
    "skills.soft": "Core Competencies",
    "skills.leadership": "Leadership",
    "skills.communication": "Communication",
    "skills.problem": "Problem Solving",
    "skills.teamwork": "Teamwork",

    // Projects Section
    "projects.title": "Projects & Experience",
    "projects.subtitle": "Highlighting my key projects and professional work",
    "projects.webTitle": "Web Application Development",
    "projects.webDesc":
      "Developed dynamic web applications using PHP during internship at SALTEL Company, creating business solutions with team collaboration.",
    "projects.healthIT": "Healthcare IT Systems",
    "projects.healthITDesc":
      "Supported IT operations at Muhima District Hospital, assisting with system implementation, maintenance, and technical troubleshooting.",
    "projects.data": "Health Data Management",
    "projects.dataDesc":
      "Managed patient data entry and maintained accurate records in health information systems at Health Center of Muhima.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle":
      "Feel free to reach out for collaborations or opportunities",
    "contact.infoTitle": "Contact Information",
    "contact.formTitle": "Send Message",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.location": "Location",
    "contact.name": "Your Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.sendBtn": "Send Message",
    "contact.downloadCV": "Download Complete CV (PDF)",
    "contact.whatsappDirect": "Quick WhatsApp Messages",
    "contact.whatsappGeneral": "General",
    "contact.whatsappJob": "Job",
    "contact.whatsappProject": "Project",

    // Footer
    "footer.description":
      "Passionate IT specialist creating innovative solutions with modern technologies.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Info",
    "footer.copyright": "© 2023 Felicien Niyonsenga. All rights reserved.",
  },
  rw: {
    // Navigation
    "nav.home": "Ahabanza",
    "nav.about": "Ibirebana na njye",
    "nav.skills": "Ubumenyi",
    "nav.projects": "Ibikorwa",
    "nav.contact": "Twandikire",

    // Hero Section
    "hero.badge": "Ndayishimiye amahirwe",
    "hero.title": "Felicien <span>Niyonsenga</span>",
    "hero.subtitle": "Umwarimu wa IT na Umuhanga mu gushushanya porogaramu",
    "hero.description":
      "Umuhanga mu bya IT ukora ibikorwa by'ubuhanga mu gushushanya porogaramu, gushushanya urubuga, no guteza imbere ubuhanga mu bya IT. Ubu ndiga Diploma mu bya IT kandi mfite amayeri mu bikorwa bya IT mu byo kubuvuzi n'ubuhanga mu gushushanya porogaramu.",
    "hero.contactBtn": "Twandikire",
    "hero.downloadBtn": "Kuramo CV",

    // About Section
    "about.title": "Ibirebana na njye",
    "about.subtitle": "Menya amayeri yanjye n'urugendo rwanjye",
    "about.educationTitle": "Amashuri",
    "about.experienceTitle": "Amayeri",
    "about.personalTitle": "Amakuru y'umwuga",
    "education.diploma": "Diploma mu bya Tehnologiya y'amakuru",
    "education.advanced":
      "Impamyabumenyi y'A Niveau A mu gushushanya porogaramu",
    "education.ordinary": "Impamyabumenyi y'A Niveau O",
    "experience.itIntern": "Umwarimu wa IT",
    "experience.cashier": "Umutunzi",
    "experience.dataEntry": "Umuhanga mu kwandika amakuru",
    "info.location": "Aho ntubariza",
    "info.status": "Imiterere",
    "info.statusValue": "Ndayishimiye amahirwe",
    "info.certifications": "Impamyabumenyi",
    "info.languages": "Indimi",

    // Skills Section
    "skills.title": "Ubumenyi bwa Tehniki",
    "skills.subtitle": "Ubumenyi bwanjye mu bya IT no mu gushushanya",
    "skills.programming": "Indimi zo gushushanya",
    "skills.web": "Gushushanya urubuga",
    "skills.app": "Gushushanya porogaramu",
    "skills.database": "Ububiko bw'amakuru no gukoresha",
    "skills.soft": "Ubumenyi bw'ingenzi",
    "skills.leadership": "Ubuyobozi",
    "skills.communication": "Ubuvugizi",
    "skills.problem": "Gusobanura ibibazo",
    "skills.teamwork": "Gukorana hamwe",

    // Projects Section
    "projects.title": "Ibikorwa n'Amayeri",
    "projects.subtitle": "Ibikorwa by'ingenzi n'amayeri yanjye",
    "projects.webTitle": "Gushushanya Porogaramu zo kumurongo",
    "projects.webDesc":
      "Nashushanyije porogaramu zo kumurongo zakoresheje PHP mu gihe cy'amayeri muri SALTEL Company, nashyizeho ibisubizo mu bikorwa by'ubucuruzi ndi kumwe n'abandi.",
    "projects.healthIT": "Sistemi za IT mu byo kubuvuzi",
    "projects.healthITDesc":
      "Nafashije mu bikorwa bya IT mu bitaro bya Muhima, nafasha mu gushyiraho sistemi, kubungabunga no gusobanura ibibiza.",
    "projects.data": "Gucunga amakuru y'abagwayi",
    "projects.dataDesc":
      "Narwana amakuru y'abagwayi kandi nanabungabungaga mu sistemi z'amakuru mu byo kubuvuzi bya Muhima.",

    // Contact Section
    "contact.title": "Twandikire",
    "contact.subtitle":
      "Wishobora kundikira niba ushaka gukora hamwe cyangwa ufite amahirwe",
    "contact.infoTitle": "Amakuru yo kundikira",
    "contact.formTitle": "Ohereza ubutumwa",
    "contact.phone": "Telefone",
    "contact.email": "Imeyili",
    "contact.whatsapp": "WhatsApp",
    "contact.location": "Aho ntubariza",
    "contact.name": "Amazina yawe",
    "contact.subject": "Ingingo",
    "contact.message": "Ubutumwa",
    "contact.sendBtn": "Ohereza ubutumwa",
    "contact.downloadCV": "Kuramo CV yuzuye (PDF)",
    "contact.whatsappDirect": "Ubutumwa bwa WhatsApp",
    "contact.whatsappGeneral": "Ibibazo",
    "contact.whatsappJob": "Akazi",
    "contact.whatsappProject": "Igikorwa",

    // Footer
    "footer.description":
      "Umuhanga mu bya IT ukora ibisubizo bishya bikoresheje tekinoroji zigezweho.",
    "footer.quickLinks": "Amahuza yo kwinjira",
    "footer.contact": "Amakuru yo kundikira",
    "footer.copyright": "© 2023 Felicien Niyonsenga. Amahoro yose.",
  },
};

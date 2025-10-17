// data.js - Enhanced Portfolio Data
(function(){
  // 1) Inject hacker theme quickly
  const css = `
  html,body{background:#0a0a0a;color:#bfffbf;font-family:"Fira Code",Consolas,"Courier New",monospace}
  a{color:#00ff66} h1,h2,h3{color:#00ff66;text-transform:uppercase}
  .card{background:#0e0e0e;border:1px solid #123812;border-radius:6px;padding:16px}
  `;
  const s = document.createElement('style'); 
  s.textContent = css; 
  document.head.appendChild(s);
})();

// 2) Ensure Font Awesome present
(function(){
  if (![...document.styleSheets].some(s=>s.href?.includes('font-awesome'))) {
    const l = document.createElement('link');
    l.rel='stylesheet';
    l.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
    l.crossOrigin='anonymous'; l.referrerPolicy='no-referrer';
    document.head.appendChild(l);
  }
})();

// Portfolio Data with all your information
window.PORTFOLIO_DATA = {
  profile: {
    name: "Marouan El-Ouardiji",
    role: "Cybersecurity and Embedded Systems Engineer",
    location: "Tetouan, Morocco",
    summary: "I am an enthusiast in the fields of Cybersecurity and Embedded Systems, driven by a passion for exploring how hardware and software interact and how they can be secured against modern threats.",
    avatarUrl: "./photos/Marouan.jpeg",
    socials: [
      { label: "GitHub", href: "https://github.com/Marouanelouardiji", icon: "fa-brands fa-github", title: "GitHub" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/elouardiji-marouan-8a453a299/", icon: "fa-brands fa-linkedin", title: "LinkedIn" },
      { label: "Email", href: "mailto:elouardijimarouan@gmail.com", icon: "fa-solid fa-envelope", title: "Email" }
    ]
  },
  
  about: { 
    html: `<p>I am a passionate cybersecurity and embedded systems enthusiast with a deep curiosity about how hardware and software interact at the most fundamental levels. My journey began with exploring low-level programming and evolved into a fascination with securing systems against modern threats.</p>

           <p>With hands-on experience in penetration testing, network security analysis, and embedded system development, I specialize in identifying vulnerabilities and implementing robust security solutions. I'm proficient with industry-standard tools like Kali Linux, Wireshark, and Metasploit, and I enjoy the challenge of understanding complex systems from the ground up.</p>

           <p>My goal is to contribute to building more secure embedded devices and infrastructure in an increasingly connected world, where the lines between physical and digital security continue to blur.</p>` 
  },
  skills: [
    // Kali Linux Pentesting Tools
    "Kali Linux", "Nmap", "Wireshark", "Metasploit", "Burp Suite", "John the Ripper",
    "Aircrack-ng", "SQLmap", "Hydra", "Nessus", "OpenVAS", "Maltego", "Nikto",
    
    // Programming & Development
    "C++", "Python", "C", "Assembly Language", "ARM Assembly", 
    
    // Embedded Systems & Hardware
    "FPGA (VHDL)", "FPGA (Verilog)", "Arduino", "ESP32", "Raspberry Pi", 
    "Embedded C", "Microcontroller Programming", "Circuit Design",
    
    // Database Administration
    "Database Administration", "SQL", "MySQL", "PostgreSQL", "MongoDB",
    
    // Other Skills
    "Network Security", "Penetration Testing", "Vulnerability Assessment",
    "Linux Administration", "System Hardening", "Cryptography"
  ],
  languages: [
    { name: "Amazigh", level: "Native" },
    { name: "Arabic", level: "Bilingual" },
    { name: "French", level: "Professional" },
    { name: "English", level: "Professional" }
  ],
  
  // NOUVEAUX PROJETS MIS À JOUR ICI
  projects: [
    {
      title: "Phishing Simulation Campaign with GoPhish",
      description: "Executed a controlled phishing campaign using **GoPhish** in a test environment to raise awareness among university students about **social engineering**. Involved setting up the infrastructure, executing the campaign, and analyzing click-through rates.",
      tags: ["GoPhish", "Social Engineering", "Cybersecurity", "Awareness", "Testing"],
      liveUrl: null,
      repoUrl: null, // Si pas de repo public
      imageUrl: "https://placehold.co/600x400/001a00/00ff66?text=GOPHISH+SIMULATION" 
    },
    {
      title: "ESP32 Hardware Honeypot Development",
      description: "Designed and developed an **ESP32-based hardware Honeypot** to emulate common IoT services (TCP/HTTP/MQTT). The system collects and analyzes attack attempts in an isolated environment, providing detailed detection reports and hardening recommendations.",
      tags: ["ESP32", "Honeypot", "IoT Security", "MQTT", "Embedded C++", "Network Analysis"],
      liveUrl: null,
      repoUrl: null, // Si pas de repo public
      imageUrl: "https://placehold.co/600x400/001a00/00ff66?text=IOT+HONEYPOT+ESP32" 
    },
    {
      title: "Access System with DFIR Integration",
      description: "Project implementing a secured access system managed by **ESP32** with a **web interface** and database integration. The system includes **Digital Forensics and Incident Response (DFIR)** capabilities for logging and analyzing access events.",
      tags: ["ESP32", "DFIR", "Web Interface", "MySQL", "Access Control", "Security"],
      liveUrl: null,
      repoUrl: null, 
      imageUrl: "https://placehold.co/600x400/001a00/00ff66?text=DFIR+ACCESS+SYSTEM" 
    },
    {
      title: "CyberGuardians Club Website (Frontend)",
      description: "Concept and **Frontend development** of the official website user interface for the CyberGuardians Club (ENSA Tétouan), focusing on a modern, responsive, and secure presentation.",
      tags: ["HTML5", "CSS3", "JavaScript", "Frontend", "UI/UX Design"],
      liveUrl: null,
      repoUrl: null, 
      imageUrl: "https://placehold.co/600x400/001a00/00ff66?text=CYBERGUARD+CLUB+WEB" 
    },
    // Remplacement des anciens projets si l'utilisateur n'en voulait que des nouveaux
  ],
  
  // NOUVELLE ÉDUCATION MISE À JOUR ICI (certifications sert de section éducation/timeline dans ce template)
  certifications: [
    {
      title: "2nd Year Engineering Cycle in Cybersecurity and Embedded Systems",
      issuer: "ENSA Tétouan",
      date: "2024 - Present",
      description: "Advanced study focusing on information systems security, network defense, ethical hacking, and secure embedded device development.",
      icon: "fas fa-user-graduate",
    },
    {
      title: "Integrated Preparatory Classes (2 Years)",
      issuer: "ENSA Tétouan",
      date: "2022 - 2024",
      description: "Intensive scientific and technical curriculum preparing for the engineering cycle, covering core subjects like Mathematics, Physics, and Computer Science.",
      icon: "fas fa-school",
    },
    { 
      title: "eJPTv2 (eLearnSecurity Junior Penetration Tester v2)", 
      issuer: "INE Security", 
      date: "2025", 
      link: "https://certs.ine.com/6ec8cf9c-f825-47b7-ba4c-e61a8f719f77#acc.WHBkZ8fz",
      icon: "fas fa-certificate",
    }
  ],
  hobbies: [
    "Chess", "Football", "Outdoor Activities", "Hardware Tinkering", 
    "Ethical Hacking", "Reading", "Sports", "Hiking", "Electronics Projects"
  ],
  contact: [
    { label: "Email", value: "elouardijimarouan@gmail.com", href: "mailto:elouardijimarouan@gmail.com" },
    { label: "Location", value: "Tetouan, Morocco" },
    { label: "GitHub", value: "github.com/Marouanelouardiji", href: "https://github.com/Marouanelouardiji" },
    { label: "LinkedIn", value: "linkedin.com/in/elouardiji-marouan", href: "https://www.linkedin.com/in/elouardiji-marouan-8a453a299/" }
  ]
};

// 3) Render socials using your data (creates a list at top of body)
(function(){
  const d = window.PORTFOLIO_DATA?.profile?.socials;
  if (!Array.isArray(d)) { console.warn('No socials data found'); return; }
  const ul = document.createElement('ul'); ul.className='socials card';
  d.forEach(s=>{
    const li=document.createElement('li');
    li.innerHTML = `<a href="${s.href}" target="_blank" rel="noopener"><i class="${s.icon||''}"></i> ${s.label}</a>`;
    ul.appendChild(li);
  });
  document.body.prepend(ul);
})();

// Initialize the portfolio when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('Portfolio data loaded successfully!');
  
  // If main.js doesn't load the data, this will help
  setTimeout(() => {
    const data = window.PORTFOLIO_DATA;
    if (data && data.profile) {
      // Basic fallback to ensure data displays
      if (document.getElementById('fullName')) {
        document.getElementById('fullName').textContent = data.profile.name;
      }
      if (document.getElementById('role')) {
        document.getElementById('role').textContent = data.profile.role;
      }
      if (document.getElementById('summary')) {
        document.getElementById('summary').textContent = data.profile.summary;
      }
    }
  }, 100);
});

// Binary background
const style = document.createElement('style');
style.textContent = `
html, body {
  background-color: #0a0a0a;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><rect width='100%' height='100%' fill='%230a0a0a'/><g fill='%2300ff66' fill-opacity='0.08' font-family='Courier New,monospace' font-size='14'><text x='8' y='20'>1010010111010010</text><text x='8' y='44'>0011010101001101</text><text x='8' y='68'>1100101000110101</text><text x='8' y='92'>1010100110010101</text><text x='8' y='116'>0011001110100101</text><text x='8' y='140'>1101010011001010</text></g></svg>");
  background-size: 320px 320px;
  background-attachment: fixed;
}

/* Additional hacker theme styles */
.terminal-text {
  color: #00ff66;
  text-shadow: 0 0 5px #00ff66;
}

.hacker-glow {
  box-shadow: 0 0 10px #00ff66;
}

.typewriter {
  overflow: hidden;
  border-right: .15em solid #00ff66;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #00ff66; }
}
`;
document.head.appendChild(style);

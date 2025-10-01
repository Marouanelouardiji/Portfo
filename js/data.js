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
  projects: [
    {
      title: "Network Security Scanner",
      description: "A Python-based network vulnerability scanner that identifies open ports and potential security risks using Nmap integration.",
      tags: ["Python", "Network Security", "Nmap", "Cybersecurity"],
      liveUrl: null,
      repoUrl: "https://github.com/Marouanelouardiji/network-scanner",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop"
    },
    {
      title: "Embedded System Security",
      description: "Research and implementation of security protocols for ARM-based embedded systems with hardware encryption.",
      tags: ["ARM Assembly", "C++", "Embedded Systems", "Security", "FPGA"],
      liveUrl: null,
      repoUrl: "https://github.com/Marouanelouardiji/embedded-security",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop"
    },
    {
      title: "FPGA Encryption Module",
      description: "Hardware encryption implementation using VHDL on FPGA for enhanced security performance in embedded devices.",
      tags: ["VHDL", "FPGA", "Encryption", "Hardware Security", "Verilog"],
      liveUrl: null,
      repoUrl: "https://github.com/Marouanelouardiji/fpga-encryption",
      imageUrl: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&auto=format&fit=crop"
    },
    {
      title: "IoT Security Framework",
      description: "Security framework for ESP32-based IoT devices with encrypted communication and secure boot implementation.",
      tags: ["ESP32", "IoT Security", "C++", "Encryption", "Arduino"],
      liveUrl: null,
      repoUrl: "https://github.com/Marouanelouardiji/iot-security",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format&fit=crop"
    },
    {
      title: "Database Security Audit Tool",
      description: "Automated tool for database security auditing and vulnerability assessment with comprehensive reporting.",
      tags: ["Python", "Database Security", "SQL", "MySQL", "PostgreSQL"],
      liveUrl: null,
      repoUrl: "https://github.com/Marouanelouardiji/db-security-audit",
      imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&auto=format&fit=crop"
    },
    {
      title: "Kali Linux Custom Toolkit",
      description: "Custom penetration testing toolkit with automated scripts for vulnerability scanning and exploitation.",
      tags: ["Kali Linux", "Bash Scripting", "Penetration Testing", "Automation"],
      liveUrl: null,
      repoUrl: "https://github.com/Marouanelouardiji/kali-toolkit",
      imageUrl: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?w=500&auto=format&fit=crop"
    }
  ],
  certifications: [
    { 
      title: "eJPTv2 (eLearnSecurity Junior Penetration Tester v2)", 
      issuer: "INE Security", 
      date: "2025", 
      link: "https://certs.ine.com/6ec8cf9c-f825-47b7-ba4c-e61a8f719f77#acc.WHBkZ8fz" 
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
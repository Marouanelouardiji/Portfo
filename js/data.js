// 1) Inject hacker theme quickly
(function(){
  const css = `
  html,body{background:#0a0a0a;color:#bfffbf;font-family:"Fira Code",Consolas,"Courier New",monospace}
  a{color:#00ff66} h1,h2,h3{color:#00ff66;text-transform:uppercase}
  .card{background:#0e0e0e;border:1px solid #123812;border-radius:6px;padding:16px}
  `;
  const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
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

window.PORTFOLIO_DATA = {
  profile: {
    name: "Marouan El-Ouardiji",
    role: "Cybersecurity and embedded systems engineer ",
    location: "Tetouan",
    summary: "I am an enthusiast in the fields of Cybersecurity and Embedded Systems, driven by a passion for exploring how hardware and software interact and how they can be secured against modern threats. My journey combines curiosity about low-level systems with a strong focus on offensive and defensive security practices.",
    avatarUrl: "./photos/photo.jpg",
    socials: [
      { label: "GitHub", href: "https://github.com/Marouanelouardiji", icon: "fa-brands fa-github", title: "GitHub" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/elouardiji-marouan-8a453a299/", icon: "fa-brands fa-linkedin", title: "LinkedIn" },
      { label: "Email", href: "mailto:elouardijimarouan@gmail.com", icon: "fa-solid fa-envelope", title: "Email" }
    ]
  },
  about: { html: "<p>I am deeply passionate about ethical hacking and the field of cybersecurity, always striving to understand how systems can be strengthened against real-world threats. My curiosity doesn’t stop there—I am equally fascinated by embedded systems and the critical role they play in our connected world. I want to explore how these systems operate at a low level, uncover potential vulnerabilities, and contribute to building secure and resilient solutions. Combining my enthusiasm for cybersecurity with my interest in embedded technologies, I aim to be actively involved in securing both digital infrastructures and the smart devices that shape our future.Write a longer description about your background, values, and career goals.</p>" },
  skills: ["Kali Linux", "Nmap", "Wireshark", "Metasploit", "Python", "C", "C++", "Assembly Language", "ARM Assembly"],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Professional" },
    { name: "English", level: "Professional" }
  ],
  projects: [
    {
      title: "Project One",
      description: "Concise one-line description of what the project does and why it matters.",
      tags: ["React", "API", "UI"],
      liveUrl: "https://example.com/project-one",
      repoUrl: "https://github.com/yourname/project-one",
      imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Project Two",
      description: "Another project with a short summary, highlighting tech and outcomes.",
      tags: ["Node", "Express", "MongoDB"],
      liveUrl: null,
      repoUrl: "https://github.com/yourname/project-two",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
    }
  ],
  certifications: [
    { title: "ejptv2", issuer: "INE security", date: "2025", link: "https://certs.ine.com/6ec8cf9c-f825-47b7-ba4c-e61a8f719f77#acc.WHBkZ8fz" },
  ],
  hobbies: ["Sports", "Chess", "Reading"],
  contact: [
    { label: "Email", value: "elouardijimarouan@gmail.com", href: "elouardijimarouan@gmail.com" },
    { label: "Location", value: "Tetouan , Morocco" }
  ]
};

// Quick binary background test
const style = document.createElement('style');
style.textContent = `
html, body {
  background-color: #0a0a0a;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><rect width='100%' height='100%' fill='%230a0a0a'/><g fill='%2300ff66' fill-opacity='0.08' font-family='Courier New,monospace' font-size='14'><text x='8' y='20'>1010010111010010</text><text x='8' y='44'>0011010101001101</text><text x='8' y='68'>1100101000110101</text><text x='8' y='92'>1010100110010101</text><text x='8' y='116'>0011001110100101</text><text x='8' y='140'>1101010011001010</text></g></svg>");
  background-size: 320px 320px;
  background-attachment: fixed;
}
`;
document.head.appendChild(style);



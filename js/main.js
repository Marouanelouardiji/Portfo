// main.js - Fixed and Enhanced
(function () {
  const data = window.PORTFOLIO_DATA || {};
  console.log('Portfolio data loaded:', data);

  function init() {
    console.log('Initializing portfolio...');
    renderProfile();
    renderAbout();
    renderSkills();
    renderProjects();
    renderCertifications();
    renderHobbies();
    renderContact();
    initTheme();
    initNav();
    
    // Add fade-in animations
    setTimeout(addFadeInAnimation, 100);
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el && typeof text === "string") {
      el.textContent = text;
      console.log(`Set ${id}: ${text}`);
    }
  }

  function setInnerHTML(id, html) {
    const el = document.getElementById(id);
    if (el && typeof html === "string") {
      el.innerHTML = html;
      console.log(`Set HTML for ${id}`);
    }
  }

  function createEl(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === "class") el.className = v;
      else if (k === "html") el.innerHTML = v;
      else if (k === "text") el.textContent = v;
      else if (v !== undefined && v !== null) el.setAttribute(k, v);
    });
    children.forEach((c) => {
      if (c instanceof Node) el.appendChild(c);
      else if (typeof c === "string") el.appendChild(document.createTextNode(c));
    });
    return el;
  }

  function addFadeInAnimation() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    });

    setTimeout(() => {
      sections.forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      });
    }, 200);
  }

  function renderProfile() {
    const { profile = {} } = data;
    const { name, role, summary, avatarUrl, socials = [] } = profile;
    
    console.log('Rendering profile:', { name, role, summary });
    
    setText("brandName", name);
    setText("fullName", name);
    setText("role", role);
    setText("summary", summary);
    
    const avatar = document.getElementById("avatar");
    if (avatar && avatarUrl) {
      avatar.src = avatarUrl;
      avatar.onerror = function() {
        console.log('Avatar image failed to load, using placeholder');
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDAwIi8+CjxwYXRoIGQ9Ik0xMDAgNTBDODkuNTI0IDUwIDgxIDU4LjUyNCA4MSA2OUM4MSA3OS40NzYgODkuNTI0IDg4IDEwMCA4OEMxMTAuNDc2IDg4IDExOSA3OS40NzYgMTE5IDY5QzExOSA1OC41MjQgMTEwLjQ3NiA1MCAxMDAgNTBaTTEwMCAxMjVDNzguNTY0IDEyNSA2MSAxNDIuNTY0IDYxIDE2NEw2MSAxNzVDNjEgMTc3LjIwOSA2Mi43OTEgMTc5IDY1IDE3OUgxMzVDMTM3LjIwOSAxNzkgMTM5IDE3Ny4yMDkgMTM5IDE3NUwxMzkgMTY0QzEzOSAxNDIuNTY0IDEyMS40MzYgMTI1IDEwMCAxMjVaIiBmaWxsPSIjMDBGRjY2Ii8+Cjwvc3ZnPgo=';
      };
    }
    
    const socialsWrap = document.getElementById("socials");
    if (socialsWrap) {
      socialsWrap.innerHTML = "";
      socials.forEach((s) => {
        const a = createEl("a", { 
          href: s.href, 
          target: "_blank", 
          rel: "noopener noreferrer",
          class: "social-link"
        }, [
          createEl("i", { class: s.icon || "fa-solid fa-link" }),
          document.createTextNode(` ${s.label}`)
        ]);
        socialsWrap.appendChild(a);
      });
    }
    
    setText("year", new Date().getFullYear().toString());
    const copyright = document.getElementById("footerCopyright");
    if (copyright && name) {
      copyright.innerHTML = `© ${new Date().getFullYear()} ${name}. All rights reserved.`;
    }
  }

  function renderAbout() {
    const { about = {} } = data;
    console.log('Rendering about:', about.html);
    
    if (about.html) {
      setInnerHTML("aboutContent", about.html);
    } else {
      setText("aboutContent", "About information not available.");
    }
  }

  function renderSkills() {
    const { skills = [], languages = [] } = data;
    console.log('Rendering skills:', skills);
    console.log('Rendering languages:', languages);
    
    const skillsContent = document.getElementById("skillsContent");
    if (skillsContent) {
      skillsContent.innerHTML = "";
      skills.forEach((skill) => {
        const chip = createEl("span", { class: "chip", text: skill });
        skillsContent.appendChild(chip);
      });
    }

    const languagesList = document.getElementById("languagesList");
    if (languagesList) {
      languagesList.innerHTML = "";
      languages.forEach((lang) => {
        const li = createEl("li", {}, [
          createEl("strong", { text: lang.name }),
          document.createTextNode(` – ${lang.level}`)
        ]);
        languagesList.appendChild(li);
      });
    }
  }

  function renderProjects() {
    const { projects = [] } = data;
    console.log('Rendering projects:', projects);
    
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    
    grid.innerHTML = "";
    projects.forEach((p) => {
      const img = createEl("img", { 
        class: "thumb", 
        src: p.imageUrl, 
        alt: `${p.title} cover`,
        loading: "lazy"
      });
      
      img.onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSIjMDAwIi8+CjxwYXRoIGQ9Ik0xMDAgODBDODkuNTI0IDgwIDgxIDg4LjUyNCA4MSA5OEM4MSAxMDcuNDc2IDg5LjUyNCAxMTYgMTAwIDExNkMxMTAuNDc2IDExNiAxMTkgMTA3LjQ3NiAxMTkgOThDMTE5IDg4LjUyNCAxMTAuNDc2IDgwIDEwMCA4MFpNMzAwIDgwQzI4OS41MjQgODAgMjgxIDg4LjUyNCAyODEgOThDMjgxIDEwNy40NzYgMjg5LjUyNCAxMTYgMzAwIDExNkMzMTAuNDc2IDExNiAzMTkgMTA3LjQ3NiAzMTkgOThDMzE5IDg4LjUyNCAzMTAuNDc2IDgwIDMwMCA4MFpNMTUwIDE1MEMxMzcuMjk3IDE1MCAxMjcgMTYwLjI5NyAxMjcgMTczVjE3NUMxMjcgMTc3LjIwOSAxMjguNzkxIDE3kgMTMxIDE3OUgyNjlDMjcxLjIwOSAxNzkgMjczIDE3Ny4yMDkgMjczIDE3NVYxNzNDMjczIDE2MC4yOTcgMjYyLjcwMyAxNTAgMjUwIDE1MEgxNTBaIiBmaWxsPSIjMDBGRjY2Ii8+Cjwvc3ZnPgo=';
      };
      
      const title = createEl("div", { class: "title", text: p.title });
      const desc = createEl("div", { class: "meta", text: p.description });
      const tags = createEl("div", { class: "tags" });
      
      (p.tags || []).forEach((t) => {
        tags.appendChild(createEl("span", { class: "tag", text: t }));
      });
      
      const actions = createEl("div", { class: "actions" });
      if (p.liveUrl) {
        actions.appendChild(createEl("a", { 
          class: "btn primary", 
          href: p.liveUrl, 
          target: "_blank", 
          rel: "noopener noreferrer"
        }, [
          createEl("i", { class: "fa-solid fa-external-link-alt" }),
          document.createTextNode(" Live")
        ]));
      }
      if (p.repoUrl) {
        actions.appendChild(createEl("a", { 
          class: "btn", 
          href: p.repoUrl, 
          target: "_blank", 
          rel: "noopener noreferrer"
        }, [
          createEl("i", { class: "fa-brands fa-github" }),
          document.createTextNode(" Code")
        ]));
      }
      
      const card = createEl("article", { class: "card" }, [
        img,
        createEl("div", { class: "content" }, [title, desc, tags, actions])
      ]);
      
      grid.appendChild(card);
    });
  }

  function renderCertifications() {
    const { certifications = [] } = data;
    console.log('Rendering certifications:', certifications);
    
    const list = document.getElementById("certsList");
    if (!list) return;
    
    list.innerHTML = "";
    certifications.forEach((c) => {
      const li = createEl("li", {}, [
        createEl("div", { class: "title", text: c.title }),
        createEl("div", { class: "issuer", text: `${c.issuer} • ${c.date}` }),
      ]);
      
      if (c.link) {
        li.appendChild(createEl("a", { 
          href: c.link, 
          target: "_blank", 
          rel: "noopener noreferrer", 
          class: "btn"
        }, [
          createEl("i", { class: "fa-solid fa-certificate" }),
          document.createTextNode(" View")
        ]));
      }
      
      list.appendChild(li);
    });
  }

  function renderHobbies() {
    const { hobbies = [] } = data;
    console.log('Rendering hobbies:', hobbies);
    
    const wrap = document.getElementById("hobbiesContent");
    if (!wrap) return;
    
    wrap.innerHTML = "";
    hobbies.forEach((h) => {
      wrap.appendChild(createEl("span", { class: "chip", text: h }));
    });
  }

  function renderContact() {
    const { contact = [] } = data;
    console.log('Rendering contact:', contact);
    
    const list = document.getElementById("contactList");
    if (!list) return;
    
    list.innerHTML = "";
    contact.forEach((c) => {
      const content = c.href
        ? createEl("a", { 
            href: c.href, 
            target: c.href.startsWith("mailto:") ? "_self" : "_blank", 
            rel: "noopener noreferrer" 
          }, [document.createTextNode(c.value || c.label)])
        : document.createTextNode(c.value || c.label);
      
      list.appendChild(createEl("li", {}, [
        createEl("strong", { text: `${c.label}: ` }), 
        content
      ]));
    });
  }

  function initTheme() {
    const saved = localStorage.getItem("theme-preference");
    const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (systemDark ? 'dark' : 'light');
    
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
      btn.onclick = () => {
        const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(next);
        localStorage.setItem('theme-preference', next);
        
        btn.innerHTML = next === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
      };
    }
  }

  function initNav() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    const header = document.querySelector('.site-header');
    
    if (!toggle || !menu) return;
    
    // Scroll effect for header
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    
    // Close menu when clicking on links
    menu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Debug function to check if elements exist
  function checkElements() {
    const elements = [
      'brandName', 'fullName', 'role', 'summary', 'avatar',
      'socials', 'aboutContent', 'skillsContent', 'languagesList',
      'projectsGrid', 'certsList', 'hobbiesContent', 'contactList'
    ];
    
    elements.forEach(id => {
      const el = document.getElementById(id);
      console.log(`Element ${id}:`, el ? 'FOUND' : 'NOT FOUND');
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      console.log('DOM fully loaded');
      checkElements();
      init();
    });
  } else {
    console.log('DOM already loaded');
    checkElements();
    init();
  }
})();
(function () {
  const data = window.PORTFOLIO_DATA || {};

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el && typeof text === "string") el.textContent = text;
  }

  function setInnerHTML(id, html) {
    const el = document.getElementById(id);
    if (el && typeof html === "string") el.innerHTML = html;
  }

  function createEl(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === "class") el.className = v;
      else if (k === "html") el.innerHTML = v;
      else if (k === "text") el.textContent = v;
      else if (v !== undefined && v !== null) el.setAttribute(k, v);
    });
    children.forEach((c) => el.appendChild(c));
    return el;
  }

  function renderProfile() {
    const { profile = {} } = data;
    const { name, role, summary, avatarUrl, socials = [] } = profile;
    setText("brandName", name);
    setText("fullName", name);
    setText("role", role);
    setText("summary", summary);
    const avatar = document.getElementById("avatar");
    if (avatar && avatarUrl) avatar.src = avatarUrl;
    const socialsWrap = document.getElementById("socials");
    if (socialsWrap) {
      socialsWrap.innerHTML = "";
      socials.forEach((s) => {
        const a = createEl("a", { href: s.href, target: "_blank", rel: "noopener" }, [
          document.createTextNode(s.label)
        ]);
        socialsWrap.appendChild(a);
      });
    }
    setText("year", new Date().getFullYear().toString());
    const copyright = document.getElementById("footerCopyright");
    if (copyright && name) {
      copyright.firstChild && (copyright.firstChild.textContent = "© ");
      copyright.lastChild && (copyright.lastChild.textContent = ` ${name}. All rights reserved.`);
    }
  }

  function renderAbout() {
    const { about = {} } = data;
    setInnerHTML("aboutContent", about.html || "");
  }

  function renderSkills() {
    const { skills = [], languages = [] } = data;
    const skillsContent = document.getElementById("skillsContent");
    if (skillsContent) {
      skillsContent.innerHTML = "";
      skills.forEach((skill) => skillsContent.appendChild(createEl("span", { class: "chip", text: skill })));
    }
    const languagesList = document.getElementById("languagesList");
    if (languagesList) {
      languagesList.innerHTML = "";
      languages.forEach((lang) => {
        languagesList.appendChild(
          createEl("li", {}, [
            createEl("strong", { text: lang.name }),
            document.createTextNode(` – ${lang.level}`)
          ])
        );
      });
    }
  }

  function renderProjects() {
    const { projects = [] } = data;
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    grid.innerHTML = "";
    projects.forEach((p) => {
      const img = createEl("img", { class: "thumb", src: p.imageUrl || "./assets/placeholder.png", alt: `${p.title} cover` });
      const title = createEl("div", { class: "title", text: p.title });
      const desc = createEl("div", { class: "meta", text: p.description });
      const tags = createEl("div", { class: "tags" });
      (p.tags || []).forEach((t) => tags.appendChild(createEl("span", { class: "tag", text: t })));
      const actions = createEl("div", { class: "actions" });
      if (p.liveUrl) actions.appendChild(createEl("a", { class: "btn primary", href: p.liveUrl, target: "_blank", rel: "noopener" }, [document.createTextNode("Live")]))
      if (p.repoUrl) actions.appendChild(createEl("a", { class: "btn", href: p.repoUrl, target: "_blank", rel: "noopener" }, [document.createTextNode("Code")]))
      const card = createEl("article", { class: "card" }, [
        img,
        createEl("div", { class: "content" }, [title, desc, tags, actions])
      ]);
      grid.appendChild(card);
    });
  }

  function renderCertifications() {
    const { certifications = [] } = data;
    const list = document.getElementById("certsList");
    if (!list) return;
    list.innerHTML = "";
    certifications.forEach((c) => {
      const li = createEl("li", {}, [
        createEl("div", { class: "title", text: c.title }),
        createEl("div", { class: "issuer", text: `${c.issuer} • ${c.date}` }),
      ]);
      if (c.link) {
        li.appendChild(createEl("a", { href: c.link, target: "_blank", rel: "noopener", class: "btn" }, [document.createTextNode("View")]))
      }
      list.appendChild(li);
    });
  }

  function renderHobbies() {
    const { hobbies = [] } = data;
    const wrap = document.getElementById("hobbiesContent");
    if (!wrap) return;
    wrap.innerHTML = "";
    hobbies.forEach((h) => wrap.appendChild(createEl("span", { class: "chip", text: h })));
  }

  function renderContact() {
    const { contact = [] } = data;
    const list = document.getElementById("contactList");
    if (!list) return;
    list.innerHTML = "";
    contact.forEach((c) => {
      const content = c.href
        ? createEl("a", { href: c.href, target: c.href.startsWith("mailto:") ? "_self" : "_blank", rel: "noopener" }, [document.createTextNode(c.value || c.label)])
        : document.createTextNode(c.value || c.label);
      list.appendChild(createEl("li", {}, [createEl("strong", { text: `${c.label}: ` }), content]));
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
      btn.textContent = theme === 'dark' ? '🌙' : '☀️';
      btn.onclick = () => {
        const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(next);
        localStorage.setItem('theme-preference', next);
        btn.textContent = next === 'dark' ? '🌙' : '☀️';
      };
    }
  }

  function initNav() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  function init() {
    initTheme();
    initNav();
    renderProfile();
    renderAbout();
    renderSkills();
    renderProjects();
    renderCertifications();
    renderHobbies();
    renderContact();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();



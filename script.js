const modules = [
  {
    id: "rf-architecture",
    nav: "RF Architecture",
    title: "RF Architecture",
    summary: "RF front end, OTA, calibration, and debug patterns transfer directly into radio platform design.",
    smartphone: ["RF Transceiver", "FEM", "Antenna Tuner", "SAR", "OTA", "TRP", "TIS"],
    smartphoneLinks: [
      {
        label: "Block Diagram: Tx0 / Tx1",
        href: "assets/rf-tx0-tx1.png"
      },
      {
        label: "Block Diagram: PRx / DRx / MIMO Rx",
        href: "assets/rf-prx-drx-mimo-rx.png"
      },
      {
        label: "Block Diagram: Tx Feedback / PA-APT Voltage",
        href: "assets/rf-tx-feedback-pa-apt.png"
      }
    ],
    smallCell: ["PA", "LNA", "Filter", "Massive MIMO", "Beamforming", "OTA", "Calibration"],
    smallCellLinks: [
      {
        label: "SMALL CELL RF ARCHITECTURE",
        href: "assets/small-cell-rf-architecture.png"
      }
    ],
    concepts: ["RF Link Budget", "OTA", "Calibration", "RF Debug", "Matching"],
    experience: ["RF Design", "OTA", "Certification", "Debug"],
    gap: ["Small cell conducted calibration flow", "OTA validation tooling"],
    talking: ["Transferable skills: RF design discipline, OTA measurement, certification mindset, and structured RF debug."]
  },
  {
    id: "high-speed-interface",
    nav: "High Speed Interface",
    title: "High Speed Interface / SI",
    summary: "Physical layer fundamentals, signal integrity, timing margin, and return path control transfer from device buses to transport and sync.",
    smartphone: ["PCIe", "MIPI", "SerDes", "Clock"],
    smartphoneLinks: [
      {
        label: "PCIE VS SERDES HIGH-SPEED INTERFACE COMPARISON",
        href: "assets/pcie-vs-serdes-smartphone.png"
      }
    ],
    smallCell: ["Ethernet", "Ethernet PHY", "eCPRI", "PTP", "FPGA SerDes"],
    smallCellLinks: [
      {
        label: "ECPRI VS PTP VS ETHERNET TECHNOLOGY COMPARISON",
        href: "assets/ecpri-ptp-ethernet-comparison.png"
      }
    ],
    concepts: ["Differential Pair", "Impedance", "Eye Diagram", "Jitter", "Return Path", "Crosstalk", "Length Matching", "Clock"],
    experience: ["Layout constraint review", "Eye-margin debug for simulation ", "Clock routiong review", "SI/PI collaboration"],
    gap: ["eCPRI packet timing", "PTP system-level sync budget", "System-level sync architecture", "Higher lane-count SerDes validation"],
    talking: ["The physical layer concepts are similar. Only the application scenario changes.", "SI/PI language provides a precise way to discuss risk before hardware is fabricated."]
  },
  {
    id: "hardware-platform",
    nav: "Hardware Platform",
    title: "Hardware Platform",
    summary: "Complex platform ownership maps from AP/modem integration into DU/RU and baseband integration.",
    smartphone: ["AP", "Modem", "PMIC", "RFIC", "Clock"],
    smartphoneLinks: [
      {
        label: "SMARTPHONE ARCHITECTURE",
        href: "assets/smartphone-architecture.png"
      }
    ],
    smallCell: ["DU", "RU", "FPGA", "Baseband", "Power Module"],
    smallCellLinks: [
      {
        label: "O-RAN 7.2 SMALL CELL SYSTEM ARCHITECTURE",
        href: "assets/oran-small-cell-architecture.png"
      }
    ],
    concepts: ["Clock", "Power", "RF", "Platform Integration", "Board Bring-up"],
    experience: ["System partition review", "Board bring-up", "Vendor coordination", "Risk closure"],
    gap: ["DU/RU split options", "FPGA-based baseband architecture"],
    talking: ["Smartphone platform integration builds the system-thinking needed for small cell hardware ownership."]
  },
  {
    id: "power",
    nav: "Power",
    title: "Power",
    summary: "Power sequencing, ripple, and load transient control are reusable across battery and infrastructure platforms.",
    smartphone: ["Star Routing", "PMIC", "Buck", "LDO"],
    smartphoneLinks: [
      {
        label: "PDN DESIGN THROUGH STAR ROUTING",
        href: "assets/pdn-star-routing.png"
      }
    ],
    smallCell: ["Power Module", "DC/DC Converter", "Power Sequencing", "PDN Design"],
    concepts: ["Power Integrity", "Power Sequence", "Ripple", "Load Transient", "Efficiency"],
    experience: ["PMIC noise debug", "PDN layout review", "Power-up sequencing", "Noise coupling analysis"],
    gap: ["48V distribution safety", "PoE budget and classification"],
    talking: ["The voltage source changes, but rail integrity and sequence risk management remain core hardware skills."]
  },
  {
    id: "thermal",
    nav: "Thermal",
    title: "Thermal",
    summary: "Thermal stack decisions transfer from compact handheld constraints to outdoor reliability and airflow design.",
    smartphone: ["Shield Can", "PA Load Pull Tuning", "APT Voltage Tuning", "Thermal Pad"],
    smartphoneLinks: [
      {
        label: "PA LOAD-PULL CONTOURS ON SMITH CHART",
        href: "assets/pa-load-pull-contours.png"
      },
      {
        label: "PA OVERHEAT HANDLING STRATEGY",
        href: "assets/pa-overheat-handling-strategy.png"
      }
    ],
    smallCell: ["Heat Sink", "Heat Pipe", "Outdoor", "Fan"],
    concepts: ["Heat Transfer", "Junction Temperature", "Thermal Resistance", "Power Dissipation"],
    experience: ["PA Thermal Debug", "APT / PA Optimization", "RF-ME Collaboration", "Thermal vs RF Correlation"],
    gap: ["Outdoor enclosure thermal model", "Fan curve and acoustic tradeoffs"],
    talking: ["Compact-device thermal experience is a strong base for managing junction temperature and reliability margin."]
  },
  {
    id: "verification",
    nav: "Certification and Manufacture",
    title: "Certification and Manufacture",
    summary: "Carrier and certification readiness maps into infrastructure compliance and staged validation gates.",
    smartphoneGroups: [
      {
        label: "Certification",
        items: ["PTCRB", "GCF", "CF", "FCC", "Carrier"]
      },
      {
        label: "Manufacture",
        items: ["Pass Yield", "BOM Cost Control", "Failure Analysis", "Process Modification"]
      }
    ],
    smartphoneLinks: [
      {
        label: "MEASURABLE RESULTS & IMPACT",
        href: "assets/certification-manufacture-results-impact.png"
      }
    ],
    smallCell: ["FCC", "CE", "NEBS", "OTA", "EMC"],
    concepts: ["EVT", "DVT", "PVT", "MP", "Validation Flow"],
    experience: ["Certification planning", "Test Plan definition", "Issue tracking and fix", "Factory readiness"],
    gap: ["NEBS requirements", "Small cell OTA and EMC specifics"],
    talking: ["A staged validation mindset reduces late surprises across both smartphone and small cell programs."]
  },
  {
    id: "project-leadership",
    nav: "Leadership",
    title: "Leadership",
    summary: "Leadership is built through communication, trust, coaching, alignment, and steady team execution.",
    smartphone: ["Team Communication", "Mentoring", "Trust Building", "Work Prioritization", "Morale Support"],
    smallCell: ["Cross-Team Alignment", "Stakeholder Communication", "Conflict Resolution", "Expectation Management", "Decision Follow-up"],
    concepts: ["Active Listening", "Empathy", "Clear Communication", "Team Motivation", "Accountability", "Collaboration"],
    experience: ["Team alignment", "Coaching team members", "Cross-functional communication", "Improving team work efficiency", "Motivating team morale", "Building Team Trust", "Supplier coordination"],
    gap: ["Telecom stakeholder ecosystem", "Customer-facing communication style", "Distributed team operating rhythm"],
    talking: ["My leadership strength is helping people communicate clearly, build trust, improve work efficiency, and stay motivated around shared goals."],
    expandedDetails: [
      {
        title: "People Leadership Angle",
        items: ["Coach with patience", "Listen before deciding", "Create psychological safety"]
      },
      {
        title: "Manager Message",
        items: ["Build trust across teams", "Clarify priorities", "Help people work better together"]
      }
    ]
  },
  {
    id: "gap-analysis",
    nav: "Gap Analysis",
    title: "Gap Analysis",
    summary: "Clear separation of transferable strengths and focused learning areas.",
    smartphone: ["Transferable", "RF", "OTA", "Certification", "Debug", "Leadership"],
    smallCell: ["Need Learning", "Ethernet", "eCPRI", "PTP", "Open RAN", "Clock Architecture"],
    concepts: ["★★★★★ Transferable", "★★★ Need Learning", "Learning Plan", "Interview Positioning"],
    experience: ["RF", "OTA", "Certification", "Debug", "Leadership"],
    gap: ["Ethernet", "eCPRI", "PTP", "Open RAN", "Clock Architecture"],
    talking: ["Position the gaps as focused domain vocabulary and architecture learning, not a lack of hardware fundamentals."],
    special: "gap"
  },
  {
    id: "about-me",
    nav: "About Me",
    title: "About Me",
    summary: "Professional profile and strengths for technology transfer interviews.",
    profileText: "With over 17+ years of hands-on experience in RF hardware design, I specialize in the system architecture, simulation, and troubleshooting of high-end wireless devices including 5G handhelds, IoT gateways, and wearables. I have a proven track record of leading cross-functional teams, resolving critical EMI/EMC issues, and successfully boosting mass production yields from NPI to MP phases. Driven by a passion for innovation, I am currently dedicated to evaluating and developing AI-assisted RF design tools, pioneering the next generation of highly automated and efficient hardware development workflows.",
    smartphone: ["17+ years RF experience", "Smartphone", "IoT", "Bluetooth", "5G"],
    smallCell: ["FA", "Certification", "AI Side Projects", "Hardware Leadership"],
    concepts: ["RF systemd design", "RF System debug ", "Certification ownership", "Cross-functional communication"],
    experience: ["Smartphone RF", "IoT and Bluetooth", "5G NR", "Failure analysis", "AI side projects"],
    gap: ["Small cell system architecture", "Infrastructure network timing"],
    talking: ["My strength is connecting detailed RF engineering with practical program execution and fast technical learning."],
    special: "profile"
  }
];

const navList = document.querySelector("#navList");
const featureCards = document.querySelector("#featureCards");
const hardwareContainer = document.querySelector("#hardwareContainer");
const aboutContainer = document.querySelector("#aboutContainer");
const moduleContainer = document.querySelector("#moduleContainer");
const themeToggle = document.querySelector("#themeToggle");
const sidebar = document.querySelector("#sidebar");
const menuToggle = document.querySelector("#menuToggle");

const aboutModule = modules.find((module) => module.id === "about-me");
const hardwareModule = modules.find((module) => module.id === "hardware-platform");
const technicalModules = modules.filter((module) => !["about-me", "hardware-platform"].includes(module.id));
const navItems = [{ id: "overview", nav: "Overview" }, aboutModule, hardwareModule, ...technicalModules];

function chipList(items) {
  return `<div class="chips">${items.map((item) => `<span class="chip">${item}</span>`).join("")}</div>`;
}

function groupedChipList(groups) {
  if (!groups?.length) return "";
  return groups.map((group) => `
    <div class="chip-group">
      <div class="chip-group-title">${group.label}</div>
      ${chipList(group.items)}
    </div>
  `).join("");
}

function diagramLinks(items = []) {
  if (!items.length) return "";
  return `
    <div class="diagram-links" aria-label="Smartphone RF diagram links">
      ${items.map((item) => `
        <a class="diagram-link" href="${item.href}" target="_blank" rel="noopener">
          <span>${item.label}</span>
          <img src="${item.href}" alt="${item.label} preview">
        </a>
      `).join("")}
    </div>
  `;
}

function list(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function specialBlock(module) {
  if (module.special === "roadmap") {
    const steps = ["Smartphone", "RF Design", "OTA", "Certification", "Platform Integration", "Cross Function", "Hardware Manager", "Small Cell"];
    return `<div class="roadmap">${steps.map((step, index) => `<div class="road-step"><strong>${step}</strong><span>${index === steps.length - 1 ? "✓" : "↓"}</span></div>`).join("")}</div>`;
  }

  if (module.special === "gap") {
    return `
      <div class="detail-grid">
        <div class="panel"><h3>Transferable</h3><div class="stars">★★★★★</div>${list(["RF", "OTA", "Certification", "Debug", "Leadership"])}</div>
        <div class="panel"><h3>Need Learning</h3><div class="stars">★★★</div>${list(["Ethernet", "eCPRI", "PTP", "Open RAN", "Clock Architecture"])}</div>
      </div>`;
  }

  if (module.special === "profile") {
    return `
      <div class="profile-strip">
        <div class="profile-stat"><strong>17+</strong><span>Years RF Experience</span></div>
        <div class="profile-stat"><strong>5G</strong><span>Smartphone and wireless exposure</span></div>
        <div class="profile-stat"><strong>FA</strong><span>Debug and root cause analysis</span></div>
        <div class="profile-stat"><strong>AI</strong><span>Side projects and fast learning</span></div>
      </div>`;
  }

  return "";
}

function renderNav() {
  navList.innerHTML = navItems.map((item) => `
    <a href="#${item.id}" data-target="${item.id}" data-page-link>
      <span class="nav-dot"></span>
      <span>${item.nav}</span>
    </a>
  `).join("");
}

function renderFeatureCards() {
  featureCards.innerHTML = technicalModules.slice(0, 12).map((module, index) => `
    <article class="feature-card" data-search="${[module.title, module.summary, ...module.concepts].join(" ").toLowerCase()}">
      <p class="eyebrow">Module ${String(index + 1).padStart(2, "0")}</p>
      <h3>${module.title}</h3>
      <p>${module.summary}</p>
      <a class="card-action" href="#${module.id}" data-page-link data-target="${module.id}">Open Module</a>
    </article>
  `).join("");
}

function moduleMarkup(module) {
  if (module.special === "gap") {
    return `
      <section class="module page-section" id="${module.id}" data-search="${Object.values(module).flat().join(" ").toLowerCase()}">
        <div class="module-title">
          <div>
            <p class="eyebrow">${module.nav}</p>
            <h2>${module.title}</h2>
            <p>${module.summary}</p>
          </div>
        </div>
        ${specialBlock(module)}
      </section>
    `;
  }

  if (module.special === "profile") {
    return `
      <section class="module page-section about-module" id="${module.id}" data-search="${Object.values(module).flat().join(" ").toLowerCase()}">
        <div class="module-title">
          <div>
            <p class="eyebrow">${module.nav}</p>
            <h2>${module.title}</h2>
            <p>${module.summary}</p>
          </div>
        </div>
        <div class="about-profile">
          <p>${module.profileText}</p>
        </div>
        ${specialBlock(module)}
        <div class="detail-grid">
          <div class="panel"><h3>Common Engineering Concepts</h3>${list(module.concepts)}</div>
          <div class="panel"><h3>My Experience</h3>${list(module.experience)}</div>
          <div class="panel"><h3>Knowledge Gap</h3>${list(module.gap)}</div>
        </div>
      </section>
    `;
  }

  return `
    <section class="module page-section" id="${module.id}" data-search="${Object.values(module).flat().join(" ").toLowerCase()}">
      <div class="module-title">
        <div>
          <p class="eyebrow">${module.nav}</p>
          <h2>${module.title}</h2>
          <p>${module.summary}</p>
        </div>
        <button class="expand-btn" type="button" data-expand="${module.id}">Expand</button>
      </div>
      ${specialBlock(module)}
      <div class="mini-diagram" aria-label="Technology transfer flow">
        <div class="mini-node">Smartphone</div>
        <div class="mini-arrow">↓<br><small>Technology Transfer</small><br>↓</div>
        <div class="mini-node">Small Cell</div>
      </div>
      <div class="transfer-row">
        <div class="panel platform-panel">
          <div class="panel-label">Smartphone</div>
          ${module.smartphoneGroups ? groupedChipList(module.smartphoneGroups) : chipList(module.smartphone)}
          ${diagramLinks(module.smartphoneLinks)}
        </div>
        <div class="transfer-axis">Technology<span>→</span>Transfer</div>
        <div class="panel platform-panel">
          <div class="panel-label">Small Cell</div>
          ${chipList(module.smallCell)}
          ${diagramLinks(module.smallCellLinks)}
        </div>
      </div>
      <div class="detail-grid">
        <div class="panel"><h3>Common Engineering Concepts</h3>${list(module.concepts)}</div>
        <div class="panel"><h3>My Experience</h3>${list(module.experience)}</div>
        <div class="panel"><h3>Knowledge Gap</h3>${list(module.gap)}</div>
      </div>
      <div class="expanded-content detail-grid">
        ${(module.expandedDetails || [
          { title: "Design Review Angle", items: ["Architecture risk", "Measurement strategy", "Owner and action tracking"] },
          { title: "Manager Message", items: ["Translate details into decisions", "Make tradeoffs visible", "Close validation gaps early"] }
        ]).map((detail) => `<div class="panel"><h3>${detail.title}</h3>${list(detail.items)}</div>`).join("")}
      </div>
    </section>
  `;
}

function renderModules() {
  aboutContainer.innerHTML = moduleMarkup(aboutModule);
  hardwareContainer.innerHTML = moduleMarkup(hardwareModule);
  moduleContainer.innerHTML = technicalModules.map(moduleMarkup).join("");
}

function showPage(pageId, pushState = true) {
  const target = document.getElementById(pageId) ? pageId : "overview";
  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.toggle("active-page", section.id === target);
  });
  document.querySelectorAll(".sidebar a").forEach((link) => {
    link.classList.toggle("active", link.dataset.target === target);
  });
  sidebar.classList.remove("open");
  if (pushState) history.replaceState(null, "", `#${target}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function routeFromHash() {
  showPage(location.hash.replace("#", "") || "overview", false);
}

function bindPageLinks() {
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showPage(link.dataset.target || link.getAttribute("href").replace("#", ""));
    });
  });
}

renderNav();
renderFeatureCards();
renderModules();
bindPageLinks();
routeFromHash();

document.addEventListener("click", (event) => {
  const expandButton = event.target.closest("[data-expand]");
  if (expandButton) {
    const module = document.getElementById(expandButton.dataset.expand);
    module.classList.toggle("expanded");
    expandButton.textContent = module.classList.contains("expanded") ? "Collapse" : "Expand";
  }

});

window.addEventListener("hashchange", routeFromHash);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("technology-transfer-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

menuToggle.addEventListener("click", () => sidebar.classList.toggle("open"));

if (localStorage.getItem("technology-transfer-theme") === "dark") {
  document.body.classList.add("dark");
}

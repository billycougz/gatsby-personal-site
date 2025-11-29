const menuOptions = {
  default: [
    { type: "external", label: "1 LINKEDIN", href: "https://www.linkedin.com/in/williamcougan/" },
    { type: "external", label: "2 GITHUB", href: "https://github.com/billycougz" },
    { type: "submenu", label: "3 CONCEPTS", submenu: "concepts" },
    { type: "submenu", label: "4 APPS", submenu: "apps" }
  ],
  concepts: [
    { type: "internal", label: "1 FLAPPY TANOOKI", to: "/concept/Flappy-Tanooki" },
    { type: "internal", label: "2 DAY AND NITE", to: "/concept/Day-And-Nite" },
    { type: "back", label: "← MAIN MENU", submenu: "default" }
  ],
  apps: [
    { type: "external", label: "1 PERFECTIONLISTS", href: "https://perfectionlists.billycougan.com/" },
    { type: "external", label: "2 SQUARES", href: "https://squares.billycougan.com/" },
    { type: "external", label: "3 BILLSEYE", href: "https://sheets.billycougan.com/" },
    { type: "external", label: "4 TASTEBUDDY", href:"https://tastebuddy.williamcougan.com/" },
    { type: "back", label: "← MAIN MENU", submenu: "default" }
  ]
};

export default menuOptions;

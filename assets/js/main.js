// User Authentication
function checkUserAuth() {
  const user = localStorage.getItem("eduflareUser")
  const userSection = document.getElementById("userSection")
  const authSection = document.getElementById("authSection")
  const userName = document.getElementById("userName")

  if (user && userSection && authSection && userName) {
    userName.textContent = `Welcome, ${user}`
    userSection.classList.remove("hidden")
    authSection.classList.add("hidden")
  }
}

function logout() {
  localStorage.removeItem("eduflareUser")
  localStorage.removeItem("eduflareEmail")
  location.reload()
}

// Cookie Consent
function showCookieConsent() {
  const consent = localStorage.getItem("cookieConsent")
  if (!consent) {
    document.getElementById("cookieConsent").classList.remove("hidden")
  }
}

function acceptCookies() {
  localStorage.setItem("cookieConsent", "accepted")
  document.getElementById("cookieConsent").classList.add("hidden")
}

function declineCookies() {
  localStorage.setItem("cookieConsent", "declined")
  document.getElementById("cookieConsent").classList.add("hidden")
}

// Coaches Data
const coachesData = {
  valorant: [
    {
      name: "Alex 'RadiantAce' Chen",
      image: "/assets/images/coaches/alex-chen.jpg",
      rank: "Radiant",
      description:
        "Former professional player with 3+ years coaching experience. Specializes in aim training and game sense development.",
      packages: [
        { duration: "1 Hour", price: "$45", type: "Individual Session" },
        { duration: "3 Hours", price: "$120", type: "Intensive Training" },
        { duration: "5 Hours", price: "$180", type: "Weekly Package" },
      ],
    },
    {
      name: "Sarah 'ValorantQueen' Johnson",
      image: "/assets/images/coaches/sarah-johnson.jpg",
      rank: "Immortal 3",
      description:
        "Expert in agent utility and team coordination. Helped 200+ students climb ranks with strategic gameplay.",
      packages: [
        { duration: "1 Hour", price: "$40", type: "Individual Session" },
        { duration: "2 Hours", price: "$75", type: "Strategy Focus" },
        { duration: "4 Hours", price: "$140", type: "Complete Package" },
      ],
    },
    {
      name: "Mike 'TacticalMike' Rodriguez",
      image: "/assets/images/coaches/mike-rodriguez.jpg",
      rank: "Immortal 2",
      description:
        "IGL specialist focusing on tactical gameplay and team communication. Perfect for aspiring team players.",
      packages: [
        { duration: "1 Hour", price: "$38", type: "Individual Session" },
        { duration: "2 Hours", price: "$70", type: "Team Tactics" },
        { duration: "6 Hours", price: "$200", type: "Leadership Package" },
      ],
    },
    {
      name: "Emma 'SharpShooter' Davis",
      image: "/assets/images/coaches/emma-davis.jpg",
      rank: "Immortal 1",
      description: "Aim training specialist with proven methods to improve accuracy and reaction time significantly.",
      packages: [
        { duration: "1 Hour", price: "$35", type: "Aim Training" },
        { duration: "3 Hours", price: "$95", type: "Precision Package" },
        { duration: "5 Hours", price: "$150", type: "Master Marksman" },
      ],
    },
    {
      name: "David 'ClutchKing' Wilson",
      image: "/assets/images/coaches/david-wilson.jpg",
      rank: "Immortal 1",
      description: "Clutch situation expert teaching mental resilience and high-pressure performance techniques.",
      packages: [
        { duration: "1 Hour", price: "$42", type: "Clutch Training" },
        { duration: "2 Hours", price: "$80", type: "Mental Game" },
        { duration: "4 Hours", price: "$145", type: "Pressure Package" },
      ],
    },
  ],
  cs2: [
    {
      name: "Viktor 'CS2Pro' Petrov",
      image: "/assets/images/coaches/viktor-petrov.jpg",
      rank: "Global Elite",
      description: "Former CS:GO semi-professional with deep understanding of CS2 mechanics and meta strategies.",
      packages: [
        { duration: "1 Hour", price: "$50", type: "Individual Session" },
        { duration: "2 Hours", price: "$90", type: "Advanced Training" },
        { duration: "5 Hours", price: "$200", type: "Pro Package" },
      ],
    },
    {
      name: "Anna 'HeadshotAnna' Kowalski",
      image: "/assets/images/coaches/anna-kowalski.jpg",
      rank: "Global Elite",
      description: "Precision aiming coach specializing in crosshair placement and spray control techniques.",
      packages: [
        { duration: "1 Hour", price: "$45", type: "Aim Session" },
        { duration: "3 Hours", price: "$125", type: "Precision Training" },
        { duration: "4 Hours", price: "$160", type: "Master Class" },
      ],
    },
    {
      name: "James 'StratMaster' Thompson",
      image: "/assets/images/coaches/james-thompson.jpg",
      rank: "Supreme Master",
      description: "Tactical mastermind focusing on map control, utility usage, and team coordination strategies.",
      packages: [
        { duration: "1 Hour", price: "$40", type: "Strategy Session" },
        { duration: "2 Hours", price: "$80", type: "Tactical Training" },
        { duration: "4 Hours", price: "$160", type: "Comprehensive Package" },
      ],
    },
  ],
}

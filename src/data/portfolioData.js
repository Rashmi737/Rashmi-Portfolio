export const portfolioData = {
  personal: {
    name: "Rashmi V.",
    title: "Information Science & Engineering Student",
    headline: "Building Intelligence. Exploring Possibilities.",
    degree: "Information Science and Engineering",
    year: "3rd Year",
    cgpa: "9.24",
    email: "rashmi732007@gmail.com",
    linkedin: "https://linkedin.com/in/rashmi-v-9817a93a5",
    github: "https://github.com/Rashmi737",
    statusBadge: "Open to Internships & Opportunities",
    interests: [
      { name: "Artificial Intelligence", icon: "Brain" },
      { name: "Software Development", icon: "Code2" },
      { name: "Ethical Hacking", icon: "ShieldCheck" }
    ]
  },

  about: {
    heading: "A developer who likes building things.",
    paragraphs: [
      "I'm Rashmi V., an Information Science and Engineering student interested in exploring the possibilities of technology.",
      "I enjoy learning new concepts, experimenting with ideas, and building practical software applications. My interests include Artificial Intelligence, software development, and ethical hacking.",
      "I believe in learning by doing, taking on challenges, and continuously improving my technical skills."
    ],
    profileCard: {
      tags: ["Student", "Developer", "Builder", "Learner"],
      details: [
        { field: "Focus", value: "Software + AI" },
        { field: "Current Interest", value: "Modern Web" },
        { field: "CGPA", value: "9.24" },
        { field: "Approach", value: "Build, test, learn" }
      ]
    }
  },

  techStack: {
    heading: "Tech Stack",
    subtitle: "Technologies I use to build, experiment, and learn.",
    categories: [
      {
        name: "Languages",
        skills: ["Java", "Python", "C/C++", "JavaScript", "SQL"]
      },
      {
        name: "Backend & Web",
        skills: ["Spring Boot", "Node.js", "REST APIs", "HTML", "CSS", "Flutter"]
      },
      {
        name: "AI & Data",
        skills: ["Pandas", "NumPy", "Scikit-learn", "Data Analysis", "Machine Learning", "Computer Vision"]
      },
      {
        name: "Tools & Platforms",
        skills: ["Git", "GitHub", "VS Code", "Jupyter", "MySQL", "Maven"]
      }
    ]
  },

  projects: [
    {
      id: "creator-iq",
      title: "CreatorIQ",
      description: "A data-driven Commercial Command Center designed to analyze creator performance, audience reach, and related insights.",
      technologies: ["React", "Vite", "Python", "FastAPI"],
      githubUrl: "https://github.com/Rashmi737/CreatorIQ",
      isLive: false,
      tag: "Command Center"
    },
    {
      id: "violence-detection",
      title: "AI-Based Violence Detection System",
      description: "An AI-powered surveillance system that analyzes camera/video feeds to detect potential violent activities and generate alerts.",
      technologies: [
        "Python",
        "Flask",
        "OpenCV",
        "NumPy",
        "React",
        "Flask-SocketIO",
        "Socket.IO"
      ],
      githubUrl: "https://github.com/Rashmi737/violence-detection",
      isLive: false,
      tag: "AI Surveillance"
    },
    {
      id: "natyaraga",
      title: "NatyaRaga",
      description: "An AI-powered Indian classical dance platform focused on Bharatanatyam. It analyzes music, provides AI-assisted choreography suggestions, and visualizes dance performances using interactive 3D avatars.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Flask",
        "Python",
        "Librosa",
        "NumPy",
        "SciPy",
        "Scikit-learn",
        "Three.js"
      ],
      githubUrl: "https://github.com/Rashmi737/NatyaRaga",
      isLive: false,
      tag: "AI & Dance Technology"
    },
    {
      id: "phish-guard",
      title: "PhishGuard",
      description: "A Python-based web application that detects potentially malicious and phishing URLs using rule-based analysis and risk scoring. It identifies suspicious URL patterns, calculates risk levels, and provides security recommendations.",
      technologies: [
        "Python",
        "Flask",
        "HTML5",
        "CSS3",
        "JavaScript",
        "SQLite",
        "Flask-SQLAlchemy",
        "Flask-Login",
        "Chart.js"
      ],
      githubUrl: "https://github.com/Rashmi737/PhishGuard",
      isLive: false,
      tag: "Cybersecurity"
    }
  ],

  experience: [
    {
      id: "elipsonic",
      company: "Elipsonic",
      status: "Ongoing",
      badgeType: "ongoing",
      description: "Currently working as an intern at Elipsonic."
    },
    {
      id: "infosys",
      company: "Infosys",
      status: "Completed",
      badgeType: "completed",
      description: "Completed Virtual 7.0 Internship at Infosys."
    }
  ]
};

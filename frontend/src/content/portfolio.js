// Edit this file to personalize the portfolio.
// Everything rendered on the home page reads from here.

export const profile = {
    name: "Your Name",
    title: "Software Engineer & Writer",
    location: "Bengaluru, India",
    yearsActive: "2018 — Present",
    initials: "YN",
    tagline: "Designing calm interfaces, writing thoughtful prose, shipping software that feels considered.",
    avatarUrl: "https://images.pexels.com/photos/10567360/pexels-photo-10567360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heroImageUrl: "https://images.pexels.com/photos/12303547/pexels-photo-12303547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const about = {
    intro: "A short, honest paragraph about who you are.",
    paragraphs: [
        "I build software at the intersection of engineering and design. My work tends toward the quieter end of the spectrum — interfaces that get out of the way, systems that survive their author, and writing that respects the reader's time.",
        "Previously I led product engineering at a small fintech and contributed to several open-source typography projects. Today I split my hours between client work, writing essays here, and an ongoing experiment in slow, deliberate making.",
    ],
    facts: [
        { label: "Based in", value: "Bengaluru" },
        { label: "Working since", value: "2018" },
        { label: "Currently", value: "Independent" },
        { label: "Available", value: "Limited" },
    ],
};

export const skills = [
    "Product Engineering",
    "TypeScript",
    "React & Next.js",
    "System Design",
    "Python",
    "Postgres",
    "Editorial Design",
    "Writing",
    "Tailwind CSS",
    "Design Systems",
    "FastAPI",
    "Information Architecture",
];

export const projects = [
    {
        id: "01",
        year: "2025",
        title: "Quiet Library",
        role: "Design & Build",
        description: "An offline-first reading companion that strips away the social layer and returns books to the foreground.",
        stack: ["TypeScript", "React Native", "SQLite"],
        link: "#",
        image: "https://images.unsplash.com/photo-1536311312982-31ed42ebc0f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMG1pbmltYWwlMjBhcnR8ZW58MHx8fHwxNzgyMDI2MzI4fDA&ixlib=rb-4.1.0&q=85",
    },
    {
        id: "02",
        year: "2024",
        title: "Margin Notes",
        role: "Engineering Lead",
        description: "A collaborative annotation platform for research teams. Closed beta with 40+ universities.",
        stack: ["Next.js", "Postgres", "Tiptap"],
        link: "#",
        image: "https://images.unsplash.com/photo-1699465301322-362016624dd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1pbmltYWwlMjBhcnR8ZW58MHx8fHwxNzgyMDI2MzI4fDA&ixlib=rb-4.1.0&q=85",
    },
    {
        id: "03",
        year: "2024",
        title: "Field Type",
        role: "Solo Project",
        description: "A small variable font drawn over a winter. Free for personal use, licensed to a handful of studios.",
        stack: ["Glyphs", "Variable Fonts", "OpenType"],
        link: "#",
    },
    {
        id: "04",
        year: "2023",
        title: "Slow Newsletter",
        role: "Writing",
        description: "Weekly essays on craft, focus, and what tools quietly do to us. 6,000 readers, no growth hacks.",
        stack: ["Writing", "Editorial"],
        link: "#",
    },
];

export const contact = {
    email: "hello@example.com",
    socials: [
        { label: "GitHub", href: "https://github.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Read.cv", href: "https://read.cv" },
    ],
};

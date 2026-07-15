// Edit this file to personalize the portfolio.
// Everything rendered on the home page reads from here.

export const profile = {
    name: "Sasidharan Nachimuthu",
    handle: "yourhandle",
    role: "Data Scientist · AI/ML",
    location: "Bengaluru, India",
    initials: "sn",
    blurb:
        "I work on Agentic systems and Natural Language Processing. Currently at Fractal Analytics working on Automobile Voice Assistant. I write occasionally about what I'm building and learning.",
    avatarUrl:
        `${process.env.PUBLIC_URL || "."}/img.jpg`,

    links: [
        { label: "github", href: "https://github.com/SasidharanNachimuthu" },
        // { label: "twitter", href: "https://twitter.com" },
        // { label: "scholar", href: "https://scholar.google.com" },
        { label: "linkedin", href: "https://linkedin.com/in/sasidharannachimuthu" },
        { label: "email", href: "mailto:sasidharannachimuthu@gmail.com" },
        // { label: "cv", href: "/cv.pdf" },
    ],
};

export const about = {
    paragraphs: [
        "I'm a ml fellow interested in the intersection of systems and ML — distributed training, language modeling using deep learning, and the surprisingly hard problem of making research code reproducible.",
        "Before that I spent a few years at TCS AI CoE for Retail. I have a degree in computer science & engineering and looking to get started contributing to open-source projects in my spare time.",
        "This site is my notebook. It collects the things I've built, the talks I've given, papers I find interesting, and short essays on whatever I happen to be thinking about. It is updated when I have something to say, not on a schedule.",
    ],
};

export const skills = [
    "Python", "PyTorch", //"JAX",
    "React", "Linux", "Docker", "Kubernetes",
    "A2A", "LLMs", "Reinforcement Learning", "NLP", "Transformers"
    // "Distributed systems", "ML systems", "Compilers", "Numerical computing",
];

export const projects = [
    {
        year: "2026",
        title: "transformer-pytorch",
        description:
            "A PyTorch implementation of transformer model for number reversal task",
        link: "https://github.com/SasidharanNachimuthu/transformer-pytorch",
        tag: "transformer, pytorch, deep learning",
    },
];

// export const talks = [
//     {
//         year: "2025",
//         title: "Reproducibility in PyTorch: what actually breaks",
//         venue: "PyTorch Conference",
//         link: "#",
//     },
//     {
//         year: "2024",
//         title: "Compiling a tiny autograd from scratch",
//         venue: "Bangalore Python Meetup",
//         link: "#",
//     },
//     {
//         year: "2023",
//         title: "What I learned shipping ML to 200M users",
//         venue: "Internal talk · published as a post",
//         link: "#",
//     },
// ];

// export const publications = [
//     {
//         year: "2024",
//         title: "Efficient checkpoint streaming for large-model training",
//         authors: "Y. Name, A. Coauthor, B. Coauthor",
//         venue: "Workshop on ML Systems, NeurIPS 2024",
//         link: "#",
//     },
//     {
//         year: "2023",
//         title: "On the cost of dynamic shapes in deep-learning compilers",
//         authors: "Y. Name, C. Coauthor",
//         venue: "MLSys 2023 (poster)",
//         link: "#",
//     },
// ];

export const contact = {
    email: "sasidharannachimuthu@gmail.com",
};

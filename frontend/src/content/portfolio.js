// Edit this file to personalize the portfolio.
// Everything rendered on the home page reads from here.

export const profile = {
    name: "Your Name",
    handle: "yourhandle",
    role: "Software Engineer · Researcher",
    location: "Bengaluru, India",
    initials: "yn",
    blurb:
        "I work on systems software and machine learning infrastructure. Previously at $COMPANY working on $THING. I write occasionally about what I'm building and learning.",
    avatarUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=400&q=80",
    links: [
        { label: "github", href: "https://github.com" },
        { label: "twitter", href: "https://twitter.com" },
        { label: "scholar", href: "https://scholar.google.com" },
        { label: "linkedin", href: "https://linkedin.com" },
        { label: "email", href: "mailto:hello@example.com" },
        { label: "cv", href: "/cv.pdf" },
    ],
};

export const about = {
    paragraphs: [
        "I'm a software engineer interested in the intersection of systems and ML — distributed training, compilers for deep learning, and the surprisingly hard problem of making research code reproducible.",
        "Before that I spent a few years building backend infrastructure at a payments company. I have a degree in computer science from $UNIVERSITY and contribute to a handful of open-source projects in my spare hours.",
        "This site is my notebook. It collects the things I've built, the talks I've given, papers I find interesting, and short essays on whatever I happen to be thinking about. It is updated when I have something to say, not on a schedule.",
    ],
};

export const skills = [
    "Python", "C++", "CUDA", "PyTorch", "JAX",
    "TypeScript", "Rust", "Go", "Linux", "Docker",
    "Distributed systems", "ML systems", "Compilers", "Numerical computing",
];

export const projects = [
    {
        year: "2025",
        title: "tinyrun",
        description:
            "A 600-line process supervisor written in Rust. Used in production by a few small teams. Mostly an excuse to learn epoll well.",
        link: "https://github.com/",
        tag: "open source",
    },
    {
        year: "2024",
        title: "torch-replay",
        description:
            "Deterministic replay of PyTorch training runs across nodes. Survives mixed precision, gradient accumulation, and most hardware swaps.",
        link: "https://github.com/",
        tag: "open source",
    },
    {
        year: "2024",
        title: "Margin Notes",
        description:
            "Collaborative annotation platform for research teams. Closed beta with 40+ universities. Tech: Next.js, Postgres, Tiptap.",
        link: "#",
        tag: "product",
    },
    {
        year: "2023",
        title: "fast-attention-bench",
        description:
            "Microbenchmarks comparing the major attention kernels on A100/H100. Numbers, not opinions.",
        link: "https://github.com/",
        tag: "open source",
    },
    {
        year: "2022",
        title: "ledger-cli plugin",
        description:
            "A small importer that turns Indian bank statements into plain-text ledger entries. Used by maybe a dozen people. One of them is me.",
        link: "https://github.com/",
        tag: "tool",
    },
];

export const talks = [
    {
        year: "2025",
        title: "Reproducibility in PyTorch: what actually breaks",
        venue: "PyTorch Conference",
        link: "#",
    },
    {
        year: "2024",
        title: "Compiling a tiny autograd from scratch",
        venue: "Bangalore Python Meetup",
        link: "#",
    },
    {
        year: "2023",
        title: "What I learned shipping ML to 200M users",
        venue: "Internal talk · published as a post",
        link: "#",
    },
];

export const publications = [
    {
        year: "2024",
        title: "Efficient checkpoint streaming for large-model training",
        authors: "Y. Name, A. Coauthor, B. Coauthor",
        venue: "Workshop on ML Systems, NeurIPS 2024",
        link: "#",
    },
    {
        year: "2023",
        title: "On the cost of dynamic shapes in deep-learning compilers",
        authors: "Y. Name, C. Coauthor",
        venue: "MLSys 2023 (poster)",
        link: "#",
    },
];

export const contact = {
    email: "hello@example.com",
};

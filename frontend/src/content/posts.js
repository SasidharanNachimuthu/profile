// To add a new blog post:
// 1. Create a markdown file in /app/frontend/public/blog/your-slug.md
// 2. Register it here with slug, title, date, excerpt, and tags.
// Newest posts go first.

const posts = [
    {
        slug: "on-quiet-software",
        title: "On Quiet Software",
        date: "2025-09-14",
        readTime: "6 min",
        excerpt:
            "Most software is loud — chasing your attention, your time, your data. A note on building the other kind.",
        tags: ["essay", "craft"],
    },
    {
        slug: "writing-as-thinking",
        title: "Writing as Thinking",
        date: "2025-07-02",
        readTime: "4 min",
        excerpt:
            "If you can't write it down, you probably haven't thought it through. A short defense of slow prose.",
        tags: ["writing"],
    },
    {
        slug: "the-folder-of-unsent-letters",
        title: "The Folder of Unsent Letters",
        date: "2025-04-21",
        readTime: "5 min",
        excerpt:
            "Why I keep a directory of essays no one will read, and what it has done for the ones I publish.",
        tags: ["essay", "process"],
    },
];

export default posts;

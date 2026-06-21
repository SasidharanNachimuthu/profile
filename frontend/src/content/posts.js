// To add a new blog post:
// 1. Create a markdown file in /app/frontend/public/blog/your-slug.md
// 2. Register it here with slug, title, date, excerpt, and tags.
// Newest posts go first.

const posts = [
    {
        slug: "on-quiet-software",
        title: "On quiet software",
        date: "2025-09-14",
        readTime: "6 min",
        excerpt:
            "Most software is loud. A short note on building the other kind.",
        tags: ["essay", "craft"],
    },
    {
        slug: "writing-as-thinking",
        title: "Writing as thinking",
        date: "2025-07-02",
        readTime: "4 min",
        excerpt:
            "If you can't write it down, you probably haven't thought it through.",
        tags: ["writing"],
    },
    {
        slug: "the-folder-of-unsent-letters",
        title: "The folder of unsent letters",
        date: "2025-04-21",
        readTime: "5 min",
        excerpt:
            "On keeping a directory of essays no one will read.",
        tags: ["essay", "process"],
    },
];

export default posts;

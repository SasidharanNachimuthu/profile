// To add a new blog post:
// 1. Create a markdown file in /app/frontend/public/blog/your-slug.md
// 2. Register it here with slug, title, date, excerpt, and tags.
// Newest posts go first.

const posts = [
    {
        slug: "linear-algebra-foundations",
        title: "Linear algebra foundations",
        date: "2025-10-10",
        readTime: "20 min",
        excerpt:
            "A brief overview of the linear algebra concepts essential for understanding deep learning.",
        tags: ["tutorial", "math"],
    },
];

export default posts;

# Blog Posts

Drop your markdown posts in this folder.

## Adding a new post

1. Create a markdown file here: `public/blog/your-slug.md`
2. Optionally add front matter at the top:

   ```markdown
   ---
   title: Your Post Title
   date: 2025-01-15
   ---

   Your content goes here...
   ```

3. Register the post in `src/content/posts.js` (newest first):

   ```js
   {
     slug: "your-slug",          // must match the filename
     title: "Your Post Title",
     date: "2025-01-15",         // ISO date
     readTime: "5 min",
     excerpt: "A one-line summary shown on the listing page.",
     tags: ["essay", "craft"],
   }
   ```

That's it. Commit, push, and GitHub Pages will serve it.

## Supported markdown

- GitHub-flavoured markdown (tables, task lists, strikethrough)
- Code blocks with syntax highlighting via CSS
- Inline HTML
- Images (`![alt](path)`)
- Blockquotes, headings, lists, links

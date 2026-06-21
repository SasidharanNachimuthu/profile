import { Link } from "react-router-dom";
import posts from "@/content/posts";

export default function BlogListPage() {
    // group posts by year (newest first)
    const byYear = posts.reduce((acc, p) => {
        const year = new Date(p.date).getFullYear();
        if (!acc[year]) acc[year] = [];
        acc[year].push(p);
        return acc;
    }, {});
    const years = Object.keys(byYear).sort((a, b) => b - a);

    return (
        <div
            className="px-6 sm:px-10 py-12 sm:py-16"
            data-testid="blog-list-page"
        >
            <div className="max-w-3xl mx-auto">
                <header className="mb-12">
                    <h1
                        className="font-serif tracking-tight leading-tight mb-3"
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3rem)",
                            fontWeight: 500,
                        }}
                        data-testid="blog-list-headline"
                    >
                        Writing
                    </h1>
                    <p
                        className="text-base leading-relaxed max-w-2xl"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Notes, essays, and the occasional technical write-up.
                        Mostly about software, sometimes about how I work.
                        Updated when there's something worth saying.
                    </p>
                </header>

                {years.map((year) => (
                    <section key={year} className="mb-10">
                        <h2
                            className="font-mono text-sm mb-4 pb-2 border-b"
                            style={{
                                color: "var(--text-secondary)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            {year}
                        </h2>
                        <ul className="divide-y" style={{ borderColor: "var(--border-color)" }}>
                            {byYear[year].map((post) => (
                                <li
                                    key={post.slug}
                                    className="py-3"
                                    style={{ borderColor: "var(--border-color)" }}
                                >
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="grid grid-cols-[5rem_1fr_auto] gap-4 items-baseline group"
                                        data-testid={`blog-list-item-${post.slug}`}
                                    >
                                        <span
                                            className="font-mono text-xs tabular-nums"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            {formatShort(post.date)}
                                        </span>
                                        <div>
                                            <p
                                                className="text-base group-hover:underline underline-offset-4"
                                                style={{ color: "var(--text-primary)" }}
                                            >
                                                {post.title}
                                            </p>
                                            <p
                                                className="text-sm mt-1 hidden sm:block"
                                                style={{ color: "var(--text-secondary)" }}
                                            >
                                                {post.excerpt}
                                            </p>
                                        </div>
                                        <span
                                            className="font-mono text-xs hidden sm:inline-block"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            {post.readTime}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}

                {posts.length === 0 && (
                    <p
                        className="font-serif italic text-lg"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Nothing yet. Soon.
                    </p>
                )}
            </div>
        </div>
    );
}

function formatShort(iso) {
    const d = new Date(iso);
    return d
        .toLocaleDateString("en-US", { month: "short", day: "2-digit" })
        .toLowerCase();
}

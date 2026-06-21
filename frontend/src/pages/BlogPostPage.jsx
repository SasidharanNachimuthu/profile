import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import frontMatter from "front-matter";
import posts from "@/content/posts";

export default function BlogPostPage() {
    const { slug } = useParams();
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("loading");

    const post = posts.find((p) => p.slug === slug);

    useEffect(() => {
        if (!post) {
            setStatus("missing");
            return;
        }
        setStatus("loading");
        const base = process.env.PUBLIC_URL || "";
        fetch(`${base}/blog/${slug}.md`)
            .then((r) => {
                if (!r.ok) throw new Error(`HTTP ${r.status}`);
                return r.text();
            })
            .then((raw) => {
                const parsed = frontMatter(raw);
                setContent(parsed.body || raw);
                setStatus("ready");
            })
            .catch(() => {
                setContent("");
                setStatus("error");
            });
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [slug, post]);

    if (!post) {
        return (
            <div
                className="px-6 sm:px-10 py-16 max-w-3xl mx-auto"
                data-testid="blog-post-missing"
            >
                <p
                    className="font-mono text-sm mb-4"
                    style={{ color: "var(--text-secondary)" }}
                >
                    404 · not found
                </p>
                <h1
                    className="font-serif text-3xl mb-6"
                    style={{ fontWeight: 500 }}
                >
                    No post by that name.
                </h1>
                <Link
                    to="/blog"
                    className="font-mono text-sm editorial-link"
                >
                    ← back to writing
                </Link>
            </div>
        );
    }

    const currentIndex = posts.findIndex((p) => p.slug === slug);
    const next = posts[currentIndex - 1];
    const prev = posts[currentIndex + 1];

    return (
        <article
            className="px-6 sm:px-10 py-12 sm:py-16"
            data-testid="blog-post-page"
        >
            <div className="max-w-2xl mx-auto">
                <Link
                    to="/blog"
                    className="font-mono text-sm editorial-link inline-block mb-10"
                    style={{ color: "var(--text-secondary)" }}
                    data-testid="blog-post-back-link"
                >
                    ← writing
                </Link>

                <header
                    className="mb-10 pb-6 border-b"
                    style={{ borderColor: "var(--border-color)" }}
                >
                    <h1
                        className="font-serif tracking-tight leading-tight mb-3"
                        style={{
                            fontSize: "clamp(2rem, 4vw, 2.5rem)",
                            fontWeight: 500,
                            color: "var(--text-primary)",
                        }}
                        data-testid="blog-post-title"
                    >
                        {post.title}
                    </h1>
                    <div
                        className="font-mono text-xs flex flex-wrap gap-x-4 gap-y-1"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        <span>{formatLong(post.date)}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                        {post.tags?.length > 0 && (
                            <>
                                <span>·</span>
                                <span>{post.tags.join(" / ")}</span>
                            </>
                        )}
                    </div>
                </header>

                {status === "loading" && (
                    <p
                        className="font-mono text-sm"
                        style={{ color: "var(--text-secondary)" }}
                        data-testid="blog-post-loading"
                    >
                        loading…
                    </p>
                )}

                {status === "error" && (
                    <div data-testid="blog-post-error">
                        <p
                            className="text-base mb-3"
                            style={{ color: "var(--text-primary)" }}
                        >
                            This post isn't available yet.
                        </p>
                        <p
                            className="text-sm"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            The file{" "}
                            <code className="font-mono text-xs px-1 py-0.5"
                                style={{ backgroundColor: "var(--bg-secondary)" }}>
                                public/blog/{slug}.md
                            </code>{" "}
                            wasn't found in the repo.
                        </p>
                    </div>
                )}

                {status === "ready" && (
                    <div
                        className="prose-editorial"
                        data-testid="blog-post-content"
                    >
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                )}

                {/* PAGINATION */}
                {(prev || next) && (
                    <nav
                        className="mt-16 pt-6 border-t grid grid-cols-2 gap-6 font-mono text-sm"
                        style={{ borderColor: "var(--border-color)" }}
                    >
                        <div>
                            {prev && (
                                <Link
                                    to={`/blog/${prev.slug}`}
                                    className="block group"
                                    data-testid="blog-post-prev-link"
                                >
                                    <p
                                        className="text-xs mb-1"
                                        style={{ color: "var(--text-secondary)" }}
                                    >
                                        ← older
                                    </p>
                                    <p
                                        className="group-hover:underline underline-offset-4"
                                        style={{ color: "var(--text-primary)" }}
                                    >
                                        {prev.title}
                                    </p>
                                </Link>
                            )}
                        </div>
                        <div className="text-right">
                            {next && (
                                <Link
                                    to={`/blog/${next.slug}`}
                                    className="block group"
                                    data-testid="blog-post-next-link"
                                >
                                    <p
                                        className="text-xs mb-1"
                                        style={{ color: "var(--text-secondary)" }}
                                    >
                                        newer →
                                    </p>
                                    <p
                                        className="group-hover:underline underline-offset-4"
                                        style={{ color: "var(--text-primary)" }}
                                    >
                                        {next.title}
                                    </p>
                                </Link>
                            )}
                        </div>
                    </nav>
                )}
            </div>
        </article>
    );
}

function formatLong(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

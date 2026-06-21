import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import frontMatter from "front-matter";
import posts from "@/content/posts";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import remarkSlug from "remark-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default function BlogPostPage() {
    const { slug } = useParams();
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("loading");
    const contentRef = useRef(null);
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

    useEffect(() => {
        if (!contentRef.current) return;
        const onClick = (e) => {
            const a = e.target.closest && e.target.closest("a[href^='#']");
            if (!a) return;
            e.preventDefault();
            const id = a.getAttribute("href").slice(1);
            const target = document.getElementById(id);
            if (target) {
                const header = document.querySelector('header[role="banner"], header');
                const headerHeight = header ? header.getBoundingClientRect().height : 0;
                const extra = 12; // adjust spacing if you want more/less gap
                const top = window.scrollY + target.getBoundingClientRect().top - headerHeight - extra;
                window.scrollTo({ top, behavior: "smooth" });
            }
        };
        const el = contentRef.current;
        el.addEventListener("click", onClick);
        return () => el.removeEventListener("click", onClick);
        }, [contentRef, status, content]);

    useEffect(() => {
        if (status !== "ready") return;
        const hash = window.location.hash;
        if (!hash) return;
        const id = hash.slice(1);
        // small timeout to ensure Markdown headings have been rendered/IDs assigned
        setTimeout(() => {
            const target = document.getElementById(id);
            if (!target) return;
            const header = document.querySelector('header[role="banner"], header');
            const headerHeight = header ? header.getBoundingClientRect().height : 0;
            const extra = 12;
            const top = window.scrollY + target.getBoundingClientRect().top - headerHeight - extra;
            window.scrollTo({ top, behavior: "instant" });
        }, 60);
        }, [status, content]);

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
                    to="/writing"
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
                    to="/writing"
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
                                public/writing/{slug}.md
                            </code>{" "}
                            wasn't found in the repo.
                        </p>
                    </div>
                )}

                {status === "ready" && (
                    <div
                        className="prose-editorial"
                        data-testid="blog-post-content"
                        ref={contentRef}
                    >
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm, remarkMath, remarkSlug]}
                            rehypePlugins={[
                                rehypeRaw, 
                                rehypeKatex,
                                [rehypeAutolinkHeadings, { behavior: "wrap" }]
                            ]}
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
                                    to={`/writing/${prev.slug}`}
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
                                    to={`/writing/${next.slug}`}
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

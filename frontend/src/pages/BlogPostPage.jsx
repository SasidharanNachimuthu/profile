import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import frontMatter from "front-matter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import posts from "@/content/posts";

export default function BlogPostPage() {
    const { slug } = useParams();
    const [content, setContent] = useState("");
    const [meta, setMeta] = useState(null);
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
                setMeta(parsed.attributes || {});
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
                className="px-6 sm:px-12 py-32 max-w-3xl mx-auto"
                data-testid="blog-post-missing"
            >
                <p className="label-eyebrow mb-6">Not found</p>
                <h1
                    className="font-serif text-5xl mb-6"
                    style={{ fontWeight: 400 }}
                >
                    No entry by that name.
                </h1>
                <Link
                    to="/blog"
                    className="editorial-link label-eyebrow inline-flex gap-2 items-center"
                >
                    <ArrowLeft size={14} /> Back to Journal
                </Link>
            </div>
        );
    }

    const currentIndex = posts.findIndex((p) => p.slug === slug);
    const next = posts[currentIndex - 1];
    const prev = posts[currentIndex + 1];

    return (
        <article data-testid="blog-post-page">
            {/* HEADER */}
            <header
                className="px-6 sm:px-12 pt-16 sm:pt-24 pb-12 border-b"
                style={{ borderColor: "var(--border-color)" }}
            >
                <div className="max-w-3xl mx-auto">
                    <Link
                        to="/blog"
                        className="editorial-link label-eyebrow inline-flex gap-2 items-center mb-10"
                        data-testid="blog-post-back-link"
                    >
                        <ArrowLeft size={14} strokeWidth={1.5} /> Journal
                    </Link>

                    <div className="flex flex-wrap gap-3 mb-8">
                        {post.tags?.map((t) => (
                            <span
                                key={t}
                                className="text-xs px-3 py-1 border"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--text-secondary)",
                                }}
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <h1
                        className="font-serif tracking-tight leading-[1.02] mb-8"
                        style={{
                            fontSize: "clamp(2.5rem, 6vw, 5rem)",
                            fontWeight: 400,
                        }}
                        data-testid="blog-post-title"
                    >
                        {post.title}
                    </h1>

                    <div
                        className="flex flex-wrap gap-6 label-eyebrow"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        <span>{formatDate(post.date)}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </header>

            {/* BODY */}
            <section className="px-6 sm:px-12 py-16 sm:py-24">
                <div className="max-w-2xl mx-auto">
                    {status === "loading" && (
                        <div
                            className="font-serif italic"
                            style={{ color: "var(--text-secondary)" }}
                            data-testid="blog-post-loading"
                        >
                            Setting the type…
                        </div>
                    )}

                    {status === "error" && (
                        <div data-testid="blog-post-error">
                            <p
                                className="font-serif text-2xl mb-4"
                                style={{ color: "var(--text-primary)" }}
                            >
                                This entry isn't available yet.
                            </p>
                            <p style={{ color: "var(--text-secondary)" }}>
                                The markdown file{" "}
                                <code
                                    style={{
                                        backgroundColor: "var(--bg-secondary)",
                                        padding: "2px 6px",
                                    }}
                                >
                                    public/blog/{slug}.md
                                </code>{" "}
                                wasn't found. Add it to the repo to publish.
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
                </div>
            </section>

            {/* PAGINATION */}
            <nav
                className="px-6 sm:px-12 py-16 border-t grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto"
                style={{ borderColor: "var(--border-color)" }}
            >
                <div>
                    {prev ? (
                        <Link
                            to={`/blog/${prev.slug}`}
                            className="block group hover-lift"
                            data-testid="blog-post-prev-link"
                        >
                            <p
                                className="label-eyebrow mb-3 inline-flex items-center gap-2"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                <ArrowLeft size={12} /> Previous
                            </p>
                            <p
                                className="font-serif text-2xl"
                                style={{ color: "var(--text-primary)", fontWeight: 400 }}
                            >
                                {prev.title}
                            </p>
                        </Link>
                    ) : (
                        <span />
                    )}
                </div>
                <div className="md:text-right">
                    {next ? (
                        <Link
                            to={`/blog/${next.slug}`}
                            className="block group hover-lift"
                            data-testid="blog-post-next-link"
                        >
                            <p
                                className="label-eyebrow mb-3 inline-flex items-center gap-2 md:justify-end md:w-full"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                Next <ArrowUpRight size={12} />
                            </p>
                            <p
                                className="font-serif text-2xl"
                                style={{ color: "var(--text-primary)", fontWeight: 400 }}
                            >
                                {next.title}
                            </p>
                        </Link>
                    ) : (
                        <span />
                    )}
                </div>
            </nav>
        </article>
    );
}

function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import posts from "@/content/posts";

export default function BlogListPage() {
    return (
        <div data-testid="blog-list-page">
            {/* HEADER */}
            <section
                className="px-6 sm:px-12 pt-16 sm:pt-24 pb-16 border-b"
                style={{ borderColor: "var(--border-color)" }}
            >
                <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-3">
                        <p className="label-eyebrow">(01) The Journal</p>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <h1
                            className="font-serif tracking-tight leading-[0.95] mb-8"
                            style={{
                                fontSize: "clamp(3rem, 8vw, 7rem)",
                                fontWeight: 300,
                            }}
                            data-testid="blog-list-headline"
                        >
                            Notes from <span className="italic">the desk</span>.
                        </h1>
                        <p
                            className="text-lg sm:text-xl max-w-2xl leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            Essays on craft, software that respects attention,
                            and the slow work of making things worth keeping.
                            Updated when there's something worth saying.
                        </p>
                    </div>
                </div>
            </section>

            {/* POST LIST */}
            <section className="px-6 sm:px-12 py-16">
                <div className="max-w-[1400px] mx-auto">
                    <p
                        className="label-eyebrow mb-8"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        ({posts.length.toString().padStart(2, "0")}) Entries
                    </p>

                    <ul className="border-t" style={{ borderColor: "var(--border-color)" }}>
                        {posts.map((post, idx) => (
                            <li
                                key={post.slug}
                                className="border-b"
                                style={{ borderColor: "var(--border-color)" }}
                            >
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="grid grid-cols-12 gap-6 py-10 sm:py-12 group hover-lift items-baseline"
                                    data-testid={`blog-list-item-${post.slug}`}
                                >
                                    <div className="col-span-2 md:col-span-1">
                                        <span
                                            className="font-mono text-sm"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            {String(posts.length - idx).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div className="col-span-10 md:col-span-7">
                                        <h2
                                            className="font-serif text-3xl sm:text-5xl tracking-tight leading-tight mb-3"
                                            style={{
                                                color: "var(--text-primary)",
                                                fontWeight: 400,
                                            }}
                                        >
                                            {post.title}
                                        </h2>
                                        <p
                                            className="text-base leading-relaxed max-w-2xl"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            {post.excerpt}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4">
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
                                    </div>
                                    <div className="col-span-12 md:col-span-3 md:text-right">
                                        <p
                                            className="label-eyebrow"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            {formatDate(post.date)}
                                        </p>
                                        <p
                                            className="font-serif italic mt-1"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            {post.readTime}
                                        </p>
                                    </div>
                                    <div className="col-span-12 md:col-span-1 flex md:justify-end">
                                        <ArrowUpRight
                                            size={24}
                                            strokeWidth={1}
                                            className="transition-transform duration-500 group-hover:rotate-45"
                                            style={{ color: "var(--text-primary)" }}
                                        />
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
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

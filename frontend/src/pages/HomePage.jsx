import Marquee from "react-fast-marquee";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { profile, about, skills, projects } from "@/content/portfolio";
import posts from "@/content/posts";

export default function HomePage() {
    const recentPosts = posts.slice(0, 2);

    return (
        <div data-testid="home-page">
            {/* HERO */}
            <section
                className="relative px-6 sm:px-12 pt-16 sm:pt-24 pb-24 sm:pb-32 border-b"
                style={{ borderColor: "var(--border-color)" }}
                data-testid="hero-section"
            >
                <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-7">
                        <p
                            className="label-eyebrow mb-8 reveal-in"
                            style={{ animationDelay: "0.05s" }}
                        >
                            (00) Portfolio · {new Date().getFullYear()}
                        </p>
                        <h1
                            className="font-serif tracking-tighter leading-[0.92] mb-10 reveal-in"
                            style={{
                                fontSize: "clamp(3rem, 9vw, 8rem)",
                                fontWeight: 300,
                                animationDelay: "0.1s",
                            }}
                            data-testid="hero-headline"
                        >
                            <span className="block">{profile.name.split(" ")[0]}</span>
                            <span className="block italic font-normal">
                                {profile.name.split(" ").slice(1).join(" ") || "Portfolio"}
                            </span>
                        </h1>
                        <p
                            className="text-lg sm:text-xl leading-relaxed max-w-xl reveal-in"
                            style={{
                                color: "var(--text-secondary)",
                                animationDelay: "0.2s",
                            }}
                        >
                            {profile.tagline}
                        </p>

                        <div
                            className="mt-12 flex flex-wrap gap-4 reveal-in"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <a
                                href="#work"
                                className="btn-editorial"
                                data-testid="hero-cta-work"
                            >
                                See the work <ArrowDown size={14} strokeWidth={1.5} />
                            </a>
                            <Link
                                to="/blog"
                                className="btn-editorial"
                                style={{ border: "1px solid var(--border-color)" }}
                                data-testid="hero-cta-blog"
                            >
                                Read the journal <ArrowUpRight size={14} strokeWidth={1.5} />
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-5 md:pl-12 flex flex-col justify-between gap-12">
                        <div
                            className="relative aspect-[4/5] overflow-hidden reveal-in"
                            style={{
                                animationDelay: "0.4s",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <img
                                src={profile.heroImageUrl}
                                alt=""
                                className="w-full h-full object-cover grayscale"
                                loading="eager"
                            />
                        </div>
                        <div
                            className="grid grid-cols-2 gap-x-6 gap-y-6 reveal-in"
                            style={{ animationDelay: "0.5s" }}
                        >
                            {about.facts.map((f) => (
                                <div key={f.label}>
                                    <p className="label-eyebrow mb-1">{f.label}</p>
                                    <p
                                        className="font-serif text-xl"
                                        style={{ color: "var(--text-primary)" }}
                                    >
                                        {f.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILLS MARQUEE */}
            <section
                className="py-20 overflow-hidden border-b"
                style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-color)",
                }}
                data-testid="skills-section"
            >
                <div className="max-w-[1400px] mx-auto px-6 sm:px-12 mb-10">
                    <p className="label-eyebrow">(02) Practice</p>
                </div>
                <Marquee speed={28} gradient={false} pauseOnHover>
                    {skills.map((s, i) => (
                        <span
                            key={i}
                            className="font-serif italic mx-12"
                            style={{
                                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                                color: "var(--text-primary)",
                                fontWeight: 400,
                            }}
                        >
                            {s}
                            <span
                                className="mx-12 not-italic"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                ·
                            </span>
                        </span>
                    ))}
                </Marquee>
            </section>

            {/* ABOUT */}
            <section
                id="about"
                className="px-6 sm:px-12 py-24 sm:py-32 border-b"
                style={{ borderColor: "var(--border-color)" }}
                data-testid="about-section"
            >
                <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-4">
                        <p className="label-eyebrow mb-6">(03) About</p>
                        <p
                            className="font-serif text-xl italic"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            "{about.intro}"
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-7 md:col-start-6">
                        <h2
                            className="font-serif tracking-tight mb-10"
                            style={{
                                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                lineHeight: 1.1,
                                fontWeight: 400,
                            }}
                        >
                            A short note on what I do, and why.
                        </h2>
                        <div className="space-y-6">
                            {about.paragraphs.map((p, i) => (
                                <p
                                    key={i}
                                    className="leading-relaxed text-lg"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {p}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WORK / PROJECTS */}
            <section
                id="work"
                className="px-6 sm:px-12 py-24 sm:py-32 border-b"
                style={{ borderColor: "var(--border-color)" }}
                data-testid="work-section"
            >
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-12 gap-6 mb-16">
                        <div className="col-span-12 md:col-span-4">
                            <p className="label-eyebrow mb-6">(04) Selected Work</p>
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <h2
                                className="font-serif tracking-tight"
                                style={{
                                    fontSize: "clamp(2rem, 5vw, 4.5rem)",
                                    lineHeight: 1.05,
                                    fontWeight: 300,
                                }}
                            >
                                A handful of things, <span className="italic">made carefully</span>.
                            </h2>
                        </div>
                    </div>

                    <div className="border-t" style={{ borderColor: "var(--border-color)" }}>
                        {projects.map((p) => (
                            <ProjectRow key={p.id} project={p} />
                        ))}
                    </div>
                </div>
            </section>

            {/* JOURNAL PREVIEW */}
            <section
                className="px-6 sm:px-12 py-24 sm:py-32 border-b"
                style={{
                    borderColor: "var(--border-color)",
                    backgroundColor: "var(--bg-secondary)",
                }}
                data-testid="journal-preview-section"
            >
                <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-4">
                        <p className="label-eyebrow mb-6">(05) Journal</p>
                        <h2
                            className="font-serif tracking-tight mb-6"
                            style={{
                                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                lineHeight: 1.1,
                                fontWeight: 400,
                            }}
                        >
                            Recent writing.
                        </h2>
                        <Link
                            to="/blog"
                            className="editorial-link label-eyebrow inline-flex items-center gap-2"
                            style={{ color: "var(--text-primary)" }}
                            data-testid="journal-preview-all-link"
                        >
                            All entries <ArrowUpRight size={14} strokeWidth={1.5} />
                        </Link>
                    </div>
                    <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-color)] border border-[var(--border-color)]">
                        {recentPosts.map((post) => (
                            <Link
                                key={post.slug}
                                to={`/blog/${post.slug}`}
                                className="p-8 hover-lift block"
                                style={{ backgroundColor: "var(--bg-secondary)" }}
                                data-testid={`journal-preview-card-${post.slug}`}
                            >
                                <p
                                    className="label-eyebrow mb-6"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {formatDate(post.date)} · {post.readTime}
                                </p>
                                <h3
                                    className="font-serif text-2xl sm:text-3xl mb-4 leading-tight"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {post.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {post.excerpt}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

function ProjectRow({ project }) {
    return (
        <a
            href={project.link || "#"}
            className="grid grid-cols-12 gap-6 items-start py-10 group border-b hover-lift"
            style={{ borderColor: "var(--border-color)" }}
            data-testid={`project-row-${project.id}`}
        >
            <div className="col-span-2 md:col-span-1">
                <span
                    className="font-mono text-sm"
                    style={{ color: "var(--text-secondary)" }}
                >
                    {project.id}
                </span>
            </div>
            <div className="col-span-10 md:col-span-5">
                <h3
                    className="font-serif text-3xl sm:text-5xl tracking-tight mb-2 transition-colors duration-500"
                    style={{ color: "var(--text-primary)", fontWeight: 400 }}
                >
                    {project.title}
                </h3>
                <p
                    className="label-eyebrow"
                    style={{ color: "var(--text-secondary)" }}
                >
                    {project.role} · {project.year}
                </p>
            </div>
            <div className="col-span-12 md:col-span-4">
                <p
                    className="text-base leading-relaxed mb-4"
                    style={{ color: "var(--text-primary)" }}
                >
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                        <span
                            key={s}
                            className="text-xs px-3 py-1 border"
                            style={{
                                borderColor: "var(--border-color)",
                                color: "var(--text-secondary)",
                            }}
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>
            <div className="col-span-12 md:col-span-2 flex md:justify-end">
                <ArrowUpRight
                    size={28}
                    strokeWidth={1}
                    className="transition-transform duration-500 group-hover:rotate-45"
                    style={{ color: "var(--text-primary)" }}
                />
            </div>
        </a>
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

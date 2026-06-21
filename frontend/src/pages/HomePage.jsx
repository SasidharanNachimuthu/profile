import { Link } from "react-router-dom";
import {
    profile,
    about,
    skills,
    projects,
    talks,
    publications,
    contact,
} from "@/content/portfolio";
import posts from "@/content/posts";

export default function HomePage() {
    const recentPosts = posts.slice(0, 4);

    return (
        <div
            className="px-6 sm:px-10 py-12 sm:py-16"
            data-testid="home-page"
        >
            <div className="max-w-3xl mx-auto">
                {/* HERO — text-first, small avatar, links inline */}
                <section data-testid="hero-section">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 mb-8">
                        <img
                            src={profile.avatarUrl}
                            alt=""
                            className="w-24 h-24 sm:w-28 sm:h-28 object-cover grayscale shrink-0"
                            style={{ border: "1px solid var(--border-color)" }}
                            loading="eager"
                        />
                        <div>
                            <h1
                                className="font-serif tracking-tight leading-[1.05] mb-2"
                                style={{
                                    fontSize: "clamp(2rem, 4.5vw, 3rem)",
                                    fontWeight: 500,
                                }}
                                data-testid="hero-headline"
                            >
                                {profile.name}
                            </h1>
                            <p
                                className="text-sm sm:text-base mb-3"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {profile.role} · {profile.location}
                            </p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-mono">
                                {profile.links.map((l) => (
                                    <a
                                        key={l.label}
                                        href={l.href}
                                        target={l.href.startsWith("http") ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        className="editorial-link"
                                        style={{ color: "var(--text-primary)" }}
                                        data-testid={`hero-link-${l.label}`}
                                    >
                                        {l.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p
                        className="text-base sm:text-lg leading-relaxed"
                        style={{ color: "var(--text-primary)" }}
                    >
                        {profile.blurb}
                    </p>
                </section>

                {/* ABOUT */}
                <Section id="about" title="About" data-testid="about-section">
                    <div className="space-y-4">
                        {about.paragraphs.map((p, i) => (
                            <p
                                key={i}
                                className="text-base leading-relaxed"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {p}
                            </p>
                        ))}
                    </div>
                </Section>

                {/* WRITING — recent posts list */}
                <Section
                    id="writing"
                    title="Writing"
                    aside={
                        <Link
                            to="/blog"
                            className="font-mono text-sm editorial-link"
                            data-testid="writing-all-link"
                        >
                            all posts →
                        </Link>
                    }
                    data-testid="writing-section"
                >
                    <ul className="divide-y" style={{ borderColor: "var(--border-color)" }}>
                        {recentPosts.map((post) => (
                            <li
                                key={post.slug}
                                className="py-3"
                                style={{ borderColor: "var(--border-color)" }}
                            >
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="grid grid-cols-[5rem_1fr] gap-4 items-baseline group"
                                    data-testid={`writing-item-${post.slug}`}
                                >
                                    <span
                                        className="font-mono text-xs tabular-nums"
                                        style={{ color: "var(--text-secondary)" }}
                                    >
                                        {formatShort(post.date)}
                                    </span>
                                    <span
                                        className="text-base group-hover:underline underline-offset-4"
                                        style={{ color: "var(--text-primary)" }}
                                    >
                                        {post.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* PROJECTS */}
                <Section
                    id="work"
                    title="Projects"
                    data-testid="work-section"
                >
                    <ul className="divide-y" style={{ borderColor: "var(--border-color)" }}>
                        {projects.map((p, i) => (
                            <li
                                key={i}
                                className="py-4"
                                style={{ borderColor: "var(--border-color)" }}
                            >
                                <a
                                    href={p.link}
                                    target={p.link?.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="grid grid-cols-[5rem_1fr] gap-4 items-baseline group"
                                    data-testid={`project-item-${i}`}
                                >
                                    <span
                                        className="font-mono text-xs tabular-nums"
                                        style={{ color: "var(--text-secondary)" }}
                                    >
                                        {p.year}
                                    </span>
                                    <div>
                                        <div className="flex flex-wrap items-baseline gap-x-3">
                                            <span
                                                className="font-serif text-xl group-hover:underline underline-offset-4"
                                                style={{
                                                    color: "var(--text-primary)",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {p.title}
                                            </span>
                                            <span
                                                className="font-mono text-xs"
                                                style={{ color: "var(--text-secondary)" }}
                                            >
                                                / {p.tag}
                                            </span>
                                        </div>
                                        <p
                                            className="text-sm leading-relaxed mt-1"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            {p.description}
                                        </p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* TALKS */}
                <Section id="talks" title="Talks" data-testid="talks-section">
                    <ul className="divide-y" style={{ borderColor: "var(--border-color)" }}>
                        {talks.map((t, i) => (
                            <li
                                key={i}
                                className="py-3"
                                style={{ borderColor: "var(--border-color)" }}
                            >
                                <a
                                    href={t.link}
                                    className="grid grid-cols-[5rem_1fr] gap-4 items-baseline group"
                                    data-testid={`talk-item-${i}`}
                                >
                                    <span
                                        className="font-mono text-xs tabular-nums"
                                        style={{ color: "var(--text-secondary)" }}
                                    >
                                        {t.year}
                                    </span>
                                    <div>
                                        <span
                                            className="text-base group-hover:underline underline-offset-4"
                                            style={{ color: "var(--text-primary)" }}
                                        >
                                            {t.title}
                                        </span>
                                        <span
                                            className="text-sm italic ml-2"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            — {t.venue}
                                        </span>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* PUBLICATIONS */}
                <Section id="publications" title="Publications" data-testid="publications-section">
                    <ul className="space-y-4">
                        {publications.map((p, i) => (
                            <li key={i} data-testid={`publication-item-${i}`}>
                                <a
                                    href={p.link}
                                    className="block group"
                                >
                                    <p
                                        className="text-base leading-snug group-hover:underline underline-offset-4"
                                        style={{ color: "var(--text-primary)" }}
                                    >
                                        {p.title}
                                    </p>
                                    <p
                                        className="text-sm mt-1"
                                        style={{ color: "var(--text-secondary)" }}
                                    >
                                        {p.authors}
                                    </p>
                                    <p
                                        className="text-sm italic"
                                        style={{ color: "var(--text-secondary)" }}
                                    >
                                        {p.venue} · {p.year}
                                    </p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* SKILLS — small inline list */}
                <Section id="practice" title="Stack" data-testid="skills-section">
                    <p
                        className="text-base leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        {skills.join(" · ")}
                    </p>
                </Section>

                {/* CONTACT */}
                <Section id="contact" title="Get in touch" data-testid="contact-section">
                    <p
                        className="text-base leading-relaxed mb-2"
                        style={{ color: "var(--text-primary)" }}
                    >
                        The fastest way to reach me is email:{" "}
                        <a
                            href={`mailto:${contact.email}`}
                            className="editorial-link font-mono"
                            data-testid="contact-email-link"
                        >
                            {contact.email}
                        </a>
                        .
                    </p>
                    <p
                        className="text-base leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        I read everything but reply slowly. Cold messages with a
                        clear ask get answered first.
                    </p>
                </Section>
            </div>
        </div>
    );
}

function Section({ id, title, aside, children, ...rest }) {
    return (
        <section id={id} className="mt-16 sm:mt-20" {...rest}>
            <div
                className="flex items-baseline justify-between mb-5 pb-2 border-b"
                style={{ borderColor: "var(--border-color)" }}
            >
                <h2
                    className="font-serif tracking-tight"
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                    }}
                >
                    {title}
                </h2>
                {aside}
            </div>
            {children}
        </section>
    );
}

function formatShort(iso) {
    const d = new Date(iso);
    return d
        .toLocaleDateString("en-US", { year: "2-digit", month: "short" })
        .toLowerCase()
        .replace(",", "");
}

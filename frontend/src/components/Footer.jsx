import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { contact, profile } from "@/content/portfolio";

export default function Footer() {
    return (
        <footer
            id="contact"
            className="mt-32"
            style={{
                backgroundColor: "var(--text-primary)",
                color: "var(--bg-primary)",
            }}
            data-testid="site-footer"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 pt-24 sm:pt-32 pb-12">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-3">
                        <p
                            className="label-eyebrow"
                            style={{ color: "rgba(250, 249, 246, 0.55)" }}
                        >
                            (01) Let's Talk
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <a
                            href={`mailto:${contact.email}`}
                            className="font-serif block leading-[0.9] tracking-tight hover:opacity-70 transition-opacity duration-500"
                            style={{
                                fontSize: "clamp(3rem, 12vw, 12rem)",
                                fontWeight: 300,
                                color: "var(--bg-primary)",
                            }}
                            data-testid="footer-email-cta"
                        >
                            Say hello
                            <span className="inline-block ml-3 align-top">
                                <ArrowUpRight
                                    size={48}
                                    strokeWidth={1}
                                    className="inline"
                                />
                            </span>
                        </a>
                        <p
                            className="font-serif italic mt-6"
                            style={{
                                color: "rgba(250, 249, 246, 0.65)",
                                fontSize: "1.25rem",
                            }}
                        >
                            {contact.email}
                        </p>
                    </div>
                </div>

                <div
                    className="mt-24 pt-8 border-t grid grid-cols-12 gap-6"
                    style={{ borderColor: "rgba(250, 249, 246, 0.15)" }}
                >
                    <div className="col-span-12 md:col-span-4">
                        <p
                            className="label-eyebrow mb-4"
                            style={{ color: "rgba(250, 249, 246, 0.55)" }}
                        >
                            Sitemap
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    to="/"
                                    className="editorial-link"
                                    data-testid="footer-link-home"
                                >
                                    Index
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className="editorial-link"
                                    data-testid="footer-link-blog"
                                >
                                    Journal
                                </Link>
                            </li>
                            <li>
                                <a href="/#work" className="editorial-link">
                                    Work
                                </a>
                            </li>
                            <li>
                                <a href="/#about" className="editorial-link">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-12 md:col-span-4">
                        <p
                            className="label-eyebrow mb-4"
                            style={{ color: "rgba(250, 249, 246, 0.55)" }}
                        >
                            Elsewhere
                        </p>
                        <ul className="space-y-2 text-sm">
                            {contact.socials.map((s) => (
                                <li key={s.label}>
                                    <a
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="editorial-link inline-flex items-center gap-1"
                                        data-testid={`footer-social-${s.label.toLowerCase()}`}
                                    >
                                        {s.label}
                                        <ArrowUpRight size={14} strokeWidth={1.5} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-12 md:col-span-4">
                        <p
                            className="label-eyebrow mb-4"
                            style={{ color: "rgba(250, 249, 246, 0.55)" }}
                        >
                            Colophon
                        </p>
                        <p
                            className="text-sm leading-relaxed"
                            style={{ color: "rgba(250, 249, 246, 0.75)" }}
                        >
                            Set in Cormorant Garamond &amp; Outfit. Hand-built
                            with React. Hosted on GitHub Pages.
                        </p>
                    </div>
                </div>

                <div
                    className="mt-12 flex flex-col sm:flex-row gap-3 justify-between"
                    style={{ color: "rgba(250, 249, 246, 0.45)" }}
                >
                    <p className="text-xs tracking-wider">
                        © {new Date().getFullYear()} {profile.name}. All rights
                        reserved.
                    </p>
                    <p className="text-xs tracking-wider">
                        {profile.location} · {profile.yearsActive}
                    </p>
                </div>
            </div>
        </footer>
    );
}

import { Link } from "react-router-dom";
import { profile } from "@/content/portfolio";

export default function Footer() {
    return (
        <footer
            className="mt-24 border-t"
            style={{ borderColor: "var(--border-color)" }}
            data-testid="site-footer"
        >
            <div className="max-w-3xl mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row gap-4 sm:items-baseline sm:justify-between text-sm">
                <p
                    className="font-mono"
                    style={{ color: "var(--text-secondary)" }}
                >
                    © {new Date().getFullYear()} {profile.name} · last updated{" "}
                    {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                    })}
                </p>
                <div className="flex gap-5 font-mono">
                    <Link
                        to="/"
                        className="editorial-link"
                        data-testid="footer-link-home"
                        style={{ color: "var(--text-primary)" }}
                    >
                        home
                    </Link>
                    <Link
                        to="/writing"
                        className="editorial-link"
                        data-testid="footer-link-blog"
                        style={{ color: "var(--text-primary)" }}
                    >
                        writing
                    </Link>
                    <a
                        href="#top"
                        className="editorial-link"
                        style={{ color: "var(--text-primary)" }}
                        data-testid="footer-link-top"
                    >
                        top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}

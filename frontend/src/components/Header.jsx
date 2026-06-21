import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "@/content/portfolio";

export default function Header() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const navItems = [
        { to: "/", label: "home", end: true },
        { to: "/#work", label: "projects" },
        { to: "/#writing", label: "writing" },
        { to: "/blog", label: "blog" },
        { to: "/#contact", label: "contact" },
    ];

    return (
        <header
            id="top"
            className="sticky top-0 z-50 border-b"
            style={{
                borderColor: "var(--border-color)",
                backgroundColor: "rgba(250, 249, 246, 0.82)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
            }}
            data-testid="site-header"
        >
            <div className="max-w-3xl mx-auto px-6 sm:px-10 h-12 flex items-center justify-between">
                <Link
                    to="/"
                    className="font-mono text-sm tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                    data-testid="header-logo-link"
                >
                    ~/{profile.initials || profile.handle}
                </Link>

                <nav className="hidden sm:flex items-center gap-5 font-mono text-sm">
                    {navItems.map((item) => (
                        <NavItem key={item.to} {...item} />
                    ))}
                </nav>

                <button
                    type="button"
                    aria-label="Toggle menu"
                    className="sm:hidden font-mono text-sm"
                    onClick={() => setOpen((v) => !v)}
                    data-testid="header-mobile-menu-toggle"
                >
                    {open ? "close" : "menu"}
                </button>
            </div>

            {open && (
                <div
                    className="sm:hidden border-t"
                    style={{ borderColor: "var(--border-color)" }}
                    data-testid="mobile-menu"
                >
                    <div className="max-w-3xl mx-auto px-6 py-4 flex flex-col gap-3 font-mono text-sm">
                        {navItems.map((item) => (
                            <NavItem key={item.to} {...item} />
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

function NavItem({ to, label, end }) {
    const isHash = to.includes("#");
    if (isHash) {
        return (
            <a
                href={to}
                className="editorial-link"
                style={{ color: "var(--text-primary)" }}
                data-testid={`nav-link-${label}`}
            >
                {label}
            </a>
        );
    }
    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                `editorial-link ${isActive ? "opacity-100" : "opacity-70 hover:opacity-100"}`
            }
            style={{ color: "var(--text-primary)" }}
            data-testid={`nav-link-${label}`}
        >
            {label}
        </NavLink>
    );
}

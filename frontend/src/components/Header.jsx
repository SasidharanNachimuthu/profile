import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { profile } from "@/content/portfolio";

export default function Header() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const navItems = [
        { to: "/", label: "Index", end: true },
        { to: "/#work", label: "Work" },
        { to: "/#about", label: "About" },
        { to: "/blog", label: "Journal" },
        { to: "/#contact", label: "Contact" },
    ];

    return (
        <header
            className="sticky top-0 z-50 border-b"
            style={{
                borderColor: "var(--border-color)",
                backgroundColor: "rgba(250, 249, 246, 0.78)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
            }}
            data-testid="site-header"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 h-16 flex items-center justify-between">
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                    data-testid="header-logo-link"
                >
                    <span
                        className="font-serif text-2xl leading-none"
                        style={{ color: "var(--text-primary)" }}
                    >
                        {profile.initials || profile.name.split(" ")[0]}
                    </span>
                    <span
                        className="label-eyebrow hidden sm:inline-block"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        / Portfolio
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <NavItem key={item.to} {...item} />
                    ))}
                </nav>

                <button
                    type="button"
                    aria-label="Toggle menu"
                    className="md:hidden p-2 -mr-2"
                    onClick={() => setOpen((v) => !v)}
                    data-testid="header-mobile-menu-toggle"
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {open && (
                <div
                    className="md:hidden border-t"
                    style={{ borderColor: "var(--border-color)" }}
                    data-testid="mobile-menu"
                >
                    <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <NavItem key={item.to} {...item} mobile />
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

function NavItem({ to, label, end, mobile }) {
    const isHash = to.includes("#");
    const baseClasses = mobile
        ? "text-base tracking-wide"
        : "label-eyebrow";

    if (isHash) {
        return (
            <a
                href={to}
                className={`${baseClasses} editorial-link`}
                style={{ color: "var(--text-primary)" }}
                data-testid={`nav-link-${label.toLowerCase()}`}
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
                `${baseClasses} editorial-link ${isActive ? "opacity-100" : "opacity-70"}`
            }
            style={{ color: "var(--text-primary)" }}
            data-testid={`nav-link-${label.toLowerCase()}`}
        >
            {label}
        </NavLink>
    );
}

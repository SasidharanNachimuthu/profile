import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div
            className="px-6 sm:px-12 py-32 max-w-3xl mx-auto"
            data-testid="not-found-page"
        >
            <p className="label-eyebrow mb-6">404 · Off the page</p>
            <h1
                className="font-serif tracking-tight mb-6"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 300 }}
            >
                Nothing here, <span className="italic">yet</span>.
            </h1>
            <p
                className="text-lg leading-relaxed mb-10"
                style={{ color: "var(--text-secondary)" }}
            >
                The page you're looking for doesn't exist — or hasn't been
                written yet. Either way, the index is a good place to begin
                again.
            </p>
            <Link to="/" className="btn-editorial" data-testid="not-found-home-link">
                Return to index
            </Link>
        </div>
    );
}

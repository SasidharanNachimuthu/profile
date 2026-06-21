import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import BlogListPage from "@/pages/BlogListPage";
import BlogPostPage from "@/pages/BlogPostPage";
import NotFoundPage from "@/pages/NotFoundPage";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/writing" element={<BlogListPage />} />
                        <Route path="/writing/:slug" element={<BlogPostPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;

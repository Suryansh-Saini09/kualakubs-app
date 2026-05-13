import { Routes, Route, useNavigate } from "react-router-dom";
import routes from "./config/urls.js";
import { useEffect, Suspense } from "react";

function App() {
    const navigate = useNavigate();

    // Prevent browser restoring scroll position
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // Handle legacy redirect URLs from old bookmarks/shortcuts
        const searchParams = new URLSearchParams(window.location.search);
        const redirectPath = searchParams.get("redirect");
        if (redirectPath) {
            // Clean up the URL and navigate to the correct path
            navigate(`/${redirectPath}`, { replace: true });
        }
    }, [navigate]);

    return (
        <Suspense fallback={<div className="d-flex justify-content-center align-items-center vh-100">Loading...</div>}>
            <Routes>
                {routes.map(({ path, element }, index) => (
                    <Route key={index} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
}

export default App;
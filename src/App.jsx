// ...existing code...
import { Routes, Route } from "react-router-dom";
import routes from "./config/urls.js";
import { useEffect, Suspense } from "react";
// ...existing code...

function App() {
    // Prevent browser restoring scroll position
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);
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
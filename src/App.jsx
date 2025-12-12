
// Import Router helpers
import { Routes, Route } from "react-router-dom";
import routes from "./config/urls.js";
import { useEffect } from "react";

function App() {
    // Prevent browser restoring scroll position
// ⛔ Prevent browser from restoring previous scroll
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);
    return (
        <>
            <Routes>
                {routes.map(({ path, element }, index) => (
                    <Route key={index} path={path} element={element} />
                ))}
            </Routes>
        </>
    );
}

export default App;

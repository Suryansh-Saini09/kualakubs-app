

import { Overlayheader } from "./components/overlay-items/overlay.jsx"

// Import Router helpers
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";   
import routes from "./config/urls.js";  

// import links 
import * as Links from "./config/links.js";

function App() {

    return (
        <>

            <Overlayheader headerlinks={Links.overlayheaderlink} />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {routes.map(({ path, element }, index) => (
                        <Route key={index} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>

        </>
    );
}

export default App;

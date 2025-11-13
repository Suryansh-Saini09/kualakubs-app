
// Import Router helpers
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from "./config/urls.js";
import Spinner from 'react-bootstrap/Spinner';

function App() {

    return (
        <>
            <Suspense fallback={
                <div className='container-fluid min-vh-100 flex-row d-flex align-items-center justify-content-center'>
                    <h1 className="text-center">Loading</h1>
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                </div>
            }>
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

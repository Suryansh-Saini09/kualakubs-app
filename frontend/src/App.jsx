
// Import Router helpers
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from "./config/urls.js";
import Spinner from 'react-bootstrap/Spinner';



function App() {

    return (
        <>
            <Suspense fallback={
                <div className='container-fluid d-flex justify-content-center align-items-center'>
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

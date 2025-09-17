import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Home() {
    return (
        <>
         <main>
            <Navbar/>
            <h1 className="text-center">Home page</h1>
            <Footer/>
         </main>
        </>
    );
}
//default card with Navbar for pages
// Path: src/components/Card.jsx
import Navbar from "./NavBar";

function Card({ children }) {
    return (
        <div className="bg-secondarydark">
            <Navbar />
            <div className="container h-screen w-full p-4">{children}</div>
        </div>
    );
}
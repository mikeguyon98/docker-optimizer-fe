import ChipTabs from "./ChipTabs";

function Navbar() {
    return (
        <nav className="bg-secondarydark text-slate-300 p-4 shadow-md" style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-sans font-semibold">
                    <a href="/" >D.I.A.</a>
                </div>
                <ChipTabs />
            </div>
        </nav>
    );
}

export default Navbar;

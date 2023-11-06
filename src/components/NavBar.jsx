import ChipTabs from "./ChipTabs";

function Navbar() {
    return (
        <nav className="flex-1 h-auto bg-secondarydark text-slate-300 p-4 shadow-md fixed top-0 z-50 w-full">
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

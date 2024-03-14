import { useRef, useState } from "react";

function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleIsClose = () => {
        setIsOpen(false)
    }

    const aboutRef = useRef(null);

    const handleLinkClick = (section) => {
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', });
        }
    };

    return (
        <header className="flex justify-between bg-gray-800 text-white sm:px-20 sm:py-4 px-2 py-4">
            <h1 className="text-2xl font-bold text-orange-400">Fatima <span className="text-gray-100">Mohamed</span></h1>
            <i onClick={handleIsOpen} style={{ display: isOpen === true ? "none" : "" }} class="fa-solid text-4xl absolute right-4 sm:hidden fa-bars"></i>
            <i onClick={handleIsClose} style={{ display: isOpen === true ? "block" : "" }} class="fa-solid text-4xl absolute right-4 hidden fa-xmark"></i>
            <nav className="hidden md:flex space-x-4">
                <a href="#" className="hover:text-orange-400">Home</a>
                <a href="#about" onClick={() => handleLinkClick("about")} className="hover:text-orange-400">About</a>
                <a href="#portfolio" onClick={() => handleLinkClick("portfolio")} className="hover:text-orange-400">Portfolio</a>
                <a href="#contact" onClick={() => handleLinkClick("contact")} className="hover:text-orange-400">Contact</a>
            </nav>

            {/* small screen */}
            <div style={{display: isOpen === true ? "block" : ""}} className="hidden">
                <nav className="flex flex-col space-y-4 pt-16 pr-10 text-3xl">
                    <a href="#" className="hover:text-orange-400">Home</a>
                    <a href="#about" className="hover:text-orange-400">About</a>
                    <a href="#portfolio" className="hover:text-orange-400">Portfolio</a>
                    <a href="#contact" className="hover:text-orange-400">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header
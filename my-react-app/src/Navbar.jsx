import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk toggle menu mobile

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="navbar fixed top-0 w-full bg-white z-50">
            <div className="container mx-auto flex justify-between items-center p-2 md:p-6 text-black">
                <a
                    href="#home"
                    className={`text-2xl font-bold ms-16  navbar-text hover ${activeSection === "home" ? "navbar-text active" : "text-black"
                        }`}
                >
                    Urip
                </a>

                {/* Tombol Hamburger (Muncul hanya di mobile) */}
                <button
                    className="md:hidden me-8 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7">
                        </path>
                    </svg>
                </button>

                {/* Menu (Tampilan Desktop) */}
                <ul className="hidden md:flex space-x-6 me-16">
                    <li>
                        <a
                            href="#about-me"
                            className={`navbar-text hover ${activeSection === "about-me" ? "navbar-text active" : "text-black"
                                }`}
                        >
                            Tentang Saya
                        </a>
                    </li>
                    <li>
                        <a
                            href="#portofolio"
                            className={`navbar-text hover ${activeSection === "portofolio" ? "navbar-text active" : "text-black"
                                }`}
                        >
                            Portofolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#activities"
                            className={`navbar-text hover ${activeSection === "activities" ? "navbar-text active" : "text-black"
                                }`}
                        >
                            Aktivitas
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`navbar-text hover ${activeSection === "contact" ? "navbar-text active" : "text-black"
                                }`}
                        >
                            Kontak
                        </a>
                    </li>
                </ul>
            </div>

            {/* Menu Mobile (Muncul saat tombol hamburger diklik) */}
            {isMenuOpen && (
                <div className="md:hidden bg-white ms-16">
                    <ul className="flex flex-col space-y-4 p-4">
                        <li>
                            <a
                                href="#about-me"
                                className={`navbar-text hover ${activeSection === "about-me" ? "navbar-text active" : "text-black"
                                    }`}
                                onClick={() => setIsMenuOpen(false)} // Tutup menu setelah link diklik
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                href="#portofolio"
                                className={`navbar-text hover ${activeSection === "portofolio" ? "navbar-text active" : "text-black"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Portofolio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#activities"
                                className={`navbar-text hover ${activeSection === "activities" ? "navbar-text active" : "text-black"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Activities
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={`navbar-text hover ${activeSection === "contact" ? "navbar-text active" : "text-black"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
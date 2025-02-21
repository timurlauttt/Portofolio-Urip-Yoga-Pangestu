function Footer() {
    return (
        <>
            <footer className="footer hidden sm:block bg-[#74247A] text-white py-8 px-10 md:px-40">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">

                    {/* Kolom 1: Nama */}
                    <div>
                        <h1 className="text-2xl font-bold leading-tight">
                            Urip <br /> Yoga <br /> Pangestu
                        </h1>
                    </div>

                    {/* Kolom 2: Navigation Links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Navigation Links</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About Me</a></li>
                            <li><a href="#" className="hover:underline">Portfolio</a></li>
                            <li><a href="#" className="hover:underline">Activities</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Social Media */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Social Media</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <i className="fab fa-instagram text-xl"></i> timurlauttt
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fab fa-facebook text-xl"></i> Urip Yoga
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 4: Kontak */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Contact</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <i className="fab fa-whatsapp text-xl"></i> +62-85861466287
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-envelope text-xl"></i> 2211103102
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fab fa-linkedin text-xl"></i> Urip Yoga Pangestu
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 5: Tambahan */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Mari Berkolaborasi</h2>
                        <p className="text-sm">dan wujudkan ide luar biasa bersama</p>
                    </div>
                </div>
            </footer>

            {/* Footer Bottom */}
            <div className="h-14 flex flex-col items-center justify-center bg-[#FFC700] text-black">
                <p className="text-sm font-semibold">
                    {new Date().getFullYear()} &copy; @timurlauttt
                </p>
            </div>
        </>
    );
}

export default Footer;

function Hero() {

    return (
        <>
            <section id="home" className="home">
                <div className="bg-white min-h-screen mt-8 flex items-center justify-center">
                    <div className="container rounded shadow-[10px_8px_0_#74247A] mx-auto p-4 grid md:grid-cols-2 gap-4">
                        {/* Left Section */}
                        <div className="flex flex-col items-center md:ms-16 md:items-start text-center md:text-left">
                            <h1 className="mt-8 text-3xl md:text-5xl lg:text-6xl mb-4">
                                Hello, World!
                                <br />
                                <span className="text-3xl md:text-5xl lg:text-6xl font-light">
                                    <span className="font-bold">I'm Urip</span>
                                </span>
                            </h1>
                            <p className="mt-4 text-gray-700 bg-white p-4 rounded-lg shadow-lg max-w-md">
                                Hallo! saya Urip Yoga Pangestu, 
                                mahasiswa semester 6 Sistem Informasi yang menyukai tantangan,
                                web development antusias,
                                dan selalu terbuka mempelajari hal baru
                            </p>
                            <a href="#about-me" className="mt-8 mb-10 font-bold bg-yellow-400 text-black border-2 border-yellow-400 px-4 py-2 font-syne text-base uppercase shadow-[4px_6px_0_#74247A] transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#74247A] hover:text-yellow-400 hover:shadow-[4px_4px_0_#ffcc00] w-fit">
                            Tentang Saya
                            </a>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col items-center justify-center ">
                            <div className="bg-yellow-400 p-6 md:p-10 shadow-[8px_8px_0_#000] transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#05FF00] hover:shadow-[4px_4px_0_#000] relative w-full max-w-[450px] h-[250px] md:h-[350px]">
                                {/* Gambar di bagian atas kanan */}
                                <div className="absolute top-0 right-0 mt-2 md:mt-4 mr-2 md:mr-4">
                                    <img
                                        src="me.jpg" // Ganti dengan URL gambar Anda
                                        alt="Gambar 2"
                                        className="shadow-[6px_6px_0_#000] transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#653FFF] hover:shadow-[4px_4px_0_#74247A] w-40 h-40 md:w-48 md:h-48 object-cover"
                                    />
                                </div>

                                {/* Gambar di bagian bawah kiri */}
                                <div className="absolute bottom-0 left-0 mb-2 md:mb-4 ml-2 md:ml-4">
                                    <img
                                        src="aku.jpg" // Ganti dengan URL gambar Anda
                                        alt="Gambar 4"
                                        className="shadow-[6px_6px_0_#000] transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#653FFF] hover:shadow-[4px_4px_0_#74247A] w-40 h-40 md:w-48 md:h-48 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
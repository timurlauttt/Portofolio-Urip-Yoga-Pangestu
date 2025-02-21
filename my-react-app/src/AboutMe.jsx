function AboutMe() {
    return (
        <>
            <section id="about-me" className="mt-8 w-full h-full text-black py-5 border-2 border-black" style={{ backgroundImage: 'url(a.png)' }} >
                <div className="container mx-auto">
                    <h1 className="font-bold mt-4 mb-4 text-center text-lg md:text-2xl">Tentang Saya</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-12 mt-4 mb-8 justify-center">
                        {/* Card 1 */}
                        <div className="p-5 bg-gray-100 border-4 border-black shadow-[8px_8px_0_#000] hover:scale-105 hover:transition-all hover:border-yellow-500 hover:shadow-[8px_8px_0_#74247A] cursor-pointer ">
                            <img
                                src="me.jpg"
                                className="w-3/5 h-auto mx-auto shadow-[4px_4px_0_#000] hover:scale-105 hover:transition-all hover:border-yellow-700 hover:shadow-[8px_8px_0_#74247A] cursor-pointer"
                                alt="Profile 1"
                            />
                            <div className="mt-4">
                                <h5 className="text-lg font-bold">My Background</h5>
                                <p className="text-gray-700 mt-2">
                                    Saya adalah
                                    mahasiswa semester 6 Sistem Informasi yang menyukai tantangan,
                                    web development antusias,
                                    dan selalu terbuka mempelajari hal baru
                                </p>
                                <hr />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="p-5 bg-gray-100 border-4 border-black shadow-[8px_8px_0_#000] hover:scale-105 hover:transition-all hover:border-yellow-500 hover:shadow-[8px_8px_0_#74247A] cursor-pointer">
                            <img
                                src="aku.jpg"
                                className="w-3/5 h-auto mx-auto shadow-[4px_4px_0_#000] hover:scale-105 hover:transition-all hover:border-yellow-700 hover:shadow-[8px_8px_0_#74247A] cursor-pointer"
                                alt="Profile 2"
                            />
                            <div className="mt-4">
                                <h5 className="text-lg font-bold">Skill Saya</h5>
                                <p className="text-gray-700 mt-2">
                                    Saya bisa memakai HTML,CSS,dan Javascript untuk membangun web.Saya juga bisa memakai framework seperti Laravel dan Django untuk membuat atau membangun web.Saya juga sedang mempelajari React.JS untuk front-end development sebuah webiste
                                </p>
                                <hr />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="p-5 bg-gray-100 border-4 border-black shadow-[8px_8px_0_#000] hover:scale-105 hover:transition-all hover:border-yellow-500 hover:shadow-[8px_8px_0_#74247A] cursor-pointer">
                            <img
                                src="me2.jpg"
                                className="w-3/5 h-auto mx-auto shadow-[4px_4px_0_#000] hover:scale-105 hover:transition-all hover:border-yellow-700 hover:shadow-[8px_8px_0_#74247A] cursor-pointer"
                                alt="Profile 3"
                            />
                            <div className="mt-4">
                                <h5 className="text-lg font-bold">My Hobbies</h5>
                                <p className="text-gray-700 mt-2">
                                    Di waktu luang saya, saya suka mendengarkan musik, menonton pertandingan sepak bola, membaca dan mengeksplor teknologi baru
                                </p>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mb-8">
                        <a href="#portofolio" className=" mb-10 font-bold bg-yellow-400 text-black border-2 border-yellow-400 px-4 py-2 font-syne text-base uppercase shadow-[4px_6px_0_#74247A] transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#74247A] hover:text-yellow-400 hover:shadow-[4px_4px_0_#ffcc00] w-fit">
                            Lihat Portofolio Saya
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;
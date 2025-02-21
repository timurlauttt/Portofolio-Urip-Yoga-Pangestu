function MyActivies() {
    return (
        <>
            <section id="activities" className="mt-8 w-full h-full text-black border-2 border-black" style={{ backgroundImage: 'url(d.png)' }}>
                <div className="container mx-auto text-center">
                    <h1 className="font-bold mt-8 mb-8 text-lg md:text-2xl">Aktivitas Saya</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 mb-8 place-items-center">

                        {/* Card 1 */}
                        <div className="w-40 aspect-square bg-yellow-400 border-2 border-black shadow-[4px_4px_0_#000] hover:scale-105 transition-all cursor-pointer flex flex-col">
                            <div className="p-2 text-xs flex flex-col flex-grow justify-between bg-white min-h-[120px]">
                                <h5 className="font-bold text-start">Anggota HMSI</h5>
                                <p className="text-gray-700 mt-1 text-start">Saya adalah anggota Himpunan Mahasiswa Sistem Informasi periode 2023/2024</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-40 aspect-square bg-red-400 border-2 border-black shadow-[4px_4px_0_#000] hover:scale-105 transition-all cursor-pointer flex flex-col">
                            <div className="p-2 text-xs flex flex-col flex-grow justify-between bg-white min-h-[120px]">
                                <h5 className="font-bold text-start">Panitia Todays</h5>
                                <p className="text-gray-700 mt-1 text-start">Saya juga mengikuti kegiatan PKKMB Kampus dan bertugas menjadi pembimbing kelompok yang berisikan 24 orang mahasiswa baru</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="w-40 aspect-square bg-blue-400 border-2 border-black shadow-[4px_4px_0_#000] hover:scale-105 transition-all cursor-pointer flex flex-col">
                            <div className="p-2 text-xs flex flex-col flex-grow justify-between bg-white min-h-[120px]">
                                <h5 className="font-bold text-start">Panitia PraktisiDays</h5>
                                <p className="text-gray-700 mt-1 text-start">Saya juga mengikuti panitia PKKMB program studi Sistem Informasi ITTP pada tahun 2024</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="w-40 aspect-square bg-green-400 border-2 border-black shadow-[4px_4px_0_#000] hover:scale-105 transition-all cursor-pointer flex flex-col">
                            <div className="p-2 text-xs flex flex-col flex-grow justify-between bg-white min-h-[120px]">
                                <h5 className="font-bold text-start">Bakti Sosial Panti Asuhan</h5>
                                <p className="text-gray-700 mt-1 text-start">Saya juga mengikuti kegiatan Bakti Sosial di Panti Asuhan Harapan Mulya Purwokerto</p>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="w-40 aspect-square bg-purple-400 border-2 border-black shadow-[4px_4px_0_#000] hover:scale-105 transition-all cursor-pointer flex flex-col">
                            <div className="p-2 text-xs flex flex-col flex-grow justify-between bg-white min-h-[120px]">
                                <h5 className="font-bold text-start">Closing Dies Natalis</h5>
                                <p className="text-gray-700 mt-1 text-start">Saya juga mengikuti kegiatan Closing Dies Natalis Prodi Sistem Informasi 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto text-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 mb-8 place-items-center">

                        {/* Card 1 */}
                        <div className="w-40 aspect-square bg-yellow-400 border-2 border-black shadow-[4px_4px_0_#000] hover:scale-105 transition-all cursor-pointer flex flex-col">
                            <div className="p-2 text-xs flex flex-col flex-grow justify-between bg-white min-h-[120px]">
                                <h5 className="font-bold text-start">Malam Sanggar Seni</h5>
                                <p className="text-gray-700 mt-1 text-start">Saya juga menjadi panitia malam sanggar seni di Institut Teknologi Telkom Purwokerto 2023</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-40 aspect-square bg-red-400 border-2 border-black shadow-[4px_4px_0_#000] hover:scale-105 transition-all cursor-pointer flex flex-col">
                            <div className="p-2 text-xs flex flex-col flex-grow justify-between bg-white min-h-[120px]">
                                <h5 className="font-bold text-start">Infection 4.0</h5>
                                <p className="text-gray-700 mt-1 text-start">Saya juga mengikuti kegiatan PKKMB Fakultas sebagai panitia di divisi acara</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="w-40 aspect-square bg-blue-400 border-2 border-black shadow-[4px_4px_0_#000] hover:scale-105 transition-all cursor-pointer flex flex-col">
                            <div className="p-2 text-xs flex flex-col flex-grow justify-between bg-white min-h-[120px]">
                                <h5 className="font-bold text-start">Care For Maba</h5>
                                <p className="text-gray-700 mt-1 text-start">Saya juga mengikuti panitia PKKMB program studi Sistem Informasi ITTP pada tahun 2023</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="w-40 aspect-square bg-green-400 border-2 border-black shadow-[4px_4px_0_#000] hover:scale-105 transition-all cursor-pointer flex flex-col">
                            <div className="p-2 text-xs flex flex-col flex-grow justify-between bg-white min-h-[120px]">
                                <h5 className="font-bold text-start">PEMIRA FIF 2023</h5>
                                <p className="text-gray-700 mt-1 text-start">Saya menjadi panitia Pemilihan Raya Fakultas Informatika 2023 dan menjadi staf divisi acara</p>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="w-40 aspect-square bg-purple-400 border-2 border-black shadow-[4px_4px_0_#000] hover:scale-105 transition-all cursor-pointer flex flex-col">
                            <div className="p-2 text-xs flex flex-col flex-grow justify-between bg-white min-h-[120px]">
                                <h5 className="font-bold text-start">Pengabdian Masyarakat</h5>
                                <p className="text-gray-700 mt-1 text-start">Saya menjadi bagian dari pengabdian masyarakat di desa Taman Sari pada bulan juni 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default MyActivies;
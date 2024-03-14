function Contact() {
    return <div id="contact">
        <h1 className="text-3xl font-bold text-center mt-10 md:mb-2 mb-8">Contact</h1>
        <div className="bg-gray-100 h-[28em] md:w-[40em] w-[22em] lg:ml-[20em] md:min-[800px]:ml-20 ml-5 p-1 mt-10 rounded-xl shadow-lg shadow-black mb-10">
            <p className="text-xl text-center md:mb-8 md:mt-10 mb-5">Get in <span className="text-orange-400">touch</span></p>

            <div className="md:pl-56 pl-16">
                <div className="rounded-full border-2 border-orange-400 w-32 ml-10 mb-4">
                    <img className="w-32 h-32 rounded-full" src="src/assets/km.jpg" />
                </div>

                <h1 className="text-3xl font-semibold">Fatima Mohamed</h1>
                <h1 className="text-xl pl-8">fm278197@gmail.com</h1>
                <i class="fa-solid pl-8 text-xl fa-location-dot"></i><span className="pl-2 text-xl">Mogadishu, Somalia</span> <br />

                <div className="flex gap-2 pl-10 pt-3">
                    <a href="https://github.com/FatimaMohamedAhmed"><div className="w-11 h-11 rounded-full bg-orange-400 text-white hover:bg-gray-100 hover:text-orange-400">
                        <i class="fa-brands text-4xl  pl-1 pt-1 fa-github"></i>
                    </div></a>

                    <a href="mailto:fm278197@gmail.com"><div className="w-11 h-11 rounded-full bg-orange-400 text-white hover:bg-gray-100 hover:text-orange-400">
                        <i class="fa-solid text-3xl  pl-1 pt-1 fa-envelope"></i>
                    </div></a>
                    
                        <div className="w-11 h-11 rounded-full bg-orange-400 text-white hover:bg-gray-100 hover:text-orange-400">
                            <i class="fa-brands text-3xl pl-2 pt-1 fa-linkedin"></i>
                        </div>
                </div>

            </div>
        </div>

    </div>
}

export default Contact
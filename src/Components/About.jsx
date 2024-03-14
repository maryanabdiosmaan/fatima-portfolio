function About() {
    return <div id="about">
        <div className="flex flex-col justify-center gap-10 items-center mt-8 md:flex-row md:justify-between">
            <div className="sm:ml-40 sm:w-[20%]">
                <img className="w-[18em] rounded-2xl" src="src/assets/km2.jpg" alt="" />
            </div>
            <div className="sm:mr-20 mr-8 sm:pl-0 pl-12 sm:w-[60%]">
                <h2 className="text-2xl font-bold mb-4">I Am Modern Web Development</h2>
                <p className="text-gray-700 mb-4"></p>
                <div className="list-disc ml-4 mb-4">
                    <i class="fa-solid text-orange-400 text-xl fa-user"></i> <span className="pl-5 text-xl">Fatima Mohamed</span> <br />
                    <i class="fa-solid text-orange-400 text-xl fa-location-dot"></i><span className="pl-6 text-xl">Mogadishu, Somalia</span> <br />
                    <a href="tel:+252615283403"><i class="fa-solid text-orange-400 text-xl fa-phone"></i><span className="pl-5 text-xl">+252615283403</span></a> <br />
                    <a href="mailto:fm278197@gmail.com"><i class="fa-solid text-orange-400 text-xl fa-envelope"></i><span className="pl-5 text-xl">fm278197@gmail.com</span></a>
                </div>

                <a href="src/assets/fatamaCv(ful).pdf" className="btn px-2 py-2 bg-orange-400 text-white hover:bg-orange-200 rounded"> Dowload CV</a>

            </div>
        </div>
    </div>
}

export default About
function Showcase() {
    return <div className="flex flex-col justify-center items-center md:flex-row md:justify-between bg-gray-800 p-8">
        <div className="text-center sm:pl-10 md:text-left show-animate">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">Hello!</h2>
            <p className="text-3xl text-gray-100">I Am Fatima Mohamed</p>
            <p className="text-lg text-gray-100 mb-5 mt-5 text-animate">I'm a Web Developer with extensive experience for over 4 month <br />
                My expertise is to create and Websites design, and many more...</p>
            <div className="flex mt-6 space-x-4 md:mt-0">
                <a href="https://github.com/FatimaMohamedAhmed"><button className="px-4 py-2 bg-orange-400 text-white hover:bg-orange-500 rounded"><i class="fa-brands text-xl fa-github"></i> GitHub</button></a>
                {/* <button className="px-4 py-2 border border-orange-400 hover:bg-orange-400 hover:text-white text-white rounded">Hire Me</button> */}
            </div>
        </div>

        <div className="md:pl-56 pl-16">
            <img className="w-[30em] rounded-2xl sm:mt-0 mt-8 mr-10" src="src/assets/km.jpg" alt="" />
        </div>
    </div>
}

export default Showcase
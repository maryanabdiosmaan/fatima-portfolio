import ecommerce from "../assets/ecommerce.png"
import hospital from "../assets/hospital.png"
import review from "../assets/review.png"

function Portfolio() {
    return <div id="portfolio">
        <h1 className="text-3xl font-bold text-center mt-20 md:mb-20 mb-8">Portfolio</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:min-[800px]:grid-cols-2 lg:gap-4 gap-10 mt-10 lg:pl-0 pl-10">
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-2 border-orange-400 lg:ml-28">
                <img className="w-80" src={ecommerce} />
                <h3 className="text-xl text-center font-bold mb-2">E-commerce</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2">Html, CSS</h3>
                    <i class="fa-solid pt-2 fa-screwdriver-wrench"></i>
                </div>
                <p className="text-gray-700 mb-4">A E-commerce website buildi html and css <br />
                    allowing users to search for properties, <br />
                    view details, and contact agents.</p>

                <a href="https://github.com/FatimaMohamedAhmed/E-commerce"><button className="px-8 py-2 ml-10 bg-orange-400 text-white hover:bg-orange-500 rounded"><i class="fa-brands text-xl fa-github"></i> Source Code</button></a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-2 border-orange-400 lg:ml-16">
                <img className="w-80" src={hospital} />
                <h3 className="text-xl text-center font-bold mb-2">Hospital MS</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2">React js</h3>
                    <i class="fa-solid pt-2 fa-screwdriver-wrench"></i>
                </div>
                <p className="text-gray-700 mb-4">A full stack Hospital management system <br />
                    allowing users to search for properties, <br />
                    view details, and contact agents.</p>

                <a href="https://github.com/FatimaMohamedAhmed/hospital"><button className="px-8 py-2 ml-10 bg-orange-400 text-white hover:bg-orange-500 rounded"><i class="fa-brands text-xl fa-github"></i> Source Code</button></a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-2 border-orange-400 lg:ml-6">
                <img className="w-80 h-28" src={review} />
                <h3 className="text-xl text-center font-bold mb-2">Review MS</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2">Htmls, Tailwind css</h3>
                    <i class="fa-solid pt-2 fa-screwdriver-wrench"></i>
                </div>
                <p className="text-gray-700 mb-4">A review web app <br />
                    allowing users to search for properties, <br />
                    view details, and contact agents.</p>

                <a href="https://github.com/FatimaMohamedAhmed/hospital"><button className="px-8 py-2 ml-10 bg-orange-400 text-white hover:bg-orange-500 rounded"><i class="fa-brands text-xl fa-github"></i> Source Code</button></a>
            </div>
        </div>

        <div>
            <h1 className="text-3xl font-bold text-center mt-20 md:mb-20 mb-8">Tech <span className="text-orange-400">Stack</span></h1>
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-6 mt-10 lg:pl-40 pl-10">
                <div className="w-32 rounded-lg border-2 text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer">
                    <h1 className="text-4xl font-bold"><i class="fa-brands pt-2 pl-10 text-5xl fa-html5"></i></h1>
                </div>

                <div className="w-32 rounded-lg border-2 text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer">
                    <h1 className="text-4xl font-bold"><i class="fa-brands pt-2 pl-10 text-5xl fa-css3"></i></h1>
                </div>

                <div className="w-32 rounded-lg border-2 text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer">
                    <h1 className="text-4xl font-bold"><i class="fa-brands pt-2 pl-10 text-5xl fa-js"></i></h1>
                </div>

                <div className="w-32 rounded-lg border-2 text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer">
                    <h1 className="text-4xl font-bold"><i class="fa-brands pt-2 pl-10 text-5xl fa-react"></i></h1>
                </div>

                <div className="w-32 rounded-lg border-2 text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer">
                    <h1 className="text-4xl font-bold"><i class="fa-brands pt-2 pl-10 text-5xl fa-node-js"></i></h1>
                </div>

                <div className="w-32 rounded-lg border-2 text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer">
                    <img className="pt-2 pl-8" src="https://img.icons8.com/color/48/mongodb.png" />
                </div>

                <div className="w-32 rounded-lg border-2 text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer">
                    <img className="pt-2 pl-8" src="https://img.icons8.com/color/48/tailwind_css.png" />
                </div>

                <div className="w-32 rounded-lg border-2 text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer">
                    <img className="pt-2 pl-8" src="https://img.icons8.com/color/48/redux.png" />
                </div>
            </div>
        </div>
    </div>
}

export default Portfolio
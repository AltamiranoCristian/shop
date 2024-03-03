
const HeroBanner = () => {
    return (
        <div className="w-full relative h-64 sm:h-screen bg-cover bg-center overflow-x-hidden"
                style={{ backgroundImage: 'url("./src/assets/background.svg")'}}>
            <div className="w-full absolute inset-0 bg-black opacity-15"></div>
            <div className="w-full absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-xl font-bold mb-4 sm:text-3xl md:text-4xl lg:text-5xl">Uncover Hidden Beauty</h1>
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">Make every trip a celebration, an experience that takes you beyond your limits.</p>
                    <button className="transition ease-in w-32 h-10 m-4 bg-slate-950 text-slate-100 rounded-full hover:text-slate-950 hover:bg-slate-100">Go to</button>
                    <span className="hidden md:block text-xl animate-ping">▼</span>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;

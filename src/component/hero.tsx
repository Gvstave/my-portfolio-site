export const Hero = () => {
    return(
        <div className="w-full flex justify-evenly items-center bg-transparent gap-10">
            <div className="w-sm max-lg:hidden">
                <img src="./hero.jpg" className="rounded-lg shadow-2xl"/>
            </div>
            <div className="max-md:px-[4px] text-white">
                <h1 className="flex flex-col leading-[110%] text-[76px] max-md:text-[55px] max-sm:text-4xl font-medium mb-8">
                    <span>I'm Gustave Ilunga.</span>
                    <span>A Software Engineer</span>
                    <span className="text-white/50">Based in Zambia.</span>
                </h1>
                <p className="text-[18px] leading-[150%]">I’m probably the most passionate designer you will ever get to work with. <br />If you have a great project that needs some amazing skills, I’m your guy.</p>
            </div>
        </div>
    )
}
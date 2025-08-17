export const Project = () => {
    return (
        <div className="bg-[#000] px-[72px] pt-64 pb-32 max-md:px-[10px] max-md:py-5">
            <div>
                <h2 className="text-[#8491a0] mb-2 text-[16px] font-bold leading-[150%] ">My Projects</h2>
                <h2 className="max-w-[780px] text-white text-[55px] leading-[110%] font-medium">Work that I’ve done for the past 3 years</h2>
            </div>
            <div className="flex max-lg:flex-col gap-10">
                {
                    experienceContent.map(item => <Card number={item.number} company={item.company} role={item.role} description={item.description} />)
                }
            </div>
        </div>
    )
}
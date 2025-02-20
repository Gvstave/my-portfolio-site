import Icons from "@/app/components/icons/page"
import Button from "@/app/components/button/page";
import Content from "@/app/components/content/page";

const Introduction = () => {
    return (
        <div className="h-dvh flex flex-col justify-center items-center ">
            <section>
                <Content />
            </section>
            <section>
                <Icons />
            </section>
            <section className="absolute bottom-20">
                <Button />
            </section>
        </div>
    )
}

export default Introduction;
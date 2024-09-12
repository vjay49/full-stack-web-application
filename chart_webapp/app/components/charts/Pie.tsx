'use client';
import PiePlot from "./PiePlot"

const Pie = () => {
    return (
        <>
            <section className="flex px-4 gap-3">
                <div className="w-[1200px] h-[560px] bg-gray-700 rounded"><PiePlot/></div>
            </section>  
        </>
    )
}

export default Pie
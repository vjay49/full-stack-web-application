'use client';
import BarPlot from "./BarPlot"

const Bar = () => {
    return (
        <>
            <section className="flex px-4 gap-3">
                <div className="w-[1200px] h-[560px] bg-gray-700 rounded"><BarPlot/></div>
            </section>  
        </>
    )
}

export default Bar
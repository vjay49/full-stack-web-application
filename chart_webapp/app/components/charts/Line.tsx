'use client';
import LinePlot from "./LinePlot"

const Line = () => {
    return (
        <>
            <section className="flex px-4 gap-3">
                <div className="w-[1200px] h-[560px] bg-gray-700 rounded"><LinePlot/></div>
            </section>  
        </>
    )
}

export default Line
'use client';
import CandlestickPlot from "./CandlestickPlot";

const Candlestick = () => {
    return (
        <>
            <section className="flex px-4 gap-3">
                <div className="w-[1200px] h-[560px] bg-gray-700 rounded"><CandlestickPlot/></div>
            </section>  
        </>
    )
}

export default Candlestick
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ErrorBar,
  Rectangle,
  RectangleProps,
  Layer,
  YAxisProps,
} from 'recharts';

interface CandlestickData {
    x: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }

const CandlestickPlot = () => {
const [candlestickData, setCandlestickData] = useState<CandlestickData[]>([]);
const [yDomain, setYDomain] = useState<[number, number]>([0, 0]);
const [openClose, setOpenClose] = useState<[number, number]>([0, 0]);

useEffect(() => {
    axios
    .get('http://localhost:8000/api/candlestick-data/')
    .then((response) => {
        const data = response.data.data;
        setCandlestickData(data);
        const minLow = Math.min(...data.map((d: CandlestickData) => d.low));
        const maxHigh = Math.max(...data.map((d: CandlestickData) => d.high));
        setYDomain([minLow, maxHigh]);

        const yopen = Math.max(...data.map((d: CandlestickData) => d.open));
        const yclose = Math.min(...data.map((d: CandlestickData) => d.close));
        setOpenClose([yopen, yclose]);

       
    })
    .catch((error) => {
        console.error('Error fetching candlestick data:', error);
    });
}, []);

const renderCustomBarShape = (props: any) => {
    const {x, y, width, payload} = props;
    const open = payload.open;
    const close = payload.close;


    const barHeight = close > open ? Math.abs((open) - (close)) : -Math.abs((open) - (close));
    //const barHeight = -Math.abs((open - close) - yDomain[0]);
    //const barY = close > open ? y - barHeight : y;
    //const barY = Math.min(open, close);
    const adjustedX = x + width + width/16;

    return (
      <Rectangle
        x={adjustedX}
        y={y}
        width={width}   
        height={barHeight*-11.5}
        fill={close >= open ? '#00C49F' : '#FA8072'}
        stroke="black"
      />
    );
  };

  const renderTopWicks = (props: any) => {
    const { x, y, width, payload, y1, y2} = props;
    const open = payload.open;
    const close = payload.close;
    const high = payload.high;
    const low = payload.low;
    
    const highY = (yDomain[1] - high) * (400 / (yDomain[1] - yDomain[0])); // Scaled Y-coordinate for high
    const lowY = (yDomain[1] - low) * (400 / (yDomain[1] - yDomain[0]));  // Scaled Y-coordinate for low

    return (
        <Layer>
        {/* Wick (High to Low) */}
        <line
          x1={x + width/2}
          y1={close > open ? highY : high * 2} // Y-position for the high value
          x2={x + width/2}
          y2={close > open ? y : low}  // Y-position for the low value
          stroke="black"    
          strokeWidth={3}
        />
      </Layer>
      );
    };  

    const renderBottomWicks = (props: any) => {
        const { x, y, width, payload, y1, y2} = props;
        const open = payload.open;
        const close = payload.close;
        const high = payload.high;
        const low = payload.low;
        
        const highY = (yDomain[1] - high) * (400 / (yDomain[1] - yDomain[0])); // Scaled Y-coordinate for high
        const lowY = (yDomain[1] - low) * (400 / (yDomain[1] - yDomain[0]));  // Scaled Y-coordinate for low
        return (
            <Layer>
            {/* Wick (High to Low) */}
            <line
              x1={x - width/2}
              y1={close > open ? lowY : y} // Y-position for the high value
              x2={x - width/2}
              y2={close > open ? y : y -60}  // Y-position for the low value
              stroke="black"    
              strokeWidth={3}
            />
          </Layer>
          );
        };  

return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={candlestickData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis domain={yDomain}/> {/* Set Y-axis domain to zoom in on the data */}
        <Tooltip />

        {/* Render custom candlestick body */}
        <Bar
          dataKey="open"
          shape={renderCustomBarShape} // Custom shape to render the open-close range
          isAnimationActive={false}
        />
        
        {/* Render custom Top wicks for high and low */}
        <Bar
          dataKey="close"
          shape={renderTopWicks} // Custom layer for high-low wicks
          isAnimationActive={false}
        />

        {/* Render custom Bottom wicks for high and low */}
        <Bar
          dataKey="low"
          shape={renderBottomWicks} // Custom layer for high-low wicks
          isAnimationActive={false}
        />
      </BarChart>
    </ResponsiveContainer>

  );


};



export default CandlestickPlot;
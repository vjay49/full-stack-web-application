import { useEffect, useState } from 'react';
import axios from 'axios';


import{Line, LineChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer} from "recharts";

const LinePlot = () => {
    const [lineChartData, setLineChartData] = useState<any[]>([]);
    
 
    useEffect(() => {
        axios
          .get('http://localhost:8000/api/line-chart-data/')
          .then((response) => {
            const { labels, data } = response.data;
            
            // Transform the data to match the format Recharts expects
            const formattedData = labels.map((label: string, index: number) => ({
              Label: label,
              Value: data[index],
            }));
    
            setLineChartData(formattedData);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    }, []);

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={lineChartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Label"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Value" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </>
    )

}

export default LinePlot;






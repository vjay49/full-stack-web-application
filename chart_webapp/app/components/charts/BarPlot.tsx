import { useEffect, useState } from 'react';
import axios from 'axios';


import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend, ResponsiveContainer} from "recharts";

const BarPlot = () => {
    const [barChartData, setBarChartData] = useState<any[]>([]);
    
 
    useEffect(() => {
        axios
          .get('http://localhost:8000/api/bar-chart-data/')
          .then((response) => {
            const { labels, data } = response.data;
            
            // Transform the data to match the format Recharts expects
            const formattedData = labels.map((label: string, index: number) => ({
              Label: label,
              Value: data[index],
            }));
    
            setBarChartData(formattedData);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    }, []);

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={730} height={250} data={barChartData}>
                    <XAxis dataKey="Label" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Value" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </>
    )

}

export default BarPlot;






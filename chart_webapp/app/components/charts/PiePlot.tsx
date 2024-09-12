import { useEffect, useState } from 'react';
import axios from 'axios';


import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PiePlot = () => {
    const colors = [
        "#FA8072",
        "#3AC7EB",
        "#F9A603",
        "#AF69EE",
        "#3DED97",
        "#8884d8",
    ];

    const [pieChartData, setPieChartData] = useState<any[]>([]);
    
 
    useEffect(() => {
        axios
          .get('http://localhost:8000/api/pie-chart-data/')
          .then((response) => {
            const { labels, data } = response.data;

            // Transform the data to match the format Recharts expects
            const formattedData = labels.map((label: string, index: number) => ({
              Label: label,
              Value: data[index],
            }));
    
            setPieChartData(formattedData);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    }, []);

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={730} height={250}>
                    <Pie
                        data={pieChartData}
                        dataKey="Value"
                        nameKey="Label"
                        cx="50%"
                        cy="50%"
                        fill="#8884d8"
                        label
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </>
    )

}

export default PiePlot;






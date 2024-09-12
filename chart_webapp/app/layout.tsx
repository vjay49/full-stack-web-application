"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'; 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar"; 
import Navbar from "./components/Navbar";
import Candlestick from "./components/charts/Candlestick";
import Line from "./components/charts/Line";
import Bar from "./components/charts/Bar";
import Pie from "./components/charts/Pie";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedChart, setSelectedChart] = useState<string>('Line');

  const renderChart = () => {
    switch (selectedChart) {
      case 'Line':
        return <Line />;
      case 'Bar':
        return <Bar />;
      case 'Pie':
        return <Pie />;
      case 'Candlestick':
      default:
        return <Candlestick />;
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar setSelectedChart={setSelectedChart} />
          <Navbar />
        </div>
        <main className="flex-grow ml-64 mt-24 relative">
          {renderChart()}  {/* Dynamically render the selected chart */}
        </main>
        {children}
      </body>
    </html>
  );
}

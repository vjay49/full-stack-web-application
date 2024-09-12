interface SidebarProps {
    setSelectedChart: (chart: string) => void;
  }

const Sidebar = ({setSelectedChart}: SidebarProps) => {
    return (
        <>
           <aside className="fixed top-20 left-0 w-64 h-full">
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white">
                <span className="ml-3">My Chart Dashboard</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setSelectedChart('Line')} 
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Line Chart</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setSelectedChart('Bar')} 
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Bar Chart</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setSelectedChart('Pie')}  
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Pie Chart</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setSelectedChart('Candlestick')}  
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Candlestick Chart</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
        </>
    )
}

export default Sidebar
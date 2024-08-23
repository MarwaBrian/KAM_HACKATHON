

// function ExportCharts() {
//   return (
//     <div>ExportCharts</div>
//   )
// }

// export default ExportCharts
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const ExportCharts = () => {
  const [exportData, setExportData] = useState([]);

  useEffect(() => {
    // Fetch export data
    fetch('/public/exports.json')
      .then((response) => response.json())
      .then((data) => setExportData(data.exports));
  }, []);

  // Filter data for 2022
  const filterDataForYear = (data, year) =>
    data.filter((item) => item.year === year);

  const exportData2022 = filterDataForYear(exportData, 2022);

  // Function to get the top 10 destinations by quantity
  const getTopDestinationsData = (data) => {
    const destinationTotals = data.reduce((acc, row) => {
      const destination = row.destination;
      if (!acc[destination]) {
        acc[destination] = 0;
      }
      acc[destination] += row.quantity;
      return acc;
    }, {});

    const sortedDestinations = Object.entries(destinationTotals).sort(
      (a, b) => b[1] - a[1]
    );

    return sortedDestinations
      .slice(0, 10)
      .map(([destination, quantity]) => ({ destination, quantity }));
  };

  // Function to get monthly trends data
  const getMonthlyTrendsData = (data) => {
    const monthlyTotals = data.reduce((acc, row) => {
      const monthYear = `${row.month}/${row.year}`;
      const quantity = row.quantity || 0;
      const value = row.fob_value || 0;
      if (!acc[monthYear]) {
        acc[monthYear] = { quantity: 0, value: 0 };
      }
      acc[monthYear].quantity += quantity;
      acc[monthYear].value += value;
      return acc;
    }, {});

    const months = Object.keys(monthlyTotals);
    const quantities = months.map((month) => monthlyTotals[month].quantity);
    const values = months.map((month) => monthlyTotals[month].value);

    return { months, quantities, values };
  };

  // Function to get HS Code data
  const getHSCodeData = (data) => {
    const hsCodeTotals = data.reduce((acc, row) => {
      const hsCode = row.hs_code;
      if (!acc[hsCode]) {
        acc[hsCode] = 0;
      }
      acc[hsCode] += row.quantity;
      return acc;
    }, {});

    return Object.entries(hsCodeTotals).map(([hscode, quantity]) => ({
      hscode,
      quantity,
    }));
  };

  // Extract data for charts
  const exportTopDestinations = getTopDestinationsData(exportData2022);
  const { months: exportMonths, quantities: exportQuantities, values: exportValues } =
    getMonthlyTrendsData(exportData2022);
  const exportHSCodeData = getHSCodeData(exportData2022);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">
        Exports Data for 2022
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 border border-gray-300 shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Top 10 Destinations by Quantity (Bar Chart)
          </h3>
          <Bar
            data={{
              labels: exportTopDestinations.map((item) => item.destination),
              datasets: [
                {
                  label: 'Quantity',
                  data: exportTopDestinations.map((item) => item.quantity),
                  backgroundColor: '#36A2EB',
                },
              ],
            }}
            options={{ responsive: true }}
          />
        </div>
        <div className="bg-white p-4 border border-gray-300 shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Monthly Export Trends (Line Chart)
          </h3>
          <Line
            data={{
              labels: exportMonths,
              datasets: [
                {
                  label: 'Quantity',
                  data: exportQuantities,
                  borderColor: '#36A2EB',
                  backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  fill: true,
                },
                {
                  label: 'FOB Value',
                  data: exportValues,
                  borderColor: '#FF6384',
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  fill: true,
                },
              ],
            }}
            options={{ responsive: true }}
          />
        </div>
        <div className="bg-white p-4 border border-gray-300 shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Total Quantity by HS Code (Bar Chart)
          </h3>
          <Bar
            data={{
              labels: exportHSCodeData.map((item) => item.hscode),
              datasets: [
                {
                  label: 'Quantity',
                  data: exportHSCodeData.map((item) => item.quantity),
                  backgroundColor: '#FF6384',
                },
              ],
            }}
            options={{ responsive: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default ExportCharts;

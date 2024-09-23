// app/components/MonthlyOrdersChart.js
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

// Register the necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Title);

const chartOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Monthly Sales', // Title for the chart (not the page heading)
            font: {
                size: 18
            }
        },
    },
};

const MonthlySalesChart = () => {
    const [monthlyData, setMonthlyData] = useState({});

    useEffect(() => {
        const fetchMonthlySales = async () => {
            const response = await fetch('/api/sales/monthlySales');
            const data = await response.json();
            setMonthlyData(data);
        };

        fetchMonthlySales();
    }, []);

    const chartData = {
        labels: Object.keys(monthlyData),
        datasets: [
            {
                label: 'Monthly Sales',
                data: Object.values(monthlyData),
                backgroundColor: 'rgba(229, 92, 124, 0.6)',
            },
        ],
    };

    return (
        <div>
            <h2>Monthly Sales</h2>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default MonthlySalesChart;

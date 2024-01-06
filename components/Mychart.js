import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Ensure you are using the correct version of Chart.js

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Sample data
    const data = {
      labels: ['Commercial', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8'],
      datasets: [
        {
          label: 'My Dataset',
          data: [10, 20, 30, 40, 50, 60, 70, 80],
          backgroundColor: ['red', 'green', 'blue', 'yellow', 'violet', 'pink', 'black', 'grey'],
        },
      ],
    };

    // Chart configuration
    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          x: {
            type: 'category',
            // other scale configuration options
          },
          y: {
            // other scale configuration options
          },
        },
      },
    };

    // Create or update the chart
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, config);

    // Ensure that the chart is destroyed when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once during component mount

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default MyChart;

import React from 'react';
import { Bar } from 'react-chartjs-2';

const graph1 = () => {
  // Sample data for demonstration
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
    datasets: [
      {
        label: 'Sales Data',
        data: [12, 19, 3, 5, 2, 3, 8, 9, 10, 36, 11, 12],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales',
        },
      },
    },
  };

  return (
    <div>
      <h2>Bar Chart Example</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default graph1;

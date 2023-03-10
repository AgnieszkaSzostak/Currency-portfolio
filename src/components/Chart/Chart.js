import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

const Chart = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            //position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 2',
                //data: labels.map(() => faker.datatype.number({ min: -200, max: 2000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }
    return <Line options={options} data={data} />;
}

export default Chart
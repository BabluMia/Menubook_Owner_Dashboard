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
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {},
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  }
};

const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      fill: false,
      data: [2200, 3490, 34500, 3450, 3345, 22456, 5000],
      borderColor: "#707070",
      // backgroundColor: 'rgba(53, 162, 235, 0.5)',
      lineTension: 0.5,
    },
  ],
};

const ClientChart = () => {
  return <Line options={options} data={data} />;
};

export default ClientChart;

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function TimelineChart({ data }) {
  const chartData = {
    labels: data.map(d => d.month),
    datasets: [
      {
        label: "Sightings per month",
        data: data.map(d => d.count),
        tension: 0.3,
      }
    ]
  };

  return (
    <div style={{ width: "100%", height: "200px" }}>
      <Line data={chartData} />
    </div>
  );
}

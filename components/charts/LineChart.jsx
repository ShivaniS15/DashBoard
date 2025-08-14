import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
if (typeof window !== "undefined") {
  ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  );
}

export default function LineChart({ labels, values }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Leads",
        data: values,
        fill: false,
        borderColor: "#3b82f6", // blue
        backgroundColor: "#3b82f6",
        tension: 0.3, // curve smoothness
        pointRadius: 4,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#3b82f6",
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#e5e7eb" } },
    },
  };

  return (
    <div className="h-48">
      <Line data={data} options={options} />
    </div>
  );
}

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart.js modules (client-side only)
if (typeof window !== "undefined") {
  ChartJS.register(ArcElement, Tooltip, Legend);
}

export default function PieChart({ labels, values }) {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "#3b82f6", // blue
          "#f59e0b", // amber
          "#10b981", // green
          "#ef4444", // red
          "#8b5cf6", // violet
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: { legend: { position: "bottom" } },
    maintainAspectRatio: false,
  };

  return (
    <div className="h-48">
      <Pie data={data} options={options} />
    </div>
  );
}

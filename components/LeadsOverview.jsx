import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default function LeadsOverview({ data }) {
  const pieData = {
    labels: data.categories.map((c) => c.name),
    datasets: [
      {
        data: data.categories.map((c) => c.value),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };

  const lineData = {
    labels: data.trend.map((t) => t.month),
    datasets: [
      {
        label: "Leads Trend",
        data: data.trend.map((t) => t.value),
        fill: false,
        borderColor: "#36A2EB",
        tension: 0.1
      }
    ]
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 md:col-span-2">
      <h2 className="text-lg font-semibold mb-4">Leads Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Pie data={pieData} />
        <Line data={lineData} />
      </div>
    </div>
  );
}

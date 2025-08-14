import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function AssetsUnderManagement({ data }) {
  const chartData = {
    labels: data.schemes.map((s) => s.name),
    datasets: [
      {
        label: "Value",
        data: data.schemes.map((s) => s.value),
        backgroundColor: ["#4CAF50", "#FFC107", "#2196F3"]
      }
    ]
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Assets Under Management</h2>
      <Pie data={chartData} />
      <ul className="mt-4 space-y-2">
        {data.schemes.map((scheme, idx) => (
          <li
            key={idx}
            className="flex justify-between cursor-pointer hover:underline"
          >
            <span>{scheme.name}</span>
            <span>₹{scheme.value.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

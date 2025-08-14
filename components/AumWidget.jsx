import Link from "next/link";
import Card from "./Card";
import PieChart from "./charts/PieChart";

export default function AumWidget({ byCategory, topSchemes }) {
  return (
    <Card title="Assets Under Management">
      <div className="grid md:grid-cols-2 gap-4">
        
        {/* Pie Chart for category distribution */}
        <div>
          <PieChart
            labels={byCategory.map((item) => item.label)}
            values={byCategory.map((item) => item.value)}
          />
        </div>

        {/* List of top schemes */}
        <div>
          <h4 className="text-sm font-semibold mb-2">Top Schemes</h4>
          <ul className="space-y-2">
            {topSchemes.map((scheme) => (
              <li
                key={scheme.schemeId}
                className="flex items-center justify-between"
              >
                <Link
                  href={`/investors?scheme=${scheme.schemeId}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  {scheme.name}
                </Link>
                <span className="text-sm text-slate-600">
                  ₹{scheme.aum.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </Card>
  );
}

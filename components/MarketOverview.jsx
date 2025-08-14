export default function MarketOverview({ data }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Market Overview</h2>
      <div className="flex justify-between">
        <div>
          <p className="text-gray-500">NSE</p>
          <p className="text-xl font-bold">{data.nse.value}</p>
          <p
            className={`${
              data.nse.change >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {data.nse.change}%
          </p>
        </div>
        <div>
          <p className="text-gray-500">BSE</p>
          <p className="text-xl font-bold">{data.bse.value}</p>
          <p
            className={`${
              data.bse.change >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {data.bse.change}%
          </p>
        </div>
      </div>
    </div>
  );
}

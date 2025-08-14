export default function TransactionSnapshot({ data }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Transaction Snapshot</h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-green-600">
            ₹{data.inflow.toLocaleString()}
          </p>
          <p className="text-gray-500">Inflow</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-red-600">
            ₹{data.outflow.toLocaleString()}
          </p>
          <p className="text-gray-500">Outflow</p>
        </div>
        <div>
          <p className="text-2xl font-bold">{data.count}</p>
          <p className="text-gray-500">Transactions</p>
        </div>
      </div>
    </div>
  );
}

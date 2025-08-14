export default function handler(req, res) {
  // Example static/dummy data — you can replace with DB queries later
  const data = {
    inflow: 120000,
    outflow: 80000,
    count: 45,
  };

  // If you want to calculate net balance
  data.net = data.inflow - data.outflow;

  res.status(200).json(data);
}

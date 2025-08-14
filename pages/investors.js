import { useRouter } from "next/router";
import Link from "next/link";

export default function Investors({ investors }) {
  const router = useRouter();
  const { scheme } = router.query;

  // Filter investors if scheme is provided in query
  const filteredInvestors = scheme
    ? investors.filter(inv =>
        inv.scheme.toLowerCase() === scheme.toLowerCase()
      )
    : investors;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Investors {scheme && `for ${scheme}`}
      </h1>

      <Link href="/" className="text-blue-600 hover:underline mb-4 block">
        ← Back to Dashboard
      </Link>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Scheme</th>
            <th className="border border-gray-300 p-2">Investment</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvestors.map((inv, idx) => (
            <tr key={idx}>
              <td className="border border-gray-300 p-2">{inv.name}</td>
              <td className="border border-gray-300 p-2">{inv.email}</td>
              <td className="border border-gray-300 p-2">{inv.scheme}</td>
              <td className="border border-gray-300 p-2">₹{inv.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredInvestors.length === 0 && (
        <p className="mt-4 text-gray-500">No investors found for this scheme.</p>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const investors = await import("../public/data/dashboard.json").then(m => m.default);
  return { props: { investors } };
}

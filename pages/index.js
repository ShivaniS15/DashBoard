import fs from "fs";
import path from "path";
// import  "../pages/styles/dashboard.css"
import TodoSection from "@/components/TodoSection";
import TransactionSnapshot from "@/components/TransactionSnapshot";
import MarketOverview from "@/components/MarketOverview";
import AssetsUnderManagement from "@/components/AssetsUnderManagement";
import LeadsOverview from "@/components/LeadsOverview";

export default function Home({ dashboardData }) {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Transactions */}
      <TransactionSnapshot data={dashboardData.transactions} />

      {/* Market Overview */}
      <MarketOverview data={dashboardData.market} />

      {/* Assets Under Management */}
      <AssetsUnderManagement data={dashboardData.assets} />

      {/* Leads Overview */}
      <LeadsOverview data={dashboardData.leads} />

      {/* Todos */}
      <TodoSection todos={dashboardData.todos} />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "data", "dashboard.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const dashboardData = JSON.parse(fileContents);

  return {
    props: {
      dashboardData
    }
  };
}

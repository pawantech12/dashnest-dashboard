import { AccountsOverview } from "@/components/accounts-overview";
import { RecentTransactions } from "@/components/recent-transactions";
import { QuickBillPay } from "@/components/quick-bill-pay";
import { BusinessMetrics } from "@/components/business-metrics";

export default function Dashboard() {
  return (
    <div className="space-y-6 p-8 max-sm:p-5">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <AccountsOverview />
        </div>
        <div className="lg:col-span-1">
          <RecentTransactions />
        </div>
        <div className="lg:col-span-1">
          <QuickBillPay />
        </div>
      </div>

      <BusinessMetrics />
    </div>
  );
}

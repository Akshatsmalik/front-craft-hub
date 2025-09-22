import { DollarSign, TrendingUp, TrendingDown, CreditCard } from "lucide-react";
import { StatsCard } from "@/components/ui/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Finance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Financial Reports</h1>
        <p className="text-muted-foreground mt-1">
          Track revenue, commissions, and financial performance.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value="$125,430"
          subtitle="+18% from last month"
          icon={DollarSign}
          gradient="card-1"
        />
        <StatsCard
          title="Commission Earned"
          value="$45,678"
          subtitle="+12% over target"
          icon={TrendingUp}
          gradient="card-4"
        />
        <StatsCard
          title="Pending Payments"
          value="$8,240"
          subtitle="3 colleges pending"
          icon={CreditCard}
          gradient="card-2"
        />
        <StatsCard
          title="Monthly Growth"
          value="+22%"
          subtitle="Compared to last month"
          icon={TrendingUp}
          gradient="card-3"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Financial Reports Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Detailed financial analytics and reporting features will be available here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
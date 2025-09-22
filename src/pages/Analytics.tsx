import { BarChart, TrendingUp, Users, Target } from "lucide-react";
import { StatsCard } from "@/components/ui/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics & Reports</h1>
        <p className="text-muted-foreground mt-1">
          Comprehensive analytics and performance insights.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Sessions"
          value="2,847"
          subtitle="This month"
          icon={BarChart}
          gradient="card-1"
        />
        <StatsCard
          title="Success Rate"
          value="94.2%"
          subtitle="Student satisfaction"
          icon={Target}
          gradient="card-3"
        />
        <StatsCard
          title="Active Users"
          value="1,234"
          subtitle="Daily average"
          icon={Users}
          gradient="card-2"
        />
        <StatsCard
          title="Growth Rate"
          value="+15%"
          subtitle="Month over month"
          icon={TrendingUp}
          gradient="card-4"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Analytics Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Advanced analytics dashboard with detailed insights and custom reports will be available here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
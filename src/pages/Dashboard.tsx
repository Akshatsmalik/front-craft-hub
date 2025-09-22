import { Users, UserCheck, Clock, DollarSign, TrendingUp } from "lucide-react";
import { StatsCard } from "@/components/ui/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const weeklyData = [
  { day: "Mon", sessions: 42 },
  { day: "Tue", sessions: 52 },
  { day: "Wed", sessions: 65 },
  { day: "Thu", sessions: 58 },
  { day: "Fri", sessions: 78 },
  { day: "Sat", sessions: 82 },
  { day: "Sun", sessions: 62 },
];

const registrationData = [
  { month: "Jan", registrations: 145 },
  { month: "Feb", registrations: 180 },
  { month: "Mar", registrations: 210 },
  { month: "Apr", registrations: 195 },
  { month: "May", registrations: 245 },
  { month: "Jun", registrations: 280 },
];

const pieData = [
  { name: "STEM", value: 35, color: "#a855f7" },
  { name: "Arts & Humanities", value: 25, color: "#ec4899" },
  { name: "Business & Economics", value: 20, color: "#eab308" },
  { name: "Healthcare", value: 20, color: "#10b981" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's what's happening with your platform.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Students"
          value="12,345"
          subtitle="+5% last month"
          icon={Users}
          gradient="card-1"
        />
        <StatsCard
          title="Total Counselors"
          value="250"
          subtitle="+10 new this quarter"
          icon={UserCheck}
          gradient="card-2"
        />
        <StatsCard
          title="Sessions Today"
          value="128"
          subtitle="85% completion rate"
          icon={Clock}
          gradient="card-3"
        />
        <StatsCard
          title="Commission Earned"
          value="$45,678"
          subtitle="+12% over target"
          icon={DollarSign}
          gradient="card-4"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Sessions Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Weekly Sessions Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="day" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="sessions" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* College Registration Count */}
        <Card>
          <CardHeader>
            <CardTitle>College Registration Count</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={registrationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Bar 
                    dataKey="registrations" 
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Student Interest Rate */}
        <Card>
          <CardHeader>
            <CardTitle>Student Interest Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-muted-foreground flex-1">{item.name}</span>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
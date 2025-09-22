import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Users, 
  Calendar, 
  GraduationCap, 
  DollarSign, 
  FileText, 
  BarChart, 
  Settings, 
  MessageSquare, 
  Shield,
  Bell,
  User,
  Moon,
  Sun
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: BarChart3,
  },
  {
    name: "Users Management", 
    href: "/users",
    icon: Users,
  },
  {
    name: "Counseling Sessions",
    href: "/sessions",
    icon: Calendar,
  },
  {
    name: "College Registrations",
    href: "/colleges", 
    icon: GraduationCap,
  },
  {
    name: "Financial Reports",
    href: "/finance",
    icon: DollarSign,
  },
  {
    name: "Content Management",
    href: "/content",
    icon: FileText,
  },
  {
    name: "Analytics & Reports",
    href: "/analytics",
    icon: BarChart,
  },
  {
    name: "System Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    name: "Support & Feedback",
    href: "/support",
    icon: MessageSquare,
  },
  {
    name: "Audit Logs",
    href: "/audit",
    icon: Shield,
  },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border">
        {/* Logo */}
        <div className="flex h-16 items-center px-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-sidebar-foreground">ALMATEUM</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-sidebar-accent",
                  isActive 
                    ? "bg-sidebar-accent text-sidebar-primary" 
                    : "text-sidebar-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="flex h-16 items-center justify-between px-6">
            {/* Navigation breadcrumb */}
            <nav className="hidden md:flex items-center space-x-6 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground">About us</Link>
              <Link to="/features" className="text-muted-foreground hover:text-foreground">Features</Link>
              <Link to="/college" className="text-muted-foreground hover:text-foreground">College</Link>
              <Link to="/elearning" className="text-muted-foreground hover:text-foreground">E-learning</Link>
              <Link to="/jobs" className="text-muted-foreground hover:text-foreground">Jobs</Link>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Sun className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
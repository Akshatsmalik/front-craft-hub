import { useState } from "react";
import { Search, Mail, MessageSquare, ExternalLink, Eye, X } from "lucide-react";
import { StatsCard } from "@/components/ui/stats-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const supportTickets = [
  {
    id: "TK001",
    userName: "Alice Johnson",
    issue: "Login issue on student portal",
    status: "open",
    actions: ["Resolve", "Close"]
  },
  {
    id: "TK002",
    userName: "Bob Smith",
    issue: "Cannot access course materials",
    status: "in progress",
    actions: ["Resolve", "Close"]
  },
  {
    id: "TK003",
    userName: "Charlie Brown",
    issue: "Payment processing failed",
    status: "resolved",
    actions: ["Resolve", "Close"]
  },
  {
    id: "TK004",
    userName: "Diana Prince",
    issue: "Wrong counselor assigned",
    status: "open",
    actions: ["Resolve", "Close"]
  },
  {
    id: "TK005",
    userName: "Eve Adams",
    issue: "Video lecture not loading",
    status: "closed",
    actions: ["Resolve", "Close"]
  },
];

const feedbackForms = [
  {
    id: "#FBK001",
    date: "2024-03-10",
    name: "Grace Hopper",
    feedback: "Suggesting a new feature for group counseling sessions."
  },
  {
    id: "#FBK002",
    date: "2024-03-08", 
    name: "Alan Turing",
    feedback: "Positive feedback on the new dashboard UI design."
  },
  {
    id: "#FBK003",
    date: "2024-03-05",
    name: "Ada Lovelace",
    feedback: "Reporting a minor typo on the 'About Us' page."
  }
];

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTickets = supportTickets.filter(ticket =>
    ticket.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Support & Feedback</h1>
        <p className="text-muted-foreground mt-1">
          Manage support tickets and view user feedback.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Tickets"
          value="325"
          icon={MessageSquare}
          gradient="card-1"
        />
        <StatsCard
          title="Open Tickets"
          value="78"
          icon={ExternalLink}
          gradient="card-2"
        />
        <StatsCard
          title="New Feedback"
          value="15"
          icon={Mail}
          gradient="card-3"
        />
      </div>

      {/* Support Tickets */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Support Tickets</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search tickets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket ID</TableHead>
                <TableHead>User Name</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.id}</TableCell>
                  <TableCell>{ticket.userName}</TableCell>
                  <TableCell className="max-w-md">{ticket.issue}</TableCell>
                  <TableCell>
                    <StatusBadge status={ticket.status} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Resolve
                      </Button>
                      <Button variant="ghost" size="sm">
                        <X className="w-4 h-4 mr-1" />
                        Close
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Feedback Forms */}
      <Card>
        <CardHeader>
          <CardTitle>Feedback Forms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feedbackForms.map((feedback) => (
              <div key={feedback.id} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary">{feedback.id}</span>
                  <span className="text-sm text-muted-foreground">{feedback.date}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feedback.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{feedback.feedback}</p>
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
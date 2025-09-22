import { useState } from "react";
import { Calendar, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const auditLogs = [
  {
    user: "admin@dashboard.com",
    action: "Logged in",
    timestamp: "2024-07-20 10:30:15",
    ipAddress: "192.168.1.10"
  },
  {
    user: "student@example.com",
    action: "Updated profile information",
    timestamp: "2024-07-20 10:35:02",
    ipAddress: "10.0.0.5"
  },
  {
    user: "counselor@example.com",
    action: "Scheduled new session 'S-202407-005'",
    timestamp: "2024-07-20 10:40:30",
    ipAddress: "172.16.0.20"
  },
  {
    user: "admin@dashboard.com",
    action: "Created user 'Jane Doe' (Student)",
    timestamp: "2024-07-20 10:45:50",
    ipAddress: "192.168.1.10"
  },
  {
    user: "system@internal.com",
    action: "Automated report generation",
    timestamp: "2024-07-20 11:00:00",
    ipAddress: "127.0.0.1"
  },
  {
    user: "counselor@example.com",
    action: "Accessed student 'John Smith' records",
    timestamp: "2024-07-20 11:05:10",
    ipAddress: "172.16.0.20"
  },
  {
    user: "admin@dashboard.com",
    action: "Changed system setting 'Max_Sessions_Per_Day'",
    timestamp: "2024-07-20 11:15:25",
    ipAddress: "192.168.1.10"
  },
  {
    user: "student@example.com",
    action: "Applied for college 'University of XYZ'",
    timestamp: "2024-07-19 15:20:00",
    ipAddress: "10.0.0.5"
  },
  {
    user: "admin@dashboard.com",
    action: "Logged out",
    timestamp: "2024-07-19 16:00:30",
    ipAddress: "192.168.1.10"
  },
  {
    user: "counselor@example.com",
    action: "Updated feedback for session 'S-202407-003'",
    timestamp: "2024-07-19 16:10:45",
    ipAddress: "172.16.0.20"
  }
];

export default function AuditLogs() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedUser, setSelectedUser] = useState("all");
  const [selectedAction, setSelectedAction] = useState("all");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Audit Logs</h1>
        <p className="text-muted-foreground mt-1">
          Track and monitor all system activities and user actions.
        </p>
      </div>

      {/* Filter Section */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Audit Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Start Date</label>
              <Input 
                type="date" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">End Date</label>
              <Input 
                type="date" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">User</label>
              <Select value={selectedUser} onValueChange={setSelectedUser}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a user" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="counselor">Counselor</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Action</label>
              <Select value={selectedAction} onValueChange={setSelectedAction}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  <SelectItem value="login">Login</SelectItem>
                  <SelectItem value="logout">Logout</SelectItem>
                  <SelectItem value="create">Create</SelectItem>
                  <SelectItem value="update">Update</SelectItem>
                  <SelectItem value="delete">Delete</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="gradient">
              Apply Filters
            </Button>
            <Button variant="outline">
              Reset Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Audit Logs Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>System Audit Logs</CardTitle>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Logs
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>IP Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLogs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{log.user}</TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell className="text-muted-foreground">{log.timestamp}</TableCell>
                  <TableCell className="text-muted-foreground">{log.ipAddress}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
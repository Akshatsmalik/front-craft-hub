import { useState } from "react";
import { Calendar, Filter, Plus, Eye, Calendar as CalendarIcon, X } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const counselingSessions = [
  {
    sessionId: "S001",
    studentName: "Alice Wonderland",
    counselorName: "Dr. Elena Petrova",
    date: "2024-07-20",
    status: "scheduled",
    feedback: "N/A"
  },
  {
    sessionId: "S002",
    studentName: "Bob The Builder",
    counselorName: "Dr. Mark Johnson",
    date: "2024-07-18",
    status: "completed",
    feedback: "Excellent advice on career paths."
  },
  {
    sessionId: "S003",
    studentName: "Charlie Chaplin",
    counselorName: "Dr. Elena Petrova",
    date: "2024-07-15",
    status: "canceled",
    feedback: "Student requested reschedule."
  },
  {
    sessionId: "S004",
    studentName: "Diana Prince",
    counselorName: "Dr. Mark Johnson",
    date: "2024-07-22",
    status: "scheduled",
    feedback: "N/A"
  },
  {
    sessionId: "S005",
    studentName: "Eve Harrington",
    counselorName: "Dr. Sarah Lee",
    date: "2024-07-10",
    status: "completed",
    feedback: "Very helpful for college application essay."
  },
  {
    sessionId: "S006",
    studentName: "Frankenstein Monster",
    counselorName: "Dr. Sarah Lee",
    date: "2024-07-25",
    status: "pending",
    feedback: "Awaiting student confirmation."
  }
];

export default function Sessions() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredSessions = counselingSessions.filter(session => {
    const statusMatch = selectedStatus === "all" || session.status === selectedStatus;
    const dateMatch = !selectedDate || session.date === selectedDate;
    return statusMatch && dateMatch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Counseling Sessions</h1>
          <p className="text-muted-foreground mt-1">
            Schedule and manage counseling sessions between students and counselors.
          </p>
        </div>
        <Button variant="gradient" className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Schedule New Session
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
              <Input 
                type="date"
                placeholder="Pick a date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-48"
              />
            </div>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="canceled">Canceled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Sessions Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Session ID</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Counselor Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Feedback</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSessions.map((session) => (
                <TableRow key={session.sessionId}>
                  <TableCell className="font-medium">{session.sessionId}</TableCell>
                  <TableCell>{session.studentName}</TableCell>
                  <TableCell>{session.counselorName}</TableCell>
                  <TableCell className="text-muted-foreground">{session.date}</TableCell>
                  <TableCell>
                    <StatusBadge status={session.status} />
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <span className="text-muted-foreground text-sm">{session.feedback}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      {session.status === "scheduled" && (
                        <>
                          <Button variant="ghost" size="sm">
                            <CalendarIcon className="w-4 h-4 mr-1" />
                            Reschedule
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                            <X className="w-4 h-4 mr-1" />
                            Cancel
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
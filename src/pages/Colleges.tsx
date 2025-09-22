import { useState } from "react";
import { Plus, Download, Search, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const colleges = [
  {
    name: "Metropolitan University",
    registrationLink: "metrouni.edu",
    commission: "10%",
    status: "active"
  },
  {
    name: "Creative Arts Institute",
    registrationLink: "cai.edu",
    commission: "12%",
    status: "pending"
  },
  {
    name: "Global Management School",
    registrationLink: "gms.edu",
    commission: "8%",
    status: "active"
  },
  {
    name: "Future Tech College",
    registrationLink: "futuretech.org",
    commission: "15%",
    status: "inactive"
  },
  {
    name: "Health Sciences Academy",
    registrationLink: "hsa.edu",
    commission: "9%",
    status: "active"
  },
  {
    name: "Engineering & Robotics",
    registrationLink: "engiro.com",
    commission: "11%",
    status: "pending"
  },
  {
    name: "Literature & Philosophy",
    registrationLink: "litphil.edu",
    commission: "7%",
    status: "active"
  }
];

export default function Colleges() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    college.registrationLink.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">College Registration Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage college partnerships and registration links.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export as CSV
          </Button>
          <Button variant="gradient" className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add New College
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search colleges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-4">
              <select className="px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm">
                <option>All Statuses</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Colleges Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>College Name</TableHead>
                <TableHead>Registration Link</TableHead>
                <TableHead>Commission %</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredColleges.map((college, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{college.name}</TableCell>
                  <TableCell>
                    <a 
                      href={`https://${college.registrationLink}`}
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {college.registrationLink}
                    </a>
                  </TableCell>
                  <TableCell className="font-medium">{college.commission}</TableCell>
                  <TableCell>
                    <StatusBadge status={college.status} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <Button variant="ghost" size="sm" disabled>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
        <Button variant="ghost" size="sm" className="bg-primary text-primary-foreground">
          1
        </Button>
        <Button variant="ghost" size="sm">
          2
        </Button>
        <Button variant="ghost" size="sm">
          3
        </Button>
        <Button variant="ghost" size="sm">
          <ChevronRight className="w-4 h-4 ml-1" />
          Next
        </Button>
      </div>
    </div>
  );
}
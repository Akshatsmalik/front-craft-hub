import { useState } from "react";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const users = [
  {
    name: "Alice Johnson",
    email: "alice.j@example.com",
    role: "student",
    status: "active",
    avatar: "AJ"
  },
  {
    name: "Dr. Ben Carter",
    email: "ben.c@counselor.org",
    role: "counselor", 
    status: "active",
    avatar: "BC"
  },
  {
    name: "Clara Diaz",
    email: "clara.d@example.com",
    role: "student",
    status: "pending",
    avatar: "CD"
  },
  {
    name: "Eva Green",
    email: "eva.g@counselor.org",
    role: "counselor",
    status: "inactive",
    avatar: "EG"
  },
  {
    name: "David Lee",
    email: "david.l@example.com",
    role: "student",
    status: "active",
    avatar: "DL"
  },
  {
    name: "Frank White",
    email: "frank.w@counselor.org",
    role: "counselor",
    status: "active",
    avatar: "FW"
  },
  {
    name: "Grace Hall",
    email: "grace.h@example.com",
    role: "student",
    status: "active",
    avatar: "GH"
  },
  {
    name: "John Doe",
    email: "john.d@example.com",
    role: "student",
    status: "inactive",
    avatar: "JD"
  }
];

export default function Users() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredUsers = users.filter(user => {
    const searchMatch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const roleMatch = selectedRole === "all" || user.role === selectedRole;
    const statusMatch = selectedStatus === "all" || user.status === selectedStatus;
    
    return searchMatch && roleMatch && statusMatch;
  });

  const getRoleBadgeColor = (role: string) => {
    return role === "student" ? "bg-blue-500/10 text-blue-500 border-blue-500/20" :
           "bg-purple-500/10 text-purple-500 border-purple-500/20";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Users Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage students, counselors, and administrators.
          </p>
        </div>
        <Button variant="gradient" className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New User
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search users by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Role: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="counselor">Counselor</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="" />
                      <AvatarFallback className="text-xs bg-gradient-primary text-white">
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell className="text-muted-foreground">{user.email}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRoleBadgeColor(user.role)}`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={user.status} />
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
    </div>
  );
}
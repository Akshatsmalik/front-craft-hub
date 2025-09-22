import { useState } from "react";
import { Plus, FileText, Video, Download, Edit, Trash2 } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const contentItems = [
  {
    title: "Effective Study Techniques for STEM",
    type: "PDF Document",
    status: "published",
    actions: ["Edit", "Delete"]
  },
  {
    title: "Choosing Your Major: A Comprehensive Guide",
    type: "Video Series",
    status: "draft",
    actions: ["Edit", "Delete"]
  },
  {
    title: "Scholarship Opportunities for International Students",
    type: "Article",
    status: "published",
    actions: ["Edit", "Delete"]
  },
  {
    title: "Understanding University Application Essays",
    type: "PDF Document",
    status: "archived",
    actions: ["Edit", "Delete"]
  },
  {
    title: "Webinar: Future of AI in Education",
    type: "Video Series",
    status: "published",
    actions: ["Edit", "Delete"]
  },
  {
    title: "Mental Wellness Tips for College Students",
    type: "Article",
    status: "draft",
    actions: ["Edit", "Delete"]
  },
  {
    title: "Mastering Time Management for Academic Success",
    type: "Article",
    status: "published",
    actions: ["Edit", "Delete"]
  },
  {
    title: "Guide to Personal Statement Writing",
    type: "PDF Document",
    status: "draft",
    actions: ["Edit", "Delete"]
  }
];

const getTypeIcon = (type: string) => {
  if (type.includes("PDF")) return FileText;
  if (type.includes("Video")) return Video;
  return FileText;
};

export default function Content() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Content Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage educational resources, articles, and multimedia content.
          </p>
        </div>
        <Button variant="gradient" className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Resource
        </Button>
      </div>

      {/* Content Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contentItems.map((item, index) => {
                const TypeIcon = getTypeIcon(item.type);
                return (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-muted">
                          <TypeIcon className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{item.type}</TableCell>
                    <TableCell>
                      <StatusBadge status={item.status} />
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
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
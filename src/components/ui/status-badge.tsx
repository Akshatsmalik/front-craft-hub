import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  variant?: "default" | "outline";
  className?: string;
}

const statusConfig = {
  open: { className: "bg-status-open/10 text-status-open border-status-open/20", label: "Open" },
  "in progress": { className: "bg-status-progress/10 text-status-progress border-status-progress/20", label: "In Progress" },
  resolved: { className: "bg-status-resolved/10 text-status-resolved border-status-resolved/20", label: "Resolved" },
  closed: { className: "bg-status-closed/10 text-status-closed border-status-closed/20", label: "Closed" },
  pending: { className: "bg-status-pending/10 text-status-pending border-status-pending/20", label: "Pending" },
  active: { className: "bg-status-active/10 text-status-active border-status-active/20", label: "Active" },
  inactive: { className: "bg-status-inactive/10 text-status-inactive border-status-inactive/20", label: "Inactive" },
  draft: { className: "bg-status-draft/10 text-status-draft border-status-draft/20", label: "Draft" },
  published: { className: "bg-status-published/10 text-status-published border-status-published/20", label: "Published" },
  archived: { className: "bg-status-archived/10 text-status-archived border-status-archived/20", label: "Archived" },
  scheduled: { className: "bg-status-open/10 text-status-open border-status-open/20", label: "Scheduled" },
  completed: { className: "bg-status-resolved/10 text-status-resolved border-status-resolved/20", label: "Completed" },
  canceled: { className: "bg-status-closed/10 text-status-closed border-status-closed/20", label: "Canceled" }
};

export function StatusBadge({ status, variant = "default", className }: StatusBadgeProps) {
  const config = statusConfig[status.toLowerCase() as keyof typeof statusConfig] || statusConfig.pending;
  
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
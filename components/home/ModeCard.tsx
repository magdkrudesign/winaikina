"use client";

import { ChevronRight } from "lucide-react";

interface ModeCardProps {
  label: string;
  description: string;
  badge?: string;
  onClick?: () => void;
}

export function ModeCard({ label, description, badge, onClick }: ModeCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-lg border p-4 flex items-center justify-between gap-4 hover:bg-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
      style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--card-foreground)" }}
    >
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">{label}</span>
          {badge && (
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border" style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}>
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{description}</p>
      </div>
      <ChevronRight size={16} style={{ color: "var(--muted-foreground)", flexShrink: 0 }} />
    </button>
  );
}

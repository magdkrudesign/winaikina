"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface ModeCardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  badge?: string;
  onClick?: () => void;
  variant?: "wine" | "film";
}

export function ModeCard({
  icon,
  label,
  description,
  badge,
  onClick,
  variant = "wine",
}: ModeCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "card-glow w-full text-left rounded-2xl p-6 flex items-start gap-5 cursor-pointer group active:scale-[0.98] transition-transform",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
      )}
      style={{ background: "var(--background-card)" }}
    >
      {/* Ikona */}
      <div
        className={cn(
          "flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl",
          variant === "wine"
            ? "bg-[rgba(122,28,46,0.2)] text-[var(--accent-wine-light)]"
            : "bg-[rgba(201,169,110,0.12)] text-[var(--accent-gold)]"
        )}
      >
        {icon}
      </div>

      {/* Treść */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[var(--foreground)] font-semibold text-lg leading-tight">
            {label}
          </span>
          {badge && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[rgba(201,169,110,0.15)] text-[var(--accent-gold)] uppercase tracking-wide">
              {badge}
            </span>
          )}
        </div>
        <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Strzałka */}
      <ChevronRight
        className="flex-shrink-0 mt-1 text-[var(--foreground-subtle)] group-hover:text-[var(--accent-gold)] transition-colors"
        size={20}
      />
    </button>
  );
}

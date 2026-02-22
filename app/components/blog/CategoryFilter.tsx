"use client";

import { cn } from "@/app/lib/utils";
import { useI18n } from "@/app/lib/i18n-context";

interface CategoryFilterProps {
  categories: string[];
  active: string | null;
  onSelect: (category: string | null) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onSelect,
}: CategoryFilterProps) {
  const { t } = useI18n();

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "px-4 py-1.5 rounded-full text-xs font-code font-medium border transition-all duration-200",
          active === null
            ? "bg-primary/10 text-primary border-primary/20"
            : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
        )}
      >
        {t.blog.allCategories}
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat === active ? null : cat)}
          className={cn(
            "px-4 py-1.5 rounded-full text-xs font-code font-medium border transition-all duration-200",
            active === cat
              ? "bg-primary/10 text-primary border-primary/20"
              : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

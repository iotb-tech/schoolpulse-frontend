import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export default function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-background p-4 shadow-sm",
        className
      )}
      {...props}
    />
  );
}
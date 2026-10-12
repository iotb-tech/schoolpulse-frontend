import { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, className, id, ...props }: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary",
          className
        )}
        {...props}
      />
    </div>
  );
}
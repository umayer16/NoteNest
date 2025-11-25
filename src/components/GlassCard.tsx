// src/components/GlassCard.tsx
import clsx from "clsx";

export default function GlassCard({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string 
}) {
  return (
    <div className={clsx(
      "bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl",
      className
    )}>
      {children}
    </div>
  );
}
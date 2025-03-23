
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface AnimatedIconProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
  animation?: "pulse" | "float" | "scale" | "none";
  background?: boolean;
  glass?: boolean;
}

const AnimatedIcon = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ 
    className, 
    icon, 
    size = "md", 
    animation = "pulse", 
    background = true,
    glass = false,
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: "p-2",
      md: "p-3",
      lg: "p-4",
    };
    
    const iconSizeClasses = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
    };
    
    const animationClasses = {
      pulse: "animate-pulse-soft",
      float: "animate-float",
      scale: "transition-transform hover:scale-110",
      none: "",
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center rounded-full",
          background && "bg-primary/10",
          glass && "glass",
          sizeClasses[size],
          animationClasses[animation],
          className
        )}
        {...props}
      >
        <div className={cn("text-primary", iconSizeClasses[size])}>
          {icon}
        </div>
      </div>
    );
  }
);

AnimatedIcon.displayName = "AnimatedIcon";

export { AnimatedIcon };

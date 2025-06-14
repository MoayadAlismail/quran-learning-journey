
import { cn } from "@/lib/utils";

interface AchievementBadgeProps {
  title: string;
  description: string;
  earned: boolean;
  icon: string;
}

export const AchievementBadge = ({ title, description, earned, icon }: AchievementBadgeProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-4 border-2 transition-all duration-200 hover:shadow-md cursor-pointer",
      earned 
        ? "border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50" 
        : "border-gray-200 bg-gray-50"
    )}>
      <div className="text-center">
        <div className={cn(
          "w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl",
          earned 
            ? "bg-gradient-to-br from-amber-100 to-yellow-100" 
            : "bg-gray-100"
        )}>
          <span className={earned ? "" : "grayscale opacity-50"}>{icon}</span>
        </div>
        
        <h4 className={cn(
          "font-semibold mb-1",
          earned ? "text-gray-800" : "text-gray-500"
        )}>
          {title}
        </h4>
        
        <p className={cn(
          "text-sm",
          earned ? "text-gray-600" : "text-gray-400"
        )}>
          {description}
        </p>

        {earned && (
          <div className="mt-2">
            <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">
              Earned!
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

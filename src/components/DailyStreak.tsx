
import { Flame } from "lucide-react";

interface DailyStreakProps {
  streak: number;
}

export const DailyStreak = ({ streak }: DailyStreakProps) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const completedDays = Math.min(streak, 7);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <Flame className="w-5 h-5 text-orange-500 mr-2" />
          Daily Streak
        </h3>
        <span className="text-2xl font-bold text-orange-600">{streak}</span>
      </div>
      
      <div className="flex justify-between items-center">
        {days.map((day, index) => (
          <div key={day} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              index < completedDays 
                ? 'bg-gradient-to-br from-orange-400 to-red-500' 
                : 'bg-gray-200'
            }`}>
              {index < completedDays && (
                <Flame className="w-4 h-4 text-white" />
              )}
            </div>
            <span className={`text-xs ${
              index < completedDays ? 'text-orange-600 font-medium' : 'text-gray-500'
            }`}>
              {day}
            </span>
          </div>
        ))}
      </div>
      
      <p className="text-sm text-gray-600 text-center mt-4">
        Keep your streak alive! Study today to continue your journey.
      </p>
    </div>
  );
};

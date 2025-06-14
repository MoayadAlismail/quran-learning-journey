
interface ProgressBarProps {
  current: number;
  target: number;
}

export const ProgressBar = ({ current, target }: ProgressBarProps) => {
  const percentage = Math.min((current / target) * 100, 100);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800">Weekly Goal</h3>
        <span className="text-sm text-gray-600">{current} / {target} XP</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
        <div 
          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-4 rounded-full transition-all duration-500 relative overflow-hidden"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600">
        {target - current > 0 ? `${target - current} XP to reach your goal!` : "Goal achieved! 🎉"}
      </p>
    </div>
  );
};

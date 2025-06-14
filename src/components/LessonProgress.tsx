
import { Heart } from "lucide-react";

interface LessonProgressProps {
  progress: number;
  hearts: number;
  currentQuestion: number;
  totalQuestions: number;
}

export const LessonProgress = ({ 
  progress, 
  hearts, 
  currentQuestion, 
  totalQuestions 
}: LessonProgressProps) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-gray-600">
          {currentQuestion} of {totalQuestions}
        </span>
        <div className="flex items-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <Heart 
              key={i}
              className={`w-5 h-5 ${
                i < hearts 
                  ? "text-red-500 fill-current" 
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

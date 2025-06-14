
import { Button } from "@/components/ui/button";
import { Trophy, Star, Target } from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  subtitle: string;
}

interface LessonCompleteProps {
  score: number;
  lesson: Lesson;
  onContinue: () => void;
}

export const LessonComplete = ({ score, lesson, onContinue }: LessonCompleteProps) => {
  const getPerformanceLevel = (score: number) => {
    if (score >= 35) return { level: "Perfect!", color: "text-green-600", icon: Trophy };
    if (score >= 25) return { level: "Great!", color: "text-blue-600", icon: Star };
    return { level: "Good!", color: "text-amber-600", icon: Target };
  };

  const performance = getPerformanceLevel(score);
  const Icon = performance.icon;

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <Icon className={`w-10 h-10 ${performance.color}`} />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Lesson Complete!</h1>
        <p className={`text-lg font-semibold mb-4 ${performance.color}`}>
          {performance.level}
        </p>

        {/* Lesson Info */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-800">{lesson.title}</h3>
          <p className="text-sm text-gray-600">{lesson.subtitle}</p>
        </div>

        {/* Score */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">{score}</div>
            <div className="text-sm text-gray-600">XP Earned</div>
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
            <span className="text-sm font-medium text-emerald-800">Lesson Completed</span>
            <span className="text-emerald-600">✓</span>
          </div>
          
          {score >= 30 && (
            <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
              <span className="text-sm font-medium text-amber-800">High Score Achievement</span>
              <span className="text-amber-600">🏆</span>
            </div>
          )}
        </div>

        {/* Continue Button */}
        <Button onClick={onContinue} className="w-full" size="lg">
          Continue Learning
        </Button>
      </div>
    </div>
  );
};

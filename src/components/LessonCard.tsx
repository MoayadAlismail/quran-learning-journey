
import { Check, Play, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  progress: number;
  completed: boolean;
  verse: string;
  translation: string;
  xp: number;
}

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
}

export const LessonCard = ({ lesson, onClick }: LessonCardProps) => {
  const isLocked = lesson.id > 2 && !lesson.completed && lesson.progress === 0;

  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-sm border-2 p-6 cursor-pointer transition-all duration-200 hover:shadow-md",
        lesson.completed 
          ? "border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50" 
          : lesson.progress > 0 
          ? "border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 hover:border-amber-300" 
          : isLocked 
          ? "border-gray-200 bg-gray-50 cursor-not-allowed" 
          : "border-gray-200 hover:border-emerald-300"
      )}
      onClick={!isLocked ? onClick : undefined}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              lesson.completed 
                ? "bg-emerald-100" 
                : lesson.progress > 0 
                ? "bg-amber-100" 
                : isLocked 
                ? "bg-gray-100" 
                : "bg-blue-100"
            )}>
              {lesson.completed ? (
                <Check className="w-6 h-6 text-emerald-600" />
              ) : isLocked ? (
                <Lock className="w-6 h-6 text-gray-400" />
              ) : (
                <Play className="w-6 h-6 text-blue-600" />
              )}
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800">{lesson.title}</h3>
              <p className="text-sm text-gray-600">{lesson.subtitle}</p>
            </div>
          </div>

          {/* Arabic Verse */}
          <div className="mb-3">
            <p className="text-xl text-right font-amiri text-gray-800 mb-1" dir="rtl">
              {lesson.verse}
            </p>
            <p className="text-sm text-gray-600 italic">{lesson.translation}</p>
          </div>

          {/* Progress Bar */}
          {lesson.progress > 0 && (
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{lesson.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    lesson.completed ? "bg-emerald-500" : "bg-amber-500"
                  )}
                  style={{ width: `${lesson.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* XP Badge */}
        <div className="ml-4">
          <div className="bg-gradient-to-br from-yellow-100 to-amber-100 px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-amber-700">+{lesson.xp} XP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

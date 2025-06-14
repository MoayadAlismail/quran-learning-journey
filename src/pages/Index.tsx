
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { LessonCard } from "@/components/LessonCard";
import { ProgressBar } from "@/components/ProgressBar";
import { AchievementBadge } from "@/components/AchievementBadge";
import { DailyStreak } from "@/components/DailyStreak";
import { StatCard } from "@/components/StatCard";
import { Book, Star, Flame, Trophy } from "lucide-react";

const sampleLessons = [
  {
    id: 1,
    title: "Al-Fatiha",
    subtitle: "The Opening",
    progress: 100,
    completed: true,
    verse: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful",
    xp: 50
  },
  {
    id: 2,
    title: "Al-Ikhlas",
    subtitle: "The Sincerity",
    progress: 75,
    completed: false,
    verse: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    translation: "Say: He is Allah, the One",
    xp: 40
  },
  {
    id: 3,
    title: "An-Nas",
    subtitle: "Mankind",
    progress: 0,
    completed: false,
    verse: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
    translation: "Say: I seek refuge in the Lord of mankind",
    xp: 30
  }
];

const Index = () => {
  const [userXP, setUserXP] = useState(290);
  const [dailyStreak, setDailyStreak] = useState(7);
  const [completedLessons, setCompletedLessons] = useState(12);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      <Header userXP={userXP} />
      
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Star} value={userXP} label="Total XP" color="text-yellow-600" />
          <StatCard icon={Flame} value={dailyStreak} label="Day Streak" color="text-orange-600" />
          <StatCard icon={Book} value={completedLessons} label="Completed" color="text-emerald-600" />
          <StatCard icon={Trophy} value="Gold" label="League" color="text-amber-600" />
        </div>

        {/* Daily Streak */}
        <DailyStreak streak={dailyStreak} />

        {/* Progress Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Journey</h2>
          <ProgressBar current={290} target={500} />
        </div>

        {/* Lessons Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Continue Learning</h2>
          <div className="space-y-4">
            {sampleLessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                onClick={() => {
                  console.log(`Starting lesson: ${lesson.title}`);
                }}
              />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Achievements</h2>
          <div className="flex flex-wrap gap-4">
            <AchievementBadge 
              title="First Surah" 
              description="Completed Al-Fatiha" 
              earned={true}
              icon="🕌"
            />
            <AchievementBadge 
              title="Week Warrior" 
              description="7 day streak" 
              earned={true}
              icon="🔥"
            />
            <AchievementBadge 
              title="Scholar" 
              description="Complete 10 lessons" 
              earned={false}
              icon="📚"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

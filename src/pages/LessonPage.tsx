
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { LessonProgress } from "@/components/LessonProgress";
import { FillInBlankQuestion } from "@/components/questions/FillInBlankQuestion";
import { VoiceRecordingQuestion } from "@/components/questions/VoiceRecordingQuestion";
import { TypingQuestion } from "@/components/questions/TypingQuestion";
import { DefinitionQuestion } from "@/components/questions/DefinitionQuestion";
import { LessonComplete } from "@/components/LessonComplete";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Question {
  id: number;
  type: 'fill-blank' | 'voice-recording' | 'typing' | 'definition';
  question: string;
  verse?: string;
  options?: string[];
  correctAnswer: string;
  translation?: string;
  word?: string;
  definition?: string;
}

interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  questions: Question[];
}

const sampleLesson: Lesson = {
  id: "al-ikhlas",
  title: "Al-Ikhlas",
  subtitle: "The Sincerity",
  questions: [
    {
      id: 1,
      type: 'fill-blank',
      question: "Complete the verse:",
      verse: "قُلْ هُوَ اللَّهُ ___",
      options: ["أَحَدٌ", "الْأَوَّلُ", "الْآخِرُ", "الظَّاهِرُ"],
      correctAnswer: "أَحَدٌ",
      translation: "Say: He is Allah, the One"
    },
    {
      id: 2,
      type: 'voice-recording',
      question: "Read this verse aloud:",
      verse: "اللَّهُ الصَّمَدُ",
      correctAnswer: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal, Absolute"
    },
    {
      id: 3,
      type: 'typing',
      question: "Type the missing part of the verse:",
      verse: "لَمْ يَلِدْ وَلَمْ ___",
      correctAnswer: "يُولَدْ",
      translation: "He begets not, nor is He begotten"
    },
    {
      id: 4,
      type: 'definition',
      question: "What does 'الصَّمَدُ' mean?",
      word: "الصَّمَدُ",
      options: ["The One", "The Eternal", "The Creator", "The Merciful"],
      correctAnswer: "The Eternal"
    }
  ]
};

const LessonPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [isCompleted, setIsCompleted] = useState(false);
  const [userXP] = useState(290);

  const lesson = sampleLesson; // In real app, fetch based on lessonId
  const currentQuestion = lesson.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / lesson.questions.length) * 100;

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 10);
      console.log("Correct answer! +10 XP");
    } else {
      setHearts(hearts - 1);
      console.log("Incorrect answer. Hearts remaining:", hearts - 1);
      
      if (hearts <= 1) {
        console.log("No hearts left. Lesson failed.");
        navigate("/");
        return;
      }
    }

    // Move to next question or complete lesson
    if (currentQuestionIndex < lesson.questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1500);
    } else {
      setTimeout(() => {
        setIsCompleted(true);
      }, 1500);
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
        <Header userXP={userXP + score} />
        <LessonComplete 
          score={score}
          lesson={lesson}
          onContinue={handleBackToHome}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      <Header userXP={userXP} />
      
      <main className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={handleBackToHome}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Progress */}
        <LessonProgress 
          progress={progress}
          hearts={hearts}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={lesson.questions.length}
        />

        {/* Question Component */}
        <div className="mt-8">
          {currentQuestion.type === 'fill-blank' && (
            <FillInBlankQuestion 
              question={currentQuestion}
              onAnswer={handleAnswer}
            />
          )}
          
          {currentQuestion.type === 'voice-recording' && (
            <VoiceRecordingQuestion 
              question={currentQuestion}
              onAnswer={handleAnswer}
            />
          )}
          
          {currentQuestion.type === 'typing' && (
            <TypingQuestion 
              question={currentQuestion}
              onAnswer={handleAnswer}
            />
          )}
          
          {currentQuestion.type === 'definition' && (
            <DefinitionQuestion 
              question={currentQuestion}
              onAnswer={handleAnswer}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default LessonPage;

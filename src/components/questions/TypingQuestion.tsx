
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle } from "lucide-react";

interface Question {
  id: number;
  question: string;
  verse?: string;
  correctAnswer: string;
  translation?: string;
}

interface TypingQuestionProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}

export const TypingQuestion = ({ question, onAnswer }: TypingQuestionProps) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;
    
    const correct = userAnswer.trim() === question.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    setTimeout(() => {
      onAnswer(correct);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !showResult) {
      handleSubmit();
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{question.question}</h2>
      
      {/* Arabic Verse with blank */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 mb-6">
        <p className="text-2xl font-amiri text-gray-800 text-center mb-2" dir="rtl">
          {question.verse}
        </p>
        {question.translation && (
          <p className="text-sm text-gray-600 text-center italic">
            {question.translation}
          </p>
        )}
      </div>

      {/* Input Field */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type the missing Arabic text:
        </label>
        <Input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type in Arabic..."
          className="text-lg font-amiri text-center"
          disabled={showResult}
          dir="rtl"
        />
      </div>

      {/* Result Display */}
      {showResult && (
        <div className={`flex items-center justify-center p-4 rounded-lg mb-4 ${
          isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
        }`}>
          {isCorrect ? (
            <>
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">Perfect! Correct spelling!</span>
            </>
          ) : (
            <>
              <XCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">
                Incorrect. The correct answer is: 
                <span className="font-amiri text-lg ml-2" dir="rtl">{question.correctAnswer}</span>
              </span>
            </>
          )}
        </div>
      )}

      {/* Submit Button */}
      {!showResult && (
        <Button 
          className="w-full" 
          onClick={handleSubmit}
          disabled={!userAnswer.trim()}
        >
          Check Answer
        </Button>
      )}
    </div>
  );
};

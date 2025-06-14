
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

interface Question {
  id: number;
  question: string;
  word?: string;
  options?: string[];
  correctAnswer: string;
}

interface DefinitionQuestionProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}

export const DefinitionQuestion = ({ question, onAnswer }: DefinitionQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    
    const correct = selectedAnswer === question.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    setTimeout(() => {
      onAnswer(correct);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{question.question}</h2>
      
      {/* Arabic Word */}
      {question.word && (
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 mb-6">
          <p className="text-4xl font-amiri text-gray-800 text-center" dir="rtl">
            {question.word}
          </p>
        </div>
      )}

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options?.map((option, index) => (
          <Button
            key={index}
            variant={selectedAnswer === option ? "default" : "outline"}
            className={`w-full p-4 h-auto text-left justify-start ${
              showResult 
                ? option === question.correctAnswer
                  ? "bg-green-500 hover:bg-green-500 text-white"
                  : option === selectedAnswer && !isCorrect
                  ? "bg-red-500 hover:bg-red-500 text-white"
                  : ""
                : ""
            }`}
            onClick={() => !showResult && setSelectedAnswer(option)}
            disabled={showResult}
          >
            {option}
          </Button>
        ))}
      </div>

      {/* Result Display */}
      {showResult && (
        <div className={`flex items-center justify-center p-4 rounded-lg mb-4 ${
          isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
        }`}>
          {isCorrect ? (
            <>
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">Excellent! You know this word!</span>
            </>
          ) : (
            <>
              <XCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">
                Not quite. '{question.word}' means '{question.correctAnswer}'
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
          disabled={!selectedAnswer}
        >
          Check Answer
        </Button>
      )}
    </div>
  );
};

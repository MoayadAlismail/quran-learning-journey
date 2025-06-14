
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Play, CheckCircle, XCircle } from "lucide-react";

interface Question {
  id: number;
  question: string;
  verse?: string;
  correctAnswer: string;
  translation?: string;
}

interface VoiceRecordingQuestionProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}

export const VoiceRecordingQuestion = ({ question, onAnswer }: VoiceRecordingQuestionProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleStartRecording = () => {
    setIsRecording(true);
    // Simulate recording for 3 seconds
    setTimeout(() => {
      setIsRecording(false);
      setHasRecorded(true);
    }, 3000);
  };

  const handleSubmit = () => {
    // For demo purposes, randomly determine if correct (70% chance)
    const correct = Math.random() > 0.3;
    setIsCorrect(correct);
    setShowResult(true);
    
    setTimeout(() => {
      onAnswer(correct);
    }, 1500);
  };

  const playExample = () => {
    console.log("Playing example pronunciation");
    // In real app, play audio of correct pronunciation
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{question.question}</h2>
      
      {/* Arabic Verse */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 mb-6">
        <p className="text-3xl font-amiri text-gray-800 text-center mb-3" dir="rtl">
          {question.verse}
        </p>
        {question.translation && (
          <p className="text-sm text-gray-600 text-center italic mb-3">
            {question.translation}
          </p>
        )}
        
        <div className="flex justify-center">
          <Button variant="outline" onClick={playExample} className="flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Listen to Example
          </Button>
        </div>
      </div>

      {/* Recording Controls */}
      <div className="flex flex-col items-center mb-6">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
          isRecording 
            ? "bg-red-100 animate-pulse" 
            : hasRecorded 
            ? "bg-green-100" 
            : "bg-gray-100"
        }`}>
          {isRecording ? (
            <MicOff className="w-8 h-8 text-red-600" />
          ) : (
            <Mic className={`w-8 h-8 ${hasRecorded ? "text-green-600" : "text-gray-600"}`} />
          )}
        </div>

        {!hasRecorded && !isRecording && (
          <Button onClick={handleStartRecording} className="mb-4">
            Start Recording
          </Button>
        )}

        {isRecording && (
          <div className="text-center">
            <p className="text-lg font-medium text-red-600 mb-2">Recording...</p>
            <p className="text-sm text-gray-600">Speak clearly into your microphone</p>
          </div>
        )}

        {hasRecorded && !showResult && (
          <div className="text-center">
            <p className="text-lg font-medium text-green-600 mb-2">Recording Complete!</p>
            <p className="text-sm text-gray-600 mb-4">Ready to check your pronunciation</p>
          </div>
        )}
      </div>

      {/* Result Display */}
      {showResult && (
        <div className={`flex items-center justify-center p-4 rounded-lg mb-4 ${
          isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
        }`}>
          {isCorrect ? (
            <>
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">Great pronunciation!</span>
            </>
          ) : (
            <>
              <XCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">Keep practicing! Try listening to the example again.</span>
            </>
          )}
        </div>
      )}

      {/* Submit Button */}
      {hasRecorded && !showResult && (
        <Button className="w-full" onClick={handleSubmit}>
          Check Pronunciation
        </Button>
      )}
    </div>
  );
};

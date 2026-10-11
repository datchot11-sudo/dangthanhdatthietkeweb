import React, { useState } from 'react';
import { QuizQuestion } from '../types/costume';
import { Award, CheckCircle2, XCircle, RotateCcw, HelpCircle, Sparkles, ChevronRight, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CulturalQuizSectionProps {
  questions?: QuizQuestion[];
  onExploreCostumes?: () => void;
}

export const CulturalQuizSection: React.FC<CulturalQuizSectionProps> = ({
  questions = [],
  onExploreCostumes,
}) => {
  const safeQuestions = questions || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (safeQuestions.length === 0) {
    return (
      <div id="cultural_quiz_section" className="max-w-3xl mx-auto py-12 text-center text-stone-500">
        Hiện chưa có câu hỏi trắc nghiệm nào.
      </div>
    );
  }

  const currentQ = safeQuestions[currentIndex] || safeQuestions[0];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div id="cultural_quiz_section" className="max-w-3xl mx-auto space-y-6">
      {/* Intro Header */}
      <div className="text-center space-y-2 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          <span>Thử Thách Hiểu Biết Di Sản</span>
        </div>
        <h2 className="font-serif-cultural text-2xl sm:text-3xl font-bold text-stone-900">
          Đố Vui Di Sản Trang Phục 54 Dân Tộc
        </h2>
        <p className="text-stone-600 text-sm max-w-xl mx-auto">
          Cùng trắc nghiệm kiến thức về hoa văn, trang sức và ý nghĩa tâm linh của trang phục truyền thống Việt Nam.
        </p>
      </div>

      {!showResult ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/90 space-y-6">
          {/* Progress bar */}
          <div className="flex items-center justify-between text-xs text-stone-500 font-semibold border-b border-stone-100 pb-3">
            <span>
              Câu hỏi {currentIndex + 1} / {questions.length}
            </span>
            <span className="text-emerald-800 font-bold">
              Điểm hiện tại: {score}
            </span>
          </div>

          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-700 h-full transition-all duration-300 rounded-full"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            {currentQ.ethnicGroup && (
              <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold">
                Chủ đề: Dân tộc {currentQ.ethnicGroup}
              </span>
            )}
            <h3 className="font-serif-cultural text-lg sm:text-xl font-bold text-stone-900 leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              let btnStyle = 'border-stone-200 hover:border-emerald-700 hover:bg-stone-50 text-stone-800';

              if (isAnswered) {
                if (idx === currentQ.correctAnswer) {
                  btnStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-bold';
                } else if (idx === selectedOption) {
                  btnStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                } else {
                  btnStyle = 'border-stone-200 opacity-60 text-stone-600';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 text-sm cursor-pointer ${btnStyle}`}
                >
                  <span className="leading-relaxed">{opt}</span>
                  {isAnswered && idx === currentQ.correctAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== currentQ.correctAnswer && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Cultural Explanation Box */}
          {isAnswered && (
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-300/80 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-emerald-700" />
                <span>Giải Thích Văn Hóa:</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>{currentIndex + 1 === questions.length ? 'Xem Kết Quả Tổng Kết' : 'Câu Tiếp Theo'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Result & Honor Certificate Card */
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-emerald-900/20 text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center border-4 border-emerald-300 text-emerald-800">
            <Award className="w-10 h-10 text-emerald-700" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Chứng Nhận Tìm Hiểu Di Sản
            </span>
            <h3 className="font-serif-cultural text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              {score >= 4
                ? 'Sứ Giả Văn Hóa Y Phục Việt'
                : score >= 3
                ? 'Nhà Khám Phá Bản Sắc Dân Tộc'
                : 'Bạn Trẻ Yêu Mến Di Sản Truyền Thống'}
            </h3>
            <p className="text-stone-600 text-sm mt-2 max-w-md mx-auto">
              Bạn đã trả lời đúng <strong className="text-emerald-800 text-base">{score} / {questions.length}</strong> câu hỏi. Sự quan tâm của bạn góp phần gìn giữ nét đẹp di sản 54 dân tộc anh em.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm Lại Bộ Câu Hỏi</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

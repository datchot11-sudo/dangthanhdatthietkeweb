import React, { useState } from 'react';
import { X, Bot, Send, Sparkles, User, BookOpen, Compass } from 'lucide-react';

interface CulturalAIAssistantModalProps {
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const CulturalAIAssistantModal: React.FC<CulturalAIAssistantModalProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Xin chào! Tôi là Trợ Lý Văn Hóa Dân Tộc. Bạn có thể hỏi tôi bất kỳ điều gì về trang phục truyền thống, nguồn gốc phụ kiện bạc, ý nghĩa hoa văn sáp ong, lễ hội cưới hỏi hay huyền tích dân gian của 54 dân tộc Việt Nam.',
      timestamp: 'Vừa xong'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const samplePrompts = [
    'Tại sao áo Cóm người Thái có cúc bướm lẻ và chẵn?',
    'Ý nghĩa 5 quả bông len đỏ trên áo người Dao Đỏ?',
    'Kỹ thuật nhuộm chàm và vẽ sáp ong Batik của người H\'Mông?',
    'Huyền tích chú rể nắm khăn Sbai của người Khmer?',
    'Nguồn gốc của Áo Nhật Bình và Áo Dài Ngũ Thân Cung Đình?',
    'Điểm đặc biệt của Dệt Dèng cườm chì Tà Ôi?'
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Vừa xong'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsThinking(true);

    setTimeout(() => {
      let reply = '';
      const q = query.toLowerCase();

      if (q.includes('cúc bướm') || q.includes('thái') || q.includes('mák pém')) {
        reply = 'Hàng cúc bướm bạc (Mák Pém) trên Áo Cóm của phụ nữ Thái mang triết lý âm dương hòa hợp sâu sắc: một bên tượng trưng cho bướm đực, một bên là bướm cái, khi cài khuy lại biểu thị sự gắn kết lứa đôi son sắt. Đặc biệt, số lượng cúc lẻ (11, 13 cúc) biểu thị người con gái chưa chồng (còn son rỗi), trong khi số cúc chẵn (12, 14 cúc) dành cho người phụ nữ đã lập gia đình.';
      } else if (q.includes('dao đỏ') || q.includes('bông len') || q.includes('quả bông')) {
        reply = 'Chùm 5 quả bông len đỏ trước ngực chiếc áo dài Dao Đỏ tượng trưng cho quy luật Ngũ hành (Kim - Mộc - Thủy - Hỏa - Thổ) che chở lồng ngực người phụ nữ, sưởi ấm trước sương mù vùng cao và xua đuổi tà khí rừng sâu. Màu đỏ rực rỡ còn bắt nguồn từ huyền tích thủy tổ Bàn Vương chở che bộ tộc vượt biển bình an.';
      } else if (q.includes('sáp ong') || q.includes('batik') || q.includes('nhuộm chàm') || q.includes('mông') || q.includes("h'mông")) {
        reply = 'Nghệ thuật vẽ sáp ong (Batik) của người H\'Mông dùng bút vẽ bằng lá đồng kép nhúng sáp ong rừng nóng chảy, vẽ chính xác từng hoa văn kỷ hà lên vải lanh mộc trước khi nhúng chàm. Nước chàm được ủ từ lá chàm tươi, vôi tôi và nước tro bếp. Khi luộc vải trong nước sôi, sáp ong tan chảy để lộ hoa văn trắng ngà trên nền xanh thẫm vĩnh cửu không phai.';
      } else if (q.includes('khmer') || q.includes('sbai') || q.includes('sămpót') || q.includes('preah thong')) {
        reply = 'Chiếc khăn choàng Sbai và váy Sămpót dệt kim tuyến của người Khmer Nam Bộ gắn liền với truyền thuyết Hoàng tử Preah Thong kết duyên cùng Công chúa Rồng Neang Neak. Trong đám cưới, chú rể kính cẩn nắm lấy vạt đuôi khăn Sbai của cô dâu để được dẫn lối vào phòng tân hôn, tượng trưng cho tình nghĩa phu thê đồng lòng vượt qua gian khó.';
      } else if (q.includes('nhật bình') || q.includes('ngũ thân') || q.includes('cung đình') || q.includes('huế')) {
        reply = 'Áo Nhật Bình là y phục tôn quý của Hoàng hậu, Công chúa triều Nguyễn, có cổ hình chữ nhật to bản viền dải Ngũ sắc tượng trưng cho ngũ hành và vũ trụ trời tròn đất vuông. Còn Áo Dài Ngũ Thân có 5 thân áo ghép lại, cài 5 hạt khuy biểu trưng cho đạo lý Ngũ thường (Nhân, Lễ, Nghĩa, Trí, Tín) và Tứ thân phụ mẫu bảo bọc người con.';
      } else if (q.includes('dèng') || q.includes('tà ôi') || q.includes('cườm chì')) {
        reply = 'Dệt Dèng của người Tà Ôi (A Lưới, Thừa Thiên Huế) là Di sản văn hóa phi vật thể Quốc gia độc nhất vô nhị: phụ nữ Tà Ôi luồn trực tiếp từng hạt cườm chì và cườm thủy tinh vào sợi chỉ dệt trên khung cửi luồn chân, tạo thành hoa văn 3D vững chắc liền khối với tấm vải, giúp váy đứng dáng kiêu hãnh giữa đại ngàn Trường Sơn.';
      } else {
        reply = `Về vấn đề "${query}": Trang phục 54 dân tộc Việt Nam là kho tàng di sản vô giá, kết tinh từ triết lý hòa hợp với thiên nhiên, tín ngưỡng vạn vật hữu linh và đạo hiếu gia đình. Bạn có thể nhấn vào từng thẻ trang phục trong danh mục để xem chi tiết từng lớp áo, bộ phụ kiện và nghe đọc huyền tích truyền thống!`;
      }

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: reply,
        timestamp: 'Vừa xong'
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsThinking(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-rose-900 text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Bot className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif-cultural font-bold text-base text-white">
                  Trợ Lý Văn Hóa Dân Tộc AI
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-400 text-stone-950 rounded-full">
                  Trực Tuyến
                </span>
              </div>
              <p className="text-xs text-emerald-200/80">
                Giải đáp mọi thắc mắc về y phục, phụ kiện và huyền tích 54 dân tộc
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-stone-300 hover:text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Message Stream */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-stone-50/60">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0 text-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs ${
                    isUser
                      ? 'bg-emerald-800 text-white rounded-tr-xs'
                      : 'bg-white text-stone-800 border border-stone-200 rounded-tl-xs'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`text-[10px] block mt-1.5 ${
                      isUser ? 'text-emerald-200/70 text-right' : 'text-stone-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-xl bg-stone-800 text-white flex items-center justify-center shrink-0 text-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isThinking && (
            <div className="flex gap-3 items-center text-xs text-stone-500 animate-pulse">
              <div className="w-8 h-8 rounded-xl bg-emerald-800/80 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <span>Trợ lý đang tra cứu kho tàng di sản...</span>
            </div>
          )}
        </div>

        {/* Suggested Quick Prompts */}
        <div className="p-3 bg-stone-100/90 border-t border-stone-200 overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-700" /> Câu hỏi nhanh:
          </span>
          {samplePrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-xs px-2.5 py-1 rounded-full bg-white border border-stone-200 text-stone-700 hover:border-emerald-400 hover:bg-emerald-50 whitespace-nowrap shrink-0 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-stone-200 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Nhập câu hỏi về trang phục dân tộc..."
              className="flex-1 bg-stone-50 border border-stone-300 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:bg-white"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white transition-colors shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

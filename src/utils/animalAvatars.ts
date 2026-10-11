/**
 * Animal Icon Avatars Collection (Bộ Sưu Tập Icon Động Vật Đáng Yêu & Oai Phong)
 * High-fidelity, self-contained SVG Data URIs with zero network dependency.
 * Designed for user profiles, admin roles, and custom avatar pickers.
 */

function buildSvg(inner: string, bg1: string, bg2: string, gradId: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}" />
      <stop offset="100%" stop-color="${bg2}" />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="49" fill="url(#${gradId})" />
  <circle cx="50" cy="50" r="48" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.6" />
  ${inner}
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.replace(/\s+/g, ' ').trim())}`;
}

// 1. Mèo Vàng Thông Thái (Golden Cat 🐱)
const catSvg = buildSvg(
  `
  <!-- Tai ngoài -->
  <polygon points="22,44 32,16 46,36" fill="#F59E0B" />
  <polygon points="78,44 68,16 54,36" fill="#F59E0B" />
  <!-- Tai trong -->
  <polygon points="26,40 33,22 42,34" fill="#F472B6" />
  <polygon points="74,40 67,22 58,34" fill="#F472B6" />
  <!-- Khuôn mặt tròn -->
  <ellipse cx="50" cy="58" rx="34" ry="29" fill="#FBBF24" />
  <!-- Má trắng / Mõm -->
  <ellipse cx="44" cy="65" rx="10" ry="8" fill="#FFFBEB" />
  <ellipse cx="56" cy="65" rx="10" ry="8" fill="#FFFBEB" />
  <!-- Mắt long lanh -->
  <circle cx="36" cy="51" r="5" fill="#1E293B" />
  <circle cx="38" cy="49" r="1.8" fill="#FFFFFF" />
  <circle cx="64" cy="51" r="5" fill="#1E293B" />
  <circle cx="66" cy="49" r="1.8" fill="#FFFFFF" />
  <!-- Má hồng -->
  <ellipse cx="28" cy="58" rx="4.5" ry="3" fill="#FB7185" opacity="0.6" />
  <ellipse cx="72" cy="58" rx="4.5" ry="3" fill="#FB7185" opacity="0.6" />
  <!-- Mũi hồng -->
  <polygon points="47,60 53,60 50,64" fill="#F43F5E" />
  <!-- Miệng mèo :3 -->
  <path d="M44,66 Q50,71 50,65 Q50,71 56,66" stroke="#92400E" stroke-width="2" fill="none" stroke-linecap="round" />
  <!-- Râu mèo -->
  <path d="M21,59 L33,61 M19,65 L32,65 M21,71 L33,69" stroke="#B45309" stroke-width="1.8" stroke-linecap="round" />
  <path d="M79,59 L67,61 M81,65 L68,65 M79,71 L67,69" stroke="#B45309" stroke-width="1.8" stroke-linecap="round" />
  `,
  '#FFF7ED',
  '#FED7AA',
  'cat_grad'
);

// 2. Chó Shiba / Corgi Vui Vẻ (Happy Shiba 🐶)
const shibaSvg = buildSvg(
  `
  <!-- Tai -->
  <polygon points="20,44 28,16 46,34" fill="#EA580C" />
  <polygon points="80,44 72,16 54,34" fill="#EA580C" />
  <polygon points="26,39 31,23 41,33" fill="#FED7AA" />
  <polygon points="74,39 69,23 59,33" fill="#FED7AA" />
  <!-- Đầu -->
  <ellipse cx="50" cy="57" rx="34" ry="29" fill="#F97316" />
  <!-- Mặt nạ trắng Shiba -->
  <path d="M26,58 C26,45 36,44 42,50 C46,54 54,54 58,50 C64,44 74,45 74,58 C74,75 58,80 50,80 C42,80 26,75 26,58 Z" fill="#FFFFFF" />
  <!-- Mắt cười -->
  <path d="M33,52 Q37,47 41,52" stroke="#1E293B" stroke-width="3" fill="none" stroke-linecap="round" />
  <path d="M59,52 Q63,47 67,52" stroke="#1E293B" stroke-width="3" fill="none" stroke-linecap="round" />
  <!-- Mũi đen -->
  <ellipse cx="50" cy="62" rx="4" ry="3" fill="#1E293B" />
  <!-- Miệng cười & Lưỡi hồng -->
  <path d="M46,67 Q50,73 54,67" stroke="#1E293B" stroke-width="2" fill="none" stroke-linecap="round" />
  <ellipse cx="50" cy="72" rx="3.5" ry="4" fill="#F43F5E" />
  <!-- Má hồng -->
  <circle cx="29" cy="62" r="4" fill="#FDA4AF" opacity="0.8" />
  <circle cx="71" cy="62" r="4" fill="#FDA4AF" opacity="0.8" />
  <!-- Chân mày trắng -->
  <circle cx="37" cy="44" r="3" fill="#FFFFFF" />
  <circle cx="63" cy="44" r="3" fill="#FFFFFF" />
  `,
  '#E0F2FE',
  '#BAE6FD',
  'shiba_grad'
);

// 3. Gấu Trúc Panda Hiền Lành (Cute Panda 🐼)
const pandaSvg = buildSvg(
  `
  <!-- Tai đen tròn -->
  <circle cx="23" cy="28" r="13" fill="#1E293B" />
  <circle cx="77" cy="28" r="13" fill="#1E293B" />
  <circle cx="23" cy="28" r="7" fill="#334155" />
  <circle cx="77" cy="28" r="7" fill="#334155" />
  <!-- Đầu gấu trắng -->
  <circle cx="50" cy="57" r="33" fill="#FFFFFF" />
  <!-- Vết đen quanh mắt -->
  <ellipse cx="35" cy="52" rx="10" ry="13" fill="#1E293B" transform="rotate(-18 35 52)" />
  <ellipse cx="65" cy="52" rx="10" ry="13" fill="#1E293B" transform="rotate(18 65 52)" />
  <!-- Mắt long lanh -->
  <circle cx="36" cy="51" r="3.5" fill="#FFFFFF" />
  <circle cx="37" cy="50" r="1.5" fill="#1E293B" />
  <circle cx="64" cy="51" r="3.5" fill="#FFFFFF" />
  <circle cx="63" cy="50" r="1.5" fill="#1E293B" />
  <!-- Mũi gấu trúc -->
  <ellipse cx="50" cy="64" rx="5" ry="3.5" fill="#1E293B" />
  <!-- Miệng cười -->
  <path d="M46,69 Q50,73 54,69" stroke="#1E293B" stroke-width="2" fill="none" stroke-linecap="round" />
  <!-- Má hồng siêu cưng -->
  <circle cx="25" cy="63" r="5" fill="#F472B6" opacity="0.6" />
  <circle cx="75" cy="63" r="5" fill="#F472B6" opacity="0.6" />
  <!-- Lá trúc trang trí nhỏ -->
  <path d="M46,18 Q50,12 55,16 Q53,21 46,18 Z" fill="#10B981" />
  `,
  '#ECFDF5',
  '#A7F3D0',
  'panda_grad'
);

// 4. Cáo Đỏ Thông Thái (Wise Red Fox 🦊)
const foxSvg = buildSvg(
  `
  <!-- Tai lớn -->
  <polygon points="18,48 24,14 48,34" fill="#EA580C" />
  <polygon points="82,48 76,14 52,34" fill="#EA580C" />
  <polygon points="21,24 24,14 34,22" fill="#1E293B" />
  <polygon points="79,24 76,14 66,22" fill="#1E293B" />
  <polygon points="25,42 27,24 42,33" fill="#FFFFFF" />
  <polygon points="75,42 73,24 58,33" fill="#FFFFFF" />
  <!-- Mặt cáo cam -->
  <polygon points="20,48 50,82 80,48 50,30" fill="#F97316" />
  <!-- Má trắng nhọn đặc trưng -->
  <polygon points="20,48 38,58 50,82 32,70" fill="#FFFFFF" />
  <polygon points="80,48 62,58 50,82 68,70" fill="#FFFFFF" />
  <!-- Mắt cáo xếch tinh anh -->
  <path d="M32,49 Q39,44 43,51" stroke="#1E293B" stroke-width="2.8" fill="none" stroke-linecap="round" />
  <circle cx="38" cy="51" r="3.5" fill="#1E293B" />
  <circle cx="39" cy="50" r="1.2" fill="#FFFFFF" />
  <path d="M68,49 Q61,44 57,51" stroke="#1E293B" stroke-width="2.8" fill="none" stroke-linecap="round" />
  <circle cx="62" cy="51" r="3.5" fill="#1E293B" />
  <circle cx="61" cy="50" r="1.2" fill="#FFFFFF" />
  <!-- Mũi đen nhọn -->
  <circle cx="50" cy="80" r="3.5" fill="#111827" />
  `,
  '#F5F3FF',
  '#DDD6FE',
  'fox_grad'
);

// 5. Sư Tử Oai Phong - Vương Giả Quản Trị (Majestic King Lion 🦁 - Admin Avatar)
const lionSvg = buildSvg(
  `
  <!-- Bờm sư tử lộng lẫy -->
  <circle cx="50" cy="54" r="38" fill="#D97706" />
  <circle cx="30" cy="30" r="14" fill="#B45309" />
  <circle cx="70" cy="30" r="14" fill="#B45309" />
  <circle cx="18" cy="54" r="14" fill="#B45309" />
  <circle cx="82" cy="54" r="14" fill="#B45309" />
  <circle cx="30" cy="74" r="14" fill="#B45309" />
  <circle cx="70" cy="74" r="14" fill="#B45309" />
  <circle cx="50" cy="82" r="14" fill="#B45309" />
  <!-- Khuôn mặt vàng -->
  <circle cx="50" cy="55" r="27" fill="#FBBF24" />
  <!-- Tai -->
  <circle cx="28" cy="36" r="7" fill="#F59E0B" />
  <circle cx="28" cy="36" r="4" fill="#FDE68A" />
  <circle cx="72" cy="36" r="7" fill="#F59E0B" />
  <circle cx="72" cy="36" r="4" fill="#FDE68A" />
  <!-- Mõm sáng màu -->
  <ellipse cx="44" cy="62" rx="8" ry="6" fill="#FFFBEB" />
  <ellipse cx="56" cy="62" rx="8" ry="6" fill="#FFFBEB" />
  <!-- Mắt uy nghiêm & thân thiện -->
  <circle cx="38" cy="48" r="4" fill="#1E293B" />
  <circle cx="40" cy="46" r="1.5" fill="#FFFFFF" />
  <circle cx="62" cy="48" r="4" fill="#1E293B" />
  <circle cx="64" cy="46" r="1.5" fill="#FFFFFF" />
  <!-- Mũi nâu tam giác -->
  <polygon points="46,57 54,57 50,62" fill="#78350F" />
  <path d="M46,64 Q50,68 54,64" stroke="#78350F" stroke-width="2" fill="none" stroke-linecap="round" />
  <!-- Vương miện hoàng gia trên đầu -->
  <polygon points="36,24 42,32 50,22 58,32 64,24 62,34 38,34" fill="#FACC15" stroke="#CA8A04" stroke-width="1.2" />
  <circle cx="50" cy="27" r="2" fill="#DC2626" />
  <circle cx="40" cy="28" r="1.5" fill="#059669" />
  <circle cx="60" cy="28" r="1.5" fill="#059669" />
  `,
  '#FEF9C3',
  '#FDE047',
  'lion_grad'
);

// 6. Hổ Con Dũng Mãnh (Brave Tiger 🐯)
const tigerSvg = buildSvg(
  `
  <!-- Tai -->
  <circle cx="24" cy="30" r="10" fill="#EA580C" />
  <circle cx="24" cy="30" r="6" fill="#FFFFFF" />
  <circle cx="76" cy="30" r="10" fill="#EA580C" />
  <circle cx="76" cy="30" r="6" fill="#FFFFFF" />
  <!-- Đầu hổ -->
  <ellipse cx="50" cy="57" rx="34" ry="29" fill="#F97316" />
  <!-- Vằn trán chữ Vương (Vương Giả) -->
  <path d="M42,34 L58,34 M44,39 L56,39 M46,44 L54,44 M50,32 L50,45" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" />
  <!-- Vằn má 2 bên -->
  <path d="M22,50 L30,52 M20,57 L29,58 M78,50 L70,52 M80,57 L71,58" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" />
  <!-- Mõm trắng -->
  <ellipse cx="44" cy="65" rx="9" ry="7" fill="#FFFFFF" />
  <ellipse cx="56" cy="65" rx="9" ry="7" fill="#FFFFFF" />
  <!-- Mắt sáng -->
  <circle cx="36" cy="52" r="4.5" fill="#1E293B" />
  <circle cx="38" cy="50" r="1.6" fill="#FFFFFF" />
  <circle cx="64" cy="52" r="4.5" fill="#1E293B" />
  <circle cx="66" cy="50" r="1.6" fill="#FFFFFF" />
  <!-- Mũi hổ -->
  <polygon points="46,60 54,60 50,65" fill="#1E293B" />
  <path d="M44,67 Q50,72 56,67" stroke="#1E293B" stroke-width="2" fill="none" stroke-linecap="round" />
  `,
  '#FFF7ED',
  '#FED7AA',
  'tiger_grad'
);

// 7. Thỏ Trắng Dễ Thương (Cute White Bunny 🐰)
const bunnySvg = buildSvg(
  `
  <!-- Tai dài thẳng đứng -->
  <ellipse cx="36" cy="22" rx="7" ry="19" fill="#FFFFFF" />
  <ellipse cx="36" cy="22" rx="4" ry="15" fill="#F472B6" />
  <ellipse cx="64" cy="22" rx="7" ry="19" fill="#FFFFFF" />
  <ellipse cx="64" cy="22" rx="4" ry="15" fill="#F472B6" />
  <!-- Đầu thỏ tròn xoe -->
  <circle cx="50" cy="60" r="30" fill="#FFFFFF" />
  <!-- Mắt thỏ to tròn anime -->
  <ellipse cx="37" cy="55" rx="5" ry="6.5" fill="#831843" />
  <circle cx="39" cy="53" r="2.2" fill="#FFFFFF" />
  <circle cx="36" cy="58" r="1.2" fill="#FFFFFF" />
  <ellipse cx="63" cy="55" rx="5" ry="6.5" fill="#831843" />
  <circle cx="65" cy="53" r="2.2" fill="#FFFFFF" />
  <circle cx="62" cy="58" r="1.2" fill="#FFFFFF" />
  <!-- Mũi thỏ tam giác hồng -->
  <polygon points="48,63 52,63 50,66" fill="#EC4899" />
  <!-- Miệng cười & răng thỏ cưng -->
  <path d="M46,67 Q50,71 54,67" stroke="#9D174D" stroke-width="1.8" fill="none" stroke-linecap="round" />
  <rect x="48.5" y="68" width="3" height="3" fill="#FFFFFF" stroke="#9D174D" stroke-width="0.8" rx="0.5" />
  <!-- Má hồng phấn -->
  <circle cx="28" cy="62" r="5" fill="#F472B6" opacity="0.6" />
  <circle cx="72" cy="62" r="5" fill="#F472B6" opacity="0.6" />
  `,
  '#FDF2F8',
  '#FBCFE8',
  'bunny_grad'
);

// 8. Cú Mèo Tri Thức - Học Giả Di Sản (Wise Owl 🦉 - Admin & Scholar)
const owlSvg = buildSvg(
  `
  <!-- Tai / Lông đầu cú -->
  <polygon points="26,38 34,14 44,30" fill="#4338CA" />
  <polygon points="74,38 66,14 56,30" fill="#4338CA" />
  <!-- Đầu & Thân cú -->
  <ellipse cx="50" cy="56" rx="33" ry="31" fill="#4F46E5" />
  <!-- Vùng mắt sáng -->
  <circle cx="37" cy="50" r="14" fill="#EEF2FF" />
  <circle cx="63" cy="50" r="14" fill="#EEF2FF" />
  <!-- Kính trí thức tròn vàng (Scholar spectacles) -->
  <circle cx="37" cy="50" r="12" fill="none" stroke="#F59E0B" stroke-width="3" />
  <circle cx="63" cy="50" r="12" fill="none" stroke="#F59E0B" stroke-width="3" />
  <line x1="49" y1="50" x2="51" y2="50" stroke="#F59E0B" stroke-width="3" />
  <!-- Đồng tử mắt sáng -->
  <circle cx="37" cy="50" r="6" fill="#1E1B4B" />
  <circle cx="39" cy="48" r="2" fill="#FFFFFF" />
  <circle cx="63" cy="50" r="6" fill="#1E1B4B" />
  <circle cx="65" cy="48" r="2" fill="#FFFFFF" />
  <!-- Mỏ cú vàng -->
  <polygon points="47,56 53,56 50,65" fill="#F59E0B" />
  <!-- Hoạ tiết lông vũ ngực -->
  <path d="M42,70 Q50,75 58,70 M45,76 Q50,80 55,76" stroke="#C7D2FE" stroke-width="2" fill="none" stroke-linecap="round" />
  `,
  '#EEF2FF',
  '#C7D2FE',
  'owl_grad'
);

// 9. Gấu Nâu Thân Thiện (Friendly Brown Bear 🐻)
const bearSvg = buildSvg(
  `
  <!-- Tai tròn -->
  <circle cx="25" cy="28" r="12" fill="#78350F" />
  <circle cx="25" cy="28" r="6" fill="#D97706" />
  <circle cx="75" cy="28" r="12" fill="#78350F" />
  <circle cx="75" cy="28" r="6" fill="#D97706" />
  <!-- Khuôn mặt gấu -->
  <ellipse cx="50" cy="57" rx="34" ry="29" fill="#92400E" />
  <!-- Vùng mõm kem to -->
  <ellipse cx="50" cy="65" rx="17" ry="13" fill="#FEF3C7" />
  <!-- Mũi gấu to đen tròn -->
  <ellipse cx="50" cy="62" rx="7" ry="5" fill="#1E293B" />
  <circle cx="48" cy="61" r="1.5" fill="#FFFFFF" />
  <!-- Miệng gấu hiền từ -->
  <path d="M45,68 Q50,73 55,68" stroke="#1E293B" stroke-width="2" fill="none" stroke-linecap="round" />
  <!-- Mắt đen ấm áp -->
  <circle cx="35" cy="50" r="4.5" fill="#1E293B" />
  <circle cx="37" cy="48" r="1.6" fill="#FFFFFF" />
  <circle cx="65" cy="50" r="4.5" fill="#1E293B" />
  <circle cx="67" cy="48" r="1.6" fill="#FFFFFF" />
  `,
  '#F0FDF4',
  '#BBF7D0',
  'bear_grad'
);

// 10. Chim Cánh Cụt Bắc Cực (Cute Penguin 🐧)
const penguinSvg = buildSvg(
  `
  <!-- Thân chim cánh cụt xanh đen -->
  <ellipse cx="50" cy="56" rx="34" ry="32" fill="#0F172A" />
  <!-- Bụng & Mặt trắng tròn -->
  <ellipse cx="50" cy="60" rx="25" ry="24" fill="#FFFFFF" />
  <!-- Vòm trán đen -->
  <polygon points="50,42 42,32 58,32" fill="#0F172A" />
  <!-- Mắt cười tít -->
  <path d="M36,52 Q40,47 44,52" stroke="#0F172A" stroke-width="3" fill="none" stroke-linecap="round" />
  <path d="M56,52 Q60,47 64,52" stroke="#0F172A" stroke-width="3" fill="none" stroke-linecap="round" />
  <!-- Mỏ cam tươi -->
  <polygon points="45,56 55,56 50,65" fill="#F97316" />
  <!-- Má hồng ửng lạnh -->
  <circle cx="30" cy="58" r="4.5" fill="#FB7185" opacity="0.7" />
  <circle cx="70" cy="58" r="4.5" fill="#FB7185" opacity="0.7" />
  <!-- Khăn choàng ấm nhỏ xinh màu đỏ -->
  <path d="M30,82 Q50,88 70,82" stroke="#DC2626" stroke-width="6" fill="none" stroke-linecap="round" />
  `,
  '#ECFEFF',
  '#A5F3FC',
  'penguin_grad'
);

// 11. Hươu Sao Duyên Dáng (Gentle Spotted Deer 🦌)
const deerSvg = buildSvg(
  `
  <!-- Sừng hươu nhỏ nhắn -->
  <path d="M34,26 L30,12 M30,18 L24,14 M66,26 L70,12 M70,18 L76,14" stroke="#78350F" stroke-width="2.5" stroke-linecap="round" />
  <!-- Tai nghiêng mềm mại -->
  <ellipse cx="22" cy="40" rx="6" ry="14" fill="#D97706" transform="rotate(-35 22 40)" />
  <ellipse cx="22" cy="40" rx="3" ry="10" fill="#FEF3C7" transform="rotate(-35 22 40)" />
  <ellipse cx="78" cy="40" rx="6" ry="14" fill="#D97706" transform="rotate(35 78 40)" />
  <ellipse cx="78" cy="40" rx="3" ry="10" fill="#FEF3C7" transform="rotate(35 78 40)" />
  <!-- Đầu hươu màu caramel -->
  <ellipse cx="50" cy="56" rx="30" ry="27" fill="#B45309" />
  <!-- Mõm sáng -->
  <ellipse cx="50" cy="68" rx="14" ry="10" fill="#FEF3C7" />
  <!-- Mắt nai to tròn long lanh -->
  <ellipse cx="36" cy="51" rx="5" ry="6" fill="#1E293B" />
  <circle cx="38" cy="49" r="2.2" fill="#FFFFFF" />
  <ellipse cx="64" cy="51" rx="5" ry="6" fill="#1E293B" />
  <circle cx="66" cy="49" r="2.2" fill="#FFFFFF" />
  <!-- Đốm sao trắng trên trán (Đặc trưng hươu sao) -->
  <circle cx="50" cy="38" r="2" fill="#FFFFFF" />
  <circle cx="44" cy="43" r="1.6" fill="#FFFFFF" />
  <circle cx="56" cy="43" r="1.6" fill="#FFFFFF" />
  <!-- Mũi đen nhỏ -->
  <ellipse cx="50" cy="65" rx="3.5" ry="2.5" fill="#1E293B" />
  <path d="M47,69 Q50,72 53,69" stroke="#1E293B" stroke-width="1.8" fill="none" stroke-linecap="round" />
  `,
  '#FAF5FF',
  '#E9D5FF',
  'deer_grad'
);

// 12. Voi Con Phúc Lành (Lucky Elephant 🐘)
const elephantSvg = buildSvg(
  `
  <!-- Tai voi xòe to 2 bên -->
  <ellipse cx="20" cy="50" rx="14" ry="18" fill="#64748B" />
  <ellipse cx="20" cy="50" rx="9" ry="13" fill="#FDA4AF" opacity="0.6" />
  <ellipse cx="80" cy="50" rx="14" ry="18" fill="#64748B" />
  <ellipse cx="80" cy="50" rx="9" ry="13" fill="#FDA4AF" opacity="0.6" />
  <!-- Đầu voi -->
  <circle cx="50" cy="52" r="28" fill="#475569" />
  <!-- Vòi voi uốn cong lên mang may mắn -->
  <path d="M50,56 Q50,75 58,74 Q64,72 63,65" stroke="#475569" stroke-width="8" fill="none" stroke-linecap="round" />
  <circle cx="63" cy="65" r="4" fill="#475569" />
  <!-- Mắt cười vui tươi -->
  <path d="M36,46 Q40,42 44,46" stroke="#F8FAFC" stroke-width="2.5" fill="none" stroke-linecap="round" />
  <path d="M56,46 Q60,42 64,46" stroke="#F8FAFC" stroke-width="2.5" fill="none" stroke-linecap="round" />
  <!-- Má hồng voi con -->
  <circle cx="32" cy="54" r="4" fill="#FDA4AF" opacity="0.8" />
  <circle cx="68" cy="54" r="4" fill="#FDA4AF" opacity="0.8" />
  <!-- Bông hoa sen nhỏ trên đầu -->
  <polygon points="50,22 46,28 54,28" fill="#F43F5E" />
  <circle cx="50" cy="27" r="1.5" fill="#FACC15" />
  `,
  '#F1F5F9',
  '#CBD5E1',
  'elephant_grad'
);

// 13. Khỉ Con Tinh Nghịch (Playful Monkey 🐵)
const monkeySvg = buildSvg(
  `
  <!-- Tai tròn nhô ra 2 bên -->
  <circle cx="16" cy="50" r="12" fill="#78350F" />
  <circle cx="16" cy="50" r="7" fill="#FDBA74" />
  <circle cx="84" cy="50" r="12" fill="#78350F" />
  <circle cx="84" cy="50" r="7" fill="#FDBA74" />
  <!-- Đầu khỉ nâu -->
  <circle cx="50" cy="52" r="32" fill="#92400E" />
  <!-- Vùng mặt hình trái đào đào sáng -->
  <path d="M30,48 C30,36 42,34 50,42 C58,34 70,36 70,48 C70,68 50,74 50,74 C50,74 30,68 30,48 Z" fill="#FED7AA" />
  <!-- Mắt khỉ to tròn tinh nhanh -->
  <circle cx="42" cy="46" r="4" fill="#1E293B" />
  <circle cx="43" cy="44" r="1.5" fill="#FFFFFF" />
  <circle cx="58" cy="46" r="4" fill="#1E293B" />
  <circle cx="59" cy="44" r="1.5" fill="#FFFFFF" />
  <!-- Lỗ mũi khỉ -->
  <circle cx="47" cy="55" r="1.5" fill="#92400E" />
  <circle cx="53" cy="55" r="1.5" fill="#92400E" />
  <!-- Nụ cười tươi rạng rỡ -->
  <path d="M40,62 Q50,70 60,62" stroke="#92400E" stroke-width="2.5" fill="none" stroke-linecap="round" />
  `,
  '#FEFCE8',
  '#FEF08A',
  'monkey_grad'
);

// 14. Rồng Vàng Uy Nghi - Linh Vật Việt (Imperial Golden Dragon 🐉 - Mascot)
const dragonSvg = buildSvg(
  `
  <!-- Sừng rồng vàng hoàng gia -->
  <path d="M34,30 L28,14 M30,22 L22,18 M66,30 L72,14 M70,22 L78,18" stroke="#D97706" stroke-width="3" stroke-linecap="round" />
  <!-- Bờm lửa rồng hoàng cung -->
  <circle cx="50" cy="54" r="36" fill="#DC2626" />
  <circle cx="24" cy="40" r="12" fill="#EA580C" />
  <circle cx="76" cy="40" r="12" fill="#EA580C" />
  <circle cx="50" cy="80" r="12" fill="#EA580C" />
  <!-- Đầu rồng vàng ngọc -->
  <ellipse cx="50" cy="55" rx="28" ry="25" fill="#FBBF24" />
  <!-- Râu rồng dài uốn lượn phong thái Việt -->
  <path d="M38,62 Q20,68 14,58" stroke="#D97706" stroke-width="2.5" fill="none" stroke-linecap="round" />
  <path d="M62,62 Q80,68 86,58" stroke="#D97706" stroke-width="2.5" fill="none" stroke-linecap="round" />
  <!-- Mắt rồng sáng rực tinh anh -->
  <ellipse cx="38" cy="48" rx="4.5" ry="5.5" fill="#1E293B" />
  <circle cx="40" cy="46" r="2" fill="#FFFFFF" />
  <ellipse cx="62" cy="48" rx="4.5" ry="5.5" fill="#1E293B" />
  <circle cx="64" cy="46" r="2" fill="#FFFFFF" />
  <!-- Mũi rồng & Miệng uy nghi -->
  <circle cx="46" cy="58" r="2" fill="#78350F" />
  <circle cx="54" cy="58" r="2" fill="#78350F" />
  <path d="M42,66 Q50,71 58,66" stroke="#78350F" stroke-width="2" fill="none" stroke-linecap="round" />
  <!-- Viên ngọc minh châu đỏ thắm trên trán -->
  <circle cx="50" cy="38" r="4.5" fill="#DC2626" stroke="#FEF08A" stroke-width="1.5" />
  <circle cx="49" cy="36" r="1.5" fill="#FFFFFF" />
  `,
  '#FEF2F2',
  '#FECACA',
  'dragon_grad'
);

export interface AnimalAvatarPreset {
  id: string;
  name: string;
  category: 'cute' | 'brave' | 'royal' | 'gentle';
  emoji: string;
  roleHint?: 'admin' | 'customer' | 'both';
  url: string;
}

export const ANIMAL_AVATAR_PRESETS: AnimalAvatarPreset[] = [
  {
    id: 'avatar_cat',
    name: 'Mèo Vàng Thông Thái',
    category: 'cute',
    emoji: '🐱',
    roleHint: 'both',
    url: catSvg
  },
  {
    id: 'avatar_shiba',
    name: 'Chó Shiba / Corgi Vui Vẻ',
    category: 'cute',
    emoji: '🐶',
    roleHint: 'customer',
    url: shibaSvg
  },
  {
    id: 'avatar_panda',
    name: 'Gấu Trúc Panda Dễ Thương',
    category: 'cute',
    emoji: '🐼',
    roleHint: 'customer',
    url: pandaSvg
  },
  {
    id: 'avatar_fox',
    name: 'Cáo Đỏ Thông Thái',
    category: 'brave',
    emoji: '🦊',
    roleHint: 'both',
    url: foxSvg
  },
  {
    id: 'avatar_lion_king',
    name: 'Sư Tử Vương Giả (Admin)',
    category: 'royal',
    emoji: '🦁',
    roleHint: 'admin',
    url: lionSvg
  },
  {
    id: 'avatar_tiger',
    name: 'Hổ Con Dũng Mãnh',
    category: 'brave',
    emoji: '🐯',
    roleHint: 'both',
    url: tigerSvg
  },
  {
    id: 'avatar_bunny',
    name: 'Thỏ Trắng Dễ Thương',
    category: 'cute',
    emoji: '🐰',
    roleHint: 'customer',
    url: bunnySvg
  },
  {
    id: 'avatar_owl_scholar',
    name: 'Cú Mèo Tri Thức (Học Giả)',
    category: 'royal',
    emoji: '🦉',
    roleHint: 'admin',
    url: owlSvg
  },
  {
    id: 'avatar_bear',
    name: 'Gấu Nâu Thân Thiện',
    category: 'gentle',
    emoji: '🐻',
    roleHint: 'customer',
    url: bearSvg
  },
  {
    id: 'avatar_penguin',
    name: 'Chim Cánh Cụt Bắc Cực',
    category: 'cute',
    emoji: '🐧',
    roleHint: 'customer',
    url: penguinSvg
  },
  {
    id: 'avatar_deer',
    name: 'Hươu Sao Hiền Lành',
    category: 'gentle',
    emoji: '🦌',
    roleHint: 'customer',
    url: deerSvg
  },
  {
    id: 'avatar_elephant',
    name: 'Voi Con Phúc Lành',
    category: 'gentle',
    emoji: '🐘',
    roleHint: 'both',
    url: elephantSvg
  },
  {
    id: 'avatar_monkey',
    name: 'Khỉ Con Tinh Nghịch',
    category: 'cute',
    emoji: '🐵',
    roleHint: 'customer',
    url: monkeySvg
  },
  {
    id: 'avatar_dragon',
    name: 'Rồng Vàng Uy Nghi (Linh Vật)',
    category: 'royal',
    emoji: '🐉',
    roleHint: 'admin',
    url: dragonSvg
  }
];

// Default animal avatar assignments
export const DEFAULT_ANIMAL_ADMIN_AVATAR = lionSvg; // Sư Tử Vương Giả
export const DEFAULT_ANIMAL_USER_AVATAR = catSvg; // Mèo Vàng Thông Thái
export const DEFAULT_ANIMAL_SCHOLAR_AVATAR = owlSvg; // Cú Mèo Tri Thức
export const DEFAULT_ANIMAL_SHIBA_AVATAR = shibaSvg; // Shiba Vui Vẻ

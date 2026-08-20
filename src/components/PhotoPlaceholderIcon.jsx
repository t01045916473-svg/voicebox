// 사진이 없을 때 쓰는 자리표시자 아이콘 (카드, 업로드 박스, 상세 화면 공용)
export default function PhotoPlaceholderIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.5" cy="10" r="1.6" fill="currentColor" />
      <path d="M3 16l5-4 4 3 3-2.5L21 16" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

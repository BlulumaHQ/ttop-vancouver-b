export function SteamRibbon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 40"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 30 C 30 6, 60 44, 90 20 S 150 -4, 180 22"
        stroke="#1D418F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M180 22 C 194 30, 210 12, 232 18"
        stroke="#CA3134"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

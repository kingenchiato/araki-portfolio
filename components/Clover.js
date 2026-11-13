export default function Clover({ className = "clover" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="7" y="7" width="50" height="50" fill="#9a3b32" />
      <rect x="11" y="11" width="42" height="42" fill="none" stroke="#f6efe4" strokeWidth="0.8" opacity="0.8" />
      <text
        x="32"
        y="43"
        textAnchor="middle"
        fontFamily="Shippori Mincho, serif"
        fontSize="28"
        fill="#fbf7f0"
      >
        秀
      </text>
    </svg>
  );
}

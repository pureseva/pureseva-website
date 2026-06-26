export default function Logo() {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="currentColor"
      role="img"
      aria-label="PureSeva symbol — a wheat stalk rising from a bowl"
    >
      <title>PureSeva</title>
      {/* Wheat stem */}
      <rect x="118" y="42" width="4" height="100" rx="2" />
      {/* Wheat grains: three paired leaves */}
      <path d="M118 54 C104 54 96 64 94 76 C108 76 116 70 118 62 Z" />
      <path d="M122 54 C136 54 144 64 146 76 C132 76 124 70 122 62 Z" />
      <path d="M118 76 C100 76 92 88 90 102 C106 102 116 94 118 84 Z" />
      <path d="M122 76 C140 76 148 88 150 102 C134 102 124 94 122 84 Z" />
      <path d="M118 100 C98 100 88 114 86 128 C104 128 116 118 118 108 Z" />
      <path d="M122 100 C142 100 152 114 154 128 C136 128 124 118 122 108 Z" />
      {/* Bowl: filled crescent with raised lip */}
      <path d="M36 138 L204 138 Q204 144 200 148 L188 148 Q176 204 120 204 Q64 204 52 148 L40 148 Q36 144 36 138 Z" />
    </svg>
  );
}

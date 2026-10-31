import type { ReactNode } from 'react';

// Inline SVG flags. Flag emoji do not render on Windows, so the roster draws its own.
// Simplified for icon size: no coats of arms, a reduced star field on the US canton.

const usStars = [1.4, 3.6, 5.8, 8, 10.2].flatMap((x, col) =>
  [1.4, 3.6, 5.8, 8, 10].map((y, row) => <circle key={`${col}-${row}`} cx={x + (row % 2) * 0.6} cy={y} r={0.45} fill="#fff" />),
);

const flags: Record<string, ReactNode> = {
  BO: (
    <>
      <rect width="30" height="20" fill="#007934" />
      <rect width="30" height="13.34" fill="#f9e300" />
      <rect width="30" height="6.67" fill="#d52b1e" />
    </>
  ),
  BR: (
    <>
      <rect width="30" height="20" fill="#009b3a" />
      <path d="M15 1.7 28.3 10 15 18.3 1.7 10Z" fill="#fedf00" />
      <circle cx="15" cy="10" r="5" fill="#002776" />
      <path d="M10.2 9.1Q15.2 7.6 19.9 10.7" fill="none" stroke="#fff" strokeWidth="0.9" />
    </>
  ),
  ES: (
    <>
      <rect width="30" height="20" fill="#aa151b" />
      <rect y="5" width="30" height="10" fill="#f1bf00" />
    </>
  ),
  FR: (
    <>
      <rect width="30" height="20" fill="#ce1126" />
      <rect width="20" height="20" fill="#fff" />
      <rect width="10" height="20" fill="#002654" />
    </>
  ),
  IL: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect y="1.9" width="30" height="3.1" fill="#0038b8" />
      <rect y="15" width="30" height="3.1" fill="#0038b8" />
      <path d="M15 6.4 18.1 11.8H11.9ZM15 13.6 18.1 8.2H11.9Z" fill="none" stroke="#0038b8" strokeWidth="0.75" />
    </>
  ),
  LT: (
    <>
      <rect width="30" height="20" fill="#c1272d" />
      <rect width="30" height="13.34" fill="#006a44" />
      <rect width="30" height="6.67" fill="#fdb913" />
    </>
  ),
  MX: (
    <>
      <rect width="30" height="20" fill="#ce1126" />
      <rect width="20" height="20" fill="#fff" />
      <rect width="10" height="20" fill="#006847" />
      <circle cx="15" cy="10" r="2.6" fill="#8c5a2b" />
      <path d="M12.4 11.2Q15 14.4 17.6 11.2" fill="none" stroke="#006847" strokeWidth="0.9" />
    </>
  ),
  EE: (
    <>
      <rect width="30" height="20" fill="#0072ce" />
      <rect y="6.67" width="30" height="13.33" fill="#000" />
      <rect y="13.34" width="30" height="6.66" fill="#fff" />
    </>
  ),
  PE: (
    <>
      <rect width="30" height="20" fill="#d91023" />
      <rect x="10" width="10" height="20" fill="#fff" />
    </>
  ),
  IT: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect width="10" height="20" fill="#009246" />
      <rect x="20" width="10" height="20" fill="#ce2b37" />
    </>
  ),
  LV: (
    <>
      <rect width="30" height="20" fill="#9e3039" />
      <rect y="8" width="30" height="4" fill="#fff" />
    </>
  ),
  HU: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6.67" fill="#ce2939" />
      <rect y="13.34" width="30" height="6.66" fill="#477050" />
    </>
  ),
  GB: (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0 30 20M30 0 0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0 30 20M30 0 0 20" stroke="#c8102e" strokeWidth="1.4" />
      <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0v20M0 10h30" stroke="#c8102e" strokeWidth="3.4" />
    </>
  ),
  ZA: (
    <>
      <rect width="30" height="20" fill="#002395" />
      <rect width="30" height="10" fill="#de3831" />
      <path d="M0 2 10 10 0 18M10 10h20" fill="none" stroke="#fff" strokeWidth="6.4" />
      <path d="M0 2 10 10 0 18M10 10h20" fill="none" stroke="#007a4d" strokeWidth="3.6" />
      <path d="M0 3.4 7 10 0 16.6Z" fill="#ffb612" />
      <path d="M0 5.6 4.6 10 0 14.4Z" fill="#000" />
    </>
  ),
  AU: (
    <>
      <rect width="30" height="20" fill="#00008b" />
      <rect width="15" height="10" fill="#012169" />
      <path d="M0 0 15 10M15 0 0 10" stroke="#fff" strokeWidth="1.8" />
      <path d="M7.5 0v10M0 5h15" stroke="#fff" strokeWidth="3" />
      <path d="M7.5 0v10M0 5h15" stroke="#cc142b" strokeWidth="1.6" />
      <circle cx="7.5" cy="15.5" r="2" fill="#fff" />
      <circle cx="22" cy="4" r="1" fill="#fff" />
      <circle cx="26" cy="9" r="1" fill="#fff" />
      <circle cx="22" cy="15" r="1" fill="#fff" />
      <circle cx="18" cy="9.5" r="1" fill="#fff" />
    </>
  ),
  US: (
    <>
      <rect width="30" height="20" fill="#b22234" />
      {[1, 3, 5, 7, 9, 11].map((stripe) => (
        <rect key={stripe} y={(stripe * 20) / 13} width="30" height={20 / 13} fill="#fff" />
      ))}
      <rect width="12" height={(7 * 20) / 13} fill="#3c3b6e" />
      {usStars}
    </>
  ),
};

export function Flag({ code }: { code: string }) {
  const art = flags[code.toUpperCase()];
  if (!art) return null;
  return (
    <svg className="uk-flag" viewBox="0 0 30 20" aria-hidden="true" focusable="false">
      {art}
    </svg>
  );
}

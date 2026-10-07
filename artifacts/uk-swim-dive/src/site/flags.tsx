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

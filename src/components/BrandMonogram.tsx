interface Props {
  className?: string;
}

export function BrandMonogram({ className }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="24" cy="24" r="21" fill="var(--color-primary)" />
      <circle cx="24" cy="24" r="18" stroke="var(--color-foreground)" strokeWidth="2" />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="25"
        fontWeight="800"
        fill="var(--color-foreground)"
      >
        P
      </text>
    </svg>
  );
}

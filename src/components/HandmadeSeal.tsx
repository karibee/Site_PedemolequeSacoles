interface Props {
  className?: string;
}

export function HandmadeSeal({ className }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="60" cy="60" r="54" fill="var(--color-background)" />
      <circle cx="60" cy="60" r="45" stroke="var(--color-primary)" strokeWidth="3" />
      <path
        d="M60 86s-30-17.5-30-39c0-10 8-18 18-18 6 0 10.5 3 12 7 1.5-4 6-7 12-7 10 0 18 8 18 18 0 21.5-30 39-30 39Z"
        stroke="var(--color-foreground)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

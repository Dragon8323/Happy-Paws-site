export default function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <ellipse cx="12" cy="15.5" rx="6" ry="5.2" />
      <ellipse cx="4.5" cy="10" rx="2.2" ry="2.8" />
      <ellipse cx="9.2" cy="6.2" rx="2.1" ry="2.7" />
      <ellipse cx="14.8" cy="6.2" rx="2.1" ry="2.7" />
      <ellipse cx="19.5" cy="10" rx="2.2" ry="2.8" />
    </svg>
  );
}

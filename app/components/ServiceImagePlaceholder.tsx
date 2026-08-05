import PawIcon from "./PawIcon";

const GRADIENTS = [
  "from-brand-blue to-brand-dark",
  "from-brand-teal to-brand-blue",
  "from-brand-dark to-brand-teal",
];

export default function ServiceImagePlaceholder({ index = 0 }: { index?: number }) {
  const gradient = GRADIENTS[index % GRADIENTS.length];
  return (
    <div
      className={`flex h-48 w-full items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}
    >
      <PawIcon className="h-12 w-12 text-white/85" />
    </div>
  );
}

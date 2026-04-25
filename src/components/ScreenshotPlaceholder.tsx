interface ScreenshotPlaceholderProps {
  index: number;
  label?: string;
}

export function ScreenshotPlaceholder({ index, label }: ScreenshotPlaceholderProps) {
  return (
    <div className="phone-frame mx-auto w-full max-w-[220px]">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-cream to-muted text-muted-foreground">
        <span className="text-xs font-medium uppercase tracking-widest opacity-60">
          {label ?? "Screenshot"}
        </span>
        <span className="font-display text-4xl font-extrabold text-ink/30">{index}</span>
      </div>
    </div>
  );
}

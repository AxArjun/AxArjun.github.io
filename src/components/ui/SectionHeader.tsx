interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeader({ title, subtitle, id }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      <h2
        id={id}
        className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-text-primary leading-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

const IslamicDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative py-6 overflow-hidden ${className}`}>
      <div className="flex items-center justify-center gap-3">
        {/* Left line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />

        {/* Left small diamond */}
        <svg width="10" height="10" viewBox="0 0 10 10" className="text-primary/40 shrink-0">
          <rect x="5" y="0" width="7" height="7" rx="1" transform="rotate(45 5 5)" fill="currentColor" />
        </svg>

        {/* Islamic geometric star pattern */}
        <svg width="48" height="48" viewBox="0 0 48 48" className="text-primary shrink-0">
          {/* Outer octagon */}
          <polygon
            points="24,2 33.8,6.2 41.8,14.2 46,24 41.8,33.8 33.8,41.8 24,46 14.2,41.8 6.2,33.8 2,24 6.2,14.2 14.2,6.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.3"
          />
          {/* Inner 8-pointed star */}
          <polygon
            points="24,6 28,18 40,18 30,26 34,38 24,30 14,38 18,26 8,18 20,18"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.5"
          />
          {/* Center diamond */}
          <rect x="24" y="17" width="10" height="10" rx="1" transform="rotate(45 24 24)" fill="currentColor" opacity="0.15" />
          {/* Center dot */}
          <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.6" />
        </svg>

        {/* Right small diamond */}
        <svg width="10" height="10" viewBox="0 0 10 10" className="text-primary/40 shrink-0">
          <rect x="5" y="0" width="7" height="7" rx="1" transform="rotate(45 5 5)" fill="currentColor" />
        </svg>

        {/* Right line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
      </div>
    </div>
  );
};

export default IslamicDivider;

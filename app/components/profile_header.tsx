export default function ProfileHeader() {
  return (
    <header className="mb-10 mt-12 w-full max-w-[900px] px-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/65">
        Applied ML Engineer & Data Scientist
      </p>
      <h1 className="font-editorial mt-3 text-4xl/tight md:text-6xl/tight">
        Konstantinos Kastritis
      </h1>
      <p className="mt-5 max-w-3xl text-base text-foreground/85 md:text-xl">
        I build production-focused machine learning and LLM systems that turn
        noisy data into measurable decisions.
      </p>
      <p className="mt-4 text-sm text-foreground/70 md:text-base">
        Open to Applied ML Engineer and Data Scientist roles.
      </p>
    </header>
  );
}

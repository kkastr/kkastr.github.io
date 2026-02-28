export default function ProfileHeader() {
  return (
    <header className="mb-8 mt-10 w-full max-w-[900px] px-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/60">
        Overview
      </p>
      <h1 className="mt-2 text-4xl/tight font-semibold md:text-5xl/tight">
        Konstantinos Kastritis
      </h1>
      <p className="mt-3 text-lg text-foreground/85 md:text-xl">
        Applied ML Engineer & Data Scientist
      </p>
      <p className="mt-4 max-w-3xl text-base text-foreground/82 md:text-lg">
        I build production-focused machine learning and LLM systems that turn
        noisy data into measurable decisions.
      </p>
      <p className="mt-4 text-sm text-foreground/68 md:text-base">
        Open to Applied ML Engineer and Data Scientist roles.
      </p>
    </header>
  );
}

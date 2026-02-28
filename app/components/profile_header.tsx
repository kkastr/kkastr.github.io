export default function ProfileHeader() {
  return (
    <header className="mb-6 mt-10 px-4 text-center">
      <h1 className="text-3xl/tight font-bold md:text-5xl/tight">
        Konstantinos Kastritis
      </h1>
      <p className="mt-2 text-lg text-foreground/90 md:text-2xl">
        Applied ML Engineer & Data Scientist
      </p>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/80 sm:text-base md:text-lg">
        I build production-focused machine learning and LLM systems that turn
        noisy data into measurable decisions.
      </p>
      <p className="mt-3 text-sm text-primary md:text-base">
        Open to Applied ML Engineer and Data Scientist roles.
      </p>
    </header>
  );
}

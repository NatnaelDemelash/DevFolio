import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground">Portfolio</h1>
        <p className="text-muted-foreground mt-2">
          Coming soon — building section by section.
        </p>
      </div>
    </div>
  );
}

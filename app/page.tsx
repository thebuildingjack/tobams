import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-dvh flex flex-col items-center font-nunito">
      <Navbar />
      <Hero />
    </div>
  );
}

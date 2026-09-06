import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div className="relative min-h-dvh flex flex-col items-center font-nunito">
      <Navbar />
      <Hero />
      <WhatWeDo />
    </div>
  );
}

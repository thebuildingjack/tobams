import Hero from "@/components/Hero";
import LearningManagementSystem from "@/components/LearningManagementSystem";
import ManagementDevProgram from "@/components/ManagementDevProgram";
import Navbar from "@/components/Navbar";
import TransformationHub from "@/components/TransformationHub";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div className="relative min-h-dvh flex flex-col items-center font-nunito">
      <Navbar />
      <Hero />
      <LearningManagementSystem />
      <WhatWeDo />
      <ManagementDevProgram />
      <TransformationHub />
    </div>
  );
}

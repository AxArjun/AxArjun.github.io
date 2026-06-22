import { Hero } from "@/components/sections/Hero";
import { QuickSnapshot } from "@/components/sections/RecruiterMetrics";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { TechnicalSkills } from "@/components/sections/TechnicalSkills";
import { Education } from "@/components/sections/Education";
import { Leadership } from "@/components/sections/Leadership";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickSnapshot />
      <Experience />
      <Projects />
      <TechnicalSkills />
      <Education />
      <Leadership />
      <CurrentlyBuilding />
      <Contact />
    </>
  );
}

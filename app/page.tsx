import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { Skills } from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Journey from "@/components/Journey";
import AboutGrid from "@/components/AboutGrid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <AboutGrid/>
        <Skills />
        <RecentProjects />
        <Journey/>
        <Footer/>
      </div>
    </main>
  );
}

import { RESUME_DATA } from "@/data/resume";
import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const data = RESUME_DATA;
  return (
    <>
      <TopNav data={data} />
      <Hero data={data} />
      <Credentials />
      <About data={data} />
      <Experience data={data} />
      <Projects data={data} />
      <Skills data={data} />
      <Contact data={data} />
      <Footer data={data} />
    </>
  );
}

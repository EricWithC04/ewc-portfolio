import { Navbar } from "@/components/customs/Navbar/Navbar";
import { About } from "@/sections/About/About";
import { Hero } from "@/sections/Hero/Hero";
import { Projects } from "@/sections/Projects/Projects";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
    </div>
  );
}

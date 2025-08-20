import { Navbar } from "@/components/customs/Navbar/Navbar";
import { Hero } from "@/sections/Hero/Hero";
import { Projects } from "@/sections/Projects/Projects";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
    </div>
  );
}

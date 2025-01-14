import Image from "next/image";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HomeSkeleton from "./Components/Skeletons/HomeSkelton";
import ContactSkeleton from "./Components/Skeletons/ContactSkelton";
import AboutSkeleton from "./Components/Skeletons/AboutSkelton";
import ProjectSkeleton from "./Components/Skeletons/ProjectSkelton";
import ServiceSkeleton from "./Components/Skeletons/ServiceSkelton";
import SkillsSkeleton from "./Components/Skeletons/SkillSkelton";

const HomeContent = dynamic(()=>import('./Components/Home'),{
ssr:false,
loading:()=>(
  <div>
    <HomeSkeleton/>
  </div>
),
})
const About = dynamic(()=>import('./Components/About'),{
  ssr: false,
  loading: () => (
    <div>
      <AboutSkeleton />
    </div>
  ),
})
const Services = dynamic(()=>import("./Components/Services"),{
  ssr:false,
  loading:()=>(
    <div>
      <ServiceSkeleton/>
    </div>
  )
})
const Contact = dynamic(()=>import("./Components/Contact"),{
  ssr:false,
  loading:()=>(
    <div>
      <ContactSkeleton/>
    </div>
  )
})
const Skills = dynamic(()=>import("./Components/Skills"),{
  ssr:false,
  loading:()=>(
    <div>
      <SkillsSkeleton/>
    </div>
  )
})
const Project = dynamic(()=>import('./Components/Project'),{
  ssr: false,
  loading: () => (
    <div>
      <ProjectSkeleton />
    </div>
  ),
})

export default function Home() {
  return (
  <div className="w-full text-white">
    <HomeContent/>
    <About/>
    <Services/>
    <Skills/>
    <Project/>
    <Contact/>
  </div>
  );
}

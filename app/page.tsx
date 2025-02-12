"use client";
//import Image from "next/image";
//import type { Metadata } from "next";
import dynamic from "next/dynamic";
//import HomeSkeleton from "./Components/Skeletons/HomeSkelton";
import ContactSkeleton from "@/app/Components/Skeletons/ContactSkelton";
import AboutSkeleton from "@/app/Components/Skeletons/AboutSkelton";
import ProjectSkeleton from "@/app/Components/Skeletons/ProjectSkelton";
import ServiceSkeleton from "@/app/Components/Skeletons/ServiceSkelton";
import SkillsSkeleton from "@/app/Components/Skeletons/SkillSkelton";
import HomeSkeleton from "@/app/Components/Skeletons/HomeSkelton";

const HomeContent = dynamic(()=>import('@/app/Components/Home'),{
ssr:false,
loading:()=>(
  <div>
    <HomeSkeleton/>
  </div>
),
})
const About = dynamic(()=>import('@/app/Components/About'),{
  ssr: false,
  loading: () => (
    <div>
      <AboutSkeleton />
    </div>
  ),
})
const Services = dynamic(()=>import("@/app/Components/Services"),{
  ssr:false,
  loading:()=>(
    <div>
      <ServiceSkeleton/>
    </div>
  )
})
const Contact = dynamic(()=>import("@/app/Components/Contact"),{
  ssr:false,
  loading:()=>(
    <div>
      <ContactSkeleton/>
    </div>
  )
})
const Skills = dynamic(()=>import("@/app/Components/Skills"),{
  ssr:false,
  loading:()=>(
    <div>
      <SkillsSkeleton/>
    </div>
  )
})
const Project = dynamic(()=>import('@/app/Components/Project'),{
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

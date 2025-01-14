import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="w-full bg-[#1E293B]">
      <div className="max-w-[1340px] mx-auto container lg:p-10 p-4">
        <div className="text-4xl flex flex-col justify-center items-center gap-1">
          <h1 className="">About Me</h1>
          <p className="border-b-2 w-44 border-green-500"></p>
        </div>
        <div className="w-full flex flex-col lg:flex-row pt-12 lg:space-x-10">
          <div className="w-full lg:w-6/12 mb-10 lg:mb-0" data-aos="fade-right">
            <Image
              src="/Profile.png"
              alt="hero"
              width={700}
              height={700}
              className="mx-auto"
              placeholder="empty"
            />
          </div>
          <div className="w-full lg:w-6/12 flex flex-col gap-6">
            <h1 className="text-4xl font-semibold">
              Hi There! I'm Hajra Buksh
            </h1>
            <h2 className="text-2xl text-green-500">Web Developer</h2>
            {/* Description */}
            <p className="text-lg text-gray-400">
              I'm Hajra, a skilled Web Developer with 2+ years of experience,
              proficient in HTML, CSS, JavaScript, TypeScript, React, Next.js,
              Tailwind CSS, and API Integration. I excel at creating
              high-quality, user-centric web experiences with a strong
              commitment to code quality and transparency, ensuring client
              satisfaction.
            </p>
            {/* Bio Data */}
            <div className="flex flex-col gap-4 text-lg text-gray-400">
              {/* <div className="flex gap-9">
                <p className="font-semibold">Birthday:</p>
                <p>Jun 20, 1998</p>
              </div> */}
              <div className="flex gap-12">
                <p className="font-semibold">Phone:</p>
                <p>+92 321 1232894</p>
              </div>
              <div className="flex gap-14">
                <p className="font-semibold">Email:</p>
                <p className="">hajra.1601059@gmail.com</p>
              </div>
              <div className="flex gap-14">
                <p className="font-semibold">From:</p>
                <p>Pakistan</p>
              </div>
              <div className="flex gap-3">
                <p className="font-semibold">Language:</p>
                <p>Urdu, English</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Freelancer:</p>
                <p>Availble</p>
              </div>
            </div>
             {/* CV/Resume */}
            <div className="mt-3">
              <a
                href="/updated_Resume.pdf"
                download="Hajra's_Resume.pdf"
              >
                <button className="bg-green-500 text-[#112A46] font-semibold text-lg p-4 py-2 rounded-full hover:-translate-y-3 transition-all duration-500">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

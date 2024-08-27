import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="lg:h-screen">
        <div className="pt-5 pb-5 grid gap-5 lg:grid-cols-3" >
            <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-5 relative h-[30rem]">
                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            
                <EvervaultCard text="Web Development" />
        
                <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                I create dynamic and responsive web projects using the React framework, delivering modern and interactive user experiences.
                </h2>
            </div>
            
            <div>
              <h1 className="text-white text-5xl flex justify-center">About Me</h1>
              <div className="flex justify-center">
                <Image
                      src="/assets/me.png"
                      alt="Anti Phish"
                      height={150}
                      width={150}
                      className="rounded-lg  mt-4"
                  />
              </div>
              
              <p className="text-white flex justify-center m-10 p-5 border border-white rounded-lg shadow-lg">My name is Krishna Prasad, a Computer Science and Engineering graduate from Vellore Institute of Technology, with a deep passion for web development and data science.</p>

              
            </div>
            
            <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        
            <EvervaultCard text="Data Science" />
    
            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
            I work on Artificial Intelligence, Machine learning, and Data analytics projects.
            </h2>
            </div>
        </div>
      </div>
  );
}

export default About;

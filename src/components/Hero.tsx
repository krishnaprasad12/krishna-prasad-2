"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {FaEnvelopeSquare} from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { Cover } from "@/components/ui/cover";

const Hero = () => {
  
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center p-10">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("text-7xl text-white relative z-20")}>
        <Cover>Krishna Prasad</Cover> 
      </h1>
      <div className="inline-flex mt-2 z-20">
          <a className="text-white" href="https://www.linkedin.com/in/krishnaprasad24/" target="_blank">
          <FaLinkedin className="h-12 w-12 mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110  duration-300 ..." />
        </a>

        <a className="text-white" href="https://github.com/krishnaprasad12" target="_blank">
          <FaGithubSquare className="h-12 w-12 mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110  duration-300 ..." />
        </a>

        <a className="text-white" href="mailto:kparjun12@gmail.com" target="_blank">
          <FaEnvelopeSquare className="h-12 w-12 mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110  duration-300 ..." />
        </a>

        <a className="text-white" href="https://www.instagram.com/krishna_prasad_2324/" target="_blank">
          <FaInstagramSquare className="h-12 w-12 mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110  duration-300 ..." />
        </a>
        <a className="text-white" href="https://x.com/killerkp21o" target="_blank">
          < RiTwitterXLine  className="h-12 w-12 mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110  duration-300 ..." />
        </a>
        <a className="text-white" href="https://leetcode.com/u/krishnaprasad24/" target="_blank">
          < SiLeetcode  className="h-12 w-12 mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110  duration-300 ..." />
        </a>
        </div>
        <p className="text-center text-xl mt-2  relative z-20">
          <a href="/assets/resume.pdf" className="inline-block px-6 py-3 text-neutral-300 bg-gray-800 border border-gray-700 rounded-lg shadow-md transition-transform duration-200 ease-in-out transform hover:bg-gray-700 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" target="_blank">Resume</a>
        </p>
    </div>
  );
}

export default Hero;

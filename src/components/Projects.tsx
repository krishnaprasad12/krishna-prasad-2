"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

function Projects() {
  return (
    <>
    <div id="projects" className="mb-10">
        <h1 className="text-white flex justify-center text-5xl">
            Projects
        </h1>
        <div  className="grid lg:grid-cols-3 gap-20 pt-10 lg:pl-20 lg:pr-20">
            <div className="flex items-center justify-center ">
            <PinContainer
                title="Anti Phish"
                href="https://github.com/krishnaprasad12/Phishing-URL-Detector"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Anti Phish - Phishing URL Detector
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                    Developed a 2-level web plugin to prevent phishing, combining URL filtering with machine learning techniques like logistic regression and tokenization for enhanced threat detection.
                    </span>
                </div>
                <Image
                    src="/assets/phishing.jpg"
                    alt="Anti Phish"
                    height={100}
                    width={200}
                    className="w-full rounded-lg mt-4"
                />
                </div>
            </PinContainer>
            </div>

            <div className="flex items-center justify-center ">
            <PinContainer
                title="PromptCraft"
                href="https://github.com/krishnaprasad12/prompt-craft-ai"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    PromptCraft
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                    A dynamic platform using Next.js that empowers users to create and share thought-provoking prompts on various topics, featuring a robust tech stack including React, Tailwind CSS, Google Cloud, and MongoDB for seamless user experience and efficient data management.
                    </span>
                </div>
                <Image
                    src="/assets/prompt.png"
                    alt="PromptCraft"
                    height={200}
                    width={200}
                    priority
                    className="w-full rounded-lg mt-4"
                />
                </div>
            </PinContainer>
            </div>

            <div className="flex items-center justify-center ">
            <PinContainer
                title="Tasveer"
                href="https://github.com/krishnaprasad12/tasveer"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Tasveer
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                    Developed a MERN stack application named Tasveer, featuring dynamic form handling and AI-driven image generation through the OpenAI API, with a scalable backend deployed on Render and frontend hosted on Netlify.
                    </span>
                </div>
                <Image
                    src="/assets/tasveer.png"
                    alt="Tasveer"
                    height={200}
                    width={200}
                    priority
                    className="w-full rounded-lg mt-4"
                />
                </div>
            </PinContainer>
            </div>

            <div className="flex items-center justify-center ">
            <PinContainer
                title="MCI Prediction"
                href="https://github.com/krishnaprasad12/Predicting-Mild-Cognitive-Impariment-Through-Hippocampus-Segmentation"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    MCI Prediction
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                    Developed a deep learning-based classification system for Mild Cognitive Impairment (MCI) using MRI images, featuring advanced hippocampal segmentation and multi-model feature extraction to achieve up to 95.6% accuracy in diagnosing cognitive states.
                    </span>
                </div>
                <Image
                    src="/assets/brain.jpg"
                    alt="Brain"
                    height={200}
                    width={200}
                    priority
                    className="w-full rounded-lg mt-4"
                />
                </div>
            </PinContainer>
            </div>

            <div className="flex items-center justify-center ">
            <PinContainer
                title="Enhance Image Captioning"
                href="https://github.com/krishnaprasad12/Enhanced-Image-Captioning-with-COCO-BLIP"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Enhance Image Captioning
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                    This study explores how advanced image processing techniques enhance captioning accuracy using the COCO dataset and the BLIP framework, with Guided Image Filtering showing the most significant improvements.
                    </span>
                </div>
                <Image
                    src="/assets/caption.jpg"
                    alt="Dashboard"
                    height={200}
                    width={200}
                    priority
                    className="w-full rounded-lg mt-4"
                />
                </div>
            </PinContainer>
            </div>

            <div className="flex items-center justify-center ">
            <PinContainer
                title="Sales Insights Dashboard"
                href="https://github.com/krishnaprasad12/Sales-Insights-Project"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    PowerBI Sales Insights Dashboard
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                    Developed a user-friendly Power BI dashboard for AtliQ Hardware to streamline sales data management and decision-making, including an integrated email feature for efficient communication and reporting.
                    </span>
                </div>
                <Image
                    src="/assets/dash.png"
                    alt="Image"
                    height={200}
                    width={200}
                    priority
                    className="w-full rounded-lg mt-4"
                />
                </div>
            </PinContainer>
            </div>
        </div>
        <footer className=" text-white py-4 mt-10">
        <div className="container mx-auto text-center">
            <p>&copy; 2024 Krishna Prasad. All Rights Reserved.</p>
            <p>
                <a href="https://github.com/krishnaprasad12" className="text-blue-400 hover:underline">
                    GitHub
                </a> | 
                <a href="https://www.linkedin.com/in/krishnaprasad24/" className="text-blue-400 hover:underline">
                    LinkedIn
                </a> | 
                <a href="mailto:your-email@example.com" className="text-blue-400 hover:underline">
                    Email
                </a>
            </p>
        </div>
</footer>
    </div>
    </>
  );
}

export default Projects;

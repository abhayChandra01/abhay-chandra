import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Typewriter from "typewriter-effect";
import { TbBrandNextjs } from "react-icons/tb"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiRedux, SiMysql, SiFirebase } from "react-icons/si"
import { DiJavascript1, DiMongodb } from "react-icons/di"
import { AiFillCodeSandboxCircle } from "react-icons/ai"
import { TiHtml5 } from "react-icons/ti"
import SocialSection from '../SocialSection/SocialSection';

export default function About() {

    return (
        <motion.div
        
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}

        >

            <div className='justify-center min-h-screen xs:flex-wrap md:flex'>
                <motion.div 
                initial={{ y: -250 }}
                animate={{ y: -10 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                className='bg-black w-full sm:min-h-[70rem] md:min-h-[100%] min-h-[45rem] px-[8px] py-10 flex flex-col justify-center items-center'>
                    <div className='flex flex-col'>
                        <div className='flex items-center '>
                            <hr className="h-[5px] bg-[#eb83f8] border-0 w-1/4 mx-2" />

                            <h1 className='md:text-[1.5vw] text-[4vw] text-center  text-[#e8e8e8] font-sans'>
                                A bit about me
                            </h1>
                        </div>

                        <h1 className='md:text-[3vw] text-[7.5vw] text-center font-extrabold text-[#e8e8e8] font-sans'>
                            I am a Software Engineer
                        </h1>
                        <h1 className='md:text-[2vw] text-[6vw] text-left text-[#e8e8e8] font-sans'>
                            at Xelpmoc Design And Tech Ltd.
                        </h1>
                        <h1 className='md:text-[1.5vw] text-[4vw] text-left text-[#e8e8e8] font-sans'>
                            Bangalore
                        </h1>
                        <div>
                            <hr className="h-[5px] bg-[#eb83f8] border-0 w-1/2 mt-4 ml-2" />
                        </div>

                    </div>
                    <div className='flex items-center justify-center md:mx-12 lg:mx-24 xl:mx-32 mx-4'>
                        <div className='w-full mt-3 flex items-center justify-center'>
                            <h3 className='md:text-[1.2vw] text-[4vw] text-left  text-[#e8e8e8] font-sans'>
                                I belong to Shahjahanpur, Uttar Pradesh. I did my schooling from CBSE Board & currently, I am persuing Bachelor Of Technology from ITM Gwalior in the field of Information Technology.<br />
                                I am seeking a challenging position in a reputed organization where I can learn new skills, expand my knowledge, and leverage my learnings as a developer.<br />
                                Proficient in React.js , Node.js & currently exploring Next.js.<br />
                                I am a highly self-motivated web developer who spends most of his time building applications, learning new things and keeping myself up-to-date with the latest technologies.
                            </h3>
                        </div>
                    </div>

                    <div className='flex items-center justify-start w-11/12 md:w-3/4 mt-4 ml-4'>
                        <SocialSection />
                    </div>
                </motion.div>
                <div className='bg-[#251170] w-full min-h-[40rem] md:min-h-[100%] flex flex-col justify-center items-center'>
                    <div className='flex flex-col w-5/6'>
                        <div className='flex items-center '>
                            <hr className="h-[5px] bg-[#eb83f8] border-0 w-1/4 mx-2" />

                            <h1 className='md:text-[1.5vw] text-[4vw] text-center  text-[#e8e8e8] font-sans'>
                                My Skills
                            </h1>
                        </div>
                        <div className='flex items-start flex-col space-y-2 '>
                            <h1 className='md:text-[1.5vw] text-[4vw] text-center flex items-center text-[#e8e8e8] font-sans'>
                                <TbBrandNextjs color='white' size={35} className='mr-4' />Next.js
                                <div
                                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full"
                                >
                                    Intermediate
                                </div>
                            </h1>
                            <h1 className='md:text-[1.5vw] text-[4vw] text-center  flex items-center text-[#e8e8e8] font-sans'>
                                <FaReact color='white' size={35} className='mr-4' />React.js
                                <div
                                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full"
                                >
                                    Advanced
                                </div>
                            </h1>
                            <h1 className='md:text-[1.5vw] text-[4vw] text-center  flex items-center text-[#e8e8e8] font-sans'>
                                <SiRedux color='white' size={35} className='mr-4' /> Redux.js Toolkit
                                <div
                                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full"
                                >
                                    Intermediate
                                </div>
                            </h1>
                            <h1 className='md:text-[1.5vw] text-[4vw] text-center  flex items-center text-[#e8e8e8] font-sans'>
                                <FaNodeJs color='white' size={35} className='mr-4' /> Node.js
                                <div
                                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full"
                                >
                                    Intermediate
                                </div>
                            </h1>
                            <h1 className='md:text-[1.5vw] text-[4vw] text-center  flex items-center text-[#e8e8e8] font-sans'>
                                <DiJavascript1 color='white' size={35} className='mr-4' /> JavaScript
                                <div
                                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full"
                                >
                                    Advanced
                                </div>
                            </h1>
                            <h1 className='md:text-[1.5vw] text-[4vw] text-center  flex items-center text-[#e8e8e8] font-sans'>
                                <TiHtml5 color='white' size={35} className='mr-4' /> HTML/CSS
                                <div
                                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full"
                                >
                                    Advanced
                                </div>
                            </h1>
                            <h1 className='md:text-[1.5vw] text-[4vw] text-center  flex items-center text-[#e8e8e8] font-sans'>
                                <AiFillCodeSandboxCircle color='white' size={35} className='mr-4' />C
                                <div
                                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full"
                                >
                                    Intermediate
                                </div>
                            </h1>
                            <h1 className='md:text-[1.5vw] text-[4vw] text-center  flex items-center text-[#e8e8e8] font-sans'>
                                <AiFillCodeSandboxCircle color='white' size={35} className='mr-4' />C++
                                <div
                                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full"
                                >
                                    Intermediate
                                </div>
                            </h1>
                            <h1 className='md:text-[1.5vw] text-[4vw] text-center  flex items-center text-[#e8e8e8] font-sans'>
                                <DiMongodb color='white' size={35} className='mr-4' />MongoDB
                                <div
                                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full"
                                >
                                    Intermediate
                                </div>
                            </h1>
                            <h1 className='md:text-[1.5vw] text-[4vw] text-center  flex items-center text-[#e8e8e8] font-sans'>
                                <SiMysql color='white' size={35} className='mr-4' /> MySQL
                                <div
                                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full"
                                >
                                    Beginner
                                </div>
                            </h1>
                            <h1 className='md:text-[1.5vw] text-[4vw] text-center  flex items-center text-[#e8e8e8] font-sans'>
                                <SiFirebase color='white' size={35} className='mr-4' /> FireBase
                                <div
                                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full"
                                >
                                    Beginner
                                </div>
                            </h1>
                        </div>

                    </div>
                </div>
            </div>


        </motion.div>
    )
}

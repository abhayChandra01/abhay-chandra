import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import useWindowSize from "../Dimensions/useWindowSize";



export default function NewWork() {

    const windowSize = useWindowSize();

    const items = [
        {
            title: "Software Engineer",
            company: "Xelpmoc Design And Tech Ltd.",
            location: "Bangalore",
            company_url: "https://www.xelpmoc.in/",
            description:
                "Developed and maintained code for in-house and client websites primarily using Next.js, React.js, Redux.js toolkit, JavaScript, and Material UI, Tailwind CSS. Also, manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.",
            tags: [
                "Next.js",
                "React.js",
                "Redux.js Toolkit",
                "JavaScript",
                "HTML/CSS",
            ],
            duration: "< Dec 2022 - Present >",
            id: 0,
        },
        {
            title: "Full Stack Developer Intern",
            company: "Xelpmoc Design And Tech Ltd.",
            location: "Bangalore",
            company_url: "https://www.xelpmoc.in/",
            description:
                "Worked on an US-based industry-level project built in React.js and also used Redux.js toolkit. Also, developed features from the scratch, unit tested & delivered within the deadline.",
            tags: ["React.js", "Redux.js Toolkit", "JavaScript", "HTML/CSS"],
            duration: "< Aug 2022 - Dec 2022 >",
            id: 1,
        },
        {
            title: "Full Stack Developer Intern",
            company: "Aurbitus",
            location: "Gwalior",
            company_url: "https://aurbitus.com/",
            description:
                "Built a MERN Stack Project from scratch for a MLM-based client Service Point India (SPI), with an E-Commerce layout, also lead the team of 2 members & have hands on experience on React.js & Node.js.",
            tags: ["React.js", "Node.js", "MongoDB", "JavaScript", "HTML/CSS"],
            duration: "< Jan 2022 - Mar 2022 >",
            id: 2,
        },
        {
            title: "Full Stack Developer Intern",
            company: "Numeric Infosystem Pvt. Ltd.",
            location: "Gwalior",
            company_url: "https://www.numericinfosystems.com/",
            description:
                "Built Student Marksheet Management System & Product Management System using Node.js.",
            tags: ["Node.js", "MySQL", "JavaScript", "HTML/CSS"],
            duration: "< July 2021 - Dec 2021 >",
            id: 3,
        }
    ];
    const height = windowSize.width > 767 ? 430 : windowSize.width > 638 ? 550 : 600
    const padding = 10;
    const size = 150;


    const scrollY = useMotionValue(0);

    function getHeight(items) {
        const totalHeight = items.length * height;
        const totalPadding = (items.length - 1) * padding;
        const totalScroll = totalHeight + totalPadding;
        return totalScroll;
    }

    const width = useTransform(
        scrollY,
        [0, -getHeight(items) + size],
        ["calc(0% - 0px)", "calc(100% - 40px)"]
    );

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{ y: -250 }}
                animate={{ y: -10 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                className="justify-center min-h-screen flex items-center flex-col">

                <motion.div
                    className="md:w-[700px] sm:w-[450px] w-[300px] mt-20 h-[500px]"
                    style={{
                        // width: 700,
                        // height: 500,
                        borderRadius: 30,
                        overflow: "hidden",
                        position: "relative",
                        transform: "translateZ(0)",
                        cursor: "grab"
                    }}
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        style={{
                            width: 150,
                            height: getHeight(items),
                            y: scrollY
                        }}
                        drag="y"
                        dragConstraints={{
                            top: -getHeight(items) + size,
                            bottom: 0
                        }}
                    >
                        {items.map((work, index) => {
                            // ${index % 2 != 0 ? 'bg-[#251170]' : ''}
                            return (
                                <motion.div
                                    className={`md:w-[700px]  sm:w-[450px] w-[300px] p-6  ${index % 2 != 0 ? 'bg-[#251170] text-white' : 'bg-white text-black'} `}

                                    style={{
                                        // width: 700,
                                        height: height,
                                        borderRadius: 20,
                                        // backgroundColor: "#fff",
                                        position: "absolute",
                                        top: (height + padding) * index
                                    }}
                                    key={index}
                                >
                                    <div className="w-full flex flex-wrap">
                                        <div className="w-full lg:w-1/2">
                                            <h1 className="sm:text-2xl text-xl font-sans font-bold uppercase">
                                                {work.title}
                                            </h1>
                                            <Link
                                                href={work.company_url}
                                                target="_blank"
                                                className="sm:text-xl text-lg font-sans uppercase text-blue-300 underline underline-offset-4"
                                            >
                                                {work.company}
                                            </Link>
                                            <h2 className="sm:text-lg text-base font-sans text-left uppercase mt-2">
                                                {work.location}
                                            </h2>

                                        </div>
                                        <div className="w-full lg:w-1/2">
                                            <h2 className="sm:text-xl text-lg font-sans text-left lg:text-right uppercase">
                                                {work.duration}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="sm:text-lg text-base font-sans ">{work.description}</h3>
                                    </div>
                                    <h2 className="sm:text-xl text-lg mt-4 font-sans text-left font-bold underline underline-offset-4 uppercase">
                                        SKILLS USED
                                    </h2>
                                    <div className="w-full flex flex-wrap">
                                        {work.tags.map((tag, index) => (
                                            <div
                                                key={index}
                                                className="text-xs mt-4 inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full"
                                            >
                                                {tag}
                                            </div>
                                        ))}
                                    </div>


                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
                <motion.div
                    style={{
                        width: width,
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: "#fff",
                        position: "absolute",
                        bottom: 20,
                        left: 20
                    }}
                />
            </motion.div>
        </motion.div>
    );
}

// function getHeight(items) {
//     const totalHeight = items.length * height;
//     const totalPadding = (items.length - 1) * padding;
//     const totalScroll = totalHeight + totalPadding;
//     return totalScroll;
// }

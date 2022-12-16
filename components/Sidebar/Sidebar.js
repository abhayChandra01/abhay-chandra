import { useState } from "react";
import { FiMenu } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"
import { motion } from "framer-motion";
import About from "../About/About";
import Hero from "../Hero/Hero";
import SocialSection from "../SocialSection/SocialSection";
import Work from "../Work/Work";

const Sidebar = (props) => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {showSidebar ? (
                <button
                // className="flex text-4xl items-center cursor-pointer fixed right-10 top-6 z-50"
                // onClick={() => setShowSidebar(!showSidebar)}
                >
                    <IoMdClose
                        color="white"
                        size={40}
                        onClick={() => setShowSidebar(!showSidebar)}

                        className="flex items-center cursor-pointer fixed right-10 top-6 z-50"
                    />
                </button>
            ) : (
                // <svg
                //   onClick={() => setShowSidebar(!showSidebar)}
                //   className="fixed bg-white  z-30 flex items-center cursor-pointer right-10 top-6"
                //   fill="#2563EB"
                //   viewBox="0 0 100 80"
                //   width="40"
                //   height="40"
                // >
                //   <rect width="100" height="10"></rect>
                //   <rect y="30" width="100" height="10"></rect>
                //   <rect y="60" width="100" height="10"></rect>
                // </svg>
                <button>
                    <FiMenu
                        color="white"
                        size={40}
                        onClick={() => setShowSidebar(!showSidebar)}
                        className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
                    />
                </button>
            )}

            <div
                className={`flex flex-col items-center justify-center top-0 space-y-24 right-0 md:w-[35vw] w-full bg-black bg-opacity-60 border-l-2 border-r-0 border-t-0 border-b-0 border-white p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.2 }}
                    onClick={() => {
                        setShowSidebar(!showSidebar)
                        props.newPage(<Hero />)
                    }}
                >
                    <h3 className="text-3xl tracking-widest font-light font-sans text-white">
                        HOME
                    </h3>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.2 }}
                    onClick={() => {
                        setShowSidebar(!showSidebar)
                        props.newPage(<About />)
                    }}
                >
                    <h3 className="text-3xl tracking-widest font-light font-sans text-white">
                        ABOUT
                    </h3>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.2 }}
                    onClick={() => {
                        setShowSidebar(!showSidebar)
                        props.newPage(<Work />)
                    }}
                
                >
                    <h3 className="text-3xl tracking-widest font-light font-sans text-white">
                        WORK
                    </h3>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.2 }}
                >
                    <h3 className="text-3xl tracking-widest font-light font-sans text-white">
                        CONTACT
                    </h3>
                </motion.button>

                <div>
                    <SocialSection />   
                </div>

            </div>
        </>
    );
};

export default Sidebar;
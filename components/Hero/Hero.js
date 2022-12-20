import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Transitions from "../Transitions/Transitions";

// ABHAY CHANDRA

export default function Hero() {
  return (
    <Transitions>
      <div className="justify-center px-[6vw] pb-20 min-h-screen xs:flex-wrap md:flex">
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="bg-[#251170] w-full md:min-h-[80%] min-h-[30rem] flex justify-center items-center"
        >
          <div className="flex flex-col">
            <div className="flex items-center float-left">
              <hr className="h-[5px] bg-[#eb83f8] border-0 w-[6vw] mx-2" />

              <h1 className="md:text-[2vw] text-[4vw] text-left  text-[#e8e8e8] font-sans">
                Hello I&apos;m
              </h1>
            </div>

            <h1 className="md:text-[4vw] text-[8vw] text-center font-extrabold text-[#e8e8e8] font-sans uppercase">
              Abhay Chandra
            </h1>
            <h1 className="md:text-[2vw] text-[6vw] text-left text-[#e8e8e8] font-sans">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Full Stack Web Developer")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Software Engineer")
                    .start();
                }}
              />
            </h1>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/files/resume.pdf";
              }}
              className="bg-black border-double border-white border-2 mt-8 p-2 rounded-tr-lg rounded-bl-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300  md:w-[17vw] w-[35vw] h-12 text-[#e8e8e8] hover:text-[#251170] font-sans font-light text-xl"
            >
              R E S U M E
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 250 }}
          animate={{ x: 10 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="bg-[#e8e8e8] w-full md:min-h-[80%] min-h-[30rem] flex justify-center items-center"
        >
          HELLO
        </motion.div>
      </div>
      {/* </motion.div> */}
    </Transitions>
  );
}

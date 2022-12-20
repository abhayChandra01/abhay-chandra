import React from 'react'
import { motion } from "framer-motion"
import SocialSection from '../SocialSection/SocialSection'

export default function Contact() {
    return (
        <motion.div

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}

        >
            <div className='min-h-screen flex flex-wrap justify-center'>
                <motion.div
                    initial={{ y: -250 }}
                    animate={{ y: -10 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                    className='bg-black w-full sm:min-h-[70rem] md:min-h-[100%] min-h-[45rem] px-[8px] pt-32 flex flex-col my-auto'>

                        <div className='my-auto mx-auto w-3/4 flex flex-col space-y-10 items-center'>
                            <h1 className='text-white font-bold font-sans text-center text-5xl'>Let&apos;s Connect !</h1>
                            <hr className="h-[5px] bg-[#eb83f8] border-0 w-[12vw] mx-auto mt-2" />

                            <SocialSection size={45} />
                            <h1 className='text-white font-bold font-sans text-center text-2xl'>Mail : a4abhaychandra@gmail.com</h1>


                        </div>

                </motion.div>
            </div>

        </motion.div>
    )
}

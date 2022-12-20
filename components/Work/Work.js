import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Work() {


  const leftWorks = [
    {
      title: 'Software Engineer',
      type: 'Full-Time',
      company: 'Xelpmoc Design And Tech Ltd.',
      location: 'Bangalore',
      company_url: 'https://www.xelpmoc.in/',
      description: "Developed and maintained code for in-house and client websites primarily using Next.js, React.js, Redux.js toolkit, JavaScript, and Material UI, Tailwind CSS. Also, manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.",
      tags: ['Next.js', 'React.js', 'Redux.js Toolkit', 'JavaScript', 'HTML/CSS'],
      duration: '< Dec 2022 - Present >',
      id: 0,
    },
    {
      title: 'Full Stack Developer',
      type: 'Internship',
      company: 'Xelpmoc Design And Tech Ltd.',
      location: 'Bangalore',
      company_url: 'https://www.xelpmoc.in/',
      description: "Worked on an US-based industry-level project built in React.js and also used Redux.js toolkit.",
      tags: ['React.js', 'Redux.js Toolkit', 'JavaScript', 'HTML/CSS'],
      duration: '< Aug 2022 - Dec 2022 >',
      id: 1,
    },
  ]

  const rightWorks = [
    {
      title: 'Full Stack Developer',
      type: 'Internship',
      company: 'Aurbitus',
      location: 'Gwalior',
      company_url: 'https://aurbitus.com/',
      description: "Made a MERN Stack Project for a MLM-based client Service Point India (SPI), with an E-Commerce layout, also lead the team of 2 members & have hands on experience on React.js & Node.js.",
      tags: ['React.js', 'Node.js', 'MongoDB', 'JavaScript', 'HTML/CSS'],
      duration: '< Jan 2022 - Mar 2022 >',
      id: 2,
    },
    {
      title: 'Full Stack Developer',
      type: 'Internship',
      company: 'Numeric Infosystem Pvt. Ltd.',
      location: 'Gwalior',
      company_url: 'https://www.numericinfosystems.com/',
      description: "Made Student Marksheet Management System & Product Management System using Node.js.",
      tags: ['Node.js', 'MySQL', 'JavaScript', 'HTML/CSS'],
      duration: '< July 2021 - Dec 2021 >',
      id: 3,
    },
  ]

  const [selectedId, setSelectedId] = useState(null)

  return (
    <motion.div

      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}

    >

      <div className=' min-h-screen flex flex-wrap justify-center'>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className='bg-black lg:w-1/2 w-full sm:min-h-[70rem] md:min-h-[100%] min-h-[45rem] px-[8px] pt-32 flex flex-col my-auto'>

          {leftWorks.map((work, index) =>

            <motion.div
              key={index}
              initial={{ y: -250 }}
              animate={{ y: -10 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
              className='w-full  px-[30px] flex flex-col mb-10  items-center text-white '>
              <div className='border h-fit w-full border-white rounded-lg p-6'>
                <div className='w-full flex flex-wrap'>
                  <div className='w-full lg:w-1/2'>
                    <h1 className='text-2xl font-sans font-bold uppercase'>{work.title}</h1>
                    <Link href={work.company_url} target='_blank' className='text-xl font-sans uppercase text-blue-300 underline underline-offset-4'>
                      {work.company}
                    </Link>
                    <h2 className='text-lg font-sans text-left uppercase mt-2'>
                      {work.location}
                    </h2>
                    <h3 className='text-lg font-sans text-left uppercase'>
                      TYPE : {work.type}
                    </h3>
                  </div>
                  <div className='w-full lg:w-1/2'>
                    <h2 className='text-xl font-sans text-left lg:text-right uppercase'>
                      {work.duration}
                    </h2>
                  </div>
                </div>
                <div className='w-full'>
                  <h3 className='text-lg font-sans '>{work.description}</h3>
                </div>
                <h2 className='text-xl mt-4 font-sans text-left font-bold underline underline-offset-4 uppercase'>
                  SKILLS USED
                </h2>
                <div className='w-full flex flex-wrap mt-4'>
                  {work.tags.map((tag, index) =>
                    <div key={index}
                      className="text-xs mt-4 inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full">
                      {tag}
                    </div>)}

                </div>

              </div>


            </motion.div>

          )}

        </motion.div>
        {/* bg-[#251170] */}
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className='bg-[#251170] lg:w-1/2 w-full sm:min-h-[70rem] md:min-h-screen px-[8px] pt-[10vw] flex flex-col my-auto'>


          {rightWorks.map((work, index) =>

            <motion.div
              key={index}
              initial={{ y: -250 }}
              animate={{ y: -10 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
              className='w-full h-1/2 px-[30px] mb-10 flex flex-col justify-center items-center text-white '>
              <div className='border h-fit w-full border-white rounded-lg p-6'>
                <div className='w-full flex flex-wrap'>
                  <div className='w-full lg:w-1/2'>
                    <h1 className='text-2xl font-sans font-bold uppercase'>{work.title}</h1>
                    <Link href={work.company_url} target='_blank' className='text-xl font-sans uppercase text-blue-300 underline underline-offset-4'>
                      {work.company}
                    </Link>
                    <h2 className='text-lg font-sans text-left uppercase mt-2'>
                      {work.location}
                    </h2>
                    <h3 className='text-lg font-sans text-left uppercase'>
                      TYPE : {work.type}
                    </h3>
                  </div>
                  <div className='w-full lg:w-1/2'>
                    <h2 className='text-xl font-sans text-left lg:text-right uppercase'>
                      {work.duration}
                    </h2>
                  </div>
                </div>
                <div className='w-full'>
                  <h3 className='text-lg font-sans '>{work.description}</h3>
                </div>
                <h2 className='text-xl mt-4 font-sans text-left font-bold underline underline-offset-4 uppercase'>
                  SKILLS USED
                </h2>
                <div className='w-full flex flex-wrap mt-4'>
                  {work.tags.map((tag, index) =>
                    <div key={index}
                      className="text-xs mt-4 inline-flex items-center font-bold leading-sm uppercase px-6 ml-4 py-1 bg-black text-white border border-blue-200 rounded-full">
                      {tag}
                    </div>)}

                </div>

              </div>


            </motion.div>

          )}
        </motion.div>
      </div>


    </motion.div>

  )
}

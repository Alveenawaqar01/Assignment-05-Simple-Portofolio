import React from 'react'
import Image from 'next/image'
import { SiAdobeillustrator, SiAdobephotoshop, SiCanva, SiTypescript } from 'react-icons/si'

const Skills = () => {
  return (
        <main className='w-full h-full bg-slate-200 flex justify-center items-start mt-2'>
        <div className='w-full md:w-[80%] flex flex-col justify-center items-center'>
          {/* Top Section */}
          <div className='flex flex-col justify-center items-center'>
            <div className='font-extrabold text-4xl'>Skills</div>
            <p className='mt-2 text-center text-sm font-serif'>
            I specialize in bringing ideas to life using a range of powerful tools. My proficiency creative solutions for both digital and print media.
            </p>
          </div>
      
          {/* Bottom Section - Icons */}
          <div className="w-full flex flex-wrap gap-8 mt-10 justify-center items-center">
            {/* Icon 1 */}
            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 justify-center">
              <div className="flex flex-col items-center justify-center">
                <SiAdobeillustrator className="text-4xl" />
                <h3 className="ser-text mt-2 text-center">Adobe Illustrator</h3>
              </div>
            </div>
      
            {/* Icon 2 */}
            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 justify-center">
              <div className="flex flex-col items-center justify-center">
                <SiAdobephotoshop className="text-4xl" />
                <h3 className="ser-text mt-2 text-center">Photoshop</h3>
              </div>
            </div>
      
            {/* Icon 3 */}
            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 justify-center">
              <div className="flex flex-col items-center justify-center">
                <SiCanva className="text-4xl" />
                <h3 className="ser-text mt-2 text-center">Canva Design</h3>
              </div>
            </div>
      
            {/* Additional Icons can go here */}
          </div>
        </div>
      </main>
      

  )
}

export default Skills

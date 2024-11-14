import React from 'react'
import Image from 'next/image'
import {  Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

const Hero = () => {
  return (
      <main className='w-full  h-full md:h-[400px] flex justify-center items-center bg-white'>
        <div className='flex w-full md:w-[80%] h-full flex-col md:flex-row justify-between items-start pt-6'>
          {/* left*/}
   <div className='w-full md:w-[40%] flex justify-center items-center'>
    <Image src="/pic-01.png"  width={200}
    height={200}
    alt='profile' 
    className='w-[300px] h-[300px] rounded-full mx-auto mb-6 border-4 border-black'
     />
   </div> 
          {/*right*/}
          <div className='w-full p-10 md:w-[60%] space-y-2'>
            <h1 className='text-5xl font-semibold'>I am Alveena </h1>
            <p className='font-serif'> As a passionate graphic designer I bring creativity and precision to every project
            I specialize in crafting visual experiences that communicate your brands message effectively Whether its crafting stunning logos developing eye-catching branding or designing user-centric interfaces
             my goal is to bring your vision to life with precision and creativity </p>
              <div>
              <Button 
      variant="outline" 
      className="border-2 border-white text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-semibold">Hire Me</Button>

              </div>
              <div className='flex space-x-2'>
                <Link href="/" ><Github className='text-gray-800'/></Link>
               <Link href="/"><Instagram className='text-pink-400'/>  </Link>
                <Link href = "/"><Linkedin className='text-blue-800'/></Link>
              </div>
          </div>
        </div>
      </main>
  )
}

export default Hero

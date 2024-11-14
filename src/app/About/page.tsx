import Image from "next/image"
import { FaBehanceSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import Link from "next/link"

const Aboutpage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center py-8 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6">

        {/* Left Section: Profile Image and Social Links */}
        <div className="text-center">
          <Image
            src="/pic-02.jpg"
            width={200}
            height={200}
            alt="Profile"
            className="rounded-sm mx-auto mb-4 border-2 border-white"
          />
          
          <div className="flex justify-center space-x-6 mb-6">
            <Link
              href="https://www.linkedin.com/in/alveena-2086b42b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-4xl text-white hover:text-blue-500 transition-colors duration-300" />
            </Link>
            <Link
              href="https://www.behance.net/alveenawaqar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehanceSquare className="text-4xl text-white hover:text-blue-400 transition-colors duration-300" />
            </Link>
            <Link
              href="https://www.instagram.com/kalveena786/profilecard/?igsh=MTFtaGJoNGU3cTM5MQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="text-4xl text-white hover:text-pink-500 transition-colors duration-300" />
            </Link>
          </div>
        </div>

        {/* Right Section: About Me Text */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-semibold mb-2">About Me</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            I m a graphic designer with a passion for UI/UX design and AI development 
            After mastering graphic design  I decided to expand my skills by exploring user centered design and AI technology
            My goal is to create intuitive  innovative digital experiences  and I m now focused on creating user friendly and innovative digital experiences using the latest technology
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage


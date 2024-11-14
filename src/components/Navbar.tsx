import Link from "next/link"

const Navbar = () => {
  return (
   <header className='w-full h-14 flex justify-between items-center bg-slate-100'>
     {/* logo*/}
         <div> 
               <h1 className='text-3xl font-bold pl-2 '>My Portfolio</h1>
         </div>
       {/* Navlinks*/}
       <ul className='hidden md:block'>
        <li className='space-x-5 pr-4'>
            <Link href= "/">Home</Link>
            <Link href= "/About">About</Link>
            <Link href= "/">Contact</Link>
            <Link href= "/">Skill</Link>
            <button className='bg-gray-800 text-white py-2 px-4 rounded-s font-semibold'>Download</button>
        </li>
       
       </ul>
       

       

 
  
     </header>

  
  )
}

export default Navbar

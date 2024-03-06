import Link from 'next/link';
import { AiFillDribbbleCircle } from "react-icons/ai";
const Navbar = () => {

    const links = [
        {
            label:"Dashboard", href:"/",
        },
        {
            label:"Issues", href:"/issues",
        }
    ]
  return (
    <nav className='flex justify-between space-x-6 border-b mb-5 px-10 h-14 items-center'>
        <Link href="/" ><AiFillDribbbleCircle className="w-10 h-10"/></Link>
      <ul className='flex space-x-6'>
        {links.map((link,id)=>(
          
               <li><Link key={link.href} 
               className='text-zinc-500 hover:text-zinc-700 transition-colors semi-bold'
                href={link.href}
                >{link.label}</Link></li>
       
           
        ))}
    
      </ul>
    </nav>
  )
}

export default Navbar

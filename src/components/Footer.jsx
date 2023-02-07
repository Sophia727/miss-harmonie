import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { AiOutlineMail } from 'react-icons/ai';


function Footer() {
  return (
    <div className=' bg-myBrown text-white md:p-7 '>
        <div className='justify-center space-x-7 flex-row flex'>
      <a href="https://www.instagram.com/missharmonie_ongles/" target="_blank" className=" p-2 bg_icons hover:scale-125">
          <FaInstagram color="white" className="text-2xl" />
        </a>
        <a href="http://" target="_blank" className="p-2 bg_icons hover:scale-125">
          <SlSocialVkontakte color="white" className="text-2xl" />
        </a>
        <a href="mailto:vumirasca123@mail.ru" target="_blank" className="p-2 bg_icons hover:scale-125">
          <AiOutlineMail color="white" className="text-2xl" />
        </a>
      </div>
      <p className='text-center text-xs pt-5'>© Copyright - Designed by Sophia Toukram - 2023</p>
    </div> 
  )
}

export default Footer
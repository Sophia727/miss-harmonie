import React from 'react'

function Button(props) {
  return (
    
      <button  className='py-2 px-4 my-3 w-[125px] h-[50px] text-sm text-myWhitesmoke text-center bg-myBrown md:p-3 m-3 md:w-32 rounded-full  hover:bg-[#bbb5aad2]'>{props.btn_name}</button>
      
  )
}

export default Button
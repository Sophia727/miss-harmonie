import React from 'react'

function SectionTitle(props) {
  return (
    <h2 className='text-xl text-myGrey border-b-myDarkBeige border-b-2 mx-3'>
        {props.title}
    </h2>
  )
}

export default SectionTitle
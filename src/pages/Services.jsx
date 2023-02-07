import React, { useEffect, useState } from 'react'
import SectionTitle from '../commponents/SectionTitle'
import { services } from '../Data';

function Services() {
  const [serviceItem, setServiceItem] = useState(null);
  useEffect(()=> {
    setServiceItem(services);
  }, []);

  return (
    <div className='bg-myPink lg:mt-16 mt-10'>
      <SectionTitle title="Nos Services"/>

      <div id='services' className=' md:grid md:grid-cols-3 md:gap-5 md:py-0 gap-5 mx-10 py-10 my-10 flex lg:grid lg:grid-cols-3 flex-col mb-10 justify-around'>
        {services.map((service)=> {
        return (
          <div key={service.id} className="lg:h-[350px] h-[250px] w-3/3 self-center transition duration-300   ease-in-out text-myWhite flex flex-col hover:scale-110">
            <img src={service.photo} alt="service representation" className='rounded object-cover' />
            <div className='transition-all ease-in-out duration-500 px-5 py-2 bg-myGB top-[0px]  lg:w-[100%]'>
            <h4 className='text-lg'>{service.name}</h4>

            <p className='font-light text-sm '>{service.description}</p>            
            </div>
          </div>
        )})}
      </div>
      
    </div>
  )
}

export default Services
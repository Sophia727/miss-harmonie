import React from 'react';
//import SectionTitle from "../commponents/SectionTitle";
import janna from "../assets/janna.jpeg";
import { photosInterieur } from "../Data";
import Carousel from 'react-elastic-carousel';
import SectionTitle from '../components/SectionTitle';

function Apropos() {
  return (
    <div id='about' className="md:pt-5 lg:px-[5.5rem]">
      <SectionTitle title="A propos de nous" />
      {/* presentation  */}
      <div className="p-8 w-screen lg:w-[100%] flex flex-col md:flex-row-reverse">
        <img
          src={janna}
          alt=""
          className="rounded-full self-center m-8 shadow-pink-300 shadow-md lg:mr-12 lg:h-[250px]"
        />

        <p className=" leading-8 text-justify md:p-2 lg:py-8 lg:pr-16">
          Fondé en 2011, Miss Harmonie est le premier centre de bien être à
          Marrakech offrant Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Fuga vitae eveniet exercitationem reprehenderit quasi cumque,
          facilis nemo culpa! Dicta ullam pariatur, tempore inventore
          aliquam consequatur dolores. Corrupti, facilis modi? Perspiciatis
          optio asperiores possimus, reprehenderit nesciunt mollitia quas animi
          laboriosam. Aspernatur ex repudiandae molestiae distinctio tenetur,
          repellendus nulla dolorum voluptate. Lorem ipsum dolor sit amet  adipisicing elit. Ad deserunt odit minima voluptates veritatis ducimus dolorum aspernatur optio? Ducimus, doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate id doloremque, itaque nemo saepe quae nisi? Quidem quaerat minus illo!
        </p>
      </div>

      {/* interieur photos */}
      <div className="my-12 mx-auto">
        <SectionTitle title="Jetez un coup d'oeil"/>
        <div className='p-3 mt-10 lg:px-10'>
          <Carousel>
          {photosInterieur.map(photo=> {
            return (
              <div key={photo.id}><img src={photo.image} alt="interior" /> </div>
            )
          })}
        </Carousel>

        </div>
        
      </div>
    </div>
  );
}

export default Apropos;

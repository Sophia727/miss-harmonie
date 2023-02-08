import React, { useState, useEffect } from "react";
import mani_cover from "../assets/mani.jpeg";
import mani_lg from "../assets/mani-lg.jpeg";
// import Button from "../commponents/Button";
import { aboutIcons } from "../Data";
import Button from "../components/Button";

function Home() {
  const [icons, setIcons] = useState(null);
  useEffect(() => {
    setIcons(aboutIcons);
  }, []);
  return (
    <div className="mt-5" id="home">
      <img
        src={mani_cover}
        alt="Manucure on beautiful hands done by a professional"
        className="w-screen h-[100%] -mt-6  md:w-[60%] lg:hidden"
      />
      <img
        src={mani_lg}
        alt="Manucure on beautiful hands done by a professional"
        className=" w-[650px] ml-24 -mt-5 hidden lg:block"
      />
      <div className="md:mt-[-400px] md:ml-[450px] lg:mt-[-500px] lg:ml-[630px]">
        <h1 className="md:text-5xl text-3xl hidden md:block uppercase text-myGrey md:w-80 lg:mb-8 lg:w-[500px] lg:text-7xl ">
          Premier institut de beauté russe à Marrakech{" "}
        </h1>
        <h2 className="md:text-3xl hidden font-myDarkBeige md:block text-myGB border-l-[6px] md:ml-[3rem] lg:ml-[130px] border-myBrown pl-1 mt-2 md:w-72 lg:w-80 lg:text-4xl">
          {" "}
          Reconnectez vous au bien être
        </h2>
        <div className="w-fit mt-3 lg:ml-[150px] lg:text-center hidden lg:block">
          <a href="#contact">
            <Button btn_name="Prendre RDV" />
          </a>
        </div>
      </div>

      <div className=" w-screen lg:hidden  p-3 flex justify-center flex-col ">
        <h1 className="text-4xl md:hidden uppercase text-myGrey ">
          Premier institut de beauté russe à Marrakech{" "}
        </h1>
        <h2 className="text-2xl md:hidden font-myDarkBeige text-myBrown border-l-4 border-myBlue  pl-1 mt-2">
          {" "}
          Reconnectez vous au bien être
        </h2>
        <div className="w-fit mt-3 self-center md:block md:mt-24 lg:hidden">
          <a href="contact">
            <Button btn_name="Prendre RDV" />
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-around md:flex-row bg-myGB gap-8 md:gap-0 p-5 mt-[14px] md:p-3 duration-300 lg:px-[10rem]">
        {aboutIcons.map((icon) => {
          return (
            <div
              key={icon.id}
              className="text-black flex flex-col items-center md:w-16 md:text-center duration-300 ease-in-out text-myWhite hover:scale-125"
            >
              <h3 className="text-5xl md:text-4xl  text-myGrey">{icon.icon}</h3>
              <h4 className="text-myGrey">{icon.legend}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

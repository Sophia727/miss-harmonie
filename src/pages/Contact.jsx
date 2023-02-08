import emailjs from "emailjs-com";
import React, { useRef } from "react";
import Iframe from "react-iframe";
import Button from "../components/Button";
// import Button from "../commponents/Button";
import SectionTitle from "../components/SectionTitle";
// import SectionTitle from "../commponents/SectionTitle";
import { ContactInfo } from "../Data";

function Contact() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();
    // modify later on
    emailjs
      .sendForm(
        "Sophia.T",
        "template_ayohe3b",
        form.current,
        "57W2vhkskFsJbdIiK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  }
  return (
    <div className="lg:px-[5.5rem] w-auto flex flex-col pt-8 bg-myPink">
      <SectionTitle title="Contactez nous!" />
      <div id="contact" className="p-8 mt-6 md:flex-row-reverse md:align-middle md:flex md:gap-5 md:text-sm lg:flex md:justify-center">

        <div className="">
          <form
            onSubmit={sendEmail}
            ref={form}
            method="post"
            className="flex flex-col justify-center space-y-2 lg:w-[600px] md:w-[400px] md:p-5 lg:space-y-5 border-myDarkBeige text-myBrown font-semibold font-['TT Norms"
          >
            <input
              className="bg-myPink p-2 border-myLightBlue border-solid border-2  border-myDarkBeige"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="bg-myPink p-2  border-myLightBlue border-solid border-2  border-myDarkBeige "
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              className="bg-myPink p-2 h-56  border-myLightBlue border-solid border-2  border-myDarkBeige"
              placeholder="Type..."
              name=""
              id=""
              required
            ></textarea>
            <div className=" flex justify-center md:justify-end">
              <Button
                className=" border-myPink border-solid border-2"
                btn_name="Send"
              />
            </div>
          </form>
        </div>
        <div className="py-2 px-5 md:flex md:flex-col">

          <div className="pb-5 ">
            {ContactInfo.map((contact)=>{
              return (
                <div key={contact.id} className="flex flex-row gap-5 my-3 text-myGrey font-light md:text-md">
                    <h4 className="md:text-md">{contact.logo}</h4>
                    <h6 className="text-sm md:text-md">{contact.value}</h6>
                </div>
              )
            })}
          </div>
          <div className="md:h-[47%]">
          <Iframe className="borders-none" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424.5865847953669!2d-8.026738465075761!3d31.642263837694397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef21b3a2fd55%3A0x9a56018d64c1ebc!2sJana!5e0!3m2!1sen!2sma!4v1675428610713!5m2!1sen!2sma"
        width="100%"
        height="100%"/>
          </div> 
        </div>
        
      </div>
    </div>
    
  );
}

export default Contact;

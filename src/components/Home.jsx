import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import photo from "../assets/IMG_iqbal.jpg";
import HomeSocial from "./HomeSocial";
import Lottie from "lottie-react";
import bg from "../assets/blue-background-animation.json";
import { FiDownload, FiPhoneCall } from "react-icons/Fi";



const Home = () => {
  return (
    <>
      <div  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="my-container flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Hello, I'm <br />
              <h5 className="text-4xl font-extrabold mt-8  mb-8">
                Iqbal Zaber
              </h5>
              <span className="text-violet-600 text-5xl ">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "Tailwind Master",
                      "React Developer",
                      "Full Stack Developer",
                      "BootStrap Expert",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <Link to="/" className="border-blue-300 md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <button className="btn btn-outline btn-primary rounded-md px-5 py-2">
                  {" "}
                  Download CV{" "}
                  <span className="text-lg ml-1">
                    {" "}
                    <FiDownload />
                  </span>{" "}
                </button>
              </div>
            </Link>
            <Link to="/contact" className=" md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <button className="btn bg-blue-400 border-0 text-white rounded-md px-5 py-2">
                  {" "}
                  Contact Me{" "}
                  <span className="text-lg ml-1">
                    {" "}
                    <FiPhoneCall />
                  </span>{" "}
                </button>
              </div>
            </Link>
          </div>
          <div>
            <HomeSocial />
          </div>
        </div>

        <div  className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56   sm:h-96">
            {/* <img src={photo} alt="" className="w-[75%]  rounded-t-full rounded-b-full"  /> */}
            <div className="relative  right-32 w-88">
              <Lottie animationData={bg} loop={true} />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

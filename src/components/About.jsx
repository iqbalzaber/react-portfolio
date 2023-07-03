

import { BsAward, BsPeople } from 'react-icons/bs';
import { AiFillProject} from 'react-icons/ai';
import Lottie from "lottie-react";

import about from '../assets/about.json'
import CountUp from 'react-countup';


const About = () => {
  return (
    <div className="my-container" >
      <div data-aos="zoom-out-down" className="text-center mb-20">
        <h2>
          <>Get to Know</>
        </h2>
        <h2 className="text-3xl">About Me </h2>
      </div>

      <div  className="flex 	">
       
        <Lottie animationData={about} loop={true} className="mr-32" />
        
        <div  className=" ">
           <div className="flex gap-6 mr-40 ">

           <div  className="bg-blue-300 px-8 py-3 rounded-md   w-40  shadow-lg items-center hover:bg-green-400 hover:border-teal-200"> <BsAward className="text-3xl" /> <h3 className="mt-12">Experience</h3> <h5> <CountUp end={6} duration={20} delay={1}/> Months+ </h5> <h6>Working</h6> </div>


            <div className="bg-blue-300 px-8 py-3 rounded-md w-40 hover:bg-green-400 shadow-lg"> <BsPeople className="text-3xl" /> <h3 className="mt-12">Clients</h3> <h5> <CountUp end={30} duration={20} delay={1}/> people + </h5> <h6>Worldwide</h6> </div>


            <div className="bg-blue-300 px-8 py-3 rounded-md w-40 hover:bg-green-400 shadow-lg"> <AiFillProject className="text-3xl" /> <h3 className="mt-12">Projects</h3> <h5><CountUp end={50} duration={20} delay={1}/> + Done</h5> <h6></h6> </div>
           </div>
           <div className="mt-5 font-semibold">
            Hello !! My name is Iqbal Zaber. I want to gain confidence and fame <br /> using my potential in this position, and express my innovative creative skills <br /> for self and company growth. I am a hardworking and quick learner person. <br /> I believe hard work is the only way to success. Love to learn new technology <br /> and try to improve myself.
            </div>
            <button className="btno mt-5">Let's Talk </button>




            
            
          
      
        </div>
        
      </div>
     
    </div>
  );
};

export default About;

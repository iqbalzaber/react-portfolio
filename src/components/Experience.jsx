import { BsFillPatchCheckFill,BsGithub } from "react-icons/bs";
import { FaReact,FaChrome } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { ImNpm } from "react-icons/im";
import { SiHtml5,SiTailwindcss,SiBootstrap } from "react-icons/si";

const Experience = () => {
  return (
    <section data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"  className="my-container">
      <div className="text-center mb-20">
        <h2>
          <>What Skills I Have</>
        </h2>
        <h2 className="text-3xl"> My Experience </h2>
      </div>

      <div className="flex gap-6 mx-auto mr-20 ">
        <div  className="card w-[50%]  card-body px-12 py-8  bg-primary text-primary-content">
          <div className="">
            <h2 className="card-title text-center  text-2xl ml-2 mb-5">
              Frontend Development
            </h2>
            <hr className="mb-5" />
            <div className="flex flex-col">
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-2  px-12 font-bold">
                    {" "}
                    <SiHtml5  /> HTML5,CSS3{" "}
                  </div>
                  <h6 className=" ml-20  font-thin">Expert</h6>
                </div>
                <div className="mb-8">
                  <div className="flex items-center gap-2 px-12 font-bold">
                    {" "}
                    <FaReact /> React{" "}
                  </div>
                  <h6 className="ml-20   ">Expert</h6>
                </div>
                <div className="mb-8">
                  <div className="flex items-center gap-2 px-12 font-bold">
                    {" "}
                    <SiTailwindcss /> Tailwind CSS
                  </div>
                  <h6 className="ml-20  ">Expert</h6>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-2 px-12 font-bold">
                    {" "}
                    <SiBootstrap /> Bootstrap
                  </div>
                  <h6 className="ml-20  ">Expert</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card  w-[50%] card-body px-12 py-8  bg-primary text-primary-content">
          <div className="">
            <h2 className="card-title text-center text-2xl ml-2  mb-5">
              Backend Development
            </h2>
            <hr className="mb-5" />
            <div className="mb-8">
              <div className="flex items-center gap-2  px-12 font-bold">
                {" "}
                <BsFillPatchCheckFill /> Express.Js{" "}
              </div>
              <h6 className="ml-16 mb-3 font-thin">Expert</h6>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-2 px-12 font-bold">
                {" "}
                <BsFillPatchCheckFill /> Node.Js{" "}
              </div>
              <h6 className="ml-16  mb-3">Expert</h6>
            </div>
            <div className="mb-8">
              {" "}
              <div className="flex items-center gap-2 px-12 font-bold">
                {" "}
                <BsFillPatchCheckFill /> Rest API
              </div>
              <h6 className="ml-16 mb-3">Expert</h6>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-2 px-12 font-bold">
                {" "}
                <BsFillPatchCheckFill /> Rest API{" "}
              </div>
              <h6 className="ml-16 mb-3">Expert</h6>
            </div>
          </div>
        </div>

        {/* tools */}


        <div className="card  w-[50%] card-body px-12 py-8  bg-primary text-primary-content">
          <div className="">
            <h2 className="card-title text-center  text-2xl ml-8 mb-5">
              Tools
            </h2>
            <hr className="mb-5" />
            <div className="mb-8">
              <div className="flex items-center gap-2  px-12 font-bold">
                {" "}
                <TbBrandVscode /> Vs Code{" "}
              </div>
              <h6 className="ml-20 mb-3 font-thin">Expert</h6>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-2 px-12 font-bold">
                {" "}
                <FaChrome /> Chrome DevTool{" "}
              </div>
              <h6 className="ml-20  mb-3">Expert</h6>
            </div>
            <div className="mb-8">
              {" "}
              <div className="flex items-center gap-2 px-12 font-bold">
                {" "}
                <ImNpm /> Package Managers
              </div>
              <h6 className="ml-20 mb-3">Expert</h6>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-2 px-12 font-bold">
                {" "}
                <BsGithub /> Github{" "}
              </div>
              <h6 className="ml-20 mb-3">Expert</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

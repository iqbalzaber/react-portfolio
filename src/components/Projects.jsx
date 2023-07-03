import { useLoaderData } from "react-router-dom";
import AllProject from "./AllProject";


const Projects = () => {
  const projectData = useLoaderData();
  console.log(projectData);
  return (
    <>
      <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="text-center mt-16">
        <h6>My Recent Work</h6>
        <h3 className="text-3xl">Portfolio</h3>
      </div>

      <div className="grid grid-cols-3  mr-12  ml-16 ">
        {projectData.map((project) => (
          <AllProject key={project.id} project={project}></AllProject>
        ))}
      </div>
    </>
  );
};

export default Projects;

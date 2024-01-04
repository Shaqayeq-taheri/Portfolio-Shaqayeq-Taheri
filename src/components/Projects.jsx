import { Card } from 'flowbite-react';
import { IoArrowForwardSharp } from "react-icons/io5";

function Projects() {
  return <div className='pt-10 pb-36'>
    <h2 className="text-4xl text-center font-bold pt-10 ">Projects</h2>
    <div className="pb-36 pt-20 flex gap-16 justify-center flex-wrap">
      <Card
        className="max-w-sm  h-72 shadow-2xl hover:shadow-lg hover:animate-pulse rounded-md  "
        imgAlt="yoga and meditation"
        imgSrc="src/assets/images/YogaAndMeditation.png"
      >
        <h5 className="text-2xl text-center font-bold tracking-tight  pt-3">
      Yoga and Meditation
        </h5>
       
      <div className='flex items-center justify-center gap-2 '>
        <a target="blank" className='p-2' href="https://yoga-and-meditation.netlify.app/">Go to website  </a>
        
          <IoArrowForwardSharp className=' animate-ping' size={15} style={{ animationDuration: '2s' }} />
      </div>
      </Card>
      <Card
        className="max-w-sm h-72 shadow-2xl hover:shadow-lg hover:animate-pulse rounded-2xl  "
        imgAlt="yoga and meditation"
        imgSrc="src/assets/images/BioBaumBauer.png"
      
      >
        <h5 className="text-2xl text-center font-bold tracking-tight  pt-3">
      Bio Baum Bauer
        </h5>
       <a href="" className=''></a>
      </Card>
    </div>





  </div>;
}

export default Projects;

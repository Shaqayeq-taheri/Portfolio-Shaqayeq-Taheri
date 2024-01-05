import { Card } from 'flowbite-react';
import { IoArrowForwardSharp } from "react-icons/io5";

function Projects() {
  return <div className='mt-10 md:mt-40 pt-0 md:pt-8 md:pb-36 bg-zinc-100 pr-3 pl-3' id='projects'>
    <h2 className="text-2xl md:text-4xl text-center font-bold pt-10 bg-zinc-100">Projects</h2>
    <div className="pb-36 pt-32 flex gap-20 justify-center flex-wrap bg-zinc-100">
      <Card
        className="max-w-lg md:h-96 h-60 shadow-2xl hover:shadow-lg hover:animate-pulse rounded-2xl  "
        imgAlt="yoga and meditation"
        imgSrc="src/assets/images/YogaAndMeditation.png"
      >
        <h5 className="text-2xl text-center font-bold tracking-tight ">
      Yoga and Meditation
        </h5>
       
      <div className='flex items-center justify-center gap-2  '>
        <a target="blank" className='' href="https://yoga-and-meditation.netlify.app/">Go to website  </a>
        
          <IoArrowForwardSharp className=' animate-ping' size={15} style={{ animationDuration: '2s' }} />
      </div>
      </Card>
      <Card
        className="max-w-lg md:h-96 h-60 shadow-2xl hover:shadow-lg hover:animate-pulse rounded-2xl  "
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

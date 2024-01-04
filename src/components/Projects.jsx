import React from "react";
import { Card } from 'flowbite-react';

function Projects() {
  return <div>
    <h2 className="text-4xl text-center font-bold pt-10 ">Projects</h2>
    <div className=" pt-20 pb-20 flex gap-16 justify-center">
      <Card
        className="max-w-sm p-1 h-72 shadow-2xl hover:shadow-lg hover:animate-bounce "
        imgAlt="yoga and meditation"
        imgSrc="src/assets/images/YogaAndMeditation.png"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Yoga and Meditation
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
      <a target="blank" href="https://yoga-and-meditation.netlify.app/">Go to website</a>
        </p>
      </Card>
      <Card
        className="max-w-sm p-1 shadow-2xl hover:shadow-lg hover:animate-pulse"
        imgAlt="yoga and meditation"
        imgSrc="src/assets/images/BioBaumBauer.png"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Bio Baum Bauer
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          
        </p>
      </Card>
    </div>





  </div>;
}

export default Projects;

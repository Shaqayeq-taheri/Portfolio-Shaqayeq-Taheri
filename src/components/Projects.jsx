import { Card } from "flowbite-react";
import BioBaumBauer from '/src/assets/images/BioBaumBauer.png'
import YogaAndMeditation from '/src/assets/images/YogaAndMeditation.png'
function Projects() {
  return (
    <div
      className="mt-10 md:mt-40 pt-0 md:pt-8 md:pb-36 pb-16 bg-zinc-100 pr-3 pl-3"
      id="projects"
    >
      <h2 className="text-2xl md:text-4xl text-center font-bold pt-10 bg-zinc-100">
        Projects
      </h2>
      <div className="pb-36 pt-32 flex md:gap-28 gap-44 justify-center flex-wrap bg-zinc-100">
        <div>
          <a
            target="blank"
            className=""
            href="https://yoga-and-meditation.netlify.app/"
          >
            <Card
              className="max-w-lg md:h-96 h-60 shadow-2xl hover:shadow-lg hover:animate-pulse rounded-md"
              imgAlt="yoga and meditation"
              imgSrc={YogaAndMeditation}
        
            >
              <h5 className="text-xl p-5 text-center font-semibold tracking-tight ">
                Yoga and Meditation
              </h5>
            </Card>
          </a>
        </div>

        <div>
          <a href="">
            <Card
              className="max-w-lg md:h-96 h-60 shadow-2xl hover:shadow-lg hover:animate-pulse rounded-md"
              imgAlt="tree sponsoring"
              imgSrc={BioBaumBauer}

            >
              <h5 className="text-xl p-5 text-center font-semibold tracking-tight ">
                Bio Baum Bauer
              </h5>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;

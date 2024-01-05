import React from "react";
import { FaCircle } from "react-icons/fa6";

function Languages() {
  return (
    <>
      <div className="  md:pt-16 pb-16" id="languages">
        <h2 className="  font-bold text-center md:text-4xl text-2xl mt-20 mb-5 ">
          Languages
        </h2>
        <div className="flex flex-col  pl-10 pr-10  mx-auto max-w-3xl gap-10 mt-20 mb-20 p-5  ">
          <div className=" md:flex text-xl md:text-3xl justify-between gap-3 ">
            <p className="text-xl md:text-2xl ">Persian (Native)</p>
            <div className="flex gap-3 items-center justify-center  ">
              {Array.from({ length: 10 }, (_, i) => (
                <FaCircle
                  className={i < 10 ? "fill-red-400 " : " fill-neutral-400"}
                  key={i}
                />
              ))}
            </div>
            {/* creates an empty array with 5 elements and we can loop over as the second argument like map _ is because we are not interested in element themselves but we are interested in the number(i) */}
          </div>
          <div className="md:flex text-xl md:text-3xl justify-between gap-3 ">
            <p className="text-xl md:text-2xl "> English</p>
            <div className="flex gap-3 items-center justify-center  ">
              {Array.from({ length: 10 }, (_, i) => (
                <FaCircle
                  className={i < 8 ? "fill-red-400  " : " fill-neutral-400 "}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className=" md:flex text-xl md:text-3xl  justify-between gap-3 ">
            <p className="text-xl md:text-2xl "> French</p>
            <div className="flex gap-3 items-center justify-center ">
              {Array.from({ length: 10 }, (_, i) => (
                <FaCircle
                  className={i < 5 ? "fill-red-400 " : " fill-neutral-400 "}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className=" md:flex text-xl md:text-3xl  justify-between gap-3 ">
            <p className="text-xl md:text-2xl "> German</p>
            <div className="flex gap-3 items-center justify-center ">
              {Array.from({ length: 10 }, (_, i) => (
                <FaCircle
                  className={i < 3 ? "fill-red-400 " : " fill-neutral-400 "}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Languages;

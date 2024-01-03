import React from "react";
import { FaCircle } from "react-icons/fa6";

function Languages() {
  return (
    <>
      <h2 className="  font-bold text-center text-3xl mt-20 mb-5 ">
        Languages
      </h2>
      <div className="flex flex-col items-center ">
        <div className=" p-5 flex  text-3xl w-1/3 justify-between">
          <p className="text-2xl">Persian(Native)</p>
          <div className="flex gap-3  ">
            {Array.from({ length: 10 }, (_, i) => (
              <FaCircle
                className={i < 10 ? "fill-red-400 " : " fill-neutral-400"}
                key={i}
              />
            ))}
          </div>
          {/* creates an empty array with 5 elements and we can loop over as the second argument like map _ is because we are not interested in element themselves but we are interested in the number(i) */}
        </div>
        <div className=" p-5 flex text-3xl w-1/3 justify-between">
          <p className="text-2xl"> Engish</p>
          <div className="flex gap-3 items-center justify-center ">
            {Array.from({ length: 10 }, (_, i) => (
              <FaCircle
                className={i < 8 ? "fill-red-400 " : " fill-neutral-400"}
                key={i}
              />
            ))}
          </div>
        </div>
        <div className=" p-5 flex items-center text-3xl  w-1/3  justify-between">
          <p className="text-2xl text-left"> French</p>
          <div className="flex gap-3 ">
            {Array.from({ length: 10 }, (_, i) => (
              <FaCircle
                className={i < 6 ? "fill-red-400 " : " fill-neutral-400"}
                key={i}
              />
            ))}
          </div>
        </div>
        <div className=" p-5 flex items-center text-3xl w-1/3 justify-between">
          <p className="text-2xl"> German</p>
          <div className="flex gap-3 ">
            {Array.from({ length: 10 }, (_, i) => (
              <FaCircle
                className={i < 3 ? "fill-red-400 " : " fill-neutral-400"}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Languages;

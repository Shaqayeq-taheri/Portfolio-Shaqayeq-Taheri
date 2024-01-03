import React from "react";
import { FaCircle } from "react-icons/fa6";

function Languages() {
  return (
    <>
      <div className=" bg-zinc-200 pt-16 pb-16">
        <h2 className="  font-bold text-center text-3xl mt-20 mb-5 bg-zinc-200">
          Languages
        </h2>
        <div className="flex flex-col mx-auto max-w-3xl gap-5 mt-20 mb-20 p-5 bg-zinc-200 ">
          <div className=" md:flex text-xl md:text-3xl justify-between gap-3 bg-zinc-200">
            <p className="text-xl md:text-2xl bg-zinc-200">Persian (Native)</p>
            <div className="flex gap-3 items-center justify-center bg-zinc-200 ">
              {Array.from({ length: 10 }, (_, i) => (
                <FaCircle
                  className={i < 10 ? "fill-red-400 bg-zinc-200" : " fill-neutral-400"}
                  key={i}
                />
              ))}
            </div>
            {/* creates an empty array with 5 elements and we can loop over as the second argument like map _ is because we are not interested in element themselves but we are interested in the number(i) */}
          </div>
          <div className="md:flex text-xl md:text-3xl justify-between gap-3 bg-zinc-200">
            <p className="text-xl md:text-2xl bg-zinc-200"> English</p>
            <div className="flex gap-3 items-center justify-center bg-zinc-200 ">
              {Array.from({ length: 10 }, (_, i) => (
                <FaCircle
                  className={i < 8 ? "fill-red-400 bg-zinc-200 " : " fill-neutral-400 bg-zinc-200"}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className=" md:flex text-xl md:text-3xl  justify-between gap-3 bg-zinc-200">
            <p className="text-xl md:text-2xl bg-zinc-200"> French</p>
            <div className="flex gap-3 items-center justify-center bg-zinc-200">
              {Array.from({ length: 10 }, (_, i) => (
                <FaCircle
                  className={i < 6 ? "fill-red-400 bg-zinc-200" : " fill-neutral-400 bg-zinc-200"}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className=" md:flex text-xl md:text-3xl  justify-between gap-3 bg-zinc-200">
            <p className="text-xl md:text-2xl bg-zinc-200"> German</p>
            <div className="flex gap-3 items-center justify-center bg-zinc-200">
              {Array.from({ length: 10 }, (_, i) => (
                <FaCircle
                  className={i < 3 ? "fill-red-400 bg-zinc-200" : " fill-neutral-400 bg-zinc-200"}
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

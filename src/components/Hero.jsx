import React from 'react'

function Hero() {
  return (
    <div>
     <div className="flex  justify-center  mt-16 gap-5">
        {/* html card */}
        <div
          className="p-1 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700"
          style={{ width: "6rem" }}
        >
          <img
            className=" mx-auto"
            src="src/assets/images/HTML5_logo_and_wordmark.svg.png"
            alt="html logo"
            style={{ width: "5rem" }}
          />

          <h5 className="p-4 text-center text-l font-bold tracking-tight text-gray-900 dark:text-white">
            HTML
          </h5>
        </div>
        {/* css card */}
        <div
          className="p-1 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700"
          style={{ width: "6rem" }}
        >
          <img
            className=" mx-auto"
            src="src/assets/images/CSS3_logo_and_wordmark.svg.png"
            alt="css logo"
            style={{ width: "5rem" }}
          />

          <h5 className="p-4 text-center text-l font-bold tracking-tight text-gray-900 dark:text-white">
            CSS
          </h5>
        </div>
        {/* js logo */}
        <div
          className="p-1 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700"
          style={{ width: "6rem" }}
        >
          <img
            className=" mx-auto"
            src="src/assets/images/Javascript-shield.svg.png"
            alt="java script logo"
            style={{ width: "5rem" }}
          />

          <h5 className="p-4 text-center text-l font-bold tracking-tight text-gray-900 dark:text-white">
            Java Script
          </h5>
        </div>
        {/* react logo */}
        <div
          className=" bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700"
          style={{ width: "6rem" }}
        >
          <img
            className=" mx-auto"
            src="src/assets/images/React-icon.svg.png"
            alt="react logo"
            style={{ width: "5rem" }}
          />

          <h5 className="p-4 text-center text-l font-bold tracking-tight text-gray-900 dark:text-white">
            React
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Hero
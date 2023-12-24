import React from "react";

function Aboutme() {
  return (
    <div className="">
        <h2 className="text-4xl text-center font-bold bg-slate-500 pt-10 ">About Me</h2>
      <div className="flex items-center justify-center bg-slate-500 flex-wrap " style={{ height: '38rem' }} > 
         
      <div  className="flex flex-col justify-center  bg-slate-500 md:gap-5 sm:gap-3  md:w-1/2 sm:p-5 " >
        {/* w-1/2 means style={{width:'50%'}} */}
        
  
         <p className="text-gray-100 text-xl dark:text-gray-400 bg-slate-500 max-w-xlg"> I am Shaqayeq Taheri, Junior Full-stack Web Developer, with a strong background in computer engineering, over than 2 years of experience in IT, proficient in a range of techologies in both Front-end and Back-end development. </p>
<button  className="text-xl   w-48 bg-rose-100 hover:bg-rose-200 transition delay-100 p-4 ">My CV</button>
      
      </div>         
    <img src="src/assets/images/myImage.jpg" alt="" className="  rounded-full lg:order-last xs:order-first xs:ml-3 xs:mb-3" style={{width:'200px', height:'210px'}} />
    </div>
    </div>
    
  );
}

export default Aboutme;

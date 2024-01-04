function Aboutme() {
  return (
    <div className="">
        <h2 className="text-4xl text-center font-bold bg-slate-500 pt-10 ">About Me</h2>
      <div className="flex items-center justify-center bg-slate-500 flex-wrap md:gap-24" style={{ height: '38rem' }} > 
         
      <div  className="flex flex-col justify-center p-10 md:p-5 bg-slate-500 gap-10 md:w-1/2 " >
        {/* w-1/2 means style={{width:'50%'}} */}
        
  
         <p className="text-gray-100 text-xl text-center md:text-left dark:text-gray-400 bg-slate-500 max-w-xlg"> I am Shaqayeq Taheri, Junior Full-stack Web Developer, with a strong background in computer engineering, over than 2 years of experience in IT, proficient in a range of techologies in both Front-end and Back-end development. </p>
<button  className="text-xl  mx-auto md:mx-0 w-48 bg-red-100 border hover:bg-transparent hover:border-white hover:text-white border-red-100 hover:shadow-xl transition duration-500 ease-in-out p-4 ">My CV</button>
      
      </div>         
    <img src="src/assets/images/photo_2024-01-04_00-17-57.jpg" alt="" className="  rounded-full order-first md:order-last mb-2 mt-10 md:mt-0 md:mb-20 p-1" style={{width:'200px', height:'200px' }} />
    {/* I used the md:order-last class, which will override the order-first class for screen sizes greater than or equal to 768px. */}
    </div>
    </div>
    
  );
}

export default Aboutme;

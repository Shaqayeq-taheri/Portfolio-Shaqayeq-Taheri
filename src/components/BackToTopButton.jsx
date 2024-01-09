import  { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  // Show/hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 text-lg md:text-2xl p-3 rounded-full focus:outline-none animate-bounce border transition duration-300 bg-zinc-300"
          onClick={scrollToTop}
        >
          <FaArrowUp className='bg-zinc-300' />
        </button>
      )}
    </>
  );
}

export default BackToTopButton;

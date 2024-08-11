import CarouselComponent from "../components/Carousel";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    if (showCarousel) {
      document.body.classList.add('overflow-hidden', 'lg:overflow-auto');
    } else {
      document.body.classList.remove('overflow-hidden', 'lg:overflow-auto');
    }

    return () => {
      document.body.classList.remove('overflow-hidden', 'lg:overflow-auto');
    };
  }, [showCarousel]);

  const carouselItems = [
    {
      title: "Our Vision",
      content: "At BYTE, we believe in the power of collaboration and the boundless potential of technology to shape our world. Through hands-on projects, workshops, and discussions, we cultivate a vibrant community where creativity knows no bounds.",
      tagline: "Your Problems, Our Solution"
    },
    {
      title: "What we do?",
      content: "At BYTE, we innovate, create, and collaborate. From developing cutting-edge projects in IoT, web, app, and machine learning to hosting workshops, hackathons, and forging industry connections, we're a community dedicated to exploring the limitless possibilities of technology and turning ideas into reality.",
    },
  ];

  const toggleCarousel = () => {
    setShowCarousel(!showCarousel);
    if (!showCarousel) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="w-full bg-[url('/src/assets/aboutusbg.jpg')] min-h-screen bg-cover bg-center p-8 shadow-2xl">
        <div className="flex items-center mb-6">
          <img src="/src/assets/logo.jpg" alt="" className="w-20 h-auto"/>
        </div>
        
        <h2 className="text-white text-7xl font-mono font-semibold mb-6">
          We are <span className="text-green-500">BYTE</span>
        </h2>
        
        <p className="max-w-3xl text-gray-300 mb-8 text-xl font-mono leading-relaxed">
          Welcome to BYTE, where innovation meets reality. We are a dynamic group of students
          driven by a passion for technology and a commitment to bringing ideas to life. From the
          realms of IoT, web development, app development, and machine learning to the
          intricacies of cybersecurity, our society thrives on exploration and creation.
        </p>
        
        <button 
          onClick={toggleCarousel}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold text-xl py-4 px-6 rounded-full mb-8"
        >
          {showCarousel ? "Hide Our Vision" : "Meet Our Team"}
        </button>
      </div>
      {showCarousel && (
        <div className="my-8 ">
          <CarouselComponent items={carouselItems} />
        </div>
      )}
    </div>
  );
};

export default AboutUs;
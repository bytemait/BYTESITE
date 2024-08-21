import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn } from '../utils/motion';
import { teamMembers, services } from '../constants';

const teamContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Controls the delay between each teammate appearing
    },
  },
};

const teamMemberVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TeamMember = ({ name, role, image }) => (
  <motion.div
    variants={teamMemberVariants}
    className="flex items-center space-x-4 space-y-4 mt-4"
  >
    <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover" />
    <div>
      <h4 className="text-white font-bold text-xl">{name}</h4>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  </motion.div>
);

const ServiceCard = ({ index, title, icon, showTeam, handleShowTeam }) => (
  <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        onClick={() => handleShowTeam(title)}
      >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col cursor-pointer"
          >
            <img src={icon} alt={title} className="w-10 h-10 object-contain" />
            <h3 className="text-white text-lg font-bold text-center">{title}</h3>
          </div>
      </motion.div>
      <AnimatePresence>
        {showTeam === title && (
            <motion.div
              key={`team-${title}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={teamContainerVariants}
              className="mt-10"
            >
              {teamMembers[title].map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </motion.div>
        )}
      </AnimatePresence>
  </Tilt>
);

const Aboutm = () => {
  const [showTeam, setShowTeam] = useState(null);
  const [currentVision, setCurrentVision] = useState(0);

  const visions = [
    {
      title: "Our Vision",
      subtitle: "Your Problems, Our Solutions",
      description:
        "At BYTE, we believe in the power of collaboration and the boundless potential of technology to shape our world. Through hands-on projects, workshops, and discussions, we cultivate a vibrant community where creativity knows no bounds.",
    },
    {
      title: "What We Do?",
      subtitle: "Innovation at BYTE",
      description:
        "At BYTE, we innovate, create, and collaborate. From developing cutting-edge projects in IoT, web, app, and machine learning to hosting workshops, hackathons, and forging industry connections, we're a community dedicated to exploring the limitless possibilities of technology and turning ideas into reality.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVision((prevVision) => (prevVision + 1) % visions.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [visions.length]);

  const handleShowTeam = (title) => {
    setShowTeam((prevTitle) => (prevTitle === title ? null : title));
  };

  return (
    <div className='justify-center items-center flex-col px-16 py-10'>
      <motion.div className="bg-gradient-to-b from-green-800 to-black text-white p-8 rounded-lg shadow-lg">
          <motion.h1 initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }} className="font-Space text-6xl font-bold mb-4">
              {visions[currentVision].title}
          </motion.h1>
          <motion.h2 initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-Space text-3xl mb-6">
              {visions[currentVision].subtitle}
          </motion.h2>
          <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="font-Space text-xl mt-4 leading-[35px]">
              {visions[currentVision].description}
          </motion.p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
          {services.map((service, index) => (
              <ServiceCard
                  key={service.title}
                  index={index}
                  title={service.title}
                  icon={service.icon}
                  showTeam={showTeam}
                  handleShowTeam={handleShowTeam}
              />
          ))}
      </div>
    </div>
  );
};

export default Aboutm;

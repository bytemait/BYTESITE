import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiences } from '../components/constants';
import { SectionWrapper } from '../components/hoc';
import { textVariant } from '../components/utils/motion';
import { styles } from '../components/style';
import { useRef } from 'react';

const ExperienceCard = ({ experience }) => {
  const elementRef = useRef(null);

  const handleClick = () => {
    elementRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  };

  return (
    <VerticalTimelineElement
      ref={elementRef}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Added shadow
      }}
      contentArrowStyle={{ borderRight: "7px solid  #4afaab" }}
      date={experience.date}
      iconStyle={{ background: '#4afaab' }}
      onClick={handleClick}
      className="hover:scale-105 transition-transform ease-in-out duration-300" // Added hover scale effect
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        {experience.winner_name && (
          <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
            {experience.winner_name}
          </p>
        )}
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points && experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

function Achievements() {
  return (
    <div className='bg-[#000319] w-full'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What we have achieved so far
        </p>
        <h2 className="text-center text-[#4afaab] text-5xl">
          BYTE ACHIEVEMENTS
        </h2>
      </motion.div>

      <div className='mt-10'> {/* Reduced the gap between navbar and timeline */}
        <VerticalTimeline lineColor='#4afaab'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default SectionWrapper(Achievements, "work");

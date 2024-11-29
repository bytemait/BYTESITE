import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiences } from '../components/constants';
import { SectionWrapper } from '../components/hoc'
import { textVariant } from '../components/utils/motion';
import { styles } from '../components/style'
import { useRef } from 'react';
import { Tilt } from 'react-tilt'

const ExperienceCard = ({ experience, scrollToElement }) => {
  const elementRef = useRef(null);

  const handleClick = () => {
    elementRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
      duration: 3000,
      timingFunction: 'ease-in-out'

    });
  };
  return (
    <VerticalTimelineElement
      ref={elementRef}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #4afaab" }}
      date={experience.date}
      iconStyle={{ background: '#4afaab' }}
      onClick={handleClick}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.winner_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
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
    <div className='bg-[#000319] w-full pt-24 p-8'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What we have achieved so far
        </p>
        <h2 className="text-center text-[#4afaab] mt-2 text-5xl">
          BYTE ACHIEVEMENTS
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col '>
        <VerticalTimeline lineColor='#4afaab'
          scrollBehavior='smooth'
          scrollSpeed='50'
        >
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
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiences } from '../components/constants';
import {SectionWrapper} from '../components/hoc'
import { textVariant } from '../components/utils/motion';
import {styles} from '../components/style'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #4afaab" }}
      date={experience.date}
      iconStyle={{ background: '#4afaab' }}
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
    <>
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
          What we have achieved so far
        </p>
        <h2 className = "text-center text-[#4afaab] text-5xl">
          BYTE ACHIEVEMENTS
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col '>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Achievements, "work");
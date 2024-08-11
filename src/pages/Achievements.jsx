import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import timelineelements from './timelineelements';

export default function Achievements() {
  return (
    <>
    <div className='bg-[#000319]'>
       <h1 className="bg-theme-2 text-theme-1">Achievements</h1>
       <VerticalTimeline>
            {
            timelineelements.map(element => {
                return (
                    <VerticalTimelineElement
                      key = {element.id}
                      date = {element.date}
                      dateClassName = "date"
                      iconStyle={{ background: 'rgb(0, 128 , 55)', color: '#fff' }}
                      className=" shadow-lg hover:scale-105 transition-all duration-500 ease-in-out rounded-lg p-4"
                    >
                        <h3 className="text-lg font-bold pt-1">{element.title}</h3>
                        <h4 className="">{element.location}</h4>
                        <p>
                            {element.description}
                        </p>
                    </VerticalTimelineElement>
                )
            } )
            }
        </VerticalTimeline>
    </div>
      

    </>
  );
}

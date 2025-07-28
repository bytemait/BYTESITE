import Spline from '@splinetool/react-spline';
import CardContainer from '../components/CardContainer';
import Hero from '../components/Home-Hero-Section/Hero';
import ProjectsContainer from '../components/ProjectsContainer';
import CardCarousel from '../components/CardCarousel';
import HeroMid from '../components/Home-Hero-Section/HeroMid';


const Home = () => {
  return (
    <div className="pt-8 bg-black">
      <div className="flex flex-col md:flex-row items-center mt-48 relative">
        <div className="flex-1 md:ml-36">
          <Hero />
        </div>
        <div className="flex-1 self-end ml-96">
          <Spline
            scene="https://prod.spline.design/70rWXJWtYcdln4iF/scene.splinecode"
            width={512}
            height={512}
          />
        </div>
      </div>
      <div className="mt-30 px-4">
        {/* <CardCarousel />
        <HeroMid /> */}
        <CardContainer />
      </div>
      <ProjectsContainer />
    </div>
  );
};

export default Home;

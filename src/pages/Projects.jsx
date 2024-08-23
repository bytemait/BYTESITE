import Carousel from "../components/Carousel/Carousel";

export default function Projects() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#000000] to-[#032703]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-end gap-6 max-w-fit mt-4">
          <span className="lg:text-9xl md:text-8xl text-6xl  font-extrabold tracking-widest bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
            BYTE
          </span>
          <div className="flex flex-col tracking-widest">
            <span className="text-[#4AFAAB] lg:text-2xl text-sm font-bold">
              Solving Problems
            </span>
            <span className="text-[#4AFAAB] lg:text-2xl text-sm font-bold">
              One Byte at a Time
            </span>
          </div>
        </div>
        <p className="lg:text-9xl md:text-8xl text-6xl font-extrabold tracking-widest bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mt-6 ml-10">
          PROJECTS
        </p>
      </div>
      <div className="App lg:mt-3 md:mt-8 mt-10">
        <Carousel />
      </div>
    </div>
  );
}

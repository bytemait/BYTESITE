import Carousel from "../components/Carousel/Carousel";

export default function Projects() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#000000] to-[#032703]">
      <div className="flex flex-col justify-center items-center pt-32">
        <div className="flex items-end gap-6 mr-48">
          <span className="text-9xl font-extrabold tracking-widest bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
            BYTE
          </span>
          <div className="flex flex-col tracking-widest">
            <span className="text-[#4AFAAB] text-2xl font-bold">
              Solving Problems
            </span>
            <span className="text-[#4AFAAB] text-2xl font-bold">
              One Byte at a Time
            </span>
          </div>
        </div>
        <p className="text-9xl font-extrabold tracking-widest bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mt-6 ml-10">
          PROJECTS
        </p>
      </div>
      <div className="App mt-20">
        {" "}
        <Carousel />
      </div>
    </div>
  );
}

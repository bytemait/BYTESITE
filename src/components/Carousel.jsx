import { Carousel } from "flowbite-react";

const CarouselComponent = ({ items }) => {
  return (
    <div className="h-96 w-full max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-green-900 rounded-3xl overflow-hidden">
      <Carousel slideInterval={5000} indicators={false}>
        {items.map((item, index) => (
          <div key={index} className="flex h-full items-center justify-center text-white p-16 shadow-2xl ">
            <div className="space-y-6">
              <h2 className="text-5xl font-mono font-semibold">{item.title}</h2>
              {item.tagline && <p className="text-xl font-mono">{item.tagline}</p>}
              <p className="text-xl font-mono">{item.content}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
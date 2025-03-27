import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-4">
          <div className="">
            <div className="text-5xl font-bold">
              En Dayanıklı ve Kaliteli Ayakkabılar
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              corporis minus ea a perspiciatis, sit delectus ducimus itaque,
              veritatis laboriosam vero, odio aut ex. Quam dolorum enim commodi
              maxime voluptatibus?
            </div>
            <div className="border border-zinc-300 rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-300 hover:bg-gray-400 transition">
              İncele
            </div>
          </div>
          <img
            src="https://img.freepik.com/premium-photo/pair-sport-shoes_960079-283.jpg?w=826"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-4">
          <div className="">
            <div className="text-5xl font-bold">
              En Modern ve Estetik Ayakkabılar
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              corporis minus ea a perspiciatis, sit delectus ducimus itaque,
              veritatis laboriosam vero, odio aut ex. Quam dolorum enim commodi
              maxime voluptatibus?
            </div>
            <div className="border border-zinc-300 rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-300 hover:bg-gray-400 transition">
              İncele
            </div>
          </div>
          <img
            src="https://img.freepik.com/premium-psd/white-sports-sneakers-isolated_288990-3732.jpg?w=740"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;

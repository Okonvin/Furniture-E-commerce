import Reveal from "./Reveal";

function Gallery() {

  const images = [
    "/assets/Image-sec4_1.png",
    "/assets/Image-sec4_2.png",
    "/assets/Image-sec4_3.png",
    "/assets/Image-sec4_4.png",
    "/assets/Image-sec4_5.png",
    "/assets/Image-sec4_6.png",
    "/assets/Image-sec4_7.png",
    "/assets/Image-sec4_8.png",
    "/assets/Image-sec4_9.png",
  ];
  return (
    <section className="w-full overflow-hidden py-16">
      <Reveal className="text-center">
        <p className="text-[#616161] text-[20px] font-semibold">
          Share your setup with
        </p>
        <h1 className="text-[#3A3A3A] text-3xl sm:text-4xl lg:text-[40px] font-bold ">
          #FuniroFurniture
        </h1>
      </Reveal>

      {/* MOBILE / TABLET: single scrollable row, same layout up to lg */}
        <div className="lg:hidden mt-8 w-full overflow-x-auto">
            <div className="flex gap-3 sm:gap-4 px-4 w-max mx-auto">
            {images.map((src, i) => (
                <Reveal key={src} delay={i * 60}>
                  <img
                  src={src}
                  alt=""
                  className="w-40 h-40 sm:w-40 sm:h-96 md:w-40 md:h-40 object-cover"
                  />
                </Reveal>
            ))}
            </div>
        </div>

      {/* DESKTOP: original offset grouped layout */}
        <div className="hidden lg:flex w-[80%] mx-auto gap-4 justify-center items-start mt-8">

      {/* LEFT GROUP */}
        <Reveal delay={0} className="flex flex-col gap-4 items-center">
            <div className="flex gap-4">
                <img src={images[0]} alt="" className="w-full h-full object-cover" />
                <img src={images[1]} alt="" className="w-full h-full object-cover mt-[70px]" />
            </div>
            <div className="flex gap-4">
                <img src={images[2]} alt="" className="w-full h-full object-cover" />
                <img src={images[3]} alt="" className="w-full h-full object-cover" />
            </div>
            </Reveal>

            {/* CENTER */}
            <Reveal delay={150} className="mt-[149px]">
            <img src={images[4]} alt="" className="w-[281px] h-[412px] object-cover" />
            </Reveal>

            {/* RIGHT GROUP */}
            <Reveal delay={300} className="flex flex-col gap-4 items-start">
            <div className="flex gap-4">
                <img src={images[5]} alt="" className="w-full h-full object-cover mt-[85px]" />
                <img src={images[6]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-4">
                <img src={images[7]} alt="" className="w-full h-full object-cover" />
                <img src={images[8]} alt="" className="w-full h-full object-cover" />
            </div>
            </Reveal>

        </div>
    </section>
  );
}

export default Gallery;

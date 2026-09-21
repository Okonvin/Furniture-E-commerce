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

function Gallery() {
  return (
    <section className="w-full overflow-hidden py-16">
      <p className="text-center text-[#616161] text-[20px] font-semibold">
        Share your setup with
      </p>
      <h1 className="text-center text-[#3A3A3A] text-3xl sm:text-4xl lg:text-[40px] font-bold ">
        #FuniroFurniture
      </h1>

      {/* MOBILE / TABLET: single scrollable row, same layout up to lg */}
        <div className="lg:hidden mt-8 w-full overflow-x-auto">
            <div className="flex gap-3 sm:gap-4 px-4 w-max mx-auto">
            {images.map((src, i) => (
                <img
                key={src}
                src={src}
                alt=""
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover flex-shrink-0"
                />
            ))}
            </div>
        </div>

      {/* DESKTOP: original offset grouped layout */}
        <div className="hidden lg:flex w-[80%] mx-auto gap-4 justify-center items-start mt-8">

      {/* LEFT GROUP */}
        <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-4">
                <img src={images[0]} alt="" className="w-full h-full object-cover" />
                <img src={images[1]} alt="" className="w-full h-full object-cover mt-[70px]" />
            </div>
            <div className="flex gap-4">
                <img src={images[2]} alt="" className="w-full h-full object-cover" />
                <img src={images[3]} alt="" className="w-full h-full object-cover" />
            </div>
            </div>

            {/* CENTER */}
            <div className="mt-[149px]">
            <img src={images[4]} alt="" className="w-[281px] h-[412px] object-cover" />
            </div>

            {/* RIGHT GROUP */}
            <div className="flex flex-col gap-4 items-start">
            <div className="flex gap-4">
                <img src={images[5]} alt="" className="w-full h-full object-cover mt-[85px]" />
                <img src={images[6]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-4">
                <img src={images[7]} alt="" className="w-full h-full object-cover" />
                <img src={images[8]} alt="" className="w-full h-full object-cover" />
            </div>
            </div>

        </div>
    </section>
  );
}

export default Gallery;

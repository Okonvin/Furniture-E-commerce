function Hero() {
  return (
    <section className="w-full min-h-[500px] md:min-h-[700px] lg:h-[900px] flex bg-[url('/assets/wall-decal-background_1.jpg')] bg-cover bg-no-repeat bg-center justify-center lg:justify-end px-4 sm:px-8 lg:px-16 py-12 lg:py-20">
      <div className="bg-[#FBEDD3] w-full max-w-md lg:max-w-2xl p-6 sm:p-8 lg:p-10 rounded-lg my-auto lg:mr-20 xl:mr-30">
        <p className="text-xs font-semibold tracking-widest">
          New Arrival
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#B8912F] font-bold mt-2">
          Discover Our New Collection
        </h1>
        <p className="mt-4 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium facere dolorem cum adipisci, nihil similique fuga eum pariatur blanditiis magni.
        </p>
        <button className="bg-[#B8912F] hover:bg-[#a07b28] text-white mt-6 font-bold px-6 sm:px-10 py-3 sm:py-4 cursor-pointer">
          BUY NOW
        </button>
      </div>
    </section>
  );
}

export default Hero;

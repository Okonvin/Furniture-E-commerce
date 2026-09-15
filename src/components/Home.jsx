

function Home() {
  return (
    <>
      {/* HOME SECTION 1 */}
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
          <button className="bg-[#B8912F] text-white mt-6 font-bold px-6 sm:px-10 py-3 sm:py-4 cursor-pointer">
            BUY NOW
          </button>
        </div>
      </section>
      
      {/* HOME SECTION 2 */}
      <section className="w-[70%] mx-auto mt-6">
          <h1 className="text-center text-3xl font-bold lg:text-4xl sm:text-3xl">Browse The Range</h1>
          <p className="text-center text-[20px] font-normal sm:text-base mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 my-8 gap-5 w-full object-cover ">
            <div>
              <img src="/assets/mask_group.png" alt="dining" className="w-full object-cover"  />
              <h2 className="text-center font-semibold text-[20px] lg:text-3xl mt-3 ">Dining</h2>
            </div>
            <div>
              <img src="/assets/Image-living_room.png" alt="livingroom" className="w-full object-cover"/>
              <h2 className="text-center font-semibold text-[20px] lg:text-3xl mt-3">Living</h2>
            </div>
            <div>
              <img src="/assets/mask_group_1.png" alt="bedroom" className="w-full object-cover " />
              <h2 className="text-center font-semibold text-[20px] lg:text-3xl mt-3">Bedroom</h2>
            </div>
          </div>
      </section>

      {/* HOME SECTION 3 */}
      <section className="w-[80%] mx-auto mt-8">
        <h1 className="text-center text-3xl font-bold lg:text-4xl sm:text-3xl"> Our Products</h1>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
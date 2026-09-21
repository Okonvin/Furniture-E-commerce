import { ArrowRight, ChevronRight } from "lucide-react";

function RoomInspiration() {
  return (
    <section className="w-full bg-[#FCF8F3] py-11 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center gap-10">

        {/* LEFT TEXT COLUMN */}
        <div className="w-[35%] flex flex-col justify-center pr-4">
          <h1 className="text-[#3A3A3A] text-4xl lg:text-5xl font-bold">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-[#616161] my-4 text-base font-medium leading-relaxed">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <button className="w-fit bg-[#B88E2F] text-white py-3 px-9 text-base font-semibold hover:bg-[#a07b28] transition-colors cursor-pointer">
            Explore More
          </button>
        </div>

        {/* RIGHT IMAGES SLIDER */}
        <div className="  flex items-center gap-6 overflow-hidden">

          {/* SLIDE 1 (ACTIVE / TALL) */}
          <div className="relative flex-shrink-0 w-[400px] h-[582px] overflow-hidden">
            <img
              src="/assets/Image-sec3_1.png"
              alt="Bed Room"
              className="w-full h-full object-cover"
            />

            {/* Overlay Box Container */}
            <div className="absolute bottom-6 left-6 flex items-end">
              <div className="bg-white/50 backdrop-blur-md p-8 text-[#3A3A3A]">
                <p className="flex items-center gap-2 text-sm font-medium text-[#616161]">
                  <span>01</span>
                  <span className="inline-block w-[27px] h-[1px] bg-[#616161]"></span>
                  <span>Bed Room</span>
                </p>
                <h2 className="text-2xl font-bold mt-2 text-[#3A3A3A]">Inner Peace</h2>
              </div>

              {/* Gold Square Arrow Button */}
              <button className="bg-[#B88E2F] hover:bg-[#a07b28] text-white p-3.5 transition-colors">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* SLIDE 2 & PAGINATION COLUMN */}
          <div className="flex flex-col gap-10 flex-shrink-0 w-[372px] h-[583px]">
            {/* Image Box with Floating Right Chevron */}
            <div className="relative h-[486px] overflow-hidden">
              <img
                src="/assets/Image-sec3_2.png"
                alt="Dining Room"
                className="w-full h-full object-cover"
              />
              {/* White Floating Circle Arrow */}
              <button className="absolute right-[0.2px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronRight className="w-6 h-6 text-[#B88E2F]" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-5 pl-2">
              <div className="w-[27px] h-[27px] rounded-full border border-[#B88E2F] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#B88E2F]"></div>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8]"></div>
            </div>
          </div>

          {/* SLIDE 3 (PARTIALLY VISIBLE) */}
          <div className="flex-shrink-0 w-[372px] h-[486px] self-start">
            <img
              src="/assets/Image-sec3_3.png"
              alt="Living Room"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default RoomInspiration;

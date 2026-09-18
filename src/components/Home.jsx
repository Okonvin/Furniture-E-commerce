import { Link } from "react-router-dom";
import { Share2, Heart, ArrowRightLeft, ArrowRight, ChevronRight } from "lucide-react";

function Home() {
  return (
    <>
      {/* HOME HEADING  */}
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
      
      {/* HOME SECTION 1 */}
      <section className="w-[70%] mx-auto mt-6">
          <h1 className="text-center text-3xl font-bold lg:text-4xl sm:text-3xl">Browse The Range</h1>
          <p className="text-center text-[20px] font-normal sm:text-base mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 my-8 gap-5 w-full object-cover ">
            <div>
              <img src="/assets/mask_group.png" alt="dining" className="w-full object-cover shadow-sm transition duration-300 ease-in-out hover:scale-102 hover:shadow-xl"  />
              <h2 className="text-center font-semibold text-[20px] lg:text-3xl mt-3 ">Dining</h2>
            </div>
            <div>
              <img src="/assets/Image-living_room.png" alt="livingroom" className="w-full object-cover shadow-sm transition duration-300 ease-in-out hover:scale-102 hover:shadow-xl"/>
              <h2 className="text-center font-semibold text-[20px] lg:text-3xl mt-3">Living</h2>
            </div>
            <div>
              <img src="/assets/mask_group_1.png" alt="bedroom" className="w-full object-cover shadow-sm transition duration-300 ease-in-out hover:scale-102 hover:shadow-xl" />
              <h2 className="text-center font-semibold text-[20px] lg:text-3xl mt-3">Bedroom</h2>
            </div>
          </div>
      </section>

      {/* HOME SECTION 2 */}
      <section className="w-[73%] mx-auto my-12 ">
        <h1 className="text-center text-3xl font-bold lg:text-4xl sm:text-3xl">Our Products</h1>
        {/* FIRST COLUMN */}
        <div className="mt-8 grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Product Card Container - MUST be 'group' and 'relative' */}
          <div className="group relative  w-full bg-[#F4F5F7] overflow-hidden font-sans">
          
            {/*  Image Container */}
            <div className="relative w-full h-80">
              <img 
                src="/assets/Image-sec2_1.png" 
                alt="img" 
                className="w-full h-full object-cover"
              />
                  
              {/* Discount Badge */}
              <span className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#E97171] text-white font-bold text-sm flex items-center justify-center z-10">
                -30%
              </span>
            </div>

            {/*  Product Details */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-1">Syltherine</h3>
              <p className="text-[#898989] text-sm mb-2">Stylish cafe chair</p>
                  
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-[#3A3A3A]">Rp 2.500.000</span>
                <span className="text-sm text-[#B0B0B0] line-through">Rp 3.500.000</span>
              </div>
            </div>

            {/*  Hover Overlay (MOVED HERE) */}
            {/* 
              'absolute inset-0' pins this div to the parent card container boundaries.
              'z-20' puts it on top of the image (z-10) and text.
            */}
            <div className="absolute inset-0 bg-[#3A3A3A]/70 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                
                {/* Add to Cart Button */}
                <button className="bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-semibold py-3 px-9 text-base transition-colors duration-200">
                  Add to cart
                </button>

                {/* Action Links */}
                <div className="flex items-center gap-4 text-white text-sm font-semibold">
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Share2 className="w-4 h-4"/>
                    Share
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <ArrowRightLeft className="w-4 h-4"/>
                    Compare
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Heart className="w-4 h-4"/>
                    Like
                  </Link>
                </div>
            </div>
          </div>

          <div className="group relative   w-full bg-[#F4F5F7] overflow-hidden font-sans">
          
            {/*  Image Container */}
            <div className="relative w-full h-80">
              <img 
                src="/assets/Image-sec2_2.png" 
                alt="img" 
                className="w-full h-full object-cover"
              />
                  
              {/*No Discount Badge */}
              {/* <span className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#E97171] text-white font-bold text-sm flex items-center justify-center z-10">
                -30%
              </span> */}
            </div>

            {/*  Product Details */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-1">Leviosa</h3>
              <p className="text-[#898989] text-sm mb-2">Stylish cafe chair</p>
                  
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-[#3A3A3A]">Rp 2.500.000</span>
              </div>
            </div>

            {/*  Hover Overlay (MOVED HERE) */}
            {/* 
              'absolute inset-0' pins this div to the parent card container boundaries.
              'z-20' puts it on top of the image (z-10) and text.
            */}
            <div className="absolute inset-0 bg-[#3A3A3A]/70 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                
                {/* Add to Cart Button */}
                <button className="bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-semibold py-3 px-9 text-base transition-colors duration-200">
                  Add to cart
                </button>

                {/* Action Links */}
                <div className="flex items-center gap-4 text-white text-sm font-semibold">
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Share2 className="w-4 h-4"/>
                    Share
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <ArrowRightLeft className="w-4 h-4"/>
                    Compare
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Heart className="w-4 h-4"/>
                    Like
                  </Link>
                </div>
            </div>
          </div>

          <div className="group relative w-full bg-[#F4F5F7] overflow-hidden font-sans">
          
            {/*  Image Container */}
            <div className="relative w-full h-80">
              <img 
                src="/assets/Image-sec2_3.png" 
                alt="img" 
                className="w-full h-full object-cover"
              />
                  
              {/* Discount Badge */}
              <span className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#E97171] text-white font-bold text-sm flex items-center justify-center z-10">
                -50%
              </span>
            </div>

            {/*  Product Details */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-1">Lolito</h3>
              <p className="text-[#898989] text-sm mb-2">Luxury big sofa</p>
                  
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-[#3A3A3A]">Rp 7.000.000</span>
                <span className="text-sm text-[#B0B0B0] line-through">Rp 14.000.000</span>
              </div>
            </div>

            {/*  Hover Overlay (MOVED HERE) */}
            {/* 
              'absolute inset-0' pins this div to the parent card container boundaries.
              'z-20' puts it on top of the image (z-10) and text.
            */}
            <div className="absolute inset-0 bg-[#3A3A3A]/70 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                
                {/* Add to Cart Button */}
                <button className="bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-semibold py-3 px-9 text-base transition-colors duration-200">
                  Add to cart
                </button>

                {/* Action Links */}
                <div className="flex items-center gap-4 text-white text-sm font-semibold">
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Share2 className="w-4 h-4"/>
                    Share
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <ArrowRightLeft className="w-4 h-4"/>
                    Compare
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Heart className="w-4 h-4"/>
                    Like
                  </Link>
                </div>
            </div>
          </div>

          <div className="group relative w-full bg-[#F4F5F7] overflow-hidden font-sans">
          
            {/*  Image Container */}
            <div className="relative w-full h-80">
              <img 
                src="/assets/Image-sec2_4.png" 
                alt="img" 
                className="w-full h-full object-cover"
              />
                  
              {/* Discount Badge */}
              <span className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#2EC1AC] text-white font-bold text-sm flex items-center justify-center z-10">
                New
              </span>
            </div>

            {/*  Product Details */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-1">Respira</h3>
              <p className="text-[#898989] text-sm mb-2">Out door bar table and stool</p>
                  
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-[#3A3A3A]">Rp 500.000</span>
              </div>
            </div>

            {/*  Hover Overlay (MOVED HERE) */}
            {/* 
              'absolute inset-0' pins this div to the parent card container boundaries.
              'z-20' puts it on top of the image (z-10) and text.
            */}
            <div className="absolute inset-0 bg-[#3A3A3A]/70 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                
                {/* Add to Cart Button */}
                <button className="bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-semibold py-3 px-9 text-base transition-colors duration-200">
                  Add to cart
                </button>

                {/* Action Links */}
                <div className="flex items-center gap-4 text-white text-sm font-semibold">
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Share2 className="w-4 h-4"/>
                    Share
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <ArrowRightLeft className="w-4 h-4"/>
                    Compare
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Heart className="w-4 h-4"/>
                    Like
                  </Link>
                </div>
            </div>
          </div>

        </div>

        {/* SECOND COLUMN */}
        <div className="mt-8 grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Product Card Container - MUST be 'group' and 'relative' */}
          <div className="group relative  w-full bg-[#F4F5F7] overflow-hidden font-sans">
          
            {/*  Image Container */}
            <div className="relative w-full h-80">
              <img 
                src="/assets/Image-sec2_5.png" 
                alt="img" 
                className="w-full h-full object-cover"
              />
                  
              {/*No Discount Badge */}
              {/* <span className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#E97171] text-white font-bold text-sm flex items-center justify-center z-10">
                -30%
              </span> */}
            </div>

            {/*  Product Details */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-1">Grifo</h3>
              <p className="text-[#898989] text-sm mb-2">Night lamp</p>
                  
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-[#3A3A3A]">Rp 1.500.000</span>
              </div>
            </div>

            {/*  Hover Overlay (MOVED HERE) */}
            {/* 
              'absolute inset-0' pins this div to the parent card container boundaries.
              'z-20' puts it on top of the image (z-10) and text.
            */}
            <div className="absolute inset-0 bg-[#3A3A3A]/70 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                
                {/* Add to Cart Button */}
                <button className="bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-semibold py-3 px-9 text-base transition-colors duration-200">
                  Add to cart
                </button>

                {/* Action Links */}
                <div className="flex items-center gap-4 text-white text-sm font-semibold">
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Share2 className="w-4 h-4"/>
                    Share
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <ArrowRightLeft className="w-4 h-4"/>
                    Compare
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Heart className="w-4 h-4"/>
                    Like
                  </Link>
                </div>
            </div>
          </div>

          <div className="group relative   w-full bg-[#F4F5F7] overflow-hidden font-sans">
          
            {/*  Image Container */}
            <div className="relative w-full h-80">
              <img 
                src="/assets/Image-sec2_6.png" 
                alt="img" 
                className="w-full h-full object-cover"
              />
                  
              {/*No Discount Badge */}
              <span className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#2EC1AC] text-white font-bold text-sm flex items-center justify-center z-10">
                New
              </span>
            </div>

            {/*  Product Details */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-1">Muggo</h3>
              <p className="text-[#898989] text-sm mb-2">Small mug</p>
                  
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-[#3A3A3A]">Rp 150.000</span>
              </div>
            </div>

            {/*  Hover Overlay (MOVED HERE) */}
            {/* 
              'absolute inset-0' pins this div to the parent card container boundaries.
              'z-20' puts it on top of the image (z-10) and text.
            */}
            <div className="absolute inset-0 bg-[#3A3A3A]/70 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                
                {/* Add to Cart Button */}
                <button className="bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-semibold py-3 px-9 text-base transition-colors duration-200">
                  Add to cart
                </button>

                {/* Action Links */}
                <div className="flex items-center gap-4 text-white text-sm font-semibold">
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Share2 className="w-4 h-4"/>
                    Share
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <ArrowRightLeft className="w-4 h-4"/>
                    Compare
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Heart className="w-4 h-4"/>
                    Like
                  </Link>
                </div>
            </div>
          </div>

          <div className="group relative w-full bg-[#F4F5F7] overflow-hidden font-sans">
          
            {/*  Image Container */}
            <div className="relative w-full h-80">
              <img 
                src="/assets/Image-sec2_7.png" 
                alt="img" 
                className="w-full h-full object-cover"
              />
                  
              {/* Discount Badge */}
              <span className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#E97171] text-white font-bold text-sm flex items-center justify-center z-10">
                -50%
              </span>
            </div>

            {/*  Product Details */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-1">Pingky</h3>
              <p className="text-[#898989] text-sm mb-2">Cute bed set</p>
                  
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-[#3A3A3A]">Rp 7.000.000</span>
                <span className="text-sm text-[#B0B0B0] line-through">Rp 14.000.000</span>
              </div>
            </div>

            {/*  Hover Overlay (MOVED HERE) */}
            {/* 
              'absolute inset-0' pins this div to the parent card container boundaries.
              'z-20' puts it on top of the image (z-10) and text.
            */}
            <div className="absolute inset-0 bg-[#3A3A3A]/70 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                
                {/* Add to Cart Button */}
                <button className="bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-semibold py-3 px-9 text-base transition-colors duration-200">
                  Add to cart
                </button>

                {/* Action Links */}
                <div className="flex items-center gap-4 text-white text-sm font-semibold">
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Share2 className="w-4 h-4"/>
                    Share
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <ArrowRightLeft className="w-4 h-4"/>
                    Compare
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Heart className="w-4 h-4"/>
                    Like
                  </Link>
                </div>
            </div>
          </div>

          <div className="group relative w-full bg-[#F4F5F7] overflow-hidden font-sans">
          
            {/*  Image Container */}
            <div className="relative w-full h-80">
              <img 
                src="/assets/Image-sec2_8.png" 
                alt="img" 
                className="w-full h-full object-cover"
              />
                  
              {/* Discount Badge */}
              <span className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#2EC1AC] text-white font-bold text-sm flex items-center justify-center z-10">
                New
              </span>
            </div>

            {/*  Product Details */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-1">Potty</h3>
              <p className="text-[#898989] text-sm mb-2">Minimalist flower pot</p>
                  
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-[#3A3A3A]">Rp 500.000</span>
              </div>
            </div>

            {/*  Hover Overlay (MOVED HERE) */}
            {/* 
              'absolute inset-0' pins this div to the parent card container boundaries.
              'z-20' puts it on top of the image (z-10) and text.
            */}
            <div className="absolute inset-0 bg-[#3A3A3A]/70 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                
                {/* Add to Cart Button */}
                <button className="bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-semibold py-3 px-9 text-base transition-colors duration-200">
                  Add to cart
                </button>

                {/* Action Links */}
                <div className="flex items-center gap-4 text-white text-sm font-semibold">
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Share2 className="w-4 h-4"/>
                    Share
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <ArrowRightLeft className="w-4 h-4"/>
                    Compare
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Heart className="w-4 h-4"/>
                    Like
                  </Link>
                </div>
            </div>
          </div>

        </div>

        <button className="py-3 px-16 border-[#B88E2F] border-1 text-[#B88E2F] text-[16px] font-semibold block my-5 mx-auto hover:text-[#ffff] hover:bg-[#B88E2F] transition-colors cursor-pointer">Show More</button>
      </section>

      {/* HOME SECTION 3 */}
      <section className="w-full bg-[#FCF8F3] py-11 overflow-x-hidden">
        <div className="max-w-[1280px] mx-auto px-4 flex items-center gap-10">
          
          {/* LEFT TEXT COLUMN */}
          <div className="w-[35%] flex flex-col justify-center pr-4">
            <h1 className="text-[#3A3A3A] text-4xl lg:text-5xl font-bold leading-tight">
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
          <div className="w-[65%] flex items-center gap-6 overflow-hidden">
            
            {/* SLIDE 1 (ACTIVE / TALL) */}
            <div className="relative flex-shrink-0 w-[400px] h-[582px] overflow-hidden">
              <img 
                src="/assets/Image-sec3_1.png" 
                alt="Bed Room" 
                className="w-full h-full object-cover" 
              />

              {/* Overlay Box Container */}
              <div className="absolute bottom-6 left-6 flex items-end">
                <div className="bg-white/70 backdrop-blur-md p-8 text-[#3A3A3A]">
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
            <div className="flex flex-col gap-10 flex-shrink-0 w-[372px]">
              {/* Image Box with Floating Right Chevron */}
              <div className="relative h-[486px] overflow-hidden">
                <img 
                  src="/assets/Image-sec3_2.png" 
                  alt="Dining Room" 
                  className="w-full h-full object-cover" 
                />
                {/* White Floating Circle Arrow */}
                <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
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
    </>
  );
}

export default Home;
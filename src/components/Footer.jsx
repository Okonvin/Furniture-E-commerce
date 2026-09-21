function Footer(){
    return(
        <>
            <section className="w-full border-t border-[#9F9F9F] p-6 md:p-8">
                <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-10 md:gap-6">

                    <div className="flex flex-col gap-6 md:gap-9">
                        <h2 className="text-2xl font-bold">Funiro.</h2>
                        <p className="text-[#9F9F9F] text-base">
                            400 University Drive Suite 200 Coral Gables, FL 33134 USA
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-9">
                        <p className="text-[#9F9F9F] text-lg md:text-[20px] font-medium">Links</p>
                        <p className="text-black text-lg md:text-[20px] font-medium">Home</p>
                        <p className="text-black text-lg md:text-[20px] font-medium">Shop</p>
                        <p className="text-black text-lg md:text-[20px] font-medium">About</p>
                        <p className="text-black text-lg md:text-[20px] font-medium">Contact</p>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-9">
                        <p className="text-[#9F9F9F] text-lg md:text-[20px] font-medium">Help</p>
                        <p className="text-black text-lg md:text-[20px] font-medium">Payment Options</p>
                        <p className="text-black text-lg md:text-[20px] font-medium">Returns</p>
                        <p className="text-black text-lg md:text-[20px] font-medium">Privacy Policies</p>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-9 w-full md:w-auto">
                        <p className="text-[#9F9F9F] text-lg md:text-[20px] font-medium">Newsletter</p>

                        <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6">
                            <div className="relative w-full sm:w-64">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder=" "
                                className="peer border-b border-black w-full pt-4 pb-1 outline-none placeholder-transparent"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 top-4 text-[#9F9F9F] transition-all duration-200 cursor-text
                                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                                        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black"
                            >
                                Enter Your Email Address
                            </label>
                            </div>

                            <button className="text-black font-bold text-sm border-b border-black pb-1 cursor-pointer whitespace-nowrap self-start sm:self-auto">
                            SUBSCRIBE
                            </button>
                        </div>
                    </div>

                </div>

                <div className="border-t border-[#9F9F9F] mt-12 md:mt-16 pt-6 w-[90%] lg:w-[80%] mx-auto">
                    <p className="text-black text-sm md:text-base">2023 furino. All rights reverved</p>
                </div>
            </section>
        </>
    );
};

export default Footer
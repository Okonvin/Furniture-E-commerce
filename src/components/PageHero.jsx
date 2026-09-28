import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function PageHero({ title, showLogo = false }) {
  return (
    <>
        <section className="w-full h-[286px] flex flex-col items-center justify-center gap-3 bg-[url('/assets/hero-banner.png')] bg-cover bg-center bg-no-repeat">
            {showLogo && (
                <img src="/icons/logos.svg" alt="" className="h-16 w-16" />
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A3A3A]">{title}</h1>
            <div className="flex items-center gap-2 text-sm sm:text-base text-[#3A3A3A] font-medium">
                <Link to="/" className="hover:text-[#B88E2F] transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-[#3A3A3A]/70">{title}</span>
            </div>
        </section>
    </>
  );
}

export default PageHero;
import { Atom, FlaskConical } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { portfolioData } from "@/data/portfolio-data";

export default function HeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-28 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div
          ref={ref}
          className={`order-2 lg:order-1 space-y-8 section-fade-in ${isIntersecting ? "section-visible" : ""}`}
        >
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight font-serif">
            <span className="text-secondary">{portfolioData.contact.fullName.split(' ')[0]}</span>
            <span className="text-primary"> {portfolioData.contact.fullName.split(' ')[1]}</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl text-muted-foreground font-mono font-light">
            Research Chemist & Technical Specialist
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-sans max-w-lg">
            Advancing metallurgical science through innovative research in precious metal extraction, 
            nanotechnology applications, and sustainable chemical processes.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-mono font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("#research")}
              className="border border-border hover:bg-muted text-foreground px-8 py-3 rounded-xl font-mono font-medium transition-all duration-200 hover:shadow-md"
              data-testid="button-view-research"
            >
              View Research
            </button>
          </div>
        </div>
        
        <div className={`order-1 lg:order-2 flex justify-center lg:justify-end section-fade-in ${isIntersecting ? "section-visible" : ""}`}>
          <div className="hero-image relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl flex items-center justify-center">
            {/* Scientific formula pattern background */}
            <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <text y="20" fontFamily="serif" fontSize="8" fill="currentColor">H₂SO₄</text>
                <text y="40" x="20" fontFamily="serif" fontSize="6" fill="currentColor">Au + HCl</text>
                <text y="60" x="10" fontFamily="serif" fontSize="7" fill="currentColor">C₆H₆</text>
                <text y="80" x="30" fontFamily="serif" fontSize="5" fill="currentColor">NaOH</text>
              </svg>
            </div>
            
            {/* Profile image */}
            <div className="relative z-10 w-64 h-64 lg:w-72 lg:h-72 rounded-2xl border border-white/30 overflow-hidden">
              <img
                src="/sachin.jpg"
                alt={`${portfolioData.contact.fullName} profile photo`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            
            {/* Floating elements for scientific precision */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-chart-1/20 rounded-xl backdrop-blur-sm border border-chart-1/30 flex items-center justify-center">
              <Atom className="text-chart-1 w-8 h-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-chart-2/20 rounded-lg backdrop-blur-sm border border-chart-2/30 flex items-center justify-center">
              <FlaskConical className="text-chart-2 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

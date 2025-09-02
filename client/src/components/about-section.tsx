import { Calendar, Flag, Heart, Languages } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { portfolioData } from "@/data/portfolio-data";

export default function AboutSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: cardsRef, isIntersecting: cardsVisible } = useIntersectionObserver();
  const { ref: competenciesRef, isIntersecting: competenciesVisible } = useIntersectionObserver();

  const competencyIcons = [
    "💡", "👥", "📊", "🎯", "📝", "🤝"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`section-fade-in text-center mb-16 ${titleVisible ? "section-visible" : ""}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 font-serif">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
            With a Master's in Chemistry from Christ University and hands-on experience at Vedanta Resource Ltd, 
            I specialize in developing innovative metallurgical solutions and sustainable chemical processes.
          </p>
        </div>

        {/* Personal Profile Cards */}
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-16 section-fade-in ${cardsVisible ? "section-visible" : ""}`}
        >
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Calendar className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-mono font-semibold mb-2">Date of Birth</h3>
            <p className="text-muted-foreground">February 13, 1998</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-chart-1/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Flag className="text-chart-1 w-6 h-6" />
            </div>
            <h3 className="font-mono font-semibold mb-2">Nationality</h3>
            <p className="text-muted-foreground">{portfolioData.personalProfile.nationality}</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-chart-3/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Languages className="text-chart-3 w-6 h-6" />
            </div>
            <h3 className="font-mono font-semibold mb-2">Languages</h3>
            <p className="text-muted-foreground">{portfolioData.otherSkills.languages.join(', ')}</p>
          </div>
        </div>

        {/* Competencies */}
        <div
          ref={competenciesRef}
          className={`section-fade-in bg-card border border-border rounded-xl p-8 ${competenciesVisible ? "section-visible" : ""}`}
        >
          <h3 className="text-2xl font-bold text-secondary mb-6 font-serif">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.competencies.map((competency, index) => (
              <div
                key={competency}
                className={`flex items-center space-x-3 p-3 bg-${index % 2 === 0 ? 'primary' : `chart-${(index % 5) + 1}`}/5 rounded-lg`}
                data-testid={`competency-${competency.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span className="text-2xl">{competencyIcons[index % competencyIcons.length]}</span>
                <span className="font-mono">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

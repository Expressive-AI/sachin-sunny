import { Trophy, Medal, Award, Star, Zap, Target } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { portfolioData } from "@/data/portfolio-data";

export default function AwardsSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: awardsRef, isIntersecting: awardsVisible } = useIntersectionObserver();

  const getAwardIcon = (index: number) => {
    const icons = [Trophy, Medal, Award, Star, Zap, Target];
    return icons[index % icons.length];
  };

  const getAwardColor = (index: number) => {
    const colors = ['primary', 'chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5'];
    return colors[index % colors.length];
  };

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`section-fade-in text-center mb-16 ${titleVisible ? "section-visible" : ""}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 font-serif">Awards & Recognition</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Recognition for excellence in academics, research, and community contributions.
          </p>
        </div>

        <div
          ref={awardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 section-fade-in ${awardsVisible ? "section-visible" : ""}`}
        >
          {portfolioData.awardsAndAccomplishments.map((award, index) => {
            const IconComponent = getAwardIcon(index);
            const color = getAwardColor(index);
            
            return (
              <div
                key={`${award.title}-${index}`}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                data-testid={`award-${index}`}
              >
                <div className={`w-16 h-16 bg-${color}/20 rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                  <IconComponent className={`text-${color} w-8 h-8`} />
                </div>
                <h3 className="font-bold text-secondary mb-2 font-serif">{award.title}</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  {award.organization || award.sponsor || award.field || "Achievement"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle, CalendarDays, Building2 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { portfolioData } from "@/data/portfolio-data";

export default function InternshipsProjectsSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: listRef, isIntersecting: listVisible } = useIntersectionObserver();

  return (
    <section id="internships" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`section-fade-in text-center mb-16 ${titleVisible ? "section-visible" : ""}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 font-serif">Internships & Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Hands-on experience through internships and academic projects that strengthened practical skills and methodology.
          </p>
        </div>

        <div ref={listRef} className={`section-fade-in ${listVisible ? "section-visible" : ""}`}>
          <div className="space-y-8">
            {portfolioData.internshipsAndProjects.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                data-testid={`internship-project-${index}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-secondary font-serif">{item.title}</h3>
                    <div className="flex items-center gap-2 text-primary font-mono text-sm">
                      <Building2 className="w-4 h-4" />
                      <span>{item.organization}</span>
                    </div>
                  </div>
                  {item.duration && (
                    <div className="mt-4 lg:mt-0 flex items-center gap-2 bg-muted text-muted-foreground px-3 py-1.5 rounded-lg font-mono text-sm w-fit">
                      <CalendarDays className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>
                  )}
                </div>
                {item.details?.length ? (
                  <ul className="space-y-3 text-muted-foreground">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className={`mt-0.5 w-5 h-5 ${index % 2 === 0 ? "text-chart-1" : "text-chart-2"}`} />
                        <span className="font-sans">{d}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { CalendarCheck, Users2, Trophy, Medal } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { portfolioData } from "@/data/portfolio-data";

export default function PositionsSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: listRef, isIntersecting: listVisible } = useIntersectionObserver();

  return (
    <section id="positions" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`section-fade-in text-center mb-16 ${titleVisible ? "section-visible" : ""}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 font-serif">Positions of Responsibility</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Leadership roles, organizing committees, and team contributions across academic and community events.
          </p>
        </div>

        <div ref={listRef} className={`section-fade-in ${listVisible ? "section-visible" : ""}`}>
          <div className="space-y-8">
            {portfolioData.positionsOfResponsibility.map((pos, index) => (
              <div
                key={`${pos.role}-${index}`}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                data-testid={`position-${index}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-secondary font-serif">{pos.role}</h3>
                    {pos.organization ? (
                      <div className="text-primary font-mono text-sm">{pos.organization}</div>
                    ) : null}
                  </div>
                  {/** Duration or years if present */}
                  {Array.isArray((pos as any).years) && (pos as any).years.length ? (
                    <div className="mt-4 lg:mt-0 flex items-center gap-2 bg-primary/20 text-primary px-3 py-1.5 rounded-lg font-mono text-sm w-fit">
                      <CalendarCheck className="w-4 h-4" />
                      <span>{(pos as any).years.join(", ")}</span>
                    </div>
                  ) : pos.duration ? (
                    <div className="mt-4 lg:mt-0 flex items-center gap-2 bg-muted text-muted-foreground px-3 py-1.5 rounded-lg font-mono text-sm w-fit">
                      <CalendarCheck className="w-4 h-4" />
                      <span>{pos.duration}</span>
                    </div>
                  ) : null}
                </div>

                {/** Events list if present */}
                {Array.isArray((pos as any).events) && (pos as any).events.length ? (
                  <div className="mt-4">
                    <div className="font-mono text-sm text-muted-foreground mb-2 flex items-center gap-2">
                      <Users2 className="w-4 h-4" />
                      <span>Events</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(pos as any).events.map((ev: string) => (
                        <span key={ev} className="bg-chart-2/20 text-chart-2 px-3 py-1 rounded-lg font-mono text-xs">
                          {ev}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/** Sports list if present */}
                {Array.isArray((pos as any).sports) && (pos as any).sports.length ? (
                  <div className="mt-4">
                    <div className="font-mono text-sm text-muted-foreground mb-2 flex items-center gap-2">
                      <Medal className="w-4 h-4" />
                      <span>Sports</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(pos as any).sports.map((sp: string) => (
                        <span key={sp} className="bg-chart-1/20 text-chart-1 px-3 py-1 rounded-lg font-mono text-xs">
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/** Responsibilities bullets */}
                {Array.isArray(pos.responsibilities) && pos.responsibilities.length ? (
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {pos.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Trophy className={`${index % 2 === 0 ? "text-chart-1" : "text-chart-3"} w-5 h-5 mt-0.5`} />
                        <span className="font-sans">{r}</span>
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

import { ExternalLink } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { portfolioData } from "@/data/portfolio-data";

export default function ResearchSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: publicationsRef, isIntersecting: publicationsVisible } = useIntersectionObserver();
  const { ref: skillsRef, isIntersecting: skillsVisible } = useIntersectionObserver();

  const getPublicationColor = (index: number) => {
    const colors = ['chart-1', 'chart-2', 'chart-3'];
    return colors[index % colors.length];
  };

  return (
    <section id="research" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`section-fade-in text-center mb-16 ${titleVisible ? "section-visible" : ""}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 font-serif">Research & Publications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Contributing to scientific advancement through peer-reviewed research and innovative projects.
          </p>
        </div>

        {/* Publications */}
        <div
          ref={publicationsRef}
          className={`section-fade-in mb-16 ${publicationsVisible ? "section-visible" : ""}`}
        >
          <h3 className="text-2xl font-bold text-secondary mb-8 font-serif">Recent Publications</h3>
          <div className="space-y-6">
            {portfolioData.publications.map((publication, index) => (
              <div
                key={`${publication.title}-${index}`}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                data-testid={`publication-${index}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1 mb-4 lg:mb-0 lg:mr-6">
                    <h4 className="text-lg font-bold text-secondary mb-3 leading-relaxed font-serif">
                      {publication.title}
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-mono">{publication.authors}</span>
                    </p>
                    <p className="text-primary font-mono text-sm">{publication.venue}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className={`bg-${getPublicationColor(index)}/20 text-${getPublicationColor(index)} px-3 py-1 rounded-lg font-mono text-sm font-medium`}>
                      <span>{publication.year}</span>
                    </div>
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-chart-1 hover:text-chart-1/80 transition-colors"
                      data-testid={`publication-link-${index}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates & Skills */}
        <div
          ref={skillsRef}
          className={`grid lg:grid-cols-2 gap-8 section-fade-in ${skillsVisible ? "section-visible" : ""}`}
        >
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6 font-serif">Certifications</h3>
            <div className="space-y-4">
              {portfolioData.certificates.map((cert, index) => (
                <div
                  key={`${cert.title}-${index}`}
                  className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300"
                  data-testid={`certificate-${index}`}
                >
                  <h4 className="font-bold text-secondary mb-1 font-serif">{cert.title}</h4>
                  <p className="text-muted-foreground font-mono text-sm">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6 font-serif">Technical Skills</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-secondary mb-3 font-serif">Scientific Software</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.otherSkills.scientificSoftware.map((software, index) => (
                    <span
                      key={software}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-lg font-mono text-sm"
                      data-testid={`scientific-software-${index}`}
                    >
                      {software}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-secondary mb-3 font-serif">Publishing Software</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.otherSkills.publishingSoftware.map((software, index) => (
                    <span
                      key={software}
                      className="bg-chart-1/20 text-chart-1 px-3 py-1 rounded-lg font-mono text-sm"
                      data-testid={`publishing-software-${index}`}
                    >
                      {software}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-secondary mb-3 font-serif">Office Software</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.otherSkills.officeSoftware.map((software, index) => (
                    <span
                      key={software}
                      className="bg-chart-2/20 text-chart-2 px-3 py-1 rounded-lg font-mono text-sm"
                      data-testid={`office-software-${index}`}
                    >
                      {software}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

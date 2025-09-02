import { CheckCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { portfolioData } from "@/data/portfolio-data";

export default function ExperienceSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: workRef, isIntersecting: workVisible } = useIntersectionObserver();
  const { ref: educationRef, isIntersecting: educationVisible } = useIntersectionObserver();

  const getEducationColor = (index: number) => {
    const colors = ['primary', 'chart-1', 'chart-2', 'chart-3'];
    return colors[index % colors.length];
  };

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`section-fade-in text-center mb-16 ${titleVisible ? "section-visible" : ""}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 font-serif">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            A comprehensive journey through academic excellence and professional growth in chemical sciences.
          </p>
        </div>

        {/* Work Experience */}
        <div
          ref={workRef}
          className={`section-fade-in mb-16 ${workVisible ? "section-visible" : ""}`}
        >
          <h3 className="text-2xl font-bold text-secondary mb-8 text-center font-serif">Professional Experience</h3>
          <div className="space-y-8">
            {portfolioData.workExperience.map((experience, index) => (
              <div
                key={`${experience.title}-${index}`}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                data-testid={`work-experience-${index}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-secondary mb-2 font-serif">{experience.title}</h4>
                    <p className="text-primary font-mono font-medium">{experience.organization}</p>
                  </div>
                  <div className={`${index === 0 ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'} px-4 py-2 rounded-lg font-mono text-sm font-medium mt-4 lg:mt-0 w-fit`}>
                    <span>{experience.duration}</span>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start space-x-3">
                      <CheckCircle className={`${index === 0 ? 'text-chart-1' : 'text-chart-2'} mt-1 flex-shrink-0 w-5 h-5`} />
                      <span className="font-sans">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div
          ref={educationRef}
          className={`section-fade-in ${educationVisible ? "section-visible" : ""}`}
        >
          <h3 className="text-2xl font-bold text-secondary mb-8 text-center font-serif">Education</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {portfolioData.education.map((edu, index) => (
              <div
                key={`${edu.course}-${index}`}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                data-testid={`education-${index}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-secondary mb-2 font-serif">{edu.course}</h4>
                    <p className="text-primary font-mono">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <div className={`bg-${getEducationColor(index)}/20 text-${getEducationColor(index)} px-3 py-1 rounded-lg font-mono text-sm font-medium`}>
                      <span>{edu.yearOfGraduation}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">{edu.marks}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

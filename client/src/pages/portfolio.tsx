import { useState, useEffect } from "react";
import FloatingNavigation from "@/components/floating-navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ResearchSection from "@/components/research-section";
import InternshipsProjectsSection from "@/components/internships-projects-section";
import PositionsSection from "@/components/positions-section";
import AwardsSection from "@/components/awards-section";
import ContactSection from "@/components/contact-section";
import { portfolioData } from "@/data/portfolio-data";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.title = `${portfolioData.contact.fullName} - Research Chemist & Technical Specialist`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `Portfolio of ${portfolioData.contact.fullName}, a research chemist and technical specialist with expertise in metallurgy, nanotechnology, and environmental science.`
      );
    }

    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingNavigation activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
  <ExperienceSection />
  <InternshipsProjectsSection />
  <PositionsSection />
      <ResearchSection />
      <AwardsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="w-12 h-12 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-lg flex items-center justify-center transition-all duration-200"
              data-testid="footer-email-link"
            >
              <svg className="w-6 h-6 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a
              href={`tel:${portfolioData.contact.phone}`}
              className="w-12 h-12 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-lg flex items-center justify-center transition-all duration-200"
              data-testid="footer-phone-link"
            >
              <svg className="w-6 h-6 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-lg flex items-center justify-center transition-all duration-200"
              data-testid="footer-linkedin-link"
            >
              <svg className="w-6 h-6 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="text-secondary-foreground/80 font-mono">
            © 2024 {portfolioData.contact.fullName}. All rights reserved. | Research Chemist & Technical Specialist
          </p>
        </div>
      </footer>
    </div>
  );
}

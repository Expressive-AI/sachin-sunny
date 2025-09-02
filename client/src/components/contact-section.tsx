import { useState } from "react";
import { Mail, Phone, User, Send } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { portfolioData } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";


export default function ContactSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: contentRef, isIntersecting: contentVisible } = useIntersectionObserver();

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`section-fade-in text-center mb-16 ${titleVisible ? "section-visible" : ""}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 font-serif">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Ready to collaborate on innovative research projects or discuss opportunities in chemical sciences.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`grid lg:grid-cols gap-12 items-center section-fade-in ${contentVisible ? "section-visible" : ""}`}
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-secondary mb-1 font-serif">Email</h3>
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors font-mono"
                  data-testid="contact-email"
                >
                  {portfolioData.contact.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-chart-1/20 rounded-lg flex items-center justify-center">
                <Phone className="text-chart-1 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-secondary mb-1 font-serif">Phone</h3>
                <a
                  href={`tel:${portfolioData.contact.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors font-mono"
                  data-testid="contact-phone"
                >
                  {portfolioData.contact.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-chart-2/20 rounded-lg flex items-center justify-center">
                <User className="text-chart-2 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-secondary mb-1 font-serif">Full Name</h3>
                <p className="text-muted-foreground font-mono">{portfolioData.contact.fullName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

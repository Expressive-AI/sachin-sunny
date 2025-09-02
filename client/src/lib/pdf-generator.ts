import { portfolioData } from "@/data/portfolio-data";

export function generateResumePDF() {
  // For now, we'll create a simplified text-based approach
  // In a real implementation, you would use jsPDF or similar library
  
  const resumeContent = `
SACHIN SUNNY
Research Chemist & Technical Specialist

Contact Information:
Email: ${portfolioData.contact.email}
Phone: ${portfolioData.contact.phone}

Personal Profile:
Date of Birth: ${portfolioData.personalProfile.dob}
Nationality: ${portfolioData.personalProfile.nationality}
Marital Status: ${portfolioData.personalProfile.maritalStatus}

Education:
${portfolioData.education.map(edu => `
${edu.course} - ${edu.institution} (${edu.yearOfGraduation})
Grade: ${edu.marks}
`).join('')}

Work Experience:
${portfolioData.workExperience.map(exp => `
${exp.title} at ${exp.organization}
Duration: ${exp.duration}
Responsibilities:
${exp.responsibilities.map(resp => `• ${resp}`).join('\n')}
`).join('\n')}

Publications:
${portfolioData.publications.map(pub => `
"${pub.title}" - ${pub.venue} (${pub.year})
Authors: ${pub.authors}
DOI: ${pub.doi}
`).join('\n')}

Certifications:
${portfolioData.certificates.map(cert => `• ${cert.title} - ${cert.provider}`).join('\n')}

Technical Skills:
Scientific Software: ${portfolioData.otherSkills.scientificSoftware.join(', ')}
Publishing Software: ${portfolioData.otherSkills.publishingSoftware.join(', ')}
Office Software: ${portfolioData.otherSkills.officeSoftware.join(', ')}
Languages: ${portfolioData.otherSkills.languages.join(', ')}

Core Competencies:
${portfolioData.competencies.map(comp => `• ${comp}`).join('\n')}

Awards & Accomplishments:
${portfolioData.awardsAndAccomplishments.map(award => `• ${award.title}${award.organization ? ` - ${award.organization}` : ''}${award.sponsor ? ` (${award.sponsor})` : ''}`).join('\n')}
`;

  // Create a blob and download it
  const blob = new Blob([resumeContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Sachin_Sunny_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Future implementation with jsPDF would look like this:
/*
import jsPDF from 'jspdf';

export function generateResumePDF() {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(20);
  doc.text('SACHIN SUNNY', 20, 30);
  doc.setFontSize(14);
  doc.text('Research Chemist & Technical Specialist', 20, 40);
  
  // Contact Information
  doc.setFontSize(12);
  doc.text(`Email: ${portfolioData.contact.email}`, 20, 55);
  doc.text(`Phone: ${portfolioData.contact.phone}`, 20, 65);
  
  // ... continue with other sections
  
  doc.save('Sachin_Sunny_Resume.pdf');
}
*/

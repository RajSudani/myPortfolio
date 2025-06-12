
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "School Of Engineering And Applied Science Ahmedabad University",
      duration: "2022 - 2026",
      gpa: "2.74/4 CGPA",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and emerging technologies.",
      highlights: [
        "Relevant Coursework: Data Structures & Algorithms, Database Systems, Web Technologies",
      ]
    }
  ];

  const achievements = [
    "Dean's List for Academic Excellence (2022-2023)",
    "Winner - University Level Hackathon 2023",
    "Top 10% in Data Structures & Algorithms Course",
    "Technical Head - Computer Science Society"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Education</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          My academic journey and achievements in computer science
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            {educationData.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-blue-100">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          <span>{edu.gpa}</span>
                        </div>
                      </div>
                      <h4 className="font-medium text-blue-600 mb-2">{edu.institution}</h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Achievements */}
          
        </div>
      </div>
    </section>
  );
};

export default Education;

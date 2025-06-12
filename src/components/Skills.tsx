
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
      color: "blue"
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "HTML/CSS", "Express.js", "PostgreSQL"],
      color: "green"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Linux", "VS Code", "Figma", "Canva", "AutoCAD"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 border-blue-200 hover:border-blue-300";
      case "green":
        return "bg-green-50 border-green-200 hover:border-green-300";
      case "purple":
        return "bg-purple-50 border-purple-200 hover:border-purple-300";
      case "orange":
        return "bg-orange-50 border-orange-200 hover:border-orange-300";
      default:
        return "bg-gray-50 border-gray-200 hover:border-gray-300";
    }
  };

  const getSkillBadgeColor = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-800";
      case "green":
        return "bg-green-100 text-green-800";
      case "purple":
        return "bg-purple-100 text-purple-800";
      case "orange":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="skills"   className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and competencies
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`${getColorClasses(category.color)} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getSkillBadgeColor(category.color)} transition-all duration-200 hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

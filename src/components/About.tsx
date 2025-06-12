
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-slate-50/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Passionate computer science student with a love for problem-solving and innovation
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a dedicated 4th-year Computer Science student at Ahmedabad University, 
              driven by curiosity and a passion for technology. My journey has been focused 
              on developing strong programming skills and understanding complex algorithms.
            </p>
            <p className="text-lg leading-relaxed">
              I enjoy working on challenging projects that push the boundaries of what's 
              possible in web development. I believe 
              in continuous learning and staying updated with the latest technological trends.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>📍 Ahmedabad, Gujarat</span>
              <span>🎓 Graduation: 2026</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Problem Solver</h3>
                    <p className="text-sm text-muted-foreground">Love tackling complex algorithmic challenges</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Innovator</h3>
                    <p className="text-sm text-muted-foreground">Always looking for creative solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Team Player</h3>
                    <p className="text-sm text-muted-foreground">Collaborative approach to development</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

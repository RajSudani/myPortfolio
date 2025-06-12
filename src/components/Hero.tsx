
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-blue-50/20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Raj Sudani
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
            Computer Science Engineering
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            4th Year at Ahmedabad University | Passionate about building innovative solutions 
            and exploring the frontiers of technology
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" className="hover:bg-blue-50 transform hover:scale-105 transition-all duration-200">
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Raj3021" className="text-muted-foreground hover:text-blue-600 transform hover:scale-110 transition-all duration-200">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/raj-sudani-a09229283" className="text-muted-foreground hover:text-blue-600 transform hover:scale-110 transition-all duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:sudaniraj723@gmail.com" className="text-muted-foreground hover:text-blue-600 transform hover:scale-110 transition-all duration-200">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;

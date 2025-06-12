
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "raj.s5@ahduni.edu.in",
      href: "mailto:raj.s5@ahduni.edu.in"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 74860 95825",
      href: "tel:+917486095825"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Raj3021",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/raj-sudani-a09229283",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/MrRaj15205137",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-slate-50/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're looking to collaborate on a project, discuss opportunities, 
              or just want to connect with a fellow tech enthusiast, I'd love to hear from you!
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <contact.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    <p className="text-muted-foreground group-hover:text-blue-600 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-200 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Card */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <div className="space-y-6">
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                  <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Ready to collaborate?</h4>
                  <p className="text-muted-foreground text-sm mb-6">
                    Let's discuss how we can work together on exciting projects
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
                
                <div className="text-center text-sm text-muted-foreground">
                  <p>
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Footer */}
      <div className="border-t border-border mt-20 pt-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 John Doe. Built with React & TypeScript</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

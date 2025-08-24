// Import the icons we need for the contact links
import { Mail, Linkedin, Instagram } from 'lucide-react';

export const Contact = () => {
  return (
    // Contact section - ways for people to get in touch
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      {/* Main container for the contact content */}
      <div className="container max-w-4xl mx-auto px-4">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, and interesting projects. 
            Feel free to reach out through any of these platforms!
          </p>
        </div>

        {/* Contact cards grid - shows email, LinkedIn, and Instagram */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          
          {/* Email Card */}
          <div className="group">
            <a 
              href="mailto:ira.sharma@example.com" 
              className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-card"
            >
              {/* Email icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-sm text-muted-foreground text-center">
                Get in touch directly
              </p>
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="group">
            <a 
              href="https://www.linkedin.com/in/ira-sharma-sms/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-card"
            >
              {/* LinkedIn icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground text-center">
                Professional profile
              </p>
            </a>
          </div>

          {/* Instagram Card */}
          <div className="group">
            <a 
              href="https://www.instagram.com/irashreshma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-card"
            >
              {/* Instagram icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Instagram</h3>
              <p className="text-sm text-muted-foreground text-center">
                Personal updates
              </p>
            </a>
          </div>
        </div>

        {/* Additional contact information */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 border border-border">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Available for collaborations and opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

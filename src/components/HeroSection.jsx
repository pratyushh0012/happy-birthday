// Import the arrow icon for the scroll indicator
import { ArrowDown } from 'lucide-react';
// Import the profile picture
import iraProfile from '../assets/iraProfile.jpeg';

export const HeroSection = () => {
  return (
    // Hero section - the main introduction area
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Main content container */}
      <div className="container max-w-4xl mx-auto text-center z-10 pt-20">
        
        {/* Profile Picture */}
        <div className="mb-12">
          <img 
            src={iraProfile} 
            alt="Ira Sharma" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Text content area */}
        <div className="space-y-6">
          {/* Main heading with animated text */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {/* Each span has a different animation delay for a staggered effect */}
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {' '}
              Ira
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {' '}
              Sharma
            </span>
          </h1>

          {/* Description paragraph */}
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a 19-year-old Mechanical Engineering Student at Macquarie
            University from Kathmandu, Nepal passionate about empowering the
            upcoming generations into STEM and utilizing space data to solve
            local and global level problems back in Earth.
          </p>
        </div>
      </div>

      {/* Scroll indicator at the bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

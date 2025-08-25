// Import all the components we need for the home page
import { Theme } from '../components/Theme';
import { StarBackground } from '../components/StarBackground';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { Experience } from '../components/Experience';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { BirthdayCelebration } from '../components/BirthdayCelebration';

export const Home = () => {
  return (
    // Main container for the entire page
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Birthday Celebration - shows when the page loads */}
      <BirthdayCelebration />
      
      {/* Theme Toggle - allows switching between light and dark mode */}
      <Theme />
      
      {/* Star Background - creates the animated star effect */}
      <StarBackground />

      {/* Navigation Bar - shows at the top of the page */}
      <Navbar />
      
      {/* Main Content Area - contains all the main sections */}
      <main>
        {/* Hero Section - the first thing visitors see */}
        <HeroSection />
        
        {/* About Section - information about you */}
        <AboutSection />
        
        {/* Experience Section - information about your experience */}
        <Experience />
        
        {/* Contact Section - ways to get in touch */}
        <Contact />
      </main>

      {/* Footer - could add footer content here later */}
      <Footer />
    </div>
  );
};

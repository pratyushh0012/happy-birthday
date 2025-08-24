import { useState } from "react";
import { Calendar, MapPin, ExternalLink, Award, BookOpen, Rocket, Users} from "lucide-react";

export const Experience = () => {
    const [activeCategory, setActiveCategory] = useState("projects");

    const education = [
        {
            year: "Feb 2025 - Present",
            title: "Bachelor of Engineering (Honours) in Mechanical Engineering",
            institution: "Macquarie University",
            location: "Sydney, Australia",
            description: ".........",
        },
        {
            year: "2021 - 2023",
            title: " Alevels",
            institution: "Little Angels School",
            location: "Kathmandu, Nepal",
            description: "Subjects: Physics, Mathematics, Chemistry, ...",
        }
    ];

    const projects = [
        {
            title: "Satellite Data Analysis Platform",
            description: "Developed a web application to analyze satellite imagery for environmental monitoring",
            tech: ["Python", "React", "NASA API", "Machine Learning"],
            link: "#",
            year: "2024"
        },
        {
            title: "STEM Education Initiative",
            description: "Created educational content and workshops to inspire young students in STEM fields",
            tech: ["Content Creation", "Workshop Design", "Community Outreach"],
            link: "#",
            year: "2023"
        },
        {
            title: "Robotics Competition Project",
            description: "Led a team in designing and building autonomous robots for competition",
            tech: ["Arduino", "C++", "Mechanical Design", "Team Leadership"],
            link: "#",
            year: "2023"
        },
        {
            title: "Robotics Competition Project",
            description: "Led a team in designing and building autonomous robots for competition",
            tech: ["Arduino", "C++", "Mechanical Design", "Team Leadership"],
            link: "#",
            year: "2023"
        }
    ];

    const experience = [
        {
            title: "Research Assistant",
            company: "Macquarie University Space Research Lab",
            duration: "Jan 2024 - Present",
            description: "Assisting in space data analysis and satellite technology research",
        },
        {
            title: "STEM Outreach Coordinator",
            company: "Local Education Initiative",
            duration: "Jun 2023 - Dec 2023",
            description: "Organized workshops and events to promote STEM education among youth",
        }
    ];

    const categories = [
        { id: "education", label: "Education", icon: BookOpen },
        { id: "projects", label: "Projects", icon: Rocket },
        { id: "experience", label: "Experience", icon: Users },
    ];

    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Experience</span>
                </h2>

                {/* Category Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="flex flex-wrap gap-2 bg-gray-800 rounded-full p-1 shadow-lg">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                                        activeCategory === category.id
                                            ? "bg-primary text-primary-foreground shadow-lg"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {category.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-4xl mx-auto">
                    {/* Education Tab */}
                    {activeCategory === "education" && (
                        <div className="space-y-8">
                            {education.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="md:w-1/3">
                                            <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span className="font-semibold">{item.year}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4" />
                                                    <span className="text-sm">{item.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:w-2/3 bg-gray-800 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-primary font-semibold mb-3">{item.institution}</p>
                                            <p className="text-gray-300 mb-4">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Projects Tab */}
                    {activeCategory === "projects" && (
                        <div className="grid gap-6 md:grid-cols-2">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                                    <div className="flex justify-between items-start mb-4 size-20">
                                       
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Internships Tab */}
                    {activeCategory === "experience" && (
                        <div className="space-y-8">
                            {experience.map((experience, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                    <div className="flex items-center justify-center mb-4 size-20 group-hover:bg-primary/20 transition-colors">
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};
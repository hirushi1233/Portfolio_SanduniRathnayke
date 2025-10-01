import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Assistive navigation system for deaf-blind individuals",
      description: "Full-stack e-commerce solution with real-time inventory management",
      tech: ["JAVA", "Android studio", "IOT","Bluetooth communication"],
      color: "from-purple-500 to-pink-500",
      image: "/images/profile1.jpg"
    },
    {
     
      title: "Hotel Guest Chat Assistant",
      description: "AI-powered hotel management chatbot built with Flask backend and dynamic frontend. Provides multilingual FAQ responses, real-time chat functionality, and seamless guest service experience with intuitive UI.",
      tech: ["Python", "Flask", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
      image: "/images/project3.png"
    },
    {
      title: "Social Media App",
      description: "Real-time social platform with live messaging and notifications",
      tech: ["React Native", "Firebase", "Redux"],
      color: "from-green-500 to-teal-500"
    },
    {
  
      title: "Interactive Portfolio Site",
      description: "Modern single-page portfolio built with React featuring animated backgrounds, sticky navigation, project cards with hover effects, and a fully functional contact section with sleek UI/UX design.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      color: "from-purple-500 to-pink-500",
      image: "/images/project2.png"
    }
  ];

const skills = [
  { 
    name: "Cloud & DevOps", 
    items: ["AWS", "Microsoft Azure", "Docker", "CI/CD (GitHub Actions)", "Bash Scripting"], 
    icon: <Zap className="w-6 h-6" /> 
  },
  { 
    name: "Programming", 
    items: ["Python", "Java", "JavaScript", "PHP", "C++","React"], 
    icon: <Code className="w-6 h-6" /> 
  },
  { 
    name: "Infrastructure & Networking", 
    items: ["Linux (Ubuntu)", "MySQL", "Firebase", "Cisco Packet Tracer", "Wireshark"], 
    icon: <Palette className="w-6 h-6" /> 
  }
];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ top: '10%', left: '10%', animationDuration: '4s' }}></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ top: '60%', right: '10%', animationDuration: '6s' }}></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ bottom: '10%', left: '50%', animationDuration: '5s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/90 backdrop-blur-lg shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-3 hover:bg-purple-500/20 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="mb-6 animate-fade-in">
            <span className="text-purple-400 text-lg">Hello, I'm</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Sanduni Rathnayake
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
             Undergraduate passionate in Systems & DevOps Engineering
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Undergraduate specializing in Networking and Mobile Computing, seeking opportunities to gain hands-on experience in DevOps, cloud infrastructure, and system automation
          </p>
          <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-105">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
         <div className="grid md:grid-cols-2 gap-12 items-center">
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
    <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
      <img 
        src="/images/profile.jpg" 
        alt="Your Name" 
        className="w-80 h-80 mx-auto object-cover rounded-full mb-6 border-4 border-purple-500 shadow-lg"
      />
      <div className="flex justify-center gap-4">
        <a href="https://github.com/hirushi1233" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-purple-500 transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/sanduni-hirushika-rathnayake-433bb0207" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-purple-500 transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:your.sandunirathnayake@gmail.com" className="p-3 bg-gray-700 rounded-full hover:bg-purple-500 transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
<div>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I'm a motivated undergraduate pursuing BSc (Hons) in Networking and Mobile Computing at Horizon Campus. My passion lies in DevOps, cloud infrastructure, and building reliable, scalable systems through automation and modern engineering practices.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                My journey has taken me from networking fundamentals to cloud platforms like AWS and Azure, containerization with Docker, and CI/CD automation. I'm continuously expanding my knowledge through hands-on projects and certifications, eager to contribute to real-world infrastructure challenges.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400">6+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-400">15+</div>
                  <div className="text-gray-400">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400">3.46</div>
                  <div className="text-gray-400">GPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        <div className="grid md:grid-cols-2 gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
    >
      <div className="h-48 relative overflow-hidden">
        {/* Project Image */}
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
        {/* Hover Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-12 h-12" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-purple-400">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-gray-300 text-center">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 relative">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Sanduni Rathnayake. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}
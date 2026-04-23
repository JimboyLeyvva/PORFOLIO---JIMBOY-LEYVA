import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code2, Palette, Globe, Download } from 'lucide-react';
import { useState } from 'react';

const colors = {
  beige: 'bg-brand-beige',
  lightGreen: 'bg-brand-light-green',
  green: 'bg-brand-green',
  darkGreen: 'bg-brand-dark-green',
  deepForest: 'bg-brand-deep-forest',
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`min-h-screen flex flex-col justify-center ${className}`}>
    {children}
  </section>
);

const ProjectCard = ({ project }: { project: { title: string; description: string; tags: string[]; images?: string[]; github?: string }; key?: string | number }) => {
  const [current, setCurrent] = useState(0);
  const images = project.images ?? [];

  return (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-light-green/30 shadow-sm"
  >
    <div className="aspect-video bg-brand-light-green/20 relative group overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center bg-brand-deep-forest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-brand-deep-forest">
            <ExternalLink size={20} />
          </a>
        ) : (
          <button className="p-3 bg-white rounded-full text-brand-deep-forest">
            <ExternalLink size={20} />
          </button>
        )}
      </div>
      {images.length > 0 ? (
        <>
          <img src={images[current]} alt={`${project.title} screenshot ${current + 1}`} className="w-full h-full object-cover" />
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setCurrent(i => (i - 1 + images.length) % images.length); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm"
              >‹</button>
              <button
                onClick={(e) => { e.stopPropagation(); setCurrent(i => (i + 1) % images.length); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm"
              >›</button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1">
                {images.map((_, i) => (
                  <button key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-brand-green/40">
          <Globe size={48} />
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-brand-deep-forest">{project.title}</h3>
      <p className="text-brand-dark-green/80 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-brand-light-green/30 text-brand-deep-forest text-xs rounded-full font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
  );
};

export default function App() {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const projects = [
    {
      title: "POS - Caindirya ni She",
      description: "A Point of Sale system built for Caindirya ni She.",
      tags: ["POS", "System"],
      images: [
        "/Image/Projects/POS - CAINDIRYA NI SHE/Screenshot 2026-04-23 231140.png",
        "/Image/Projects/POS - CAINDIRYA NI SHE/Screenshot 2026-04-23 231207.png",
        "/Image/Projects/POS - CAINDIRYA NI SHE/Screenshot 2026-04-23 231218.png",
        "/Image/Projects/POS - CAINDIRYA NI SHE/Screenshot 2026-04-23 231233.png",
        "/Image/Projects/POS - CAINDIRYA NI SHE/Screenshot 2026-04-23 231305.png",
        "/Image/Projects/POS - CAINDIRYA NI SHE/Screenshot 2026-04-23 231324.png",
        "/Image/Projects/POS - CAINDIRYA NI SHE/Screenshot 2026-04-23 231340.png",
      ],
      github: "https://github.com/JimboyLeyvva/POS---CAINDIRYA-NI-SHIRLEY",
    },
    {
      title: "Carventurer Website",
      description: "A website for Carventurer, a car rental and adventure travel platform.",
      tags: ["HTML", "CSS", "JavaScript"],
      images: [
        "/Image/Projects/Website - Carventurer/Screenshot 2026-04-23 234518.png",
      ],
      github: "https://github.com/JimboyLeyvva/Carventurer-Website",
    },
  ];

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
        <div className="bg-brand-deep-forest/90 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between shadow-lg border border-white/10">
          <div className="text-brand-beige font-display font-bold text-xl tracking-tight">PORTFOLIO</div>
          <div className="hidden md:flex gap-8">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveNav(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeNav === item.id ? 'text-brand-light-green' : 'text-brand-beige/70 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="md:hidden text-brand-beige"><Mail size={20} /></a>
        </div>
      </nav>

      {/* Home Section */}
      <Section id="home" className="section-padding bg-brand-beige">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-light-green/30 text-brand-dark-green rounded-full text-sm font-semibold mb-6">
              Available for New Projects
            </span>
            <h1 className="text-5xl md:text-7xl font-display text-brand-deep-forest leading-tight mb-6">
              Jimboy  
              <span className="text-brand-green"> C. </span>Leyva
            </h1>
            <p className="text-lg text-brand-dark-green/80 mb-8 max-w-lg leading-relaxed">
              I'm a creative developer focused on building beautiful, functional, and user-centered digital products. Let's turn your vision into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-brand-deep-forest text-brand-beige rounded-xl font-bold flex items-center gap-2 hover:bg-brand-green transition-colors shadow-md">
                View Work <ArrowRight size={20} />
              </a>
              <a 
                href="/CV - JIMBOY LEYVA.pdf" 
                download="CV - JIMBOY LEYVA.pdf"
                className="px-8 py-4 bg-white/50 border border-brand-green/30 text-brand-deep-forest rounded-xl font-bold flex items-center gap-2 hover:bg-brand-light-green/30 transition-all shadow-sm"
              >
                Download CV <Download size={20} />
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href="#" className="text-brand-dark-green hover:text-brand-green transition-colors"><Github size={24} /></a>
                <a href="#" className="text-brand-dark-green hover:text-brand-green transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="w-full aspect-square md:aspect-[4/5] bg-brand-light-green rounded-[2rem] overflow-hidden relative shadow-2xl">
              {/* This is where the user will put their image */}
              <div className="absolute inset-0 bg-brand-deep-forest/5 flex flex-col items-center justify-center text-brand-deep-forest/20 p-12 text-center">
                <Palette size={120} strokeWidth={0.5} />
                <p className="mt-4 font-medium italic">Your Image Here</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-light-green rounded-full blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="section-padding bg-brand-light-green/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">About Me</h2>
            <p className="text-lg text-brand-dark-green/80 leading-relaxed max-w-3xl mx-auto">
              My journey is defined by a commitment to continuous learning and professional growth. Here is a look at my academic background and the experiences that have shaped my career.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-brand-green text-brand-beige rounded-lg">
                  <Globe size={24} />
                </div>
                <h3 className="text-2xl font-display">Education</h3>
              </div>
              
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-0 before:w-0.5 before:bg-brand-green/20">
                {[
                  {
                    level: "Tertiary",
                    degree: "Bachelor of Science in Information Technology",
                    school: "Datamex College of St. Adeline",
                    year: "2022 – 2026",
                    description: "11, Gotaco Building 2, MacArthur Highway, Marulas, R-9, Valenzuela"
                  },
                  {
                    level: "Secondary",
                    degree: "Information and Communication Technology – Computer Systems Servicing",
                    school: "St. Matthew of Blumentritt Institute of Technology Inc.",
                    year: "2019 – 2021",
                    description: "2449 Rizal Ave., near Cavite Street Sta. Cruz Manila"
                  },
                  {
                    level: "Secondary",
                    degree: "Junior High School",
                    school: "Jose P. Laurel High School",
                    year: "2015 – 2019",
                    description: "Pampanga Street Juan Luna Tondo, Manila City, Philippines"
                  },
                  {
                    level: "Primary",
                    degree: "Elementary Education",
                    school: "Jose Rizal Elementary School",
                    year: "2009 – 2015",
                    description: "Tayuman Tondo, Manila City, Philippines"
                  }
                ].map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-1.5 w-[40px] h-[40px] bg-white rounded-full border-4 border-brand-light-green flex items-center justify-center z-10">
                      <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-green mb-1 block">{edu.level}</span>
                      <h4 className="text-lg font-bold text-brand-deep-forest">{edu.degree}</h4>
                      <p className="text-brand-dark-green font-medium mb-2">{edu.school} | {edu.year}</p>
                      <p className="text-sm text-brand-dark-green/70 leading-relaxed">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-brand-deep-forest text-brand-light-green rounded-lg">
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl font-display">Experience</h3>
              </div>

              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-0 before:w-0.5 before:bg-brand-deep-forest/10">
                {[
                  {
                    role: "On-the-Job Training – IT Services Division (ITSD)",
                    company: "CTI Columbia Technologies Inc. | Deployed at Datamex College of Saint Adeline, Inc.",
                    period: "July 07, 2025 – October 15, 2025",
                    tasks: [
                      "Completed 500 hours of OJT under the Information Technology Services Division.",
                      "Assigned to the Services Department handling hardware support.",
                      "Learned to troubleshoot, diagnose, and repair laptops and desktop PCs.",
                    ]
                  }
                ].map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-1.5 w-[40px] h-[40px] bg-brand-deep-forest rounded-full border-4 border-brand-light-green/20 flex items-center justify-center z-10">
                      <div className="w-2 h-2 bg-brand-light-green rounded-full"></div>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-green mb-1 block">{exp.period}</span>
                      <h4 className="text-lg font-bold text-brand-deep-forest">{exp.role}</h4>
                      <p className="text-brand-dark-green font-medium mb-3">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.tasks.map((task, j) => (
                          <li key={j} className="text-sm text-brand-dark-green/70 flex gap-2">
                            <span className="text-brand-green mt-1.5">•</span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="section-padding bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">Selected Work</h2>
            <p className="text-brand-dark-green/70 max-w-md">A collection of projects that define my passion for solving complex problems through design.</p>
          </div>
          <button className="text-brand-deep-forest font-bold flex items-center gap-2 hover:text-brand-green transition-colors">
            View all projects <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="section-padding bg-brand-deep-forest text-brand-beige">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">Let's build <br/> something <span className="text-brand-light-green">together</span></h2>
            <p className="text-lg text-brand-beige/60 mb-12 max-w-md">
              Have a project in mind or just want to chat? I'm always open to new opportunities and interesting conversations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-light-green">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs text-brand-beige/40 uppercase tracking-widest font-bold">Email me</p>
                  <p className="text-lg font-medium">hello@yourportfolio.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-light-green">
                  <Linkedin />
                </div>
                <div>
                  <p className="text-xs text-brand-beige/40 uppercase tracking-widest font-bold">Connect</p>
                  <p className="text-lg font-medium">linkedin.com/in/username</p>
                </div>
              </div>
            </div>
          </div>

          <motion.form 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-brand-beige/60">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-light-green transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-brand-beige/60">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-light-green transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-brand-beige/60">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-light-green transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full py-4 bg-brand-light-green text-brand-deep-forest rounded-xl font-bold hover:bg-white transition-colors">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-brand-beige/40">
          <p>© 2024 Your Portfolio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-light-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-light-green transition-colors">Terms of Service</a>
          </div>
        </footer>
      </Section>
    </div>
  );
}

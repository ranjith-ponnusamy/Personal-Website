/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink, 
  ChevronRight, 
  BarChart3, 
  Database, 
  Briefcase, 
  GraduationCap, 
  Award,
  Menu,
  X,
  Github
} from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const skills = {
  "Analytics & BI": ["SQL", "Microsoft Power BI", "Tableau", "MS Excel (PivotTables, dashboards)"],
  "BA Skills": ["Requirements Elicitation", "Data Profiling", "KPI Reporting", "Stakeholder Management"],
  "Tools": ["Power BI", "MS Excel", "MS Office Suite (AI-enhanced)", "PowerPoint"],
  "Soft Skills": ["Analytical Thinking", "Active Listening", "Team Collaboration", "Adaptability"]
};

const projects = [
  {
    title: "Coffee Shop Sales Dashboard",
    tools: "MS Excel",
    link: "#",
    description: [
      "Cleaned and analysed 149,116 POS transactions across 3 NYC locations for H1 2023",
      "Identified that 46% of daily revenue falls in the 7–10 AM window and revenue doubled Jan → Jun (+104%)",
      "Revealed that Coffee & Tea account for 67% of $698K total revenue; flagged Lower Manhattan as a top upsell location",
      "Delivered an interactive dashboard enabling store-level performance comparison and operational decision-making"
    ]
  },
  {
    title: "Toy Store KPI Report",
    tools: "Power BI",
    link: "#",
    description: [
      "Built a star-schema relational model on 41,830 orders and $658K revenue from a multi-location Mexican toy chain",
      "Designed interactive Power BI dashboard with KPIs, slicers, and trend charts for stakeholder reporting",
      "Discovered 27% profit margin (~$180K) and identified seasonal spikes in Jan, Apr, and Jul driving demand cycles",
      "Highlighted Downtown and Commercial stores consistently outperforming Residential and Airport locations"
    ]
  }
];

const experience = [
  {
    role: "Technical Team Coordinator",
    company: "Entrepreneurship & Innovation Club, ISAB",
    location: "Greater Noida",
    period: "Jun 2024 – Mar 2025",
    points: [
      "Led technical operations for the club, coordinating initiatives and driving digital tool adoption across student projects",
      "Organised and facilitated workshops on Google and Microsoft Office suite for peers"
    ]
  },
  {
    role: "Farm Management Intern",
    company: "Ethic Farmers Agro Corp",
    location: "Arcot, Tamil Nadu",
    period: "Apr 2024 – Jun 2024",
    points: [
      "Maintained key records for goat nutrition, fodder cultivation, and farm operations across coconut and intercrops",
      "Applied data-driven record keeping to monitor livestock health metrics and improve farm planning efficiency"
    ]
  },
  {
    role: "RAWE Programme Participant & Team Co-ordinator",
    company: "Tamil Nadu Agricultural University",
    location: "Alagayam, Tamil Nadu",
    period: "Dec 2022 – Mar 2023",
    points: [
      "Led a team of 11 members in rural agriculture work experience, studying cropping patterns, socioeconomics, and technology adoption",
      "Registered 5 village farmers for the PM-KISAN Yojana scheme and conducted field demonstrations on new agricultural technologies"
    ]
  }
];

const education = [
  {
    degree: "MBA – Food & Agribusiness Management",
    school: "Imperial School of Agri-Business",
    location: "Greater Noida",
    period: "2023–2025",
    grade: "6.72 OGPA"
  },
  {
    degree: "B.Sc. (Hons.) Agriculture",
    school: "Tamil Nadu Agricultural University",
    location: "Coimbatore",
    period: "2019–2022",
    grade: "7.84 CGPA"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-2xl font-serif font-bold tracking-tighter"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            RANJITH P.
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-ink transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="bg-ink text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-accent transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-border overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 section-padding relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-[0.9]">
              Business <br />
              <span className="italic text-accent">Analyst</span>
            </h1>
            <p className="text-xl text-muted max-w-lg mb-8 leading-relaxed">
              MBA graduate specializing in Food & Agribusiness Management. 
              Translating raw data into actionable business insights through SQL, Power BI, and Tableau.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-ink text-white px-8 py-4 rounded-full font-medium hover:bg-accent transition-all flex items-center gap-2 group">
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="border border-border px-8 py-4 rounded-full font-medium hover:bg-white transition-all">
                Let's Talk
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://picsum.photos/seed/business/800/800" 
                alt="Ranjith P" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Current Focus</p>
                    <h3 className="text-xl font-serif font-bold">Data Visualization & BI</h3>
                  </div>
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-serif mb-4">Professional <br />Summary</h2>
              <div className="w-12 h-1 bg-accent mb-6" />
            </div>
            <div className="md:col-span-2">
              <p className="text-xl text-muted leading-relaxed mb-8">
                Results-oriented MBA graduate in Food & Agribusiness Management with a strong foundation in data analysis, 
                business intelligence, and requirements elicitation. Proficient in SQL, Power BI, Tableau, and MS Excel, 
                with hands-on experience translating raw data into actionable business insights.
              </p>
              <p className="text-xl text-muted leading-relaxed">
                Proven ability to manage projects, coordinate teams, and communicate effectively with stakeholders across domains. 
                Passionate about leveraging technology to solve complex agricultural and business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Core Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                className="glass p-8 rounded-3xl hover:border-accent transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {category === "Analytics & BI" && <BarChart3 className="w-6 h-6" />}
                  {category === "BA Skills" && <Database className="w-6 h-6" />}
                  {category === "Tools" && <Briefcase className="w-6 h-6" />}
                  {category === "Soft Skills" && <Award className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-sm text-muted flex items-center gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif mb-2">Featured Projects</h2>
              <p className="text-muted">Showcasing data-driven solutions and dashboards.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                  <img 
                    src={`https://picsum.photos/seed/${project.title}/800/450`} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href={project.link} className="bg-white text-ink px-6 py-3 rounded-full font-medium flex items-center gap-2">
                      View Case Study <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-1">{project.title}</h3>
                    <p className="text-accent text-sm font-bold uppercase tracking-widest">{project.tools}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="text-muted text-sm leading-relaxed flex gap-3">
                      <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Professional Journey</h2>
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                className="relative pl-8 border-l border-border"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-accent rounded-full" />
                <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-serif font-bold">{exp.role}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-ink">{exp.period}</p>
                    <p className="text-xs text-muted">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-muted leading-relaxed">
                      • {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-ink text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif mb-12">Education</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {education.map((edu) => (
              <div key={edu.degree} className="border-b border-white/10 pb-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-accent font-bold">{edu.period}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2">{edu.degree}</h3>
                <p className="text-white/60 mb-2">{edu.school} — {edu.location}</p>
                <p className="text-accent font-mono text-sm">{edu.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[3rem] overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-ink text-white">
              <h2 className="text-5xl font-serif mb-8">Let's build <br />something <span className="italic text-accent">great</span>.</h2>
              <p className="text-white/60 text-lg mb-12 max-w-md">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:ranjithp.isab@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Email Me</p>
                    <p className="text-lg">ranjithp.isab@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+919952687257" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Call Me</p>
                    <p className="text-lg">+91 99526 87257</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Location</p>
                    <p className="text-lg">Avinashi, Tiruppur, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <a href="https://linkedin.com/in/ranjith-p-0b43ab296" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="p-12 lg:p-20 bg-white">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Full Name</label>
                    <input type="text" className="w-full px-0 py-3 border-b border-border focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Email Address</label>
                    <input type="email" className="w-full px-0 py-3 border-b border-border focus:border-accent outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted">Subject</label>
                  <input type="text" className="w-full px-0 py-3 border-b border-border focus:border-accent outline-none transition-colors" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted">Message</label>
                  <textarea rows={4} className="w-full px-0 py-3 border-b border-border focus:border-accent outline-none transition-colors resize-none" placeholder="Tell me about your project..." />
                </div>
                <button className="w-full bg-accent text-white py-4 rounded-full font-bold hover:bg-ink transition-all shadow-lg shadow-accent/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Ranjith P. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-muted hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted hover:text-ink transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

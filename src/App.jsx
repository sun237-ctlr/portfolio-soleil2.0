import React, { useState, useEffect } from 'react';
import { Github, Mail, ArrowRight, Menu, X, Download, ChevronDown, Sun, Moon,
         ExternalLink, Code2, Database, Zap, GitBranch, BarChart3, Heart, Send,
         CheckCircle, AlertCircle, Rocket, Lightbulb, Bot, Clipboard, Gamepad2,
         Award, Briefcase, MapPin } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'collaboration',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const colors = isDark ? {
    bg: '#1a1a1a',
    text: '#e8e8e8',
    accent: '#C89B9B',
    green: '#7FA06F',
    border: '#3a3a3a',
    lightBg: '#2a2a2a'
  } : {
    bg: '#FAF7F2',
    text: '#5a5a5a',
    accent: '#D4A5A5',
    green: '#9CAF88',
    border: '#E8D5D0',
    lightBg: '#FEF9F7'
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const LogoNS = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.accent }}>
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>NS</span>
      </div>
      <div>
        <div style={{ fontWeight: 'bold', color: colors.text }}>Nadia Soleil</div>
        <div style={{ fontSize: '12px', color: colors.accent }}>Full-Stack Dev</div>
      </div>
    </div>
  );

  const NavLink = ({ href, label }) => (
    <a href={href} style={{ 
      fontSize: '14px', 
      fontWeight: '500', 
      color: colors.text,
      textDecoration: 'none',
      borderBottom: '2px solid transparent',
      paddingBottom: '4px',
      transition: 'all 0.3s'
    }}
    onMouseEnter={(e) => { e.target.style.color = colors.accent; e.target.style.borderBottomColor = colors.accent; }}
    onMouseLeave={(e) => { e.target.style.color = colors.text; e.target.style.borderBottomColor = 'transparent'; }}>
      {label}
    </a>
  );

  const SkillBar = ({ skill, level }) => (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span style={{ fontSize: '14px', fontWeight: '500', color: colors.text }}>{skill}</span>
        <span style={{ fontSize: '12px', color: colors.accent }}>{level}%</span>
      </div>
      <div style={{ width: '100%', height: '8px', borderRadius: '4px', backgroundColor: colors.border, overflow: 'hidden' }}>
        <div style={{ height: '100%', borderRadius: '4px', width: `${level}%`, backgroundColor: colors.accent, transition: 'width 0.5s' }}></div>
      </div>
    </div>
  );

  const projects = [
    {
      id: 1,
      number: '01',
      title: 'e-Mairie Douala',
      icon: Briefcase,
      description: 'Plateforme citoyenne pour documents municipaux',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Groq API', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/sun237-ctlr',
      demo: '#',
      date: '2025 — 2026'
    },
    {
      id: 2,
      number: '02',
      title: 'TaskFlow Pro',
      icon: Clipboard,
      description: 'Application collaborative de gestion des tâches',
      tech: ['Flask', 'PostgreSQL', 'Python', 'SQLAlchemy', 'Render', 'Jinja2'],
      github: 'https://github.com/sun237-ctlr',
      demo: '#',
      date: 'Jan — Avr 2026'
    },
    {
      id: 3,
      number: '03',
      title: 'Obsidian Club',
      icon: Gamepad2,
      description: 'Jeu interactif avec canvas et animations',
      tech: ['React', 'Vite', 'JavaScript', 'Canvas API', 'Lucide React', 'Tailwind CSS'],
      github: 'https://github.com/sun237-ctlr',
      demo: '#',
      date: '2026'
    },
    {
      id: 4,
      number: '04',
      title: 'Local AI Stack',
      icon: Bot,
      description: 'Stack IA locale avec RAG et LLMs',
      tech: ['Docker', 'Ollama', 'FastAPI', 'Python', 'RAG', 'LLMs', 'Linux'],
      github: 'https://github.com/sun237-ctlr',
      demo: '#',
      date: '2026'
    }
  ];

  const expertise = [
    { title: 'Frontend', level: 96, icon: Code2, color: '#D4A5A5' },
    { title: 'Backend', level: 88, icon: Database, color: '#9CAF88' },
    { title: 'Database', level: 89, icon: GitBranch, color: '#D4A5A5' },
    { title: 'DevOps', level: 90, icon: BarChart3, color: '#9CAF88' },
    { title: 'AI/ML', level: 82, icon: Zap, color: '#D4A5A5' },
    { title: 'Problem Solving', level: 88, icon: Heart, color: '#9CAF88' }
  ];

  const timeline = [
    { year: '2024', title: 'IUT Douala', description: 'DUT Génie Informatique' },
    { year: '2025', title: 'Internship', description: 'DIGIPLUS Consulting' },
    { year: '2026', title: 'Portfolio', description: 'Full-Stack Projects' },
    { year: 'Now', title: 'Freelance', description: 'Open to opportunities' }
  ];

  const collaborationTypes = [
    { icon: Rocket, title: 'Startup Ideas', description: 'Bringing visions to life' },
    { icon: Lightbulb, title: 'Consulting', description: 'Tech strategy & solutions' },
    { icon: Bot, title: 'AI Integration', description: 'Smart automation' },
    { icon: Briefcase, title: 'Enterprise', description: 'Scalable systems' }
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xgogydZp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', projectType: 'collaboration', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  return (
    <div style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 50, 
        backgroundColor: isDark ? 'rgba(26, 26, 26, 0.95)' : 'rgba(250, 247, 242, 0.95)',
        boxShadow: isScrolled ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <LogoNS />
          
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <NavLink href="#travaux" label="Travaux" />
              <NavLink href="#expertise" label="Expertise" />
              <NavLink href="#about" label="À propos" />
              <NavLink href="#contact" label="Contact" />
              <button onClick={() => setIsDark(!isDark)} style={{ padding: '8px', borderRadius: '8px', border: 'none', backgroundColor: 'transparent', color: colors.accent, cursor: 'pointer' }}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a href="#" style={{ padding: '8px 16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500', backgroundColor: colors.accent, color: 'white', textDecoration: 'none' }}>
                <Download size={16} /> CV
              </a>
            </div>
          )}

          {isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button onClick={() => setIsDark(!isDark)} style={{ padding: '8px', border: 'none', backgroundColor: 'transparent', color: colors.accent, cursor: 'pointer' }}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} style={{ padding: '8px', border: 'none', backgroundColor: 'transparent', color: colors.text, cursor: 'pointer' }}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>

        {menuOpen && isMobile && (
          <div style={{ borderTop: `1px solid ${colors.border}`, backgroundColor: colors.lightBg, padding: '16px' }}>
            <NavLink href="#travaux" label="Travaux" />
            <NavLink href="#expertise" label="Expertise" />
            <NavLink href="#about" label="À propos" />
            <NavLink href="#contact" label="Contact" />
            <a href="#" style={{ padding: '8px 16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500', backgroundColor: colors.accent, color: 'white', textDecoration: 'none', marginTop: '12px' }}>
              <Download size={16} /> CV
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section style={{ minHeight: '100vh', paddingTop: '128px', paddingBottom: '80px', paddingLeft: '16px', paddingRight: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.lightBg} 100%)`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h1 style={{ fontSize: isMobile ? '36px' : '56px', fontWeight: 'bold', marginBottom: '24px', lineHeight: 1.2 }}>
            Créatrice de <span style={{ color: colors.accent }}>solutions web</span> élégantes
          </h1>
          
          <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.8, maxWidth: '672px', marginLeft: 'auto', marginRight: 'auto' }}>
            Full-Stack Developer passionnée par React, Node.js, Python et l'architecture IA. 
            Diplômée en Génie Informatique de l'IUT de Douala, j'aime transformer des idées en produits digitaux impactants.
          </p>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '16px', justifyContent: 'center', marginBottom: '48px' }}>
            <a href="#travaux" style={{ padding: '16px 32px', borderRadius: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: colors.accent, color: 'white', textDecoration: 'none', transition: 'transform 0.2s' }}
               onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
               onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              Voir mes travaux <ArrowRight size={20} />
            </a>
            <a href="#contact" style={{ padding: '16px 32px', borderRadius: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: `2px solid ${colors.accent}`, color: colors.accent, textDecoration: 'none', backgroundColor: 'transparent' }}>
              Me contacter <Mail size={20} />
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', fontSize: '14px', opacity: 0.7, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} style={{ color: colors.accent }} />
              Douala, Cameroon
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={16} style={{ color: colors.accent }} />
              DUT Génie Informatique
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap size={16} style={{ color: colors.accent }} />
              Full-Stack Developer
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="travaux" style={{ padding: '80px 16px', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>Travaux récents</h2>
        <div style={{ height: '4px', width: '80px', borderRadius: '2px', marginBottom: '48px', backgroundColor: colors.accent }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '32px' }}>
          {projects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <div key={project.id} style={{ 
                borderRadius: '16px', 
                overflow: 'hidden', 
                transition: 'all 0.3s',
                border: `2px solid ${colors.border}`,
                backgroundColor: colors.lightBg,
                padding: '32px',
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ fontSize: '48px', fontWeight: 'bold', opacity: 0.1 }}>{project.number}</div>
                  <ProjectIcon size={32} style={{ color: colors.accent }} />
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>{project.title}</h3>
                <p style={{ opacity: 0.7, marginBottom: '24px' }}>{project.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {project.tech.map((tech) => (
                    <span key={tech} style={{ padding: '4px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: '500', backgroundColor: colors.accent, color: 'white' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', color: colors.accent, textDecoration: 'none' }}>
                    <Github size={18} /> Code
                  </a>
                  <a href={project.demo} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', color: colors.accent, textDecoration: 'none' }}>
                    <ExternalLink size={18} /> Démo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" style={{ padding: '80px 16px', backgroundColor: colors.lightBg }}>
        <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>Mon expertise</h2>
          <div style={{ height: '4px', width: '80px', borderRadius: '2px', marginBottom: '48px', backgroundColor: colors.accent }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '32px' }}>
            {expertise.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.title} style={{ padding: '24px', borderRadius: '12px', backgroundColor: colors.bg }}>
                  <ExpIcon size={32} style={{ color: exp.color, marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>{exp.title}</h3>
                  <SkillBar skill={exp.title} level={exp.level} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '80px 16px', maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>À propos de moi</h2>
        <div style={{ height: '4px', width: '80px', borderRadius: '2px', marginBottom: '48px', backgroundColor: colors.accent }}></div>

        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '24px' }}>
            Je suis une développeuse passionnée qui aime transformer des idées en solutions digitales concrètes.
            Avec une formation en Génie Informatique et une expérience en Full-Stack development, je crée des 
            applications web performantes et user-friendly.
          </p>
          <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '24px' }}>
            Mon parcours m'a permis de maîtriser les technologies modernes et d'acquérir une 
            compréhension profonde des défis du développement. J'aime particulièrement explorer 
            l'intersection entre le web et l'IA.
          </p>
          <p style={{ fontSize: '18px', opacity: 0.8 }}>
            Basée à Douala, Cameroon, je reste ouverte aux collaborations et aux nouvelles opportunités 
            qui me permettront de croître et d'impacter positivement.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '24px' }}>
          {timeline.map((item) => (
            <div key={item.year} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', color: colors.accent }}>{item.year}</div>
              <div style={{ fontWeight: '600', marginBottom: '8px' }}>{item.title}</div>
              <div style={{ opacity: 0.7, fontSize: '14px' }}>{item.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Section */}
      <section style={{ padding: '80px 16px', backgroundColor: colors.lightBg }}>
        <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>Comment je collabore</h2>
          <div style={{ height: '4px', width: '80px', borderRadius: '2px', marginBottom: '48px', backgroundColor: colors.accent }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '24px' }}>
            {collaborationTypes.map((collab) => {
              const CollabIcon = collab.icon;
              return (
                <div key={collab.title} style={{ padding: '24px', borderRadius: '12px', textAlign: 'center', backgroundColor: colors.bg, transition: 'transform 0.2s', cursor: 'pointer' }}
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <CollabIcon size={40} style={{ color: colors.accent, marginLeft: 'auto', marginRight: 'auto', marginBottom: '16px' }} />
                  <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>{collab.title}</h3>
                  <p style={{ opacity: 0.7, fontSize: '14px' }}>{collab.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '80px 16px', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>Restons en contact</h2>
        <div style={{ height: '4px', width: '80px', borderRadius: '2px', marginBottom: '48px', marginLeft: 'auto', marginRight: 'auto', backgroundColor: colors.accent }}></div>

        <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '16px' }}>
            <input
              type="text"
              placeholder="Votre nom"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{ padding: '12px', borderRadius: '8px', border: `2px solid ${colors.border}`, outline: 'none', backgroundColor: colors.lightBg, color: colors.text }}
              required
            />
            <input
              type="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              style={{ padding: '12px', borderRadius: '8px', border: `2px solid ${colors.border}`, outline: 'none', backgroundColor: colors.lightBg, color: colors.text }}
              required
            />
          </div>

          <select
            value={formData.projectType}
            onChange={(e) => setFormData({...formData, projectType: e.target.value})}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `2px solid ${colors.border}`, outline: 'none', backgroundColor: colors.lightBg, color: colors.text }}
          >
            <option value="collaboration">Type de collaboration</option>
            <option value="startup">Startup</option>
            <option value="consulting">Consulting</option>
            <option value="ai">AI Integration</option>
            <option value="enterprise">Enterprise</option>
          </select>

          <textarea
            placeholder="Votre message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            rows="6"
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `2px solid ${colors.border}`, outline: 'none', backgroundColor: colors.lightBg, color: colors.text, resize: 'none' }}
            required
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{ width: '100%', padding: '16px', borderRadius: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: colors.accent, color: 'white', border: 'none', cursor: 'pointer', opacity: isSubmitting ? 0.5 : 1 }}
          >
            <Send size={20} /> {isSubmitting ? 'Envoi...' : 'Envoyer'}
          </button>

          {formStatus === 'success' && (
            <div style={{ padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: colors.green, color: 'white' }}>
              <CheckCircle size={20} /> Message envoyé avec succès!
            </div>
          )}
          {formStatus === 'error' && (
            <div style={{ padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#DC2626', color: 'white' }}>
              <AlertCircle size={20} /> Erreur lors de l'envoi
            </div>
          )}
        </form>

        <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
          <a href="https://github.com/sun237-ctlr" target="_blank" rel="noopener noreferrer" style={{ padding: '12px', borderRadius: '50%', backgroundColor: colors.lightBg, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}
             onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
             onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <Github size={24} style={{ color: colors.accent }} />
          </a>
          <a href="https://twitter.com/SoleilN30041" target="_blank" rel="noopener noreferrer" style={{ padding: '12px', borderRadius: '50%', backgroundColor: colors.lightBg, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}
             onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
             onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <Mail size={24} style={{ color: colors.accent }} />
          </a>
          <a href="mailto:soleilnzepang@gmail.com" style={{ padding: '12px', borderRadius: '50%', backgroundColor: colors.lightBg, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}
             onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
             onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <Mail size={24} style={{ color: colors.accent }} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${colors.border}`, padding: '32px 16px', textAlign: 'center', opacity: 0.7 }}>
        <p>2026 © Nadia Soleil. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

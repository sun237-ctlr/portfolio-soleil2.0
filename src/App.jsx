import React, { useState, useEffect } from 'react';

// SVG Icons inline
const Icons = {
  Github: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
  Mail: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>,
  ArrowRight: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
  Menu: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>,
  X: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
  ChevronDown: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><polyline points="6 9 12 15 18 9"></polyline></svg>,
  Sun: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>,
  Moon: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>,
  ExternalLink: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>,
  Code2: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
  Database: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></svg>,
  Zap: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
  BarChart3: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><line x1="3" y1="3" x2="3" y2="20"></line><line x1="21" y1="3" x2="21" y2="20"></line><line x1="8" y1="6" x2="8" y2="20"></line><line x1="13" y1="11" x2="13" y2="20"></line><line x1="18" y1="9" x2="18" y2="20"></line></svg>,
  Heart: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
  Send: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>,
  CheckCircle: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
  AlertCircle: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>,
  Rocket: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M4.5 16.5c-1.5-1.5-2-3.5-1-5.5C4 7 8 4 12 4s8 3 8.5 6c1 2-1.5 4-3 5.5"></path><path d="M12 4v12"></path><path d="M8 12h8"></path><path d="M8 20h8"></path><circle cx="12" cy="12" r="1"></circle></svg>,
  Lightbulb: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M9 18h6M9 18a6 6 0 0 1 6-6v-6a1 1 0 1 1 2 0v6a8 8 0 1 1-16 0v-6a1 1 0 1 1 2 0v6a6 6 0 0 1 6 6Z"></path></svg>,
  Bot: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><rect x="3" y="3" width="18" height="18" rx="2"></rect><rect x="7" y="7" width="10" height="6"></rect><circle cx="8" cy="14" r="1"></circle><circle cx="16" cy="14" r="1"></circle></svg>,
  Clipboard: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1"></rect><path d="M9 12h6M9 16h6"></path></svg>,
  Gamepad2: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><line x1="6" y1="12" x2="6" y2="12"></line><line x1="10" y1="9" x2="10" y2="15"></line><line x1="15" y1="9" x2="15" y2="15"></line><line x1="18" y1="12" x2="18" y2="12"></line><path d="M6 9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z"></path></svg>,
  Award: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><circle cx="12" cy="8" r="7"></circle><polyline points="8 14 12 17 16 14"></polyline><line x1="12" y1="17" x2="12" y2="23"></line><line x1="9" y1="23" x2="15" y2="23"></line></svg>,
  Briefcase: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 7v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><line x1="12" y1="12" x2="12" y2="16"></line></svg>,
  MapPin: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Download: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
};

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const colors = isDark ? {
    bg: '#1a1a1a',
    text: '#e8e8e8',
    accent: '#C89B9B',
    green: '#7FA06F',
    border: '#3a3a3a',
    lightBg: '#2a2a2a',
  } : {
    bg: '#FAF7F2',
    text: '#5a5a5a',
    accent: '#D4A5A5',
    green: '#9CAF88',
    border: '#E8D5D0',
    lightBg: '#FEF9F7',
  };

  const handleFormChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('https://formspree.io/f/xgogydZp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      setFormStatus({type: 'success', message: 'Message envoyé avec succès!'});
      setFormData({name: '', email: '', projectType: '', message: ''});
    } catch (e) {
      setFormStatus({type: 'error', message: 'Erreur lors de l\'envoi'});
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {id: 1, number: '01', title: 'e-Mairie Douala', icon: Icons.Briefcase, description: 'Plateforme citoyenne pour documents municipaux', tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Groq API', 'JWT', 'Tailwind CSS'], date: '2025 — 2026', github: 'https://github.com/sun237-ctlr'},
    {id: 2, number: '02', title: 'TaskFlow Pro', icon: Icons.Clipboard, description: 'App collaborative de gestion des tâches', tech: ['Flask', 'PostgreSQL', 'Python', 'SQLAlchemy', 'Render', 'Jinja2'], date: 'Jan — Avr 2026', github: 'https://github.com/sun237-ctlr'},
    {id: 3, number: '03', title: 'Obsidian Club', icon: Icons.Gamepad2, description: 'Jeu interactif avec canvas et animations', tech: ['React', 'Vite', 'JavaScript', 'Canvas API', 'Tailwind CSS'], date: '2026', github: 'https://github.com/sun237-ctlr'},
    {id: 4, number: '04', title: 'Local AI Stack', icon: Icons.Bot, description: 'Stack IA locale avec RAG et LLMs', tech: ['Docker', 'Ollama', 'FastAPI', 'Python', 'RAG', 'LLMs', 'Linux'], date: '2026', github: 'https://github.com/sun237-ctlr'}
  ];

  const expertise = [
    {title: 'Frontend', level: 96, icon: Icons.Code2},
    {title: 'Backend', level: 88, icon: Icons.Database},
    {title: 'Database', level: 89, icon: Icons.BarChart3},
    {title: 'DevOps', level: 90, icon: Icons.Zap},
    {title: 'AI/ML', level: 82, icon: Icons.Lightbulb},
    {title: 'Problem Solving', level: 88, icon: Icons.Award}
  ];

  return (
    <div style={{backgroundColor: colors.bg, color: colors.text, fontFamily: 'system-ui, -apple-system, sans-serif', transition: 'all 0.3s', minHeight: '100vh'}}>
      
      {/* Navigation */}
      <nav style={{position: 'fixed', top: 0, width: '100%', zIndex: 50, backgroundColor: colors.lightBg, borderBottom: `1px solid ${colors.border}`, padding: '1rem', backdropFilter: 'blur(12px)'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{fontWeight: 'bold', fontSize: '18px', color: colors.accent}}>NS</div>
          <div style={{display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <a href="#travaux" style={{textDecoration: 'none', color: colors.text, fontSize: '14px'}}>Travaux</a>
            <a href="#expertise" style={{textDecoration: 'none', color: colors.text, fontSize: '14px'}}>Expertise</a>
            <a href="#about" style={{textDecoration: 'none', color: colors.text, fontSize: '14px'}}>À propos</a>
            <a href="#contact" style={{textDecoration: 'none', color: colors.text, fontSize: '14px'}}>Contact</a>
          </div>
          <button onClick={() => setIsDark(!isDark)} style={{border: 'none', background: 'none', cursor: 'pointer', fontSize: '18px', color: colors.accent}}>
            {isDark ? '☀' : '@'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{minHeight: '100vh', paddingTop: '100px', paddingBottom: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: isDark ? 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)' : 'linear-gradient(135deg, #FAF7F2 0%, #FEF9F7 100%)'}}>
        <div style={{maxWidth: '800px', textAlign: 'center', padding: '20px'}}>
          <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', lineHeight: 1.2, color: colors.accent}}>
            Créatrice de <span style={{color: colors.accent}}>solutions web</span> élégantes
          </h1>
          <p style={{fontSize: '18px', marginBottom: '30px', opacity: 0.8}}>
            Full-Stack Developer passionnée par React, Node.js, Python et l'architecture IA. Diplômée en Génie Informatique de l'IUT de Douala.
          </p>
          <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="#travaux" style={{padding: '12px 24px', backgroundColor: colors.accent, color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
              Voir mes travaux <Icons.ArrowRight size={20} />
            </a>
            <a href="#contact" style={{padding: '12px 24px', backgroundColor: colors.green, color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
              <Icons.Mail size={16} /> Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="travaux" style={{padding: '80px 20px', maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '40px', color: colors.accent}}>Travaux récents</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '30px'}}>
          {projects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <div key={project.id} style={{padding: '24px', backgroundColor: colors.lightBg, borderRadius: '12px', border: `1px solid ${colors.border}`, transition: 'all 0.3s'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px'}}>
                  <ProjectIcon size={24} style={{color: colors.accent}} />
                  <h3 style={{fontSize: '20px', fontWeight: 'bold', color: colors.accent}}>{project.title}</h3>
                </div>
                <p style={{opacity: 0.7, marginBottom: '15px'}}>{project.description}</p>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '15px'}}>
                  {project.tech.map(t => (
                    <span key={t} style={{padding: '4px 12px', backgroundColor: colors.accent, color: 'white', borderRadius: '16px', fontSize: '12px'}}>{t}</span>
                  ))}
                </div>
                <div style={{display: 'flex', gap: '12px', justifyContent: 'space-between'}}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', color: colors.accent, textDecoration: 'none'}}>
                    <Icons.Github size={16} /> Code
                  </a>
                  <span style={{color: colors.accent, fontWeight: '500'}}>{project.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" style={{padding: '80px 20px', backgroundColor: colors.lightBg}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '40px', color: colors.accent}}>Mon expertise</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
            {expertise.map(exp => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.title} style={{padding: '20px', backgroundColor: colors.bg, borderRadius: '12px', border: `1px solid ${colors.border}`}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px'}}>
                    <ExpIcon size={24} style={{color: colors.accent}} />
                    <h3 style={{fontWeight: 'bold', color: colors.accent}}>{exp.title}</h3>
                  </div>
                  <div style={{marginBottom: '4px', display: 'flex', justifyContent: 'space-between'}}>
                    <span style={{fontSize: '14px', fontWeight: '500'}}>{exp.title}</span>
                    <span style={{fontSize: '12px', color: colors.accent}}>{exp.level}%</span>
                  </div>
                  <div style={{width: '100%', height: '8px', borderRadius: '4px', backgroundColor: colors.border, overflow: 'hidden'}}>
                    <div style={{height: '100%', borderRadius: '4px', width: `${exp.level}%`, backgroundColor: colors.accent, transition: 'width 0.5s'}}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{padding: '80px 20px', maxWidth: '800px', margin: '0 auto'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '30px', color: colors.accent}}>À propos</h2>
        <p style={{fontSize: '16px', lineHeight: 1.8, marginBottom: '20px', opacity: 0.8}}>
          Je suis une développeuse passionnée qui aime transformer des idées en solutions digitales concrètes. Avec une formation en Génie Informatique et une expérience en Full-Stack development, je crée des applications web performantes et user-friendly.
        </p>
        <p style={{fontSize: '16px', lineHeight: 1.8, opacity: 0.8}}>
          Basée à Douala, Cameroon, je reste ouverte aux collaborations et aux nouvelles opportunités qui me permettront de croître et d'impacter positivement.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" style={{padding: '80px 20px', backgroundColor: colors.lightBg}}>
        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <h2 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: colors.accent}}>Restons en contact</h2>
          <form onSubmit={handleFormSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px'}}>
              <input type="text" placeholder="Votre nom" value={formData.name} onChange={handleFormChange} name="name" style={{padding: '10px', borderRadius: '6px', border: `1px solid ${colors.border}`, backgroundColor: colors.bg, color: colors.text}} required />
              <input type="email" placeholder="Votre email" value={formData.email} onChange={handleFormChange} name="email" style={{padding: '10px', borderRadius: '6px', border: `1px solid ${colors.border}`, backgroundColor: colors.bg, color: colors.text}} required />
            </div>
            <textarea placeholder="Votre message" value={formData.message} onChange={handleFormChange} name="message" rows="5" style={{padding: '10px', borderRadius: '6px', border: `1px solid ${colors.border}`, backgroundColor: colors.bg, color: colors.text, resize: 'none'}} required></textarea>
            <button type="submit" style={{padding: '12px', backgroundColor: colors.accent, color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}>
              <Icons.Send size={20} /> Envoyer
            </button>
            {formStatus && (
              <div style={{padding: '12px', borderRadius: '6px', backgroundColor: formStatus.type === 'success' ? 'rgba(124, 175, 136, 0.2)' : 'rgba(212, 165, 165, 0.2)', color: colors.accent, textAlign: 'center'}}>
                {formStatus.message}
              </div>
            )}
          </form>
          <div style={{marginTop: '40px', textAlign: 'center', display: 'flex', gap: '20px', justifyContent: 'center'}}>
            <a href="https://github.com/sun237-ctlr" target="_blank" rel="noopener noreferrer" style={{fontSize: '24px', textDecoration: 'none', color: colors.accent, cursor: 'pointer'}}>
              <Icons.Github size={28} />
            </a>
            <a href="mailto:soleilnzepang@gmail.com" style={{fontSize: '24px', textDecoration: 'none', color: colors.accent, cursor: 'pointer'}}>
              <Icons.Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{textAlign: 'center', padding: '30px', opacity: 0.7, borderTop: `1px solid ${colors.border}`}}>
        <p>2026 © Nadia Soleil. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

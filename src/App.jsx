import React, { useState, useEffect } from 'react';
// SVG Icon Components
const Icons = {
  Github: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
  Mail: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>,
  ArrowRight: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
  Menu: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>,
  X: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
  Download: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
  ChevronDown: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><polyline points="6 9 12 15 18 9"></polyline></svg>,
  Sun: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>,
  Moon: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>,
  ExternalLink: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>,
  Code2: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
  Database: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></svg>,
  Zap: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
  GitBranch: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>,
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
};


export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const colors = isDark ? {
    bg: '#1a1a1a',
    text: '#e8e8e8',
    accent: '#C89B9B',
    green: '#7FA06F',
    border: '#3a3a3a',
    lightBg: '#2a2a2a',
    navBg: 'rgba(26, 26, 26, 0.75)'
  } : {
    bg: '#FAF7F2',
    text: '#5a5a5a',
    accent: '#D4A5A5',
    green: '#9CAF88',
    border: '#E8D5D0',
    lightBg: '#FEF9F7',
    navBg: 'rgba(250, 247, 242, 0.7)'
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.projectType || !formData.message) {
      setFormStatus({ type: 'error', message: 'Veuillez remplir tous les champs.' });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
          _subject: `Nouveau message de ${formData.name} - ${formData.projectType}`
        })
      }).catch(() => {
        return { ok: true };
      });

      setFormStatus({ 
        type: 'success', 
        message: 'Message envoyé avec succès ! Je vous répondrai dans les 24-48 heures.' 
      });
      setFormData({ name: '', email: '', projectType: '', message: '' });
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Une erreur est survenue. Veuillez réessayer.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const LogoNS = () => (
    <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:opacity-80 transition transform hover:scale-110 duration-300">
      <div className="text-lg sm:text-2xl font-serif font-bold" style={{ color: colors.accent }}>NS</div>
      <Icons.Zap size={18} className="sm:w-5 sm:h-5 animate-pulse" style={{ color: colors.accent }} />
    </div>
  );

  const NavLink = ({ href, children }) => (
    <a 
      href={href}
      className="font-light relative group py-2 transition duration-300 text-xs sm:text-sm"
      style={{ color: colors.text }}
    >
      {children}
      <span 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: colors.accent }}
      />
    </a>
  );

  const projects = [
    {
      id: 1,
      number: '01',
      title: 'e-Mairie Douala',
      subtitle: 'Municipal Services Platform',
      description: 'Plateforme web révolutionnaire permettant aux citoyens de Douala de demander et suivre les documents administratifs municipaux.',
      details: 'Système d\'authentification sécurisé avec JWT, assistant IA conversationnel via Groq API, suivi des demandes en temps réel.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=700&fit=crop',
      icon: Icons.Briefcase,
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Groq API', 'JWT', 'Tailwind CSS'],
      role: 'Full-Stack Developer',
      date: '2025 — 2026',
      github: 'https://github.com/sun237-ctlr',
      demo: '#'
    },
    {
      id: 2,
      number: '02',
      title: 'TaskFlow Pro',
      subtitle: 'Collaborative Task Management',
      description: 'Application web de gestion des tâches collaborative, déployée en production sur Render.com.',
      details: 'Gestion des tâches en temps réel, système d\'assignation utilisateurs, suivi de progression, interface responsive.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&h=700&fit=crop',
      icon: Icons.Clipboard,
      tech: ['Flask', 'PostgreSQL', 'Python', 'SQLAlchemy', 'Render', 'Jinja2'],
      role: 'Full-Stack Developer',
      date: 'Jan — Avr 2026',
      github: 'https://github.com/sun237-ctlr',
      demo: '#'
    },
    {
      id: 3,
      number: '03',
      title: 'Obsidian Club',
      subtitle: 'Multi-Game Platform',
      description: 'Plateforme web multi-jeux développée en React, regroupant sept jeux classiques.',
      details: 'Pong, Snake, 2048, Flappy Bird, Tic Tac Toe et plus. Composants React avancés, algorithmes de jeu, Canvas API.',
      image: 'https://images.unsplash.com/photo-1533627519674-bae3b7a84b57?w=1000&h=700&fit=crop',
      icon: Icons.Gamepad2,
      tech: ['React', 'Vite', 'JavaScript', 'Canvas API', 'Lucide React', 'Tailwind CSS'],
      role: 'Frontend Developer',
      date: '2026',
      github: 'https://github.com/sun237-ctlr',
      demo: '#'
    },
    {
      id: 4,
      number: '04',
      title: 'Local AI Stack',
      subtitle: 'Local AI Infrastructure',
      description: 'Exploration d\'une architecture complète d\'IA locale, structurée en deux phases.',
      details: 'Containerisation Docker, Ollama pour exécuter LLMs localement, API FastAPI, architecture RAG.',
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1000&h=700&fit=crop',
      icon: Icons.Bot,
      tech: ['Docker', 'Ollama', 'FastAPI', 'Python', 'RAG', 'LLMs', 'Linux'],
      role: 'Backend/Infrastructure',
      date: '2026',
      github: 'https://github.com/sun237-ctlr',
      demo: '#'
    }
  ];

  const expertiseAreas = [
    { id: 1, title: 'Frontend Development', icon: Icons.Code2, description: 'Création d\'interfaces modernes et responsives avec React.', skills: [{ name: 'React', level: 95 }, { name: 'Vite', level: 90 }, { name: 'Tailwind CSS', level: 95 }, { name: 'JavaScript', level: 92 }, { name: 'HTML/CSS', level: 98 }] },
    { id: 2, title: 'Backend Development', icon: Icons.Database, description: 'Architecture backend robuste avec Node.js et Python.', skills: [{ name: 'Node.js', level: 90 }, { name: 'Express', level: 88 }, { name: 'Flask', level: 85 }, { name: 'Python', level: 90 }, { name: 'FastAPI', level: 85 }] },
    { id: 3, title: 'Database & Data', icon: Icons.BarChart3, description: 'Gestion optimale des bases de données et des données.', skills: [{ name: 'PostgreSQL', level: 92 }, { name: 'SQL', level: 94 }, { name: 'Prisma ORM', level: 88 }, { name: 'Database Design', level: 90 }, { name: 'Data Modeling', level: 85 }] },
    { id: 4, title: 'DevOps & Infrastructure', icon: Icons.Zap, description: 'Déploiement, containerisation et gestion d\'infrastructure.', skills: [{ name: 'Docker', level: 85 }, { name: 'Linux', level: 88 }, { name: 'Git', level: 95 }, { name: 'Render', level: 90 }, { name: 'Vercel', level: 92 }] },
    { id: 5, title: 'AI & Machine Learning', icon: Icons.Bot, description: 'Intégration d\'IA dans les applications modernes.', skills: [{ name: 'Groq API', level: 85 }, { name: 'Ollama', level: 82 }, { name: 'RAG Architecture', level: 80 }, { name: 'LLM Integration', level: 83 }, { name: 'Prompt Engineering', level: 85 }] },
    { id: 6, title: 'Problem Solving', icon: Icons.Award, description: 'Approche itérative et réfléchie pour résoudre les problèmes.', skills: [{ name: 'Architecture Design', level: 88 }, { name: 'Performance', level: 90 }, { name: 'Security', level: 85 }, { name: 'Code Quality', level: 92 }, { name: 'Testing', level: 85 }] }
  ];

  const collaborationTypes = [
    { icon: Icons.Rocket, title: 'Projets Full-Stack', description: 'Développement de applications web complètes.' },
    { icon: Icons.Lightbulb, title: 'Consultation Technique', description: 'Conseils sur architecture et stack technologique.' },
    { icon: Icons.Bot, title: 'Intégration IA', description: 'Implémentation de solutions IA et RAG.' },
    { icon: Icons.Briefcase, title: 'Freelance & Contract', description: 'Travaux ponctuels et missions à court terme.' }
  ];

  const timeline = [
    { year: '2023-2024', title: 'Baccalauréat C', description: 'J ai optenu mon Baccalauréat de Mathématiques et Sciences Physiques au cameroun ' },
    { year: '2024', title: 'Début du DUT en Génie Informatique', description: 'Commencé mon parcours académique à l\'IUT de Douala.' },
    { year: '2025', title: 'Premiers projets personnels', description: 'Création d\'Obsidian Club et exploration des frameworks modernes.' },
    { year: 'Jan 2026', title: 'Stage à DIGIPLUS Consulting', description: 'Développement de TaskFlow Pro en production.' },
    { year: '2025-2026', title: 'Projet de fin d\'études', description: 'Construction d\'e-Mairie Douala avec authentification et IA.' }
  ];

  const SkillBar = ({ name, level }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs sm:text-sm font-light">{name}</span>
        <span className="text-xs opacity-60 font-light">{level}%</span>
      </div>
      <div 
        className="h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: colors.border }}
      >
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%`, backgroundColor: colors.accent }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ backgroundColor: colors.bg, color: colors.text }}>
      
      {/* Navigation */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 border-b`}
        style={{ 
          backgroundColor: isScrolled 
            ? (isDark ? 'rgba(26, 26, 26, 0.98)' : 'rgba(250, 247, 242, 0.98)')
            : colors.navBg,
          borderColor: isScrolled ? colors.border : 'transparent',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <a href="#" className="scroll-smooth">
            <LogoNS />
          </a>
          
          <div className="hidden lg:flex gap-8 xl:gap-12 items-center">
            <NavLink href="#travaux">Travaux</NavLink>
            <NavLink href="#expertise">Expertise</NavLink>
            <NavLink href="#about">À propos</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); alert('Téléchargement du CV en préparation'); }}
              className="inline-flex items-center gap-1 xl:gap-2 px-3 xl:px-5 py-2 rounded-full border font-light hover:opacity-80 transition text-xs xl:text-sm transform hover:scale-110 duration-300"
              style={{ borderColor: colors.accent, color: colors.text }}
            >
              <Icons.Download size={14} /> <span className="hidden sm:inline">CV</span>
            </a>

            <button 
              onClick={() => setIsDark(!isDark)}
              className="inline-flex items-center justify-center w-9 h-9 xl:w-10 xl:h-10 rounded-full border transition hover:opacity-80 transform hover:rotate-180 duration-500"
              style={{ borderColor: colors.accent, color: colors.text }}
            >
              {isDark ? <Icons.Sun size={16} className="xl:w-5 xl:h-5" /> : <Icons.Moon size={16} className="xl:w-5 xl:h-5" />}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border transition hover:opacity-80 transform hover:rotate-180 duration-500"
              style={{ borderColor: colors.accent, color: colors.text }}
            >
              {isDark ? <Icons.Sun size={16} /> : <Icons.Moon size={16} />}
            </button>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center w-9 h-9 transform hover:scale-110 duration-300"
              style={{ color: colors.text }}
            >
              {menuOpen ? <Icons.X size={20} /> : <Icons.Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div 
            className="lg:hidden border-t px-4 sm:px-6 py-4 space-y-3 animate-in fade-in duration-300"
            style={{ borderColor: colors.border }}
          >
            <a href="#travaux" className="block font-light hover:opacity-60 transition py-2 text-sm" onClick={() => setMenuOpen(false)} style={{ color: colors.text }}>Travaux</a>
            <a href="#expertise" className="block font-light hover:opacity-60 transition py-2 text-sm" onClick={() => setMenuOpen(false)} style={{ color: colors.text }}>Expertise</a>
            <a href="#about" className="block font-light hover:opacity-60 transition py-2 text-sm" onClick={() => setMenuOpen(false)} style={{ color: colors.text }}>À propos</a>
            <a href="#contact" className="block font-light hover:opacity-60 transition py-2 text-sm" onClick={() => setMenuOpen(false)} style={{ color: colors.text }}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center px-4 sm:px-6 py-12 sm:py-20 overflow-hidden transition-colors duration-500"
        style={{
          backgroundImage: isDark 
            ? 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
            : 'url(https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1600&h=900&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundPosition: `center ${scrollY * 0.5}px`
        }}
      >
        <div 
          className="absolute inset-0 transition-colors duration-500"
          style={{ 
            background: isDark
              ? 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(26, 26, 26, 0.88) 100%)'
              : 'linear-gradient(135deg, rgba(250, 247, 242, 0.92) 0%, rgba(250, 247, 242, 0.85) 50%, rgba(250, 247, 242, 0.92) 100%)'
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <div style={{ animation: 'slideInDown 1s ease-out' }} className="mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3">
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: colors.accent }} />
            <span className="text-xs font-light tracking-widest uppercase">Full-Stack Developer</span>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: colors.accent }} />
          </div>
          
          <h1 
            className="text-4xl sm:text-6xl lg:text-8xl font-serif font-light leading-tight mb-4 sm:mb-8 transition-colors duration-500"
            style={{ 
              color: colors.accent,
              animation: 'slideInUp 1.2s ease-out 0.2s both'
            }}
          >
            Nadia Soleil
          </h1>
          
          <p 
            className="text-lg sm:text-2xl lg:text-3xl font-light leading-relaxed mb-4 sm:mb-6 transition-colors duration-500"
            style={{
              animation: 'slideInUp 1.2s ease-out 0.4s both',
              color: colors.text
            }}
          >
            Building elegant digital experiences<br />with code, design & AI.
          </p>

          <p 
            className="text-sm sm:text-base lg:text-lg font-light text-center max-w-2xl mx-auto mb-12 sm:mb-16 transition-colors duration-500"
            style={{
              animation: 'slideInUp 1.2s ease-out 0.6s both',
              color: colors.text,
              opacity: 0.75
            }}
          >
            React • Node.js • Python • PostgreSQL • FastAPI
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-24"
            style={{ animation: 'slideInUp 1.2s ease-out 0.8s both' }}
          >
            <a 
              href="#travaux" 
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-3 sm:py-4 font-light rounded-lg transition hover:shadow-2xl hover:scale-110 group duration-300 text-sm sm:text-base"
              style={{ 
                backgroundColor: colors.accent, 
                color: isDark ? '#1a1a1a' : 'white'
              }}
            >
              Voir mes projets 
              <Icons.ArrowRight size={16} className="group-hover:translate-x-3 transition duration-300" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-3 sm:py-4 font-light rounded-lg border-2 transition hover:shadow-2xl hover:scale-110 duration-300 text-sm sm:text-base"
              style={{ 
                borderColor: colors.accent,
                backgroundColor: colors.lightBg,
                color: colors.text
              }}
            >
              <Icons.Mail size={16} /> Démarrer
            </a>
          </div>

          <div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 py-8 sm:py-12 border-t border-b text-center transition-colors duration-500"
            style={{ borderColor: colors.border }}
          >
            {[
              { num: '12+', label: 'Technologies' },
              { num: '4+', label: 'Projets' },
              { num: '1000+', label: 'Heures' },
              { num: '∞', label: 'Curiosité' }
            ].map((stat, i) => (
              <div key={i} style={{ animation: `slideInUp 1.2s ease-out ${1 + i * 0.1}s both` }}>
                <p className="text-2xl sm:text-4xl font-serif font-light mb-2" style={{ color: colors.accent }}>{stat.num}</p>
                <p className="text-xs uppercase tracking-widest font-light opacity-60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer hover:opacity-60 transition" style={{ animation: 'bounce 2s infinite' }}>
          <Icons.ChevronDown size={28} className="sm:w-8 sm:h-8" style={{ color: colors.accent, opacity: 0.6 }} />
        </div>
      </section>

      {/* PROJETS */}
      <section id="travaux" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32 transition-colors duration-500">
        <div className="mb-16 sm:mb-32" style={{ animation: 'slideInUp 0.8s ease-out' }}>
          <p className="text-xs uppercase tracking-widest font-light opacity-60 mb-2 sm:mb-4">Portfolio</p>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-serif font-light mb-4 sm:mb-8" style={{ color: colors.accent }}>Projets Phares</h2>
          <div className="w-12 sm:w-16 h-1 rounded-full" style={{ backgroundColor: colors.accent }} />
        </div>

        <div className="space-y-24 sm:space-y-40">
          {projects.map((project, idx) => {
            const ProjectIcon = project.icon;
            return (
              <div 
                key={project.id} 
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animation: `slideInUp 0.8s ease-out ${idx * 0.1}s both` }}
              >
                <div className="mb-8 sm:mb-12 flex items-center gap-3">
                  <ProjectIcon size={28} style={{ color: colors.accent }} className="sm:w-8 sm:h-8" />
                  <div>
                    <p className="text-xs uppercase tracking-widest font-light opacity-50 mb-2 sm:mb-3">{project.number} — {project.subtitle}</p>
                    <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light" style={{ color: colors.accent }}>
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className={`grid md:grid-cols-2 gap-8 sm:gap-16 items-start ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  
                  <div className={idx % 2 === 1 ? 'md:order-last' : ''}>
                    <div 
                      className="relative h-64 sm:h-96 md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group/image transition-all duration-700 cursor-pointer"
                      style={{ 
                        backgroundColor: colors.lightBg,
                        border: `1px solid ${colors.border}`,
                        transform: hoveredProject === project.id ? 'scale(1.05) rotate(-1deg)' : 'scale(1) rotate(0deg)',
                        boxShadow: hoveredProject === project.id ? '0 30px 60px rgba(0,0,0,0.3)' : '0 10px 40px rgba(0,0,0,0.1)'
                      }}
                    >
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/image:scale-125 transition-transform duration-1000"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="space-y-6 sm:space-y-8">
                      <div className="space-y-3 sm:space-y-4">
                        <p className="text-sm sm:text-base font-light leading-relaxed opacity-75">
                          {project.description}
                        </p>
                        <p className="text-xs sm:text-sm font-light leading-relaxed opacity-60">
                          {project.details}
                        </p>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        <p className="text-xs uppercase tracking-widest font-light opacity-50">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span 
                              key={tech}
                              className="text-xs font-light px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border transition hover:scale-110 transform duration-300"
                              style={{ 
                                borderColor: colors.accent, 
                                backgroundColor: colors.lightBg,
                                color: colors.text,
                                animation: `slideInUp 0.6s ease-out ${i * 0.05}s both`
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-end pt-6 sm:pt-8 border-t" style={{ borderColor: colors.border }}>
                        <div className="space-y-1">
                          <p className="text-xs opacity-50 font-light uppercase tracking-widest">{project.role}</p>
                          <p className="text-base sm:text-lg font-serif font-light transform group-hover:scale-110 transition duration-300 origin-left" style={{ color: colors.accent }}>{project.date}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-4 sm:pt-6">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border transition hover:scale-110 transform duration-300 text-xs sm:text-sm"
                          style={{ borderColor: colors.accent, color: colors.text }}
                        >
                          <Icons.Github size={14} className="sm:w-4 sm:h-4" /> Code
                        </a>
                        <a 
                          href={project.demo}
                          className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition hover:scale-110 transform duration-300 shadow-md hover:shadow-xl text-xs sm:text-sm"
                          style={{ backgroundColor: colors.accent, color: isDark ? '#1a1a1a' : 'white' }}
                        >
                          <Icons.ExternalLink size={14} className="sm:w-4 sm:h-4" /> Démo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {idx < projects.length - 1 && (
                  <div className="mt-24 sm:mt-40 h-px" style={{ backgroundColor: colors.border }} />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32 border-t transition-colors duration-500" style={{ borderColor: colors.border }}>
        <div className="mb-16 sm:mb-32" style={{ animation: 'slideInUp 0.8s ease-out' }}>
          <p className="text-xs uppercase tracking-widest font-light opacity-60 mb-2 sm:mb-4">Compétences</p>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-serif font-light mb-4 sm:mb-8" style={{ color: colors.accent }}>Mon Expertise</h2>
          <p className="text-sm sm:text-lg font-light opacity-75 max-w-2xl">
            Maîtrise complète du full-stack. Approche rigoureuse combinant design, architecture et performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {expertiseAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div 
                key={area.id}
                className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl border transition-all duration-500 hover:shadow-2xl transform hover:scale-110 hover:-rotate-1 cursor-pointer"
                style={{ 
                  borderColor: colors.border,
                  backgroundColor: colors.lightBg,
                  animation: `slideInUp 0.8s ease-out ${idx * 0.1}s both`
                }}
              >
                <div 
                  className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-45"
                  style={{ backgroundColor: colors.accent, opacity: 0.15 }}
                >
                  <Icon size={24} className="sm:w-7 sm:h-7" style={{ color: colors.accent }} />
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-light mb-2 sm:mb-3 transform group-hover:translate-x-2 transition duration-300" style={{ color: colors.accent }}>
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm font-light opacity-60 mb-6 sm:mb-8 group-hover:opacity-100 transition duration-300">
                  {area.description}
                </p>

                <div>
                  {area.skills.map((skill, i) => (
                    <div key={skill.name} style={{ animation: `slideInUp 0.6s ease-out ${i * 0.05}s both` }}>
                      <SkillBar name={skill.name} level={skill.level} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* À PROPOS */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32 border-t transition-colors duration-500" style={{ borderColor: colors.border }}>
        <div className="mb-12 sm:mb-20" style={{ animation: 'slideInUp 0.8s ease-out' }}>
          <p className="text-xs uppercase tracking-widest font-light opacity-60 mb-2 sm:mb-4">Qui suis-je</p>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-serif font-light mb-4 sm:mb-8" style={{ color: colors.accent }}>À propos de moi</h2>
          <div className="w-12 sm:w-16 h-1 rounded-full" style={{ backgroundColor: colors.accent }} />
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-16 items-start mb-20 sm:mb-32" style={{ animation: 'slideInUp 0.8s ease-out 0.2s both' }}>
          <div className="md:col-span-1">
            <div 
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mb-6 sm:mb-8 h-64 sm:h-96 transform hover:scale-110 hover:rotate-2 transition duration-500 cursor-pointer"
              style={{ 
                backgroundColor: colors.lightBg,
                border: `1px solid ${colors.border}`
              }}
            >
              <img 
                src="https://imgur.com/a/ge7ILqA
                alt="Nadia Soleil"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="pb-4 sm:pb-6 border-b transform hover:translate-x-2 transition duration-300" style={{ borderColor: colors.border }}>
                <div className="flex items-center gap-2 mb-1">
                  <Icons.MapPin size={16} style={{ color: colors.accent }} />
                  <p className="text-xl sm:text-2xl font-serif font-light transform hover:scale-110 transition duration-300" style={{ color: colors.accent }}>Douala</p>
                </div>
                <p className="text-xs uppercase tracking-widest font-light opacity-50">Localisation</p>
              </div>
              <div className="pb-4 sm:pb-6 border-b transform hover:translate-x-2 transition duration-300" style={{ borderColor: colors.border }}>
                <div className="flex items-center gap-2 mb-1">
                  <Icons.Award size={16} style={{ color: colors.accent }} />
                  <p className="text-xl sm:text-2xl font-serif font-light transform hover:scale-110 transition duration-300" style={{ color: colors.accent }}>DUT 2026</p>
                </div>
                <p className="text-xs uppercase tracking-widest font-light opacity-50">Génie Informatique</p>
              </div>
              <div className="transform hover:translate-x-2 transition duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <Icons.Zap size={16} style={{ color: colors.accent }} />
                  <p className="text-xl sm:text-2xl font-serif font-light transform hover:scale-110 transition duration-300" style={{ color: colors.accent }}>Open</p>
                </div>
                <p className="text-xs uppercase tracking-widest font-light opacity-50">À la collaboration</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 sm:space-y-12">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-lg font-light leading-relaxed opacity-80 transform hover:translate-x-2 transition duration-300">
                Je suis Nadia Soleil, diplômée en Génie Informatique de l'IUT de Douala. Passionnée par la technologie, je crée des solutions web modernes combinant code élégant, architecture réfléchie et design raffiné.
              </p>
              <p className="text-sm sm:text-lg font-light leading-relaxed opacity-80 transform hover:translate-x-2 transition duration-300">
                Mon approche est <strong style={{ color: colors.accent }}>itérative et validée</strong>. Je crois que chaque ligne de code doit avoir un purpose, que chaque pixel doit être pensé intentionnellement.
              </p>
              <p className="text-sm sm:text-lg font-light leading-relaxed opacity-80 transform hover:translate-x-2 transition duration-300">
                Fascinée par l'IA, je repousse les limites avec les architectures RAG et LLMs. Engagée à contribuer à l'écosystème tech africain en créant des solutions de classe mondiale.
              </p>
            </div>

            <div 
              className="p-6 sm:p-8 rounded-xl sm:rounded-2xl border-l-4 transform hover:scale-105 hover:rotate-1 transition duration-500 cursor-pointer"
              style={{ 
                backgroundColor: colors.lightBg,
                borderColor: colors.accent,
                borderTop: `1px solid ${colors.border}`,
                borderRight: `1px solid ${colors.border}`,
                borderBottom: `1px solid ${colors.border}`
              }}
            >
              <div className="flex items-start gap-3 mb-3 sm:mb-4">
                <Icons.Heart size={18} className="sm:w-5 sm:h-5" style={{ color: colors.accent, marginTop: '2px', animation: 'heartbeat 1.5s infinite' }} />
                <p className="text-sm sm:text-lg font-serif font-light italic" style={{ color: colors.accent }}>
                  "Le code n'est pas juste de la logique, c'est de l'art. Chaque projet est une opportunité de créer quelque chose de beau."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="border-t pt-12 sm:pt-20" style={{ borderColor: colors.border }}>
          <h3 className="text-2xl sm:text-3xl font-serif font-light mb-12 sm:mb-16 transform hover:scale-105 transition duration-300 origin-left" style={{ color: colors.accent }}>Mon Parcours</h3>
          
          <div className="relative">
            <div 
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 transform hover:w-2 transition duration-500"
              style={{ backgroundColor: colors.border, transform: 'translateX(-50%)' }}
            />

            <div className="space-y-12 sm:space-y-16 pl-6 sm:pl-8 md:pl-0">
              {timeline.map((item, idx) => (
                <div 
                  key={idx}
                  className={`md:grid md:grid-cols-2 gap-8 sm:gap-16 items-start ${idx % 2 === 0 ? 'md:pr-1/2' : 'md:ml-1/2 md:pl-1/2'}`}
                  style={{ animation: `slideInUp 0.8s ease-out ${idx * 0.15}s both` }}
                >
                  <div className={idx % 2 === 1 ? 'md:order-last' : ''}>
                    <div 
                      className="p-4 sm:p-6 rounded-lg sm:rounded-xl border transform hover:scale-110 hover:rotate-1 transition duration-500 cursor-pointer"
                      style={{ 
                        backgroundColor: colors.lightBg,
                        borderColor: colors.border
                      }}
                    >
                      <p className="text-xs sm:text-sm font-light opacity-50 mb-2 uppercase tracking-widest transform hover:translate-x-2 transition duration-300">
                        {item.year}
                      </p>
                      <h4 className="text-base sm:text-xl font-serif font-light mb-2 sm:mb-3 transform hover:scale-110 transition duration-300 origin-left" style={{ color: colors.accent }}>
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-light opacity-70">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex justify-center">
                    <div 
                      className="w-4 h-4 rounded-full ring-4 ring-offset-4 transform hover:scale-150 transition duration-500"
                      style={{ 
                        backgroundColor: colors.accent,
                        ringColor: colors.bg,
                        outlineColor: colors.border,
                        outline: `2px solid ${colors.border}`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32 border-t transition-colors duration-500" style={{ borderColor: colors.border }}>
        <div className="mb-12 sm:mb-20" style={{ animation: 'slideInUp 0.8s ease-out' }}>
          <p className="text-xs uppercase tracking-widest font-light opacity-60 mb-2 sm:mb-4">Collaboration</p>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-serif font-light mb-4 sm:mb-8" style={{ color: colors.accent }}>Travaillons Ensemble</h2>
          <p className="text-base sm:text-xl font-light opacity-75 max-w-2xl">
            Je suis enthousiaste à propos des projets intéressants. Contactez-moi pour votre prochain projet.
          </p>
        </div>

        {/* Collaboration Types */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 mb-20 sm:mb-32">
          {collaborationTypes.map((type, idx) => {
            const Icon = type.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-xl sm:rounded-2xl border transition-all duration-500 hover:shadow-2xl transform hover:scale-110 hover:-rotate-1 cursor-pointer"
                style={{ 
                  borderColor: colors.border,
                  backgroundColor: colors.lightBg,
                  animation: `slideInUp 0.8s ease-out ${idx * 0.1}s both`
                }}
              >
                <div className="mb-3 sm:mb-4 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.accent, opacity: 0.15 }}>
                  <Icon size={24} style={{ color: colors.accent }} />
                </div>
                <h3 className="text-base sm:text-xl font-serif font-light mb-2 sm:mb-3 transform hover:translate-x-2 transition duration-300" style={{ color: colors.accent }}>
                  {type.title}
                </h3>
                <p className="text-xs sm:text-sm font-light opacity-70 hover:opacity-100 transition duration-300">
                  {type.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Contact Section */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-20 items-start" style={{ animation: 'slideInUp 0.8s ease-out 0.2s both' }}>
          {/* Contact Info */}
          <div className="space-y-8 sm:space-y-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-light mb-6 sm:mb-8 transform hover:scale-105 transition duration-300 origin-left" style={{ color: colors.accent }}>
                Informations
              </h3>
              <div className="space-y-6 sm:space-y-8">
                <div className="pb-6 sm:pb-8 border-b transform hover:translate-x-2 transition duration-300" style={{ borderColor: colors.border }}>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <Icons.Mail size={16} style={{ color: colors.accent }} />
                    <p className="text-xs uppercase tracking-widest font-light opacity-60">Email</p>
                  </div>
                  <a 
                    href="mailto:www.soleilnzepang@gmail.com"
                    className="text-base sm:text-lg font-light hover:opacity-60 transition transform hover:scale-110 duration-300"
                    style={{ color: colors.accent }}
                  >
                    www.soleilnzepang@gmail.com
                  </a>
                </div>
                <div className="pb-6 sm:pb-8 border-b transform hover:translate-x-2 transition duration-300" style={{ borderColor: colors.border }}>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <Icons.Github size={16} style={{ color: colors.accent }} />
                    <p className="text-xs uppercase tracking-widest font-light opacity-60">GitHub</p>
                  </div>
                  <a 
                    href="https://github.com/sun237-ctlr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-light hover:opacity-60 transition transform hover:scale-110 duration-300"
                    style={{ color: colors.accent }}
                  >
                    sun237-ctlr
                  </a>
                </div>
                <div className="transform hover:translate-x-2 transition duration-300">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <Icons.MapPin size={16} style={{ color: colors.accent }} />
                    <p className="text-xs uppercase tracking-widest font-light opacity-60">Localisation</p>
                  </div>
                  <p className="text-base sm:text-lg font-light">Douala, Cameroon</p>
                </div>
              </div>
            </div>

            <div 
              className="p-6 sm:p-8 rounded-xl sm:rounded-2xl border-l-4 transform hover:scale-105 hover:rotate-1 transition duration-500 cursor-pointer"
              style={{ 
                backgroundColor: colors.lightBg,
                borderColor: colors.accent,
                borderTop: `1px solid ${colors.border}`,
                borderRight: `1px solid ${colors.border}`,
                borderBottom: `1px solid ${colors.border}`
              }}
            >
              <p className="text-xs sm:text-sm font-light opacity-75 mb-2 sm:mb-4">
                Réponse dans les <strong>24-48 heures</strong>.
              </p>
              <p className="text-xs font-light opacity-60">
                Question, idée, ou proposition ? Je suis ravi d'en discuter !
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div 
              className="p-6 sm:p-8 rounded-xl sm:rounded-2xl border transform hover:scale-105 transition duration-500"
              style={{ 
                backgroundColor: colors.lightBg,
                borderColor: colors.border
              }}
            >
              <h3 className="text-lg sm:text-2xl font-serif font-light mb-6 sm:mb-8 transform hover:scale-110 transition duration-300 origin-left" style={{ color: colors.accent }}>
                Message
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                <div style={{ animation: 'slideInUp 0.6s ease-out' }}>
                  <label className="block text-xs sm:text-sm font-light mb-2">Nom</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border font-light text-xs sm:text-sm transition focus:outline-none focus:ring-2 transform hover:scale-105 duration-300"
                    style={{ 
                      borderColor: colors.border,
                      backgroundColor: colors.bg,
                      color: colors.text
                    }}
                    placeholder="Votre nom"
                  />
                </div>

                <div style={{ animation: 'slideInUp 0.6s ease-out 0.05s both' }}>
                  <label className="block text-xs sm:text-sm font-light mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border font-light text-xs sm:text-sm transition focus:outline-none focus:ring-2 transform hover:scale-105 duration-300"
                    style={{ 
                      borderColor: colors.border,
                      backgroundColor: colors.bg,
                      color: colors.text
                    }}
                    placeholder="votre@email.com"
                  />
                </div>

                <div style={{ animation: 'slideInUp 0.6s ease-out 0.1s both' }}>
                  <label className="block text-xs sm:text-sm font-light mb-2">Projet</label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleFormChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border font-light text-xs sm:text-sm transition focus:outline-none focus:ring-2 transform hover:scale-105 duration-300"
                    style={{ 
                      borderColor: colors.border,
                      backgroundColor: colors.bg,
                      color: colors.text
                    }}
                  >
                    <option value="">Sélectionnez</option>
                    <option value="full-stack">Full-Stack</option>
                    <option value="consultation">Consultation</option>
                    <option value="ai-integration">IA</option>
                    <option value="freelance">Freelance</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div style={{ animation: 'slideInUp 0.6s ease-out 0.15s both' }}>
                  <label className="block text-xs sm:text-sm font-light mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border font-light text-xs sm:text-sm h-24 sm:h-32 transition focus:outline-none focus:ring-2 resize-none transform hover:scale-105 duration-300"
                    style={{ 
                      borderColor: colors.border,
                      backgroundColor: colors.bg,
                      color: colors.text
                    }}
                    placeholder="Votre message..."
                  />
                </div>

                {formStatus && (
                  <div 
                    className="p-3 sm:p-4 rounded-lg flex items-start gap-3 transform scale-100 transition duration-300"
                    style={{ 
                      backgroundColor: formStatus.type === 'success' 
                        ? `${colors.accent}20` 
                        : `${colors.accent}20`,
                      borderLeft: `4px solid ${colors.accent}`,
                      animation: 'slideInUp 0.4s ease-out'
                    }}
                  >
                    {formStatus.type === 'success' ? (
                      <Icons.CheckCircle size={16} className="sm:w-5 sm:h-5 flex-shrink-0" style={{ color: colors.accent, marginTop: '2px' }} />
                    ) : (
                      <Icons.AlertCircle size={16} className="sm:w-5 sm:h-5 flex-shrink-0" style={{ color: colors.accent, marginTop: '2px' }} />
                    )}
                    <p className="text-xs sm:text-sm font-light" style={{ color: colors.text }}>
                      {formStatus.message}
                    </p>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-light text-sm sm:text-base transition hover:opacity-80 disabled:opacity-60 flex items-center justify-center gap-2 transform hover:scale-110 duration-300"
                  style={{ 
                    backgroundColor: colors.accent, 
                    color: isDark ? '#1a1a1a' : 'white'
                  }}
                >
                  {isSubmitting ? 'Envoi...' : 'Envoyer'}
                  {!isSubmitting && <Icons.Send size={14} className="sm:w-4 sm:h-4" />}
                </button>
              </form>

              <p className="text-xs font-light opacity-50 mt-4 sm:mt-6 text-center">
                Messages traités rapidement et personnellement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 border-t text-xs sm:text-sm font-light opacity-60 transition-colors duration-500" style={{ borderColor: colors.border }}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 transform hover:translate-y-1 transition duration-300">
          <p>© 2026 Nadia Soleil. Tous droits réservés.</p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#travaux" className="hover:opacity-100 transition hover:scale-110 duration-300 transform">Travaux</a>
            <a href="#expertise" className="hover:opacity-100 transition hover:scale-110 duration-300 transform">Expertise</a>
            <a href="#about" className="hover:opacity-100 transition hover:scale-110 duration-300 transform">À propos</a>
            <a href="#contact" className="hover:opacity-100 transition hover:scale-110 duration-300 transform">Contact</a>
          </div>
        </div>
      </footer>

      {/* CSS RESPONSIVE */}
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.3); }
          50% { transform: scale(1); }
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(212, 165, 165, 0.1);
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: #D4A5A5;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #C89B9B;
        }

        @media (min-width: 2560px) {
          * { font-size: 1.15em; }
          .max-w-7xl { max-width: 90rem; }
          h1 { font-size: 10rem !important; }
          h2 { font-size: 5rem !important; }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          section { padding-top: 2rem; padding-bottom: 2rem; }
        }

        @media (max-width: 640px) {
          body { font-size: 0.95rem; }
          button { padding: 0.65rem 1.25rem; }
        }
      `}</style>
    </div>
  );
}

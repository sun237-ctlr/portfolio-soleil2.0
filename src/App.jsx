import React, { useState } from 'react';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'collaboration',
    message: ''
  });

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xgogydZp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', projectType: 'collaboration', message: '' });
        setTimeout(() => setFormStatus(null), 5000);
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: 'system-ui, -apple-system, sans-serif', transition: 'all 0.3s' }}>
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, backgroundColor: isDark ? 'rgba(26,26,26,0.95)' : 'rgba(250,247,242,0.95)', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px' }}>Nadia Soleil</div>
          <div style={{ display: window.innerWidth < 768 ? 'none' : 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="#travaux" style={{ textDecoration: 'none', color: colors.text, fontSize: '14px' }}>Travaux</a>
            <a href="#expertise" style={{ textDecoration: 'none', color: colors.text, fontSize: '14px' }}>Expertise</a>
            <a href="#about" style={{ textDecoration: 'none', color: colors.text, fontSize: '14px' }}>À propos</a>
            <a href="#contact" style={{ textDecoration: 'none', color: colors.text, fontSize: '14px' }}>Contact</a>
            <button onClick={() => setIsDark(!isDark)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '18px' }}>
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.lightBg} 100%)` }}>
        <div style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', lineHeight: 1.2 }}>
            Créatrice de <span style={{ color: colors.accent }}>solutions web</span> élégantes
          </h1>
          <p style={{ fontSize: '18px', marginBottom: '30px', opacity: 0.8 }}>
            Full-Stack Developer passionnée par React, Node.js, Python et l'architecture IA. Diplômée en Génie Informatique de l'IUT de Douala.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#travaux" style={{ padding: '12px 24px', backgroundColor: colors.accent, color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>Voir mes travaux</a>
            <a href="#contact" style={{ padding: '12px 24px', backgroundColor: colors.green, color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>Me contacter</a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="travaux" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }}>Travaux récents</h2>
        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(2, 1fr)', gap: '30px' }}>
          {[
            { title: 'e-Mairie Douala', desc: 'Plateforme citoyenne avec React, Node.js, PostgreSQL', tech: ['React', 'Node.js', 'PostgreSQL'] },
            { title: 'TaskFlow Pro', desc: 'App collaborative de gestion des tâches', tech: ['Flask', 'Python', 'PostgreSQL'] },
            { title: 'Obsidian Club', desc: 'Jeu interactif avec Canvas API', tech: ['React', 'JavaScript', 'Canvas'] },
            { title: 'Local AI Stack', desc: 'Stack IA locale avec Docker et LLMs', tech: ['Docker', 'Python', 'FastAPI'] }
          ].map((project, i) => (
            <div key={i} style={{ padding: '24px', backgroundColor: colors.lightBg, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{project.title}</h3>
              <p style={{ opacity: 0.7, marginBottom: '15px' }}>{project.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.tech.map(t => (
                  <span key={t} style={{ padding: '4px 12px', backgroundColor: colors.accent, color: 'white', borderRadius: '16px', fontSize: '12px' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" style={{ padding: '80px 20px', backgroundColor: colors.lightBg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }}>Mon expertise</h2>
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(3, 1fr)', gap: '30px' }}>
            {[
              { name: 'Frontend', level: 96 },
              { name: 'Backend', level: 88 },
              { name: 'Database', level: 89 },
              { name: 'DevOps', level: 90 },
              { name: 'AI/ML', level: 82 },
              { name: 'Problem Solving', level: 88 }
            ].map(exp => (
              <div key={exp.name} style={{ padding: '20px', backgroundColor: colors.bg, borderRadius: '12px' }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: '15px' }}>{exp.name}</h3>
                <div style={{ width: '100%', height: '8px', backgroundColor: colors.border, borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${exp.level}%`, height: '100%', backgroundColor: colors.accent }}></div>
                </div>
                <p style={{ fontSize: '12px', marginTop: '8px', opacity: 0.7 }}>{exp.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px' }}>À propos</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '20px', opacity: 0.8 }}>
          Je suis une développeuse passionnée qui aime transformer des idées en solutions digitales concrètes. Avec une formation en Génie Informatique et une expérience en Full-Stack development, je crée des applications web performantes et user-friendly.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.8, opacity: 0.8 }}>
          Basée à Douala, Cameroon, je reste ouverte aux collaborations et aux nouvelles opportunités qui me permettront de croître et d'impacter positivement.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '80px 20px', backgroundColor: colors.lightBg }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>Restons en contact</h2>
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(2, 1fr)', gap: '15px' }}>
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ padding: '10px', borderRadius: '6px', border: `1px solid ${colors.border}`, backgroundColor: colors.bg, color: colors.text }}
                required
              />
              <input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{ padding: '10px', borderRadius: '6px', border: `1px solid ${colors.border}`, backgroundColor: colors.bg, color: colors.text }}
                required
              />
            </div>
            <textarea
              placeholder="Votre message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="5"
              style={{ padding: '10px', borderRadius: '6px', border: `1px solid ${colors.border}`, backgroundColor: colors.bg, color: colors.text, resize: 'none' }}
              required
            ></textarea>
            <button
              type="submit"
              style={{ padding: '12px', backgroundColor: colors.accent, color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
            >
              Envoyer
            </button>
            {formStatus === 'success' && <p style={{ color: colors.green, textAlign: 'center' }}>✓ Message envoyé!</p>}
          </form>
          <div style={{ marginTop: '40px', textAlign: 'center', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a href="https://github.com/sun237-ctlr" target="_blank" rel="noopener noreferrer" style={{ fontSize: '24px', textDecoration: 'none' }}>💻</a>
            <a href="mailto:soleilnzepang@gmail.com" style={{ fontSize: '24px', textDecoration: 'none' }}>✉️</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '30px', opacity: 0.7, borderTop: `1px solid ${colors.border}` }}>
        <p>2026 © Nadia Soleil. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

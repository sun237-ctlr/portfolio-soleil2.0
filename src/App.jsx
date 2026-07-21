import React from 'react';
import { Github, Mail, ArrowRight, Menu, X, Download, ChevronDown, Sun, Moon,
         ExternalLink, Code2, Database, Zap, GitBranch, BarChart3, Heart, Send,
         CheckCircle, AlertCircle, Rocket, Lightbulb, Bot, Clipboard, Gamepad2,
         Award, Briefcase, MapPin } from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);
  
  return (
    <div style={{ backgroundColor: isDark ? '#1a1a1a' : '#FAF7F2', color: isDark ? '#e8e8e8' : '#5a5a5a', minHeight: '100vh' }}>
      {/* Test: Simple Portfolio */}
      <nav style={{ backgroundColor: '#D4A5A5', padding: '20px', textAlign: 'center', color: 'white' }}>
        <h1>Nadia Soleil - Full-Stack Developer</h1>
      </nav>
      
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>Créatrice de solutions web élégantes</h2>
        <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '30px' }}>
          Full-Stack Developer passionnée par React, Node.js, Python et l'architecture IA
        </p>
        <button onClick={() => setIsDark(!isDark)} style={{ 
          padding: '10px 20px', 
          backgroundColor: '#D4A5A5', 
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px'
        }}>
          {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </section>
    </div>
  );
}

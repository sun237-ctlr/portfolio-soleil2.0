import React from 'react';

export default function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FAF7F2',
      color: '#5a5a5a',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Nadia Soleil</h1>
      <p style={{ fontSize: '20px', marginBottom: '10px' }}>Full-Stack Developer & AI Enthusiast</p>
      <p style={{ fontSize: '16px', opacity: 0.7, marginBottom: '30px' }}>Créatrice de solutions web élégantes</p>
      
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="https://github.com/sun237-ctlr" style={{ padding: '10px 20px', backgroundColor: '#D4A5A5', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>GitHub</a>
        <a href="mailto:soleilnzepang@gmail.com" style={{ padding: '10px 20px', backgroundColor: '#9CAF88', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>Contact</a>
      </div>
    </div>
  );
}

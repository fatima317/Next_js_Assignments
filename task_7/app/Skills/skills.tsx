import React from 'react';
import '../styles.css';

export const Skills = () => {
  return (
    <div className="skills-container">
      {/* Section Heading */}
      <h1 className="skills-title">Skills</h1>
      
      {/* Languages Section */}
      <div className="skills-section">
        <h2 className="skills-subtitle">Languages</h2>
        <div className="skills-list">
          <div className="skill-item">
            <p className="skill-name">HTML</p>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <p className="skill-name">CSS</p>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <p className="skill-name">TypeScript</p>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Frameworks & Tools Section */}
      <div className="skills-section">
        <h2 className="skills-subtitle">Frameworks & Tools</h2>
        <div className="skills-tools">
          {['Next.js', 'Tailwind CSS', 'React', 'Figma', 'Git', 'VS Code', 'Vercel'].map((tool) => (
            <div className="tool-item" key={tool}>{tool}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

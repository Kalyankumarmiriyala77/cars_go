// src/StepsSection.js
import React from 'react';
import './StepsSection.css';

const steps = [
  {
    icon: '📱',
    title: 'Log onto Cars-Go',
    description: 'Access our platform via login.',
  },
  {
    icon: '📅',
    title: 'Select city, date and time',
    description: 'Choose your desired location and rental period.',
  },
  {
    icon: '🚗',
    title: 'Pick a car of your choice',
    description: 'Browse and select the car that fits your needs.',
  },
  {
    icon: '📍',
    title: 'Explore your destinations',
    description: 'Enjoy your ride and travel anywhere you want.',
  },
];

const StepsSection = () => (
  <section className="steps-section">
    <h2>How Cars-Go Works</h2>
    <div className="steps-container">
      {steps.map((step, index) => (
        <div key={index} className="step-card">
          <div className="step-icon">{step.icon}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StepsSection;

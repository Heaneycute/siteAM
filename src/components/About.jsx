import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownItems = [
    { to: '/design', label: 'Дизайн' },
    { to: '/copywriting', label: 'Копирайтинг' },
    { to: '/illustrations', label: 'Иллюстрации' },
    { to: '/smm', label: 'SMM' },
  ];

  return (
    <section id="about" className="about-section">
      <h2>Горим своим делом</h2>
      <div className="about-content">
        <p>С особенным вниманием относимся к каждому проекту, доверенному в наши руки.</p>
        <div className="about-dropdown">
          <button
            className="about-button"
            aria-expanded={isOpen}
            aria-controls="dropdown-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            Ознакомиться с ценами
          </button>
          <nav>
            <ul
              className={`about-dropdown-menu ${isOpen ? 'open' : ''}`}
              id="dropdown-menu"
            >
              {dropdownItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default About;
import { useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownItems = [
    { href: '/design', label: 'Дизайн' },
    { href: '/copywriting', label: 'Копирайтинг' },
    { href: '/illustrations', label: 'Иллюстрации' },
    { href: '/smm', label: 'SMM' },
  ];

  return (
    <section id="about" className="about-section">
      <h2>Горим своим делом</h2>
      <div className="about-content">
        <p>
          С особенным вниманием относимся к каждому <br />
          проекту, доверенному в наши руки.
        </p>
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
                  <a href={item.href}>{item.label}</a>
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

import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openDropdown, closeDropdown, toggleDropdown } from '../../redux/dropdownSlice';
import '../styles/Header.css';
import { useEffect } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const isDropdownOpen = useSelector((state) => state.dropdown.isDropdownOpen);
  const location = useLocation();

  useEffect(() => {
    dispatch(closeDropdown());
  }, [location, dispatch]);

  const handleMouseEnter = () => dispatch(openDropdown());
  const handleMouseLeave = () => dispatch(closeDropdown());
  const handlePriceClick = (e) => {
    e.preventDefault();
    dispatch(toggleDropdown());
  };
  const handleLinkClick = () => dispatch(closeDropdown());

  const navItems = [
    { to: '/design', label: 'Дизайн' },
    { to: '/copywriting', label: 'Копирайтинг' },
    { to: '/illustrations', label: 'Иллюстрации' },
    { to: '/smm', label: 'SMM' },
  ];

  return (
    <header className="header" role="banner">
      <Link to="/" className="header-logo" onClick={handleLinkClick}>
        <img src="/LogoAM.svg" alt="Логотип агентства имени Маяковского" loading="lazy" />
      </Link>
      <nav className="header-nav" aria-label="Основная навигация">
        <ul>
          <li>
            <a
              href="https://drive.google.com/file/d/10eymJko3q8KPP8L3pp33kwfJ7xDpxQ1d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Портфолио
            </a>
          </li>
          <li
            className={`dropdown ${isDropdownOpen ? 'open' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className="dropdown-toggle"
              onClick={handlePriceClick}
              aria-expanded={isDropdownOpen}
            >
              Прайс
            </button>
            <ul className="dropdown-menu">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} onClick={handleLinkClick}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} onClick={handleLinkClick}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

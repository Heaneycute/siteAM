import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <p>Агентство имени Маяковского &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;

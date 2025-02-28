import { useState } from 'react';
import '../styles/PortfolioAndTeam.css';

const PortfolioAndTeam = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const portfolioItems = [
    {
      src: '/eyelashMaster.png',
      alt: 'SMM',
      caption: 'Портфолио по SMM',
      overlayText: 'SMM',
      overlayPos: { top: '14vw', left: '0.5vw' },
      captionPos: { bottom: '0.1vw', right: '13vw' },
      fullOverlayPos: { top: '15vw', left: '7vw' },
      transform: 'translateX(-67%)',
    },
    {
      src: '/illustration.jpg',
      alt: 'Иллюстрации',
      caption: 'Портфолио по иллюстрациям',
      overlayText: 'Иллюстрации',
      overlayPos: { top: '5vw', left: '-8.5vw' },
      captionPos: { bottom: '0.1vw', right: '17vw' },
      fullOverlayPos: { top: '15.5vw', left: '1.4vw' },
      transform: 'translateX(-35%)',
    },
    {
      src: '/Copywriting.jpg',
      alt: 'Копирайтинг',
      caption: 'Портфолио по копирайтингу',
      overlayText: 'Копирайтинг',
      overlayPos: { top: '5.5vw', left: '-7.8vw' },
      captionPos: { bottom: '6.4vw', right: '19vw' },
      fullOverlayPos: { top: '16vw', left: '-0.6vw' },
      transform: 'translateX(-35%)',
    },
    {
      src: '/design.jpg',
      alt: 'Дизайн',
      caption: 'Портфолио по дизайну',
      overlayText: 'Дизайн',
      overlayPos: { top: '10vw', left: '-2.5vw' },
      captionPos: { bottom: '0.1vw', right: '7vw' },
      fullOverlayPos: { top: '15.8vw', left: '-2.8vw' },
      transform: 'translateX(-21%)',
    },
  ];

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <section className="portfolio-and-team">
      <div className="team-description">
        <p>
          В команде работают 5 специалистов с высшим образованием и опытом от 3 лет.
          <br />
          Каждый кейс в портфолио реализован нашими совместными усилиями, состав
          <br /> агентства не изменился с самого начала. А это значит, что наша работа
          всегда
          <br />
          слаженная, согласованная, оперативная и профессиональная :)
        </p>
      </div>
      <div className="portfolio-section">
        <div className="portfolio-gallery">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="image-container" onClick={() => handleImageClick(item)}>
                <div className="image-overlay" style={item.overlayPos}>
                  {item.overlayText}
                </div>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="cropped-image"
                  style={{ transform: item.transform }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        {selectedItem && (
          <div className="full-image-container" onClick={handleClose}>
            <div className="full-image-overlay" style={selectedItem.fullOverlayPos}>
              {selectedItem.overlayText}
            </div>
            <img
              src={selectedItem.src}
              alt="Full Size"
              className="full-image"
              loading="lazy"
            />
            <p className="portfolio-caption" style={selectedItem.captionPos}>
              {selectedItem.caption}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioAndTeam;

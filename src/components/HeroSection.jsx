import '../styles/HeroSection.css';
import clsx from 'clsx';

const HeroSection = () => {
  const newspaperChunks = [
    { src: '/leftChunk.svg', alt: 'Левая часть газеты', className: 'left-chunk' },
    { src: '/middleChunk.svg', alt: 'Средняя часть газеты', className: 'middle-chunk' },
    { src: '/rightChunk.svg', alt: 'Правая часть газеты', className: 'right-chunk' },
    { src: '/bottomChunk.svg', alt: 'Нижняя часть газеты', className: 'bottom-chunk' },
  ];

  return (
    <header className="hero-section">
      <div className="welcome-slogan">
        <h1>ЗДРАВСТВУЙТЕ!</h1>
        <p className="hero-description">На связи Агентство имени Маяковского</p>
      </div>
      <div className="newspaper-chunks">
        {newspaperChunks.map((chunk, index) => (
          <img
            key={index}
            src={chunk.src}
            alt={chunk.alt}
            className={clsx('chunk', chunk.className)}
            loading="lazy"
          />
        ))}
      </div>
    </header>
  );
};

export default HeroSection;

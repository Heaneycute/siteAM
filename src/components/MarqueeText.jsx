import '../styles/MarqueeText.css';

const MarqueeText = () => {
  const marqueeContent =
    'Подбираем уникальную стратегию для заказчика • Подбираем уникальную стратегию для заказчика • Подбираем уникальную стратегию для заказчика •';

  return (
    <div className="marquee-container">
      <div className="marquee-text">
        <span>{marqueeContent}</span>
        <span>{marqueeContent}</span>
      </div>
    </div>
  );
};

export default MarqueeText;

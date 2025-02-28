import '../styles/StrategySection.css';

const StrategySection = () => {
  const telegramLink = 'https://t.me/Mayakovsky_Agency';

  return (
    <section className="strategy-section" aria-label="Стратегия компании">
      <div className="strategy-image">
        <div className="strategy-image-container">
          <div className="circle-background" aria-hidden="true" />
          <img
            src="/siteAM/Mayakovsky.svg"
            alt="Владимир Маяковский"
            className="mayakovsky-image"
            loading="lazy"
          />
          <img
            src="/siteAM/Vladimir_Mayakovsky_signature.svg"
            alt="Подпись Владимира Маяковского"
            className="signature"
            loading="lazy"
          />
        </div>
      </div>
      <div className="strategy-text">
        <p>
          Мы подбираем уникальную стратегию для каждого
          <br />
          заказчика, работаем на результат, качество и
          <br />
          взаимовыгодное сотрудничество. Повышаем продажи
          <br />
          как брендам, популярным на рынке, так и малому
          <br />
          бизнесу. Новичков мы консультируем абсолютно
          <br />
          бесплатно.
        </p>
        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="strategy-button"
        >
          Получить консультацию
        </a>
      </div>
    </section>
  );
};

export default StrategySection;

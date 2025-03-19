import '../styles/PartnersSection.css';

const PartnersSection = () => {
  const partners = [
    'М.видео,эльдорадо.png',
    'СелоЗеленое.png',
    'Иней.png',
    'Новосвит.png',
    'Пропеллер.png',
    'ЗолотойШелк.png',
    'АртКвартал.png',
    'Феникс.png',
    'Самбери.png',
  ];

  return (
    <section className="partners-section">
      <h2 className="partners-title">БРЕНДЫ, С КОТОРЫМИ МЫ СОТРУДНИЧАЛИ</h2>
      <div className="partners-logos">
        {partners.map((logo, index) => (
          <img
            key={index}
            src={`/siteAM/${logo}`}
            alt={`${logo.split('.')[0]} logo`}
            className="partner-logo"
            loading="lazy"
          />
        ))}
        {partners.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={`/siteAM/${logo}`}
            alt={`${logo.split('.')[0]} logo`}
            className="partner-logo"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;

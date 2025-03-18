import '../styles/PortfolioAndTeam.css';

const PortfolioAndTeam = () => {
  const teamMembers = [
    {
      src: '/siteAM/Valeriia.jpg',
      name: 'Валерия',
      role: 'Руководитель и основатель агентства.',
    },
    {
      src: '/siteAM/Ekaterina.jpg',
      name: 'Екатерина',
      role: 'Ведущий SMM-специалист, ответственна за создание контента, съёмки, рекламу и таргетинг.',
    },
    {
      src: '/siteAM/Aleksandra.jpg',
      name: 'Александра',
      role: 'Главный дизайнер, ответственна за визуальный маркетинг брендов, дизайн для сайтов, маркетплейсов и бизнеса.',
    },
    {
      src: '/siteAM/Darya.jpg',
      name: 'Дарья',
      role: 'Иллюстратор, работает в проектах с литературными издательствами, создаёт обложки, материалы для печати.',
    },
    {
      src: '/siteAM/Evgeniy.jpg',
      name: 'Евгений',
      role: 'Fullstack-разработчик, отвечает за внутреннюю составляющую сайтов, код.',
    },
  ];

  const portfolioItems = [
    {
      src: '/siteAM/design.jpg',
      caption: 'Портфолио по дизайну',
    },
    {
      src: '/siteAM/smm.jpg',
      caption: 'Портфолио по SMM',
    },
    {
      src: '/siteAM/illustration.jpg',
      caption: 'Портфолио по иллюстрациям',
    },
    {
      src: '/siteAM/Copywriting.jpg',
      caption: 'Портфолио по копирайтингу',
    },
  ];

  return (
    <section className="portfolio-and-team">
      <h2>Наша команда</h2>
      <div className="team-description">
        <p>
          В команде работают 5 специалистов с высшим образованием и опытом от 3 лет.
          Каждый кейс в портфолио <br />
          реализован нашими совместными усилиями, состав агентства не изменился с самого
          начала. А это значит, <br />
          что наша работа всегда слаженная, согласованная, оперативная и профессиональная
          :)
        </p>
      </div>
      <div className="team-members">
        <div className="team-row">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.src} alt={member.name} className="team-image" loading="lazy" />
              <p className="team-name">{member.name}</p>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="team-row team-row-bottom">
          {teamMembers.slice(3, 5).map((member, index) => (
            <div className="team-member" key={index + 3}>
              <img src={member.src} alt={member.name} className="team-image" loading="lazy" />
              <p className="team-name">{member.name}</p>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <h3>Портфолио</h3>
      <div className="portfolio-section">
        <div className="portfolio-gallery">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <img src={item.src} alt={item.caption} className="portfolio-image" loading="lazy" />
              <p className="portfolio-caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioAndTeam;

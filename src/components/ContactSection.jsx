import '../styles/ContactSection.css';

const ContactSection = () => {
  const telegramLink = 'https://t.me/Mayakovsky_Agency';

  return (
    <section className="contact-section" aria-label="Контакты агентства">
      <p>
        Менеджер по общению с клиентами, ведущая каждый проект – создатель и руководитель
        агентства. Лично <br />
        отвечает за качество выполнения и будет рада обсудить ваш заказ.
      </p>
      <a
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button"
      >
        Позвонить Валерии и обсудить задачу
        <img src="/siteAM/tgIcon.png" alt="Telegram Icon" className="tg-icon" />
      </a>
    </section>
  );
};

export default ContactSection;

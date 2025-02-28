import { useState, useRef } from 'react';
import '../../styles/SMMPage.css';

export default function SMMPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const buttonRef = useRef(null);

  const accordionData = [
    {
      title: (
        <>
          <p>Вариант 1:</p>
          <p>ВК + Инстаграм + Телеграм</p>
        </>
      ),
      content: (
        <>
          <p className="highlighted-text">от 34 500₽ до 37 000₽</p>
          <p className="upper-text">Стоимость ведения этих трёх соцсетей.</p>
          <p className="middle-text">
            Дополнительно оплачивается бюджет напрямую поставщикам рекламы: в первый месяц
            от 2 500₽ до 5 000₽. Во второй и все последующие от 10 000₽ до 20 000₽.
          </p>
          <p className="bottom-text">
            За какие именно услуги я заплачу от 34 500₽ до 37 000₽?
          </p>
        </>
      ),
      details: `
      ● Анализ ЦА, ниши и конкурентов;
      ● Стратегия, формирование ваших преимуществ (УТП) и контент-план;
      ● Полная дизайнерская упаковка всех соцсетей: уникальный визуал, шрифты и стиль, 
        чтобы сделать вам узнаваемый и популярный бренд.
      ● Ведение:
      ○ 6 постов: интересный текст + визуал;
      ○ 6 Рилс: сценарии + монтаж + обложка;
      ○ 2 сторитейла для актуальных.
      ● Продвижение стартует в последнюю неделю.`,
    },
    {
      title: (
        <>
          <p>Вариант 2:</p>
          <p>Только Телеграм</p>
        </>
      ),
      content: (
        <>
          <p className="highlighted-text">от 25 000₽ до 30 000₽</p>
          <p className="upper-text">Стоимость ведения соцсети.</p>
          <p className="middle-text">
            Дополнительно оплачивается бюджет напрямую поставщикам рекламы: в первый месяц
            2 500₽. Во второй и все последующие 10 000₽.
          </p>
          <p className="bottom-text">
            За какие именно услуги я заплачу от 25 000₽ до 30 000₽?
          </p>
        </>
      ),
      details: `
      ● Анализ ЦА, ниши и конкурентов;
      ● Стратегия, формирование ваших преимуществ (УТП) и контент-план;
      ● Полная дизайнерская упаковка всех соцсетей: уникальный визуал, шрифты и стиль, 
        чтобы сделать вам узнаваемый и популярный канал.
      ● Ведение:
      ○ 9 больших постов или 18 кратких (цена та же);
      ○ 9 дизайнерских картинок для визуала.
      ● Продвижение стартует в последнюю неделю.`,
    },
    {
      title: (
        <>
          <p>Вариант 3:</p>
          <p>Только Инстаграм</p>
        </>
      ),
      content: (
        <>
          <p className="highlighted-text">35 000₽</p>
          <p className="upper-text">Стоимость ведения соцсети.</p>
          <p className="middle-text">
            Дополнительно оплачивается бюджет напрямую поставщикам рекламы: в первый месяц
            2 500₽. Во второй и все последующие 10 000₽.
          </p>
          <p className="bottom-text">За какие именно услуги я заплачу 35 000₽?</p>
        </>
      ),
      details: `
      ● Анализ ЦА, ниши и конкурентов;
      ● Стратегия, формирование ваших преимуществ (УТП) и контент-план;
      ● Полная дизайнерская упаковка всех соцсетей: уникальный визуал, шрифты и стиль, 
        чтобы сделать вам узнаваемый и популярный бренд.
      ● Ведение:
      ○ 6 постов: интересный текст + визуал;
      ○ 6 Рилс: сценарии + монтаж + обложка;
      ○ 2 сторитейла для актуальных.
      ● Продвижение стартует в последнюю неделю.`,
    },
    {
      title: (
        <>
          <p>Вариант 4:</p>
          <p>Только ВКонтакте</p>
        </>
      ),
      content: (
        <>
          <p className="highlighted-text">от 30 000₽ до 35 000₽</p>
          <p className="upper-text">Стоимость ведения соцсети.</p>
          <p className="middle-text">
            Дополнительно оплачивается бюджет напрямую поставщикам рекламы: в первый месяц
            5 000₽. Во второй и все последующие 20 000₽.
          </p>
          <p className="bottom-text">
            За какие именно услуги я заплачу от 30 000₽ до 35 000₽?
          </p>
        </>
      ),
      details: `
      ● Анализ ЦА, ниши и конкурентов;
      ● Стратегия, формирование ваших преимуществ (УТП) и контент-план;
      ● Полная дизайнерская упаковка всех соцсетей: уникальный визуал, шрифты и стиль, 
        чтобы сделать вам узнаваемый и популярный бренд.
      ● Ведение:
      ○ 9 постов: интересный текст + визуал (картинки к постам).
      ● Продвижение стартует в последнюю неделю. 
       Используем таргет ВКонтакте, знакомимся с рекламой, собираем первые заявки (лиды).`,
    },
    {
      title: (
        <>
          <p>Вариант 5:</p> <p>Пока не знаю</p>
        </>
      ),
      content: (
        <>
          <p className="highlighted-text">34 500 - 37 000 рублей</p>
          <p className="upper-text">Стоимость ведения этих трёх соцсетей.</p>
          <p className="middle-text">
            Дополнительно оплачивается бюджет на рекламу: от 2 500₽ до 5 000₽. Эти
            средства мы переведем поставщикам рекламы.
          </p>
          <p className="bottom-text">
            За какие именно услуги я заплачу от 34 500₽ до 37 000₽?
          </p>
        </>
      ),
      details: `
      ● Анализ ЦА, ниши и конкурентов;
      ● Стратегия, формирование ваших преимуществ (УТП) и контент-план;
      ● Полная дизайнерская упаковка всех соцсетей: уникальный визуал, шрифты и стиль, 
        чтобы сделать вам узнаваемый и популярный бренд.
      ● Ведение:
      ○ 9 постов: интересный текст + визуал (картинки к постам).
      ● Продвижение стартует в последнюю неделю. 
        Используем таргет ВКонтакте, знакомимся с рекламой, собираем первые заявки (лиды).`,
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const openModal = (details) => {
    const accordionRect = document
      .querySelector('.accordion-section')
      .getBoundingClientRect();

    setModalPosition({
      top: accordionRect.top + window.scrollY,
      left: accordionRect.left + window.scrollX - 700,
    });

    const formattedDetails = details
      .split('\n')
      .map((line, index) => <p key={index}>{line.trim()}</p>);

    setModalContent(formattedDetails);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent('');
  };

  return (
    <div className="SMM-page">
      <div className="left-section">
        <h1>25 000 - 42 000</h1>
        <p>
          Стоимость ведения социальных
          <br />
          сетей, в зависимости от того,
          <br />
          какие площадки вы выбираете.
        </p>
        <div className="details-link">
          <div className="details-text">
            <span>Детализация цены</span>
            <span>по каждому варианту:</span>
          </div>
          <span className="arrow">➔</span>
        </div>
        <div className="left-illustration">
          <div className="circle-background-smm"></div>
          <img
            className="illustration-layer signature-smm"
            src="/siteAM/signature.png"
            alt="signature"
          />
          <img
            className="illustration-layer smm-back-chunk"
            src="/siteAM/smmBackChunk.png"
            alt="smmBackChunk"
          />
          <img
            className="illustration-layer smm-chunk"
            src="/siteAM/smmChunk.png"
            alt="smmChunk"
          />
          <img
            className="illustration-layer mayakovskii-kartin"
            src="/siteAM/mayakovskii-kartin.png"
            alt="mayakovskii-kartin"
          />
        </div>
      </div>

      <div className="accordion-section">
        {accordionData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <span>{item.title}</span>
              <span className="accordion-opener">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                {item.content}
                <button ref={buttonRef} onClick={(e) => openModal(item.details, e)}>
                  Узнать
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal"
            style={{ top: modalPosition.top, left: modalPosition.left }}
            onClick={(e) => e.stopPropagation()}
          >
            {modalContent}
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

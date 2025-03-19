import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/SMMPage.css';
import accordionData from '../../../data/smmData';

const AccordionItem = ({ item, index, activeIndex, toggleAccordion, openModal }) => (
  <div className="accordion-item">
    <div className="accordion-header" onClick={() => toggleAccordion(index)}>
      <span>{item.title}</span>
      <span className="accordion-opener">{activeIndex === index ? '-' : '+'}</span>
    </div>
    {activeIndex === index && (
      <div className="accordion-content">
        {item.content}
        <button onClick={() => openModal(item.details)}>Узнать</button>
      </div>
    )}
  </div>
);

AccordionItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          className: PropTypes.string,
        }),
      ]),
    ).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number,
  toggleAccordion: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default function SMMPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const openModal = (details) => {
    const accordionRect = document
      .querySelector('.accordion-section')
      .getBoundingClientRect();

    setModalPosition({
      top: accordionRect.top + window.scrollY,
      left: accordionRect.left + window.scrollX - 37.5 * (window.innerWidth / 100),
    });

    const formattedDetails = details.map((line, index) => {
      if (typeof line === 'string') {
        return <p key={index}>{line}</p>;
      }
      return (
        <p key={index} className={line.className}>
          {line.text}
        </p>
      );
    });

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
          Стоимость ведения социальных сетей, <br />в зависимости от того, какие площадки
          вы <br />
          выбираете.
        </p>
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
          <AccordionItem
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
            openModal={openModal}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal"
            style={{ top: modalPosition.top, left: modalPosition.left }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="modal-close" onClick={closeModal}>
              ✕
            </span>
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
}

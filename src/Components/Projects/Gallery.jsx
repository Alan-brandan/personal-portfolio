import "./Gallery.css";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import projects from "./projectsData";
import Modal from "../Modal";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Gallery = ({ items, filterItems }, ref) => {
  const [isClickEvent, setIsClickEvent] = useState(false);
  const dragStartPositionRef = useRef({ x: 0, y: 0 });
  const [currentProject, setCurrentProject] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const popupRef = useRef(null);
  const carouselRef = useRef(null);

  const [carouselLeftContraint, setcarouselLeftContraint] = useState(0);

  useEffect(() => {
    const updateCarouselLeftContraint = () => {
      const newContraint =
        -carouselRef.current?.parentElement?.clientWidth * 0.605 -
        15 * (carouselRef.current?.childNodes?.length + 1);
      setcarouselLeftContraint(newContraint);
    };

    updateCarouselLeftContraint();

    window.addEventListener("resize", updateCarouselLeftContraint);
    return () => {
      window.removeEventListener("resize", updateCarouselLeftContraint);
    };
  }, []);

  useEffect(() => {
    console.log(carouselLeftContraint);
  }, [carouselLeftContraint]);

  useEffect(() => {
    if (openModal) {
      popupRef.current && disableBodyScroll(popupRef.current);
    } else {
      popupRef.current && enableBodyScroll(popupRef.current);
    }
  }, [openModal]);

  const handleDragStart = (event) => {
    setIsClickEvent(false);
    dragStartPositionRef.current = { x: event.clientX, y: event.clientY };
  };

  const handleDragEnd = (event, menuitem) => {
    const dragDistance = Math.abs(
      event.clientX - dragStartPositionRef.current.x
    );
    const dragThreshold = 30;

    if (dragDistance > dragThreshold) {
      setIsClickEvent(false);
    } else {
      setIsClickEvent(true);
      //setOpenModal(true); //modal not implemented yet
      setCurrentProject(menuitem);
    }
  };

  const handleCardClick = (menuitem) => {
    if (isClickEvent) {
      //setOpenModal(true); //modal not implemented yet
      setCurrentProject(menuitem);
    } else {
      setIsClickEvent(true);
    }
  };

  return (
    <div className="projects-container">
      <div className="projects-section" ref={ref}>
        <div className="proj-header">
          <h2>Projects</h2>
          <p>Some Things I’ve Built</p>
        </div>
        <div className="filter-container">
          <button onClick={() => filterItems("All")}>All</button>
          <button onClick={() => filterItems("Web")}>Web</button>
          <button onClick={() => filterItems("Mobile")}>Mobile</button>
        </div>
      </div>

      <div className="projects-carousel">
        <motion.div
          className="inner-carousel"
          id="carousel"
          drag="x"
          dragConstraints={{
            right: 0,
            left: carouselLeftContraint,
          }}
          whileTap={{ cursor: "grabbing" }}
          onDragStart={handleDragStart}
          onDragEnd={(event) => handleDragEnd(event, currentProject)}
          ref={carouselRef}
        >
          {items.map((menuitem, i) => {
            const { id, title, thumb, summary } = menuitem;

            return (
              <motion.div
                className="proj-card"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                key={id}
                onClick={() => handleCardClick(menuitem)}
              >
                <motion.img src={thumb} alt={title} />
                <div className="proj-info">
                  <h4> {title} </h4>
                  <p>{summary}</p>
                  <h5>Read more</h5>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <h2>{currentProject.title}</h2>
          <p className="modal-info-desc">{currentProject.desc}</p>

          <div className="modal-info-container">
            <div className="info-section">
              <h4>Date</h4>
              <p>{currentProject.date}</p>
            </div>

            {currentProject.role != null && (
              <div className="info-section">
                <h4>Role</h4>
                <p>{currentProject.role}</p>
              </div>
            )}

            <div className="info-section">
              <h4>Stack</h4>

              <p>
                {currentProject.tech?.map((techItem) => {
                  return <span>{techItem}</span>;
                })}
              </p>
            </div>
          </div>

          <div className="info-links">
            <a href={currentProject.link} target="blank">
              Live demo
            </a>
            <a href={currentProject.repo} target="blank">
              Repository
            </a>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="proj-modal-images">
            {currentProject.images?.map((menuitem, i) => {
              return <img src={menuitem} alt={i} />;
            })}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default React.forwardRef(Gallery);

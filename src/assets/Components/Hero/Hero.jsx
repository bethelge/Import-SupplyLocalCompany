import React, { useState } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHandshake,
  faGlobe,
  faShip,
  faBoxOpen,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const partners = [
  {
    id: 1,
    name: "Ministry of Trade",
    logo: "../../../src/assets/images/partnerWithUs/Ministry.png",
  },
  {
    id: 2,
    name: "Addis Chamber",
    logo: "../../../src/assets/images/partnerWithUs/Addis.png",
  },
  {
    id: 3,
    name: "Agricultural Bureau",
    logo: "../../../src/assets/images/partnerWithUs/agricultural.jpg",
  },
  {
    id: 4,
    name: "Awash Bank",
    logo: "../../../src/assets/images/partnerWithUs/AwashBank.jpg",
  },
  {
    id: 5,
    name: "ECSU",
    logo: "../../../src/assets/images/partnerWithUs/Ecsu.png",
  },
  {
    id: 6,
    name: "GIZ",
    logo: "../../../src/assets/images/partnerWithUs/GIZ.jpg",
  },
  {
    id: 7,
    name: "Mercy Corps",
    logo: "../../../src/assets/images/partnerWithUs/mercy.jpg",
  },
];

const services = [
  {
    id: 1,
    title: "Agricultural Equipment",
    description:
      "High-quality farming machinery and tools for modern agriculture",
    image: "../../../src/assets/images/agricultural-tractor.jpg",
  },
  {
    id: 2,
    title: "Industrial Machines",
    description: "Wide range of machinery for various industrial applications",
    image: "../../../src/assets/images/industrial.png",
  },
  {
    id: 3,
    title: "Grain Mills & Accessories",
    description:
      "Complete grain milling solutions with all necessary components",
    image: "../../../src/assets/images/grain.png",
  },
  {
    id: 4,
    title: "Furniture Supply",
    description: "Premium local and imported furniture for all needs",
    image: "../../../src/assets/images/fur.png",
  },
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="import-export-home">
      {/* Media Coverage Section */}
      <section className="media-coverage-section">
        <div className="section-header">
          <h2 className="services-heading">Featured Media Coverage</h2>
          <p className="section-subtitle">
            See how we're making an impact in global trade
          </p>
        </div>

        <div className="featured-video-container">
          <div className="featured-video">
            <div className="video-thumbnail-wrapper" onClick={openModal}>
              <img
                src="../../../src/assets/images/partnerWithUs/waterMinster.jpeg"
                alt="Video thumbnail"
                className="video-thumbnail"
              />
              <div className="video-overlay">
                <FontAwesomeIcon icon={faCirclePlay} className="play-icon" />
              </div>
            </div>

            <div className="video-info">
              <h3>Our Feature on Global Trade Network</h3>
              <p className="video-description">
                Watch our recent interview about revolutionizing import/export
                processes
              </p>
              <Link to="/media" className="view-more-link">
                <span>View all media coverage</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for full-screen video */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <video controls autoPlay className="modal-video">
              <source
                src="../../../src/assets/videos/Henok.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <button className="modal-close" onClick={closeModal}>
              ✖
            </button>
          </div>
        </div>
      )}

      <section className="services-section">
        <h2 className="services-heading">What We Offer</h2>
        <p className="services-subtitle">
          Reliable solutions for every supply need
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="icon-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image-icon"
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <h2 className="services-heading-partners">
          <FontAwesomeIcon icon={faHandshake} /> Our Trusted Partners
        </h2>
        <Swiper
          modules={[Autoplay, EffectCoverflow]} // removed Pagination here
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          className="partners-slider"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <Link to="/testimonials" className="partner-link">
                <div className="partner-card">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo"
                    loading="lazy"
                  />
                  <span className="partner-name">{partner.name}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to experience our quality products?</h2>

        <Link to="/contact">
          <button className="cta-button">Contact Us</button>
        </Link>
      </section>
    </div>
  );
}

import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';
import cont from "../../assets/images/coverPage.jpg";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.webp";
import img3 from "../../assets/images/img3.png";
function CustomCarousel() {
  return (
    <div className="modern-carousel-container">
      <Carousel 
        interval={4000} 
        controls={true} 
        indicators={true} 
        fade={true}
        pause={false}
      >
        {[cont, img1, img2, img3].map((image, index) => (
          <Carousel.Item key={index} className="carousel-item-wrapper">
            <div className="image-overlay"></div>
            <img 
              className="d-block w-100 carousel-image" 
              src={image} 
              alt={`Slide ${index + 1}`} 
              loading="lazy"
            />
            <Carousel.Caption className="carousel-caption-content">
              <div className="caption-inner">
                <div className="caption-text">
                  {/* <span className="welcome-text">Welcome to</span> */}
                  <span className="company-name">HAF Import & Supply Trade</span>
                  <span className="company-name">ሀፍ አስመጪ እና አቅራቢ ንግድ ስራ</span>
                  <p className="motto">(Exclusive Distributor To Lifestraw Products  In Ethiopia, Djibouti & Somaliland)</p>
                </div>
                {/* <button className="carousel-cta">
                  Explore Our Services <FontAwesomeIcon icon={faArrowRight} />
                </button> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
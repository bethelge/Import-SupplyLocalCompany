// src/components/Slider.jsx
import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  margin: 40px 0;
  position: relative;

  .slick-slide > div {
    padding: 0 15px;
  }

  .slick-dots {
    bottom: -35px;

    li button:before {
      color: #38b2ac;
      font-size: 10px;
    }

    li.slick-active button:before {
      color: #4299e1;
    }
  }

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #38b2ac 0%, #4299e1 100%);
    border-radius: 50%;
    z-index: 1;
    transition: all 0.12s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    &::before {
      color: white;
      font-size: 20px;
    }
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }
`;

function SliderComp({ products, showExplore = false }) {
  const settings = {
    dots: true,
    infinite: products.length > 3,
    slidesToShow: Math.min(products.length, 3),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    speed: 250,
  };

  return (
    <Wrapper className="category-section">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard {...product} showExplore={showExplore} />
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
}

export default SliderComp;

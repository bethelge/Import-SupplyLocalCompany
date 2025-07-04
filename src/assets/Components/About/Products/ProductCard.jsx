// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ProductCard({ image, title, description, exploreImage, showExplore }) {
  return (
    <Card className="product-card gradient-border">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      {showExplore && (
        <Link
          to={`/image/${title.toLowerCase().replace(/\s+/g, "-")}`}
          state={{ imageUrls: exploreImage }}
        >
          Explore
        </Link>
      )}
    </Card>
  );
}

export default ProductCard;

const Card = styled.div`
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 100, 150, 0.1);
  transition: all 0.12s ease-in-out;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #38b2ac, #4299e1);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    transition: transform 0.12s ease-in-out;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 1.3rem;
    margin: 10px 0;
    color: #2a6f97;
    position: relative;
    padding-bottom: 10px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 2px;
      background: linear-gradient(90deg, #38b2ac, #4299e1);
    }
  }

  p {
    font-size: 1rem;
    color: #4a5568;
    margin-bottom: 20px;
    flex-grow: 1;
  }

  a {
    display: inline-block;
    margin-top: auto;
    background: linear-gradient(135deg, #38b2ac 0%, #4299e1 100%);
    color: white;
    padding: 8px 20px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.1s ease-in-out;
    box-shadow: 0 4px 10px rgba(56, 178, 172, 0.3);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(56, 178, 172, 0.4);
    }
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 100, 150, 0.2);

    img {
      transform: scale(1.05);
    }
  }
`;

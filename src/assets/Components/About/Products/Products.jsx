import React, { useEffect } from "react";
import styled from "styled-components";
import SliderComp from "./Slider";

// --- Image Imports ---
import Community from "../../assets/images/Lifestraw Community/Community.jpg";
import exploreCommunity1 from "../../assets/images/explore1.jpg";
import exploreCommunity2 from "../../assets/images/explore2.jpg";
import exploreCommunity3 from "../../assets/images/explore3.jpg";
import exploreCommunity4 from "../../assets/images/explore4.jpg";
import exploreCommunity5 from "../../assets/images/fam1.jpg";
import exploreCommunity6 from "../../assets/images/fam2.jpg";
import exploreCommunity7 from "../../assets/images/bottle1.jpg";
import exploreCommunity8 from "../../assets/images/bottle2.jpg";
import exploreCommunity9 from "../../assets/images/bottle3.jpg";
import exploreCommunity10 from "../../assets/images/max1.jpg";
import exploreCommunity11 from "../../assets/images/max2.jpg";

import Community2 from "../../assets/images/Lifestraw Family 2.0/family.jpg";
import Community3 from "../../assets/images/Lifestraw Go bottle/1Lifestraw Go bottle.jpg";
import Community6 from "../../assets/images/Lifestraw MAX/1Lifestraw MAX.jpg";
import Community9 from "../../assets/images/Lifestraw Mission/Lifestraw Mission.jpg";
import Community11 from "../../assets/images/Lifestraw Personal/3Lifestraw Personal.jpg";

import Agricultural1 from "../../assets/images/Agricultural Inputs/Cocopeat.jpg";
import Agricultural2 from "../../assets/images/Agricultural Inputs/Peat-Moss.jpg";
import Agricultural3 from "../../assets/images/Agricultural Inputs/Seedling tray.jpg";

import lab1 from "../../assets/images/Laboratory Furniture and Equipment/fume hood.jpg";
import lab2 from "../../assets/images/Laboratory Furniture and Equipment/Laboratory Island bench.jpg";
import lab4 from "../../assets/images/Laboratory Furniture and Equipment/refrigerators.jpg";
import lab5 from "../../assets/images/Laboratory Furniture and Equipment/stool.jpg";

import industry1 from "../../assets/images/Industrial Machineries/Grain mill Machines.jpg";
import industry2 from "../../assets/images/Industrial Machineries/Ice making machines.jpg";
import industry3 from "../../assets/images/Industrial Machineries/Seed polishing machines.png";
import industry4 from "../../assets/images/Industrial Machineries/Seed processing machines.jpeg";
import industry5 from "../../assets/images/Industrial Machineries/Seed weighting and packing.jpg";
import industry6 from "../../assets/images/Industrial Machineries/Water meters.jpg";
import industry7 from "../../../src/assets/images/renov4.jpg";
import industry8 from "../../../src/assets/images/renov1.jpg";
import industry9 from "../../../src/assets/images/renov2.jpg";
import industry10 from "../../../src/assets/images/reenov3.jpg";

import placeholderImage from "../../assets/images/Industrial Machineries/Water meters.jpg";


// --- Data Arrays ---
const waterPurification = [
  {
    image: Community,
    title: "Community Water Filter",
    exploreImage: [exploreCommunity3, exploreCommunity4],
    description:
      "Provides clean water for large groups (up to 100 people). Removes 99.9999% of bacteria and parasites.",
  },
  {
    image: Community2,
    title: "Family Water Purifier",
    exploreImage: [exploreCommunity5, exploreCommunity6],
    description: "Compact system perfect for households. Filters up to 18,000 liters.",
  },
  {
    image: Community3,
    title: "Lifestraw Go Bottle",
    exploreImage: [exploreCommunity7, exploreCommunity8, exploreCommunity9],
    description: "Portable water filtration bottle. Perfect for travel.",
  },
  {
    image: Community6,
    title: "Lifestraw Max",
    exploreImage: [exploreCommunity10, exploreCommunity11],
    description: "Advanced filtration removes heavy metals and microplastics.",
  },
  {
    image: Community9,
    title: "Lifestraw Mission",
    exploreImage: [Community9],
    description: "High-volume purifier. Filters up to 100,000 liters.",
  },
  {
    image: Community11,
    title: "Personal Water Filter",
    exploreImage: [exploreCommunity1, exploreCommunity2],
    description: "Ultralight personal straw filter. Perfect for emergency kits.",
  },
];

const agriculturalInputs = [
  { image: Agricultural1, title: "Cocopeat", description: "Organic coconut coir." },
  { image: Agricultural2, title: "Peat Moss", description: "Soil conditioner." },
  { image: Agricultural3, title: "Seedling Trays", description: "128-cell durable trays." },
];

const labFurniture = [
  { image: lab1, title: "Fume Hood", description: "Chemical-resistant, ventilated." },
  { image: lab2, title: "Island Bench", description: "Central workbench, epoxy top." },
  { image: lab4, title: "Refrigerator", description: "Medical-grade, monitored." },
  { image: lab5, title: "Lab Stools", description: "Adjustable with backrest." },
];

const industrialMachinery = [
  { image: industry1, title: "Grain Mill Machine", description: "500kg/hr milling capacity." },
  { image: industry2, title: "Ice Making Machine", description: "100kg/day commercial unit." },
  { image: industry3, title: "Seed Polisher", description: "200kg/hr polishing machine." },
  { image: industry4, title: "Seed Processing Line", description: "Custom cleaning & grading." },
  { image: industry5, title: "Weighing & Packing", description: "Automated for grains/seeds." },
  { image: industry6, title: "Water Meters", description: "Digital display, multi-size." },
];

const renovation = [
  {
    image: industry8,
    title: "Lab Renovation Services",
    exploreImage: [industry8],
    description: "Custom lab design and installation services.",
  },
  {
    image: industry9,
    title: "Lab Renovation Services",
    exploreImage: [industry9],
    description: "Custom lab design and installation services.",
  },
  {
    image: industry10,
    title: "Lab Renovation Services",
    exploreImage: [industry10],
    description: "Custom lab design and installation services.",
  },
  {
    image: industry7 ,
    title: "Lab Renovation Services",
    exploreImage: [industry7 ],
    description: "Custom lab design and installation services.",
  },
];

// --- Component ---
function Products() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".category-section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <h1>Premium Import & Supply Solutions</h1>

      <div className="category-section">
        <CategoryTitle>Water Purification</CategoryTitle>
        <SliderComp products={waterPurification} showExplore />
      </div>

      <div className="category-section">
        <CategoryTitle>Agricultural Inputs</CategoryTitle>
        <SliderComp products={agriculturalInputs} />
      </div>

      <div className="category-section">
        <CategoryTitle>Laboratory Furniture & Equipment</CategoryTitle>
        <SliderComp products={labFurniture} />
      </div>

      <div className="category-section">
        <CategoryTitle>Industrial Machinery</CategoryTitle>
        <SliderComp products={industrialMachinery} />
      </div>

      <div className="category-section">
        <CategoryTitle>Renovation Services</CategoryTitle>
        <SliderComp products={renovation}  />
      </div>
    </Container>
  );
}

export default Products;

// --- Styled Components ---
const Container = styled.div`
  width: 95%;
  margin: auto;
  padding: 50px 0;
  background: linear-gradient(135deg, #f5fdfa 0%, #f0f8ff 100%);

  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #2a6f97;
    position: relative;
    padding-bottom: 15px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, #38b2ac, #4299e1);
      border-radius: 2px;
    }
  }

  .category-section {
    margin: 60px 0;
    // padding: 30px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 120, 180, 0.1);
    transition: all 0.15s ease-in-out;

    &:hover {
      box-shadow: 0 15px 35px rgba(0, 120, 180, 0.15);
      transform: translateY(-5px);
    }

    &.animate {
      animation: fadeInUp 0.25s ease-out forwards;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  color: #000000;
  margin: 30px 0 20px;
  padding-left: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 70%;
    width: 5px;
    background: linear-gradient(to bottom, #38b2ac, #4299e1);
    border-radius: 3px;
  }
`;

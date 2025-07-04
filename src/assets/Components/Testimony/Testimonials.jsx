import React from "react";
import "./testimonal.css";
import logo1 from "../../assets/images/partnerWithUs/GIZ.jpg";
import logo2 from "../../assets/images/partnerWithUs/samera.jpg"
import logo3 from "../../assets/images/partnerWithUs/Addis.png"
import logo4 from "../../assets/images/partnerWithUs/Ministry.png"
import logo5 from "../../assets/images/partnerWithUs/SNV.jpg"
import logo6 from "../../assets/images/partnerWithUs/waterMinster.jpeg"
import { Link } from "react-router-dom";

const TestimonialsPage = () => {
  // Sample testimonial data (replace with your actual data)
  const testimonials = [
    {
      id: 1,
      logo: logo1,
      description:
        "We hereby confirm that HAF Import and supply Trade has won order from us and delivered as per the requirement and in timely manner ",
      //   author: "John Smith",
      //   position: "CEO, AquaPure Solutions",
      rating: 5,
    },
    {
      id: 2,
      logo: logo2,
      description:
        "We wholeheartedly recommend HAF Import and Supply Trade for any organization in need of high-quality cocopeat and seedling trays. Their commitment to quality and customer satisfaction is evident.",
    //   author: "Maria Garcia",
    //   position: "Farm Manager, GreenFields Agribusiness",
      rating: 5,
    },
   
    {
        id: 3,
        logo: logo3,
        description:
          "The University is satisfies by the quality of the product supplied and we then the moment of the HAF Import and Supply Trade for their commitment.",
      //   author: "Maria Garcia",
      //   position: "Farm Manager, GreenFields Agribusiness",
        rating: 5,
      },
      {
        id: 4,
        logo: logo4,
        description:
          "We extremely satisfied with the service provided by HAF Import and Supply Trade and would confidently recommend your company for future projects. Thank you for your dedication and the excellent work you have accomplished.",
      //   author: "Maria Garcia",
      //   position: "Farm Manager, GreenFields Agribusiness",
        rating: 5,
      },
      {
        id: 5,
        logo: logo5,
        description:
          "We Happily recommend HAF Import and Supply Trade for anyone looking to invest in reliable packing machinery. Their onion seed packing machine has not only enhanced our packing operations but has also contributed significantly to our overall productivity.",
      //   author: "Maria Garcia",
      //   position: "Farm Manager, GreenFields Agribusiness",
        rating: 5,
      },
      {
        id: 6,
        logo: logo6,
        description:
          "We highly recommend HAF Import and Supply Trade for any organization seeking reliable laboratory furniture and outstanding service. Their commitment to quality and customer satisfaction is commendable. ",
      //   author: "Maria Garcia",
      //   position: "Farm Manager, GreenFields Agribusiness",
        rating: 5,
      },

  ];

  return (
    <div className="testimonials-page">
      <section className="testimonials-hero">
        <h1>Trusted by Industry Leaders</h1>
        <p>Hear what our valued partners say about our products and services</p>
      </section>

      <div className="testimonials-container">
        
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div
              style={{
                height: "150px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px 8px 0 0",
                marginBottom: "20px",
              }}
            >
              <img
                src={testimonial.logo}
                alt="Client logo"
                style={{
                  maxHeight: "120px",
                  maxWidth: "100%",
                  objectFit: "contain",
                  filter: "none",
                }}
              />
            </div>
            <div className="testimonial-content">
              <p>"{testimonial.description}"</p>
              {testimonial.rating && (
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < testimonial.rating ? "star-filled" : "star-empty"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="call-to-action">
        <h2>Ready to experience our quality products?</h2>

        <Link to="/contact" className="cta-link">
                <button className="cta-button">Contact Us Today</button>
                </Link>
      </section>
    </div>
    

  );
  
};



export default TestimonialsPage;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductCard from "../Scripts/ProductCard";

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <section className='cardSlider mt-5'>
      <Container>
        <Row>
          <Col>
            <Slider {...settings}>
              {ProductCard.map((item, index) => (
                <div className='cardSlider_body' key={index}>
                  <div
                    className={item.bgColor + " cardSlider_body_inner d-flex"}
                  >
                    <div className='textFile '>
                      <h4>{item.title}</h4>
                      <Link to={"/"}>{item.btn}</Link>
                    </div>
                    <div className='imgFile '>
                      <img className='img-fluid' src={item.img} alt='' />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CardSlider;

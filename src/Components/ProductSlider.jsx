import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import productCategory from "../Scripts/ProductCategory";

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 12,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <section className='productSlider'>
      <Container fluid>
        <Row>
          <Col>
            <Slider {...settings}>
              {productCategory.map((item, index) => (
                <div key={index} className='slider_body'>
                  <div>
                    <div className='img_file'>
                      <img className='img-fluid' src={item.img} alt='' />
                    </div>
                    <div className='textFile d-flex justify-content-center align-items-center'>
                      <p>{item.title}</p>
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

export default ProductSlider;

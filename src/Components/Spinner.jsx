import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const Spinner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    pauseOnHover: true,
  };
  const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0,
  };
  return (
    <section className='spinner'>
      <Container>
        <Row className='upSection'>
          <Col>
            <h5>Deco Collection 50% OFF</h5>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced for those. Sections 1.10.32 and 1.10.33 from “de
              Finibus Bonorum et Malorum
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Row className='downSection'>
          <Col>
            <Slider {...settings}>
              {[...Array(6)].map((item, index) => (
                <div className='spinner_body' key={index}>
                  <div className='outerRound'>
                    <div className='innerRound'>
                      <span>Fast Food</span>
                    </div>
                    <div className='imgFile'>
                      <div className='img'>
                        <img
                          src='https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png'
                          alt=''
                        />
                        <div className='tooltip'>
                          <div className='imgFile'>
                            <img
                              className='img-fluid'
                              src='https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png'
                              alt=''
                            />
                          </div>
                          <div className='textFile'>
                            <p className='text-white  fw-bolder mb-0'>
                              Fast Food
                            </p>
                            <span className='mt-0 '>
                              Lorem ipsum dolor sit amet
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='img'>
                        <img
                          src='https://d4p17acsd5wyj.cloudfront.net/shortcuts/uber_grocery.png'
                          alt=''
                        />
                      </div>
                      <div className='img'>
                        <img
                          src='https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png'
                          alt=''
                        />
                      </div>
                      <div className='img'>
                        <img
                          src='https://d4p17acsd5wyj.cloudfront.net/shortcuts/top_eats.png'
                          alt=''
                        />
                      </div>
                      <div className='img'>
                        <img
                          src='https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/fastfood.png'
                          alt=''
                        />
                      </div>
                      <div className='img'>
                        <img
                          src='https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/pizza.png'
                          alt=''
                        />
                      </div>
                      <div className='img'>
                        <img
                          src='https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/indian.png'
                          alt=''
                        />
                      </div>
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

export default Spinner;

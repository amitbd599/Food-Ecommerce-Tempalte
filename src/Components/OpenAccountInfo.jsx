import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaAngleDoubleDown,
  FaArrowRight,
  FaCheck,
  FaCogs,
  FaEnvira,
  FaFistRaised,
  FaHashtag,
  FaLevelDownAlt,
  FaOutdent,
  FaUserCog,
} from "react-icons/fa";

const OpenAccountInfo = () => {
  return (
    <section className='openAccountInfo'>
      <Container>
        <Row className='upSection'>
          <Col>
            <h3>Heißhunger? Hole es dir</h3>
            <p>
              Suche nach einem Restaurant, einer Küche oder einem Gericht. Füge
              Artikel aus einem Restaurant oder Geschäft hinzu, um einen neuen
              Warenkorb zu erstellen.
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Row className='downSection'>
          <Col lg={4} className='leftSide'>
            <div className='wrapper'>
              <div>
                <div className='headingText'>
                  <div className='d-flex align-items-end'>
                    <h3>Open Your Account</h3>
                    <span className='offerBtn'>Hot Offer</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eaque dolorem illum ex quidem voluptates cupiditate.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, ex?
                  </p>
                </div>
                <div className='seasonLife'>
                  <span>SEASON LIFESTYLE</span>
                  <h3>WONDERFUL LONG WEEKEND Life Style</h3>
                </div>
                <div>
                  <span className='infoBtn'>More Info</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8} className='rightSide ps-5'>
            <div>
              <Row>
                <Col>
                  <div className='d-flex justify-content-between'>
                    <div className='innerCard Purple d-flex justify-content-center'>
                      <div className='text-center'>
                        <span className='d-flex justify-content-center'>
                          <FaEnvira />
                        </span>
                        <h2>Go to the Google Account sign in page</h2>
                      </div>
                    </div>
                    <div className='arrow d-flex align-items-center'>
                      <span>
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className='d-flex justify-content-between'>
                    <div className='innerCard Pink d-flex justify-content-center'>
                      <div className='text-center'>
                        <span className='d-flex justify-content-center'>
                          <FaFistRaised />
                        </span>
                        <h2>Click The Create A New Account Button</h2>
                      </div>
                    </div>
                    <div className='arrow d-flex align-items-center'>
                      <span>
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className='d-flex justify-content-between'>
                    <div className='innerCard Green d-flex justify-content-center'>
                      <div className='text-center'>
                        <span className='d-flex justify-content-center'>
                          <FaOutdent />
                        </span>
                        <h2>Enter name In the "Username" field a username</h2>
                      </div>
                    </div>
                    <div className='arrow d-flex align-items-center'>
                      <span>
                        <FaLevelDownAlt />
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className='mt-4'>
              <Row>
                <Col>
                  <div className='d-flex justify-content-between'>
                    <div className='innerCard Orange d-flex justify-content-center'>
                      <div className='text-center'>
                        <span className='d-flex justify-content-center'>
                          <FaCogs />
                        </span>
                        <h2>Enter Your Password and confirm password</h2>
                      </div>
                    </div>
                    <div className='arrow d-flex align-items-center'>
                      <span>
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className='d-flex justify-content-between'>
                    <div className='innerCard Cyan d-flex justify-content-center'>
                      <div className='text-center'>
                        <span className='d-flex justify-content-center'>
                          <FaHashtag />
                        </span>
                        <h2>Enter Your Valid Mobile Number Get OPT Code</h2>
                      </div>
                    </div>
                    <div className='arrow d-flex align-items-center'>
                      <span>
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className='d-flex justify-content-between'>
                    <div className='innerCard Violet d-flex justify-content-center'>
                      <div className='text-center'>
                        <span className='d-flex justify-content-center'>
                          <FaUserCog />
                        </span>
                        <h2>Use The Account You Created To Sign In To Gmail</h2>
                      </div>
                    </div>
                    <div className='arrow d-flex align-items-center'>
                      <span>
                        <FaCheck />
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OpenAccountInfo;

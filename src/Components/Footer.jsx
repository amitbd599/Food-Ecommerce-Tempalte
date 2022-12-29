import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaEnvelopeOpen,
  FaHeadphonesAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className='footer'>
      <Container>
        <Row>
          <Col lg={4} className='part_1'>
            <div>
              <div>
                <img src='/Assets/img/logo-white.svg' alt='' />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  sapiente illum maxime reprehenderit cumque aperiam numquam
                  facilis ut repellat suscipit.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} className='part_2'>
            <div>
              <div>
                <h2>CONTACT INFO</h2>
                <div>
                  <h4>ADDRESS:</h4>
                  <span>1234 Street Name, City, England</span>
                </div>
                <div>
                  <h4>EMAIL:</h4>
                  <span>mail@example.com</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={2} className='part_3'>
            <div>
              <div>
                <h2>CONTACT INFO</h2>
                <div>
                  <ul>
                    <li>
                      <a href='#'>About Us</a>
                    </li>
                    <li>
                      <a href='#'>All Product</a>
                    </li>
                    <li>
                      <a href='#'>My Account</a>
                    </li>
                    <li>
                      <a href='#'>Orders History</a>
                    </li>
                    <li>
                      <a href='#'>Advanced Search</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} className='part_4'>
            <div>
              <div>
                <h2>SAFE PAYMENTS</h2>
                <div className='mt-2'>
                  <span>
                    <FaCcPaypal />
                  </span>
                  <span>
                    <FaCcMastercard />
                  </span>
                  <span>
                    <FaCcStripe />
                  </span>
                  <span>
                    <FaCcVisa />
                  </span>
                </div>
                <div>
                  <div className='d-flex align-items-center mt-2'>
                    <span className='FaEnvelopeOpen'>
                      <FaHeadphonesAlt />
                    </span>
                    <span className='text-white'>
                      (800) 8001-8588, (0600) 874 548
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;

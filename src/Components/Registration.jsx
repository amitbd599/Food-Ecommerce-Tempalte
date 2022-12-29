import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Registration = () => {
  return (
    <section className='registration'>
      <Container>
        <Row className='login_body'>
          <Col lg={6}>
            <div className='imgFile'>
              <img
                className='img-fluid'
                src='https://www.foodiesfeed.com/wp-content/uploads/2021/01/pumpkin-soup.jpg'
                alt=''
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className='input_body'>
              <div>
                <div className='headerText'>
                  <h2>Create A New Account</h2>
                </div>
                <div className='inputField'>
                  <div>
                    <label htmlFor='fastName' className='d-block'>
                      Fast Name:
                    </label>
                    <input type='text' id='fastName' className='d-block' />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor='lastName' className='d-block'>
                      Last Name:
                    </label>
                    <input type='text' id='lastName' className='d-block' />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor='zipCode' className='d-block'>
                      Zip Code:
                    </label>
                    <input type='text' id='zipCode' className='d-block' />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor='city' className='d-block'>
                      City:
                    </label>
                    <input type='text' id='city' className='d-block' />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor='phone' className='d-block'>
                      Phone Number:
                    </label>
                    <input type='text' id='phone' className='d-block' />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor='image' className='d-block'>
                      Your Image:
                    </label>
                    <input type='file' id='image' className='d-block' />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor='password' className='d-block'>
                      Password:
                    </label>
                    <input type='password' id='password' className='d-block' />
                  </div>
                  <div className='mt-2 d-block'>
                    <span className='loginBtn'>Login</span>
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

export default Registration;

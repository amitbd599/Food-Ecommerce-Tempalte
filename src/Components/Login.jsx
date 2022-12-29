import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  return (
    <section className='login'>
      <Container>
        <Row className='login_body'>
          <Col lg={6}>
            <div className='imgFile'>
              <img
                className='img-fluid'
                src='https://res.cloudinary.com/amitjs/image/upload/v1672317827/Other/Rectangle_1_afxkui.png'
                alt=''
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className='input_body'>
              <div>
                <div className='headerText'>
                  <h2>Enter Your Credential To Login</h2>
                </div>
                <div className='inputField'>
                  <div>
                    <label htmlFor='email' className='d-block'>
                      Email Id:
                    </label>
                    <input type='email' id='email' className='d-block' />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor='userId' className='d-block'>
                      User Id:
                    </label>
                    <input type='text' id='userId' className='d-block' />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor='password' className='d-block'>
                      Password:
                    </label>
                    <input type='password' id='password' className='d-block' />
                  </div>
                  <div className='mt-3 d-block'>
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

export default Login;

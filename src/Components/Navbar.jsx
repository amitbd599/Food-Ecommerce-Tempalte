import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaAngleDown,
  FaBars,
  FaCartPlus,
  FaMapMarkerAlt,
  FaUserCheck,
  FaUserCog,
} from "react-icons/fa";
import { BsSearch, BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const sidebarControl = () => {
    setSidebar(!sidebar);
  };
  return (
    <header>
      <Container fluid>
        <Row>
          <Col>
            <div className='d-flex align-items-center justify-content-around'>
              <div className='d-flex align-items-center'>
                {/* Logo Section */}
                <div className='logo'>
                  <Link to={"/"}>
                    <img
                      className='img-fluid'
                      src='/Assets/img/logo.svg'
                      alt=''
                    />
                  </Link>
                </div>
                {/* Sidebar Section */}
                <div className='sidebar position-relative'>
                  <div className='iconBox'>
                    <FaBars className='open' onClick={sidebarControl} />
                  </div>
                  <div
                    className={
                      sidebar
                        ? "sidebarBody position-fixed active"
                        : "sidebarBody position-fixed"
                    }
                  >
                    <div className='sidebarBody__inner position-relative'>
                      <div className='bodyCase'>
                        <div className='logoSection'>
                          <Link to={"/"}>
                            <img
                              className='img-fluid'
                              src='/Assets/img/logo.svg'
                              alt=''
                            />
                          </Link>
                        </div>
                        <nav>
                          <ul>
                            <li>
                              <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Categories</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Products</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Pages</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Blog</Link>
                            </li>
                            <li>
                              <Link to={"/"}>About Us</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Special Offer!</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Buy Porto!H</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Blog</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Contact</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Cart</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Registration</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Login</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className='iconBox position-absolute '>
                        <BsXLg className='close' onClick={sidebarControl} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center'>
                <div className='zipCode'>
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <span className='ps-2'>Berlin • Jetzt</span>
                </div>
                <div className='search d-flex align-items-center'>
                  <span>
                    <BsSearch />
                  </span>{" "}
                  <span className='ps-2'>Search Insider</span>
                </div>
                <div className='dropdownItems position-relative'>
                  <div>
                    <div className='navItem d-flex align-items-center'>
                      <span>All Food</span>
                      <span className='ps-2'>
                        <FaAngleDown />
                      </span>
                    </div>
                    <div className='dropdownItems_data'>
                      <ul className='dropdownItems_inner'>
                        <li>
                          <a href='#'>Aktionen</a>
                        </li>
                        <li>
                          <a href='#'>Lebensmittel</a>
                        </li>
                        <li>
                          <a href='#'>Convenience</a>
                        </li>
                        <li>
                          <a href='#'>Alkohol</a>
                        </li>
                        <li>
                          <a href='#'>Einzelhandel</a>
                        </li>
                        <li>
                          <a href='#'>Amerikanisch</a>
                        </li>
                        <li>
                          <a href='#'>Fast Food</a>
                        </li>
                        <li>
                          <a href='#'>Pizza</a>
                        </li>
                        <li>
                          <a href='#'>Italienisch</a>
                        </li>
                        <li>
                          <a href='#'>Indisch</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='blog'>
                  <span>Blog</span>
                </div>
              </div>
              <div className='d-flex align-items-center'>
                <div className='registration d-flex align-items-center'>
                  <span>
                    <FaUserCog />
                  </span>
                  <span className='ps-1'>Registration</span>
                </div>
                <div className='login d-flex align-items-center'>
                  <span>
                    <FaUserCheck />
                  </span>
                  <span className='ps-1'>Login</span>
                </div>
                <div className='cart'>
                  <span>
                    <FaCartPlus />
                  </span>
                  <div className='badgeText'>
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Navbar;

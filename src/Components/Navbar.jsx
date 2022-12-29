import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaAngleDown,
  FaBars,
  FaCartPlus,
  FaMapMarkerAlt,
  FaSearch,
  FaUserCheck,
  FaUserCog,
} from "react-icons/fa";
import { BsArrowRightShort, BsSearch, BsXLg } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import NavLinkData from "../Scripts/NavLinkData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [cart, SetCart] = useState(false);
  const [search, SetSearch] = useState(false);
  const sidebarControl = () => {
    setSidebar(!sidebar);
  };
  const cartControl = () => {
    SetCart(!cart);
  };
  const searchControl = () => {
    SetSearch(!search);
  };
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <div className='d-flex align-items-center justify-content-between'>
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
                            {NavLinkData.map((item, index) => (
                              <li key={index}>
                                <NavLink
                                  className={(navData) =>
                                    navData.isActive && "active"
                                  }
                                  to={item.link}
                                >
                                  {item.title}
                                </NavLink>
                              </li>
                            ))}
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
              {/* Zip Code & Search Section */}
              <div className='d-flex align-items-center'>
                <div className='zipCode'>
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <span className='ps-2'>Berlin • Jetzt</span>
                </div>
                <div className='search d-flex align-items-center'>
                  <div onClick={searchControl}>
                    <span>
                      <BsSearch />
                    </span>{" "}
                    <span className='ps-2'>Search Insider</span>
                  </div>
                  <div
                    className={search ? "searchPopUp active" : "searchPopUp"}
                  >
                    <div className=''>
                      <div className='search_input position-relative d-flex justify-content-around '>
                        <div className='logo mt-2' onClick={searchControl}>
                          <Link to={"/"}>
                            <img
                              className='img-fluid'
                              src='/Assets/img/logo.svg'
                              alt=''
                            />
                          </Link>
                        </div>
                        <div className='search_inner position-relative'>
                          <div className='searchIcon_body'>
                            <span className='searchIcon position-absolute'>
                              <FaSearch />
                            </span>
                            <input
                              type='search'
                              placeholder='Search Location or Zip Code'
                            />
                            <span
                              className='closeIcon position-absolute'
                              onClick={searchControl}
                            >
                              <BsXLg />
                            </span>
                          </div>
                          <div className='recentSearchIntro'>
                            <div className='recentSearchIntro_body'>
                              <h2>Recent Search Insider</h2>
                              <div>
                                <Tabs>
                                  <TabList>
                                    <Tab>Recent Search</Tab>
                                    <Tab>Restaurants</Tab>
                                    <Tab>Lebensmittel</Tab>
                                    <Tab>Convenience</Tab>
                                    <Tab>Alkohol</Tab>
                                  </TabList>

                                  <TabPanel>
                                    <div className='mt-3 searchInsider'>
                                      <div>
                                        <ul>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Pizza</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Fast Food</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Sushi</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Kebab</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Neueste Angebote</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </TabPanel>
                                  <TabPanel>
                                    <div className='mt-3 searchInsider'>
                                      <div>
                                        <ul>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Sushi</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Kebab</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Neueste Angebote</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </TabPanel>
                                  <TabPanel>
                                    <div className='mt-3 searchInsider'>
                                      <div>
                                        <ul>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Fast Food</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Sushi</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Kebab</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Neueste Angebote</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </TabPanel>
                                  <TabPanel>
                                    <div className='mt-3 searchInsider'>
                                      <div>
                                        <ul>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Sushi</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Kebab</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Neueste Angebote</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </TabPanel>
                                  <TabPanel>
                                    <div className='mt-3 searchInsider'>
                                      <div>
                                        <ul>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Fast Food</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Sushi</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Kebab</span>
                                          </li>
                                          <li>
                                            <span className='pe-2'>
                                              <FaSearch />
                                            </span>
                                            <span>Neueste Angebote</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </TabPanel>
                                </Tabs>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
              {/* Registration & Login Section */}
              <div className='d-flex align-items-center'>
                <Link to={"/registration"}>
                  <div className='registration d-flex align-items-center'>
                    <span>
                      <FaUserCog />
                    </span>
                    <span className='ps-1'>Registration</span>
                  </div>
                </Link>

                <Link to={"/login"}>
                  <div className='login d-flex align-items-center'>
                    <span>
                      <FaUserCheck />
                    </span>
                    <span className='ps-1'>Login</span>
                  </div>
                </Link>
                <div className='cart position-relative'>
                  <div className='cartIcon_open' onClick={cartControl}>
                    <span>
                      <FaCartPlus />
                    </span>
                    <div className='badgeText'>
                      <span>3</span>
                    </div>
                  </div>
                  <div className={cart ? "cartBody active" : "cartBody"}>
                    <div className='cartBody_inner'>
                      <div className='heading d-flex justify-content-between align-items-center'>
                        <div className='headingText'>
                          <span>SHOPPING CART</span>
                        </div>
                        <div
                          className='closeIcon d-flex justify-content-between align-items-center'
                          onClick={cartControl}
                        >
                          <span>Close</span>
                          <span>
                            <BsArrowRightShort />
                          </span>
                        </div>
                      </div>
                      <div className='mt-4'>
                        <div className='cartData'>
                          <div className='d-flex justify-content-between '>
                            <div className='titleIntro pe-3'>
                              <h4>
                                Baccarat Rouge 540 70ml Men's and Women's
                                Perfume . . .
                              </h4>
                              <span>1 x 150$</span>
                            </div>
                            <div className='imgFile position-relative'>
                              <img
                                className='img-fluid'
                                src='https://res.cloudinary.com/amitjs/image/upload/v1672243515/Other/korean-removebg-preview_lud2pf.png'
                                alt=''
                              />
                              <span className='position-absolute itemClose'>
                                <BsXLg />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className='cartData'>
                          <div className='d-flex justify-content-between '>
                            <div className='titleIntro pe-3'>
                              <h4>
                                Baccarat Rouge 540 70ml Men's and Women's
                                Perfume . . .
                              </h4>
                              <span>1 x 150$</span>
                            </div>
                            <div className='imgFile position-relative'>
                              <img
                                className='img-fluid'
                                src='https://res.cloudinary.com/amitjs/image/upload/v1672243428/Other/fastfood-removebg-preview_dkk59r.png'
                                alt=''
                              />
                              <span className='position-absolute itemClose'>
                                <BsXLg />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className='cartData'>
                          <div className='d-flex justify-content-between '>
                            <div className='titleIntro pe-3'>
                              <h4>
                                Baccarat Rouge 540 70ml Men's and Women's
                                Perfume . . .
                              </h4>
                              <span>1 x 150$</span>
                            </div>
                            <div className='imgFile position-relative'>
                              <img
                                className='img-fluid'
                                src='https://res.cloudinary.com/amitjs/image/upload/v1672241752/Other/convenience_spxrqq.png'
                                alt=''
                              />
                              <span className='position-absolute itemClose'>
                                <BsXLg />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-4'>
                        <div className='subTotal d-flex justify-content-between align-items-center'>
                          <h2>Subtotal:</h2>
                          <h2>360$</h2>
                        </div>
                      </div>
                      <div className='mt-4'>
                        <div className='checkBtn d-flex justify-content-between align-items-center'>
                          <div>
                            <span>VIEW CART</span>
                          </div>
                          <div>
                            <span>CHECKOUT</span>
                          </div>
                        </div>
                      </div>
                    </div>
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

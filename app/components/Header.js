"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../globals.css';
import '../responsive.css';
import Navigation from './Navigation';



const Header = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open

  const toggleDropdown = (dropdownId) => {
    // Toggle the respective dropdown based on its ID
    if (openDropdown === dropdownId) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(dropdownId); // Open the clicked dropdown
    }
  };

  const courses = [
    { name: "Web Gains", link: "#" },
    { name: "Graphics Design", link: "#" },
    { name: "Development", link: "#" },
    { name: "Video Editing", link: "#" },
    { name: "Language", link: "#" },
  ];

  const categories = [
    {
      name: 'Web Gains',
      icon: 'fas fa-globe',
      url: 'https://www.ubcourse.com/home/courses?category=web-gains',
      subcategories: [
        { name: 'Freelancing', url: 'https://www.ubcourse.com/home/courses?category=freelancing' },
        { name: 'Ecommerce', url: 'https://www.ubcourse.com/home/courses?category=ecommerce' },
        { name: 'Affiliate Marketing', url: 'https://www.ubcourse.com/home/courses?category=affiliate-marketing' },
        { name: 'Online Education', url: 'https://www.ubcourse.com/home/courses?category=online-education' },
        { name: 'Content Creation', url: 'https://www.ubcourse.com/home/courses?category=content-creation' },
        { name: 'Remote Work', url: 'https://www.ubcourse.com/home/courses?category=remote-work' }
      ]
    },
    {
      name: 'Graphics Design',
      icon: 'fas fa-pencil-alt',
      url: 'https://www.ubcourse.com/home/courses?category=graphics-design',
      subcategories: [
        { name: 'Digital Design', url: 'https://www.ubcourse.com/home/courses?category=digital-design' },
        { name: 'Web Design', url: 'https://www.ubcourse.com/home/courses?category=web-design' },
        { name: 'UI Design', url: 'https://www.ubcourse.com/home/courses?category=ui-design' },
        { name: 'Illustration', url: 'https://www.ubcourse.com/home/courses?category=illustration' },
        { name: 'UX Design', url: 'https://www.ubcourse.com/home/courses?category=ux-design' },
        { name: 'Typographic Design', url: 'https://www.ubcourse.com/home/courses?category=typographic-design' },
        { name: 'Packaging Design', url: 'https://www.ubcourse.com/home/courses?category=packaging-design' }
      ]
    },
    {
      name: 'Development',
      icon: 'fas fa-desktop',
      url: 'https://www.ubcourse.com/home/courses?category=development',
      subcategories: [
        { name: 'Web Development', url: 'https://www.ubcourse.com/home/courses?category=web-development' }
      ]
    },
    {
      name: 'Video Editing',
      icon: 'fab fa-youtube',
      url: 'https://www.ubcourse.com/home/courses?category=video-editing',
      subcategories: []
    },
    {
      name: 'Language',
      icon: 'fas fa-language',
      url: 'https://www.ubcourse.com/home/courses?category=language',
      subcategories: []
    }
  ];


  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };


  const [navVisible, setnavVisible] = useState(false);

  const handleMobileNavClick = (e) => {
    e.preventDefault();
    setnavVisible(!navVisible);  // Toggle visibility state
  };

  const [angleVisible, setangleVisible] = useState(false);

  const angleClick = () => {
   
    setangleVisible(!angleVisible);  // Toggle visibility state
  };


  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      // Close the overlay if resizing back to desktop
    }
  };

  // Effect to listen for resize events
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Initial check when component mounts
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="menu-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light" style={{ display: "flex", flexWrap: "nowrap" }}>
              {/* Mobile Menu Trigger */}
              <ul className="mobile-header-buttons" onClick={handleMobileNavClick}>
                <li><Link href="#mobile-primary-nav" className="mobile-nav-trigger">Menu<span></span></Link></li>
              </ul>

              {/* Logo */}
              <Link href="https://upbright.lk/" className="navbar-brand">
                <img src="https://www.ubcourse.com/uploads/system/5ea4ddb5f5bea4359bae8a581b7ed829.png" alt="Logo" height={40} />
              </Link>

              {/* Main Navigation */}
              <div className="main-nav-wrap">
                <div className={`mobile-overlay ${navVisible ? 'is-visible moves out' : ''}`}></div>
                <ul className={`mobile-main-nav ${navVisible ? 'nav-is-visible' : ''}`}>
                  <div className="mobile-menu-helper-top"></div>
                  <li className="has-children">
                    <Link
                      href=""
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 550,
                        textTransform: 'uppercase',
                        color: 'black',
                        letterSpacing: '1px'
                      }}
                      className="selected"
                    >
                     
                      <span>Courses</span>
                      <span className="has-sub-category">
                        <i className="fas fa-angle-right" onClick={angleClick}></i>
                      </span>
                    </Link >

                    <ul className={`category corner-triangle top-left pb-0 ${angleVisible?``:`is hidden`}`}>
                      <li className="go-back" style={{fontSize: "16px", marginRight: "15px"}}>
                        <Link href="">
                          <i className="fas fa-angle-left"onClick={angleClick}></i>Menu
                        </Link >
                      </li>
                      {categories.map((category, index) => (
                        <li key={index} className={`has-children ${activeCategory === index ? 'is-active' : ''}`}>
                          <Link href="javascript:;" className="py-2" onClick={() => handleCategoryClick(index)}>
                            <span className="icon"><i className={category.icon}></i></span>
                            <span>{category.name}</span>
                            {category.subcategories?.length > 0 && ( // Add the safe navigation operator here
                              <span className="has-sub-category"><i className="fas fa-angle-right"></i></span>
                            )}
                          </Link >

                          {category.subcategories?.length > 0 && (
                            <ul className={`sub-category ${activeCategory === index ? '' : 'is-hidden'}`}>
                              <li className="go-back-menu"><Link href="#"><i className="fas fa-angle-left"onClick={angleClick}></i>Menu</Link ></li>
                              <li className="go-back">
                                <Link href={category.url}>
                                  <i className="fas fa-angle-left"onClick={() => handleCategoryClick(index)}></i>
                                  <span className="icon"><i className={category.icon}></i></span>
                                  {category.name}
                                </Link >
                              </li>
                              {category.subcategories.map((sub, subIndex) => (
                                <li key={subIndex}><Link href={sub.url}>{sub.name}</Link ></li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                      <li className="all-category-devided mb-0 p-0">
                        <Link href="https://www.ubcourse.com/home/courses" className="py-3">
                          <span className="icon"><i className="fa fa-align-justify" style={{ color: "black" }}></i></span>
                          <span>All courses</span>
                        </Link >
                      </li>
                    </ul>
                  </li>
                  {isMobile && (
                    <Navigation />
                  )}
                  <div className="mobile-menu-helper-bottom"></div>
                </ul>
              </div>
              {/* Search Box */}
              <form className="inline-form inline-forms" action="https://www.ubcourse.com/home/search" method="get" style={{ width: "100%" }}>
                <div className="input-group search-box mobile-search" style={{ marginBottom: "0px", marginLeft: "70px" }}>
                  <input type="text" name="query" className="form-control" placeholder="Search for courses" />
                  <div className="input-group-append">
                    <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                  </div>
                </div>
              </form>


              {/* Sign In Box */}
              <div style={{ width: "100%" }}></div>
              <span className="signin-box-move-desktop-helper"></span>
              {!isMobile && (
                <Navigation />
              )}
              {/* <!--sign-in-box end --> */}
              <div className="cart-box menu-icon-box web-view">
                <div className="icon ">
                  <Link className="mobile-search-trigger" href="#mobile-search"><i className="fa fa-search"></i><span></span></Link >
                </div>
              </div>
              <div className="cart-box menu-icon-box" id="cart_items">
                <div className="icon">
                  <Link href="https://www.ubcourse.com/home/shopping_cart"><i className="fas fa-shopping-cart"></i></Link >
                  <span className="number1">0</span>
                </div>


              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className={`category-section ${isVisible ? 'visible' : ''}`}>
        <div className="fix-width container-xl">
          <ul
            className="ul3 ml-0"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 0",
              alignItems: "center",
              gap: "50px",
              listStyle: "none",

            }}
          >
            <li
              className="category-item"
              style={{
                color: "#74767e",
                fontSize: "16px",
                fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                listStyle: "none",
              }}
            >
              <Link href="" id="">
                Web Gains
              </Link >
              <ul className="subcategories" style={{ listStyle: "none" }}>
                <li style={{ listStyle: "none" }}>
                  <Link
                    href=""
                    className="subcategory-link"
                    data-subcategory-id="19"
                    style={{
                      fontWeight: "600",
                      color: "#000",
                      fontSize: "16px",
                      fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                    }}
                  >
                    Freelancing
                  </Link >
                  <ul
                    style={{
                      paddingLeft: "initial",
                      display: "block",
                      marginBottom: "0",
                      paddingBottom: "0",
                      listStyle: "none",
                    }}
                  >
                    <li
                      style={{
                        paddingLeft: "initial",
                        display: "list-item",
                        marginBottom: "0",
                        paddingBottom: "0",
                        listStyle: "none",
                      }}
                    >
                      <span
                        style={{
                          color: "#74767e",
                          fontSize: "16px",
                          fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                        }}
                      >
                        <Link
                          href="https://www.ubcourse.com/home/course/fiverr/12"
                          style={{
                            color: "#74767e",
                            fontSize: "16px",
                            fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                          }}
                        >
                          Fiverr
                        </Link >
                      </span>
                    </li>
                    <li
                      style={{
                        paddingLeft: "initial",
                        display: "list-item",
                        marginBottom: "0",
                        paddingBottom: "0",
                        listStyle: "none",
                      }}
                    >
                      <span style={{ color: "#74767e", fontSize: "16px", fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                        <Link
                          href="https://www.ubcourse.com/home/course/sproutgigs/22"
                          style={{
                            color: "#74767e",
                            fontSize: "16px",
                            fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                          }}
                        >
                          SproutGigs
                        </Link >
                      </span>
                    </li>
                    <li
                      style={{
                        paddingLeft: "initial",
                        display: "list-item",
                        marginBottom: "0",
                        paddingBottom: "0",
                        listStyle: "none",
                      }}
                    >
                      <span
                        style={{
                          color: "#74767e",
                          fontSize: "16px",
                          fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                        }}
                      >
                        <Link
                          href="https://www.ubcourse.com/home/course/adsense-wordpress/24"
                          style={{
                            color: "#74767e",
                            fontSize: "16px",
                            fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                          }}
                        >
                          Adsense + WordPress
                        </Link >
                      </span>
                      <span
                        className="badge badge-pill badge-light"
                        style={{ color: "red", fontSize: "10px" }}
                      >
                        coming soon
                      </span>
                    </li>
                  </ul>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link
                    href=""
                    className="subcategory-link"
                    data-subcategory-id="20"
                    style={{
                      fontWeight: "600",
                      color: "#000",
                      fontSize: "16px",
                      fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                    }}
                  >
                    Ecommerce
                  </Link >
                  <ul
                    style={{
                      paddingLeft: "initial",
                      display: "block",
                      marginBottom: "0",
                      paddingBottom: "0",
                      listStyle: "none",
                    }}
                  >
                    <li
                      style={{
                        paddingLeft: "initial",
                        display: "list-item",
                        marginBottom: "0",
                        paddingBottom: "0",
                        listStyle: "none",
                      }}
                    >
                      <span
                        style={{
                          color: "#74767e",
                          fontSize: "16px",
                          fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                        }}
                      >
                        <Link
                          href="https://www.ubcourse.com/home/course/ebay/13"
                          style={{
                            color: "#74767e",
                            fontSize: "16px",
                            fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                          }}
                        >
                          eBay
                        </Link >
                      </span>
                    </li>
                    <li
                      style={{
                        paddingLeft: "initial",
                        display: "list-item",
                        marginBottom: "0",
                        paddingBottom: "0",
                        listStyle: "none",
                      }}
                    >
                      <span
                        style={{
                          color: "#74767e",
                          fontSize: "16px",
                          fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                        }}
                      >
                        <Link
                          href="https://www.ubcourse.com/home/course/daraz/20"
                          style={{
                            color: "#74767e",
                            fontSize: "16px",
                            fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                          }}
                        >
                          Daraz
                        </Link >
                      </span>
                    </li>
                  </ul>
                </li>

                {/* Add more subcategories similarly */}
                <li style={{ listStyle: 'none' }}>
                  <Link href="#" className="subcategory-link" data-subcategory-id="21" style={{ fontWeight: 600, color: '#000', fontSize: '16px', fontFamily: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    Affiliate Marketing
                  </Link>
                  <ul style={{ paddingLeft: 'initial', display: 'block', marginBottom: 0, paddingBottom: 0, listStyle: 'none' }}></ul>
                </li>
                <li style={{ listStyle: 'none' }}>
                  <Link href="#" className="subcategory-link" data-subcategory-id="22" style={{ fontWeight: 600, color: '#000', fontSize: '16px', fontFamily: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    Online Education
                  </Link>
                  <ul style={{ paddingLeft: 'initial', display: 'block', marginBottom: 0, paddingBottom: 0, listStyle: 'none' }}></ul>
                </li>
                <li style={{ listStyle: 'none' }}>
                  <Link href="#" className="subcategory-link" data-subcategory-id="23" style={{ fontWeight: 600, color: '#000', fontSize: '16px', fontFamily: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    Content Creation
                  </Link>
                  <ul style={{ paddingLeft: 'initial', display: 'block', marginBottom: 0, paddingBottom: 0, listStyle: 'none' }}></ul>
                </li>
                <li style={{ listStyle: 'none' }}>
                  <Link href="#" className="subcategory-link" data-subcategory-id="24" style={{ fontWeight: 600, color: '#000', fontSize: '16px', fontFamily: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    Remote Work
                  </Link>
                  <ul style={{ paddingLeft: 'initial', display: 'block', marginBottom: 0, paddingBottom: 0, listStyle: 'none' }}></ul>
                </li>
              </ul>
            </li>

            {/* Repeat similar structure for other categories */}

            <li className="category-item" style={{ color: '#74767e', fontSize: '16px', fontFamily: 'Macan,Helvetica Neue,Helvetica,Arial,sans-serif', listStyle: 'none' }}>
              <Link href="#">Graphics Design</Link>
              <ul className="subcategories" style={{ listStyle: 'none' }}>
                <li style={{ listStyle: 'none' }}>
                  <Link href="#" className="subcategory-link" data-subcategory-id="28" style={{ fontWeight: 600, color: '#000', fontSize: '16px', fontFamily: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    Digital Design
                  </Link>
                  <ul style={{ paddingLeft: 'initial', display: 'block', marginBottom: 0, paddingBottom: 0, listStyle: 'none' }}></ul>
                </li>
                <li style={{ listStyle: 'none' }}>
                  <Link href="#" className="subcategory-link" data-subcategory-id="29" style={{ fontWeight: 600, color: '#000', fontSize: '16px', fontFamily: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    Web Design
                  </Link>
                  <ul style={{ paddingLeft: 'initial', display: 'block', marginBottom: 0, paddingBottom: 0, listStyle: 'none' }}></ul>
                </li>
                <li style={{ listStyle: 'none' }}>
                  <Link href="#" className="subcategory-link" data-subcategory-id="30" style={{ fontWeight: 600, color: '#000', fontSize: '16px', fontFamily: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    UI Design
                  </Link>
                  <ul style={{ paddingLeft: 'initial', display: 'block', marginBottom: 0, paddingBottom: 0, listStyle: 'none' }}></ul>
                </li>
                <li style={{ listStyle: 'none' }}>
                  <Link href="#" className="subcategory-link" data-subcategory-id="31" style={{ fontWeight: 600, color: '#000', fontSize: '16px', fontFamily: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    Illustration
                  </Link>
                  <ul style={{ paddingLeft: 'initial', display: 'block', marginBottom: 0, paddingBottom: 0, listStyle: 'none' }}></ul>
                </li>
                <li style={{ listStyle: 'none' }}>
                  <Link href="#" className="subcategory-link" data-subcategory-id="32" style={{ fontWeight: 600, color: '#000', fontSize: '16px', fontFamily: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    UX Design
                  </Link>
                  <ul style={{ paddingLeft: 'initial', display: 'block', marginBottom: 0, paddingBottom: 0, listStyle: 'none' }}></ul>
                </li>
                <li style={{ listStyle: 'none' }}>
                  <Link href="#" className="subcategory-link" data-subcategory-id="33" style={{ fontWeight: 600, color: '#000', fontSize: '16px', fontFamily: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    Typographic Design
                  </Link>
                  <ul style={{ paddingLeft: 'initial', display: 'block', marginBottom: 0, paddingBottom: 0, listStyle: 'none' }}></ul>
                </li>
                <li style={{ listStyle: 'none' }}>
                  <Link href="#" className="subcategory-link" data-subcategory-id="34" style={{ fontWeight: 600, color: '#000', fontSize: '16px', fontFamily: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    Packaging Design
                  </Link>
                  <ul style={{ paddingLeft: 'initial', display: 'block', marginBottom: 0, paddingBottom: 0, listStyle: 'none' }}></ul>
                </li>
              </ul>
            </li>
            <li className="category-item" style={{ color: '#74767e', fontSize: '16px', fontFamily: 'Macan,Helvetica Neue,Helvetica,Arial,sans-serif', listStyle: 'none' }}>
              <Link href="#">Development</Link>
              <ul className="subcategories" style={{ listStyle: 'none' }}>
                <li style={{ listStyle: 'none' }}>
                  <Link href="#" className="subcategory-link" data-subcategory-id="35" style={{ fontWeight: 600, color: '#000', fontSize: '16px', fontFamily: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                    Web Development
                  </Link>
                  <ul style={{ paddingLeft: 'initial', display: 'block', marginBottom: 0, paddingBottom: 0, listStyle: 'none' }}></ul>
                </li>
              </ul>
            </li>
            <li className="category-item" style={{ color: '#74767e', fontSize: '16px', fontFamily: 'Macan,Helvetica Neue,Helvetica,Arial,sans-serif', listStyle: 'none' }}>
              <Link href="#">Video Editing</Link>
              <ul className="subcategories" style={{ listStyle: 'none' }}></ul>
            </li>
            <li className="category-item" style={{ color: '#74767e', fontSize: '16px', fontFamily: 'Macan,Helvetica Neue,Helvetica,Arial,sans-serif', listStyle: 'none' }}>
              <Link href="#">Language</Link>
              <ul className="subcategories" style={{ listStyle: 'none' }}></ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="category-section">
        <div className="fix-width container-xl">
          <ul
            className="ul3 ml-0"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 0",
              alignItems: "center",
              gap: "50px",
              listStyle: "none",
            }}
          >
            {courses.map((course, index) => (
              <li key={index} className="category-item" style={{ color: "#74767e", fontSize: "16px", fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                <Link href={course.link} id="">{course.name}</Link >
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section >
  );
};

export default Header;

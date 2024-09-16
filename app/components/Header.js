"use client";
import Link from 'next/link';
import { useState , useEffect } from 'react';
import '../globals.css';


const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && selectedLanguage) {
      const urlPrefix = 'https://www.ubcourse.com/home/courses?';
      const urlSuffix = `language=${selectedLanguage}`;
      const url = urlPrefix + urlSuffix;

      window.location.replace(url); // Directly replacing the current URL
    }
  }, [selectedLanguage]);
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    filter(); // Trigger the filter whenever the language is selected
  };


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
  const handleCartClick = () => {
    // Add logic to display cart dropdown or redirect
  };

  const redirectToCategory = (url) => {
    window.location.href = url;
  };

  return (
    <section className="menu-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light" style={{ display: "flex", flexWrap: "nowrap" }}>
              {/* Mobile Menu Trigger */}
              <ul className="mobile-header-buttons">
                <li><Link href="#mobile-primary-nav" className="mobile-nav-trigger">Menu</Link></li>
              </ul>

              {/* Logo */}
              <Link href="https://upbright.lk/" className="navbar-brand">
                <img src="https://www.ubcourse.com/uploads/system/5ea4ddb5f5bea4359bae8a581b7ed829.png" alt="Logo" height={40} />
              </Link>

              {/* Main Navigation */}
              <div className="main-nav-wrap">
                <div className
                  ="mobile-overlay"></div>
                <ul className="mobile-main-nav">
                  <div className
                    ="mobile-menu-helper-top"></div>
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
                    >
                      <i
                        className="fas fa-th d-inline"
                        style={{ color: '#24c05d' }}
                      ></i>
                      <span>Courses</span>
                      <span className="has-sub-category">
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </Link >

                    <ul className="category corner-triangle top-left is-hidden pb-0">
                      <li className="go-back">
                        <Link href="">
                          <i className="fas fa-angle-left"></i>Menu
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
                              <li className="go-back-menu"><Link href="#"><i className="fas fa-angle-left"></i>Menu</Link ></li>
                              <li className="go-back">
                                <Link href={category.url}>
                                  <i className="fas fa-angle-left"></i>
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
                      <li className
                        ="all-category-devided mb-0 p-0">
                        <Link href="https://www.ubcourse.com/home/courses" className
                          ="py-3">
                          <span className="icon"><i className="fa fa-align-justify" style={{ color: "black" }}></i></span>
                          <span>All courses</span>
                        </Link >
                      </li>
                    </ul>
                  </li>
                  <div className="mobile-menu-helper-bottom"></div>
                </ul>
              </div>
              {/* Search Box */}
              <form className="inline-form inline-forms" action="https://www.ubcourse.com/home/search" method="get" style={{ width: "100%" }}>
                <div className="input-group search-box mobile-search" style={{ marginBottom: "0px" }}>
                  <input type="text" name="query" className="form-control" placeholder="Search for courses" />
                  <div className="input-group-append">
                    <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                  </div>
                </div>
              </form>


              {/* Sign In Box */}
              <div style={{ width: "100%" }}></div>
              <span className="signin-box-move-desktop-helper"></span>
              <div className="sign-in-box btn-group">
                <Link href="https://www.ubcourse.com/home" className="btn btn-sign-in gen"
                  style={{ background: "transparent" }}>Home</Link >

                <div className="btn-group">
                  <button type="button" className="btn dropdown-toggle" data-toggle="dropdown"aria-haspopup="true" aria-expanded="false" style={{background:"none"}}>
                    Resource
                  </button>
                  <div className="dropdown-menu">
                    <div>
                      <Link className="dropdown-item show" href="https://www.upbright.lk/free-tools">Free Tools
                        <span>Access Free Tools: Elevate Your
                          Capabilities
                        </span>
                      </Link >
                      <Link className="dropdown-item" href="https://ubkeys.com/blog">UB Blog
                        <span>Insights Unveiled: Discover the Upbright Blog</span>
                      </Link >
                      <Link className="dropdown-item" href="https://www.upbright.lk/free-quiz">Free Quizzes
                        <span>Challenge Yourself: Access Our Free Quizzes!</span>
                      </Link >
                    </div>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn dropdown-toggle" data-toggle="dropdown"aria-haspopup="true" aria-expanded="false" style={{background:"none"}}>
                    TeamUp
                  </button>
                  <div className="dropdown-menu drop-list">
                    <div className="text">
                      <Link className="dropdown-item" href="https://www.upbright.lk/job">Apply for Link Job
                        <span>Join Our Team: Apply for Jobs Here!</span>
                      </Link >
                      <Link className="dropdown-item" href="https://www.upbright.lk/corporate">UB Corporates PARTNER
                        <span>Collaborate with Upbright Become a Partner Today</span>
                      </Link >
                      <Link className="dropdown-item" href="https://upbright.lk/digital-partner">UB Digital PARTNER
                        <span>Empower Together: Partner with Upbright</span>
                      </Link >
                    </div>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn dropdown-toggle" data-toggle="dropdown"aria-haspopup="true" aria-expanded="false" style={{ background: "none" }}>
                    <i className="fa fa-language" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu drop-list">
                    <div className="text">
                      <Link className="dropdown-item" href="#">
                        <input type="radio" id="language_english" name="language" className="languages custom-radio" value="english"onChange={handleLanguageChange}/>
                        <label htmlfor="language_english">English</label>
                      </Link >
                    </div>
                    <div className="text">
                      <Link className="dropdown-item" href="#">
                        <input type="radio" id="language_Tamil" name="language" className="languages custom-radio" value="Tamil"  // Calls filter() when clicked
        onChange={handleLanguageChange} />
                        <label htmlfor="language_Tamil">Tamil</label>
                      </Link >
                    </div>
                  </div>
                </div>
                <button href="#" id="join-btn" className="btn btn-sign-in gen" data-toggle="modal"data-target="#exampleModal"
                  style={{background:"transparent", border: "1px solid #30c465 !important", padding:"5px 10px", borderRadius:"5px !important", width: "fit-content"}}>Join</button>
                {/* <!-- <a href="https://www.ubcourse.com/home/sign_up"
                            class="btn btn-sign-up gen">Sign up</a> --> */}
              </div>
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

                {/* <!-- Cart Dropdown goes here --> */}
                <div className="dropdown course-list-dropdown corner-triangle top-right" style={{background:"none"}}>
                  {/* <!-- Just remove the display none from the css to make it work --> */}
                  <div className="list-wrapper">
                    <div className="item-list">
                      <ul>
                      </ul>
                    </div>
                    <div className="dropdown-footer">
                      <div className="cart-total-price clearfix">
                        <span>Total:</span>
                        <div className="float-right">
                          <span className="current-price"></span>
                          {/* <!-- <span class="original-price">$94.99</span> --> */}
                        </div>
                      </div>
                      <Link href="https://www.ubcourse.com/home/shopping_cart">Go to cart</Link >
                    </div>
                  </div>
                  <div className="empty-box text-center d-none">
                    <p>Your cart is empty.</p>
                    <Link href="">Keep Shopping</Link >
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Navbar;

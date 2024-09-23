"use client";
import { useState, useEffect } from 'react';
import React from "react";
import '../globals.css';
import '../responsive.css';
import Link from "next/link";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../jquery.webui-popover.min.css';

export default function TopCourse({ title, courses, customizedIndex }) {

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5, // Default for larger screens
  //   slidesToScroll: 0, // Default to slide by 1 card
  //   arrow:true,
  //   responsive: [
  //     {
  //       breakpoint: 1100, // Screens < 1100
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //       },
  //     },

  //     {
  //       breakpoint: 840, // Screens <= 839px
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 620, // Screens <= 619px
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 480, // Screens <= 479px
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 4,
  //       },
  //     },

  //   ],
  // };

  const [screenWidth, setScreenWidth] = useState(null); 
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth); // Set initial width

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

 
  if (screenWidth === null) {
    return null; // Optionally, render a loading state here
  }

  const getTabIndex = (index) => {
    if (screenWidth < 480 && index >= 1) return -1; // for 2nd, 3rd, 4th, 5th card
    if (screenWidth < 620 && index >= 2) return -1; // for 3rd, 4th, 5th card
    if (screenWidth < 840 && index >= 3) return -1; // for 4th, 5th card
    if (screenWidth < 1100 && index === 4) return -1; // for 5th card only
    return 0; // default behavior for other cards
  };

  const getAriaHidden = (index) => {
    if (screenWidth < 480 && index >= 1) return true; // for 2nd, 3rd, 4th, 5th card
    if (screenWidth < 620 && index >= 2) return true; // for 3rd, 4th, 5th card
    if (screenWidth < 840 && index >= 3) return true; // for 4th, 5th card
    if (screenWidth < 1100 && index === 4) return true; // for 5th card only
    return false; // default hidden for other cards
  };


  return (
    <section className="course-carousel-area">
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <h2 className="course-carousel-title">{title}</h2>
            <div className="course-carousel shown-after-loading slick-initialized slick-slider">
              {/* <Slider {...settings}> */}
              {/* <button className="slick-prev slick-arrow " aria-label="Previous" type="button" aria-disabled="true" >Previous</button> */}
              <div className="slick-list draggable">
                <div className="slick-track" >
                  {courses.map((course, index) => (
                    <>
                      <div
                        className={`course-box-wrap slick-slide ${!getTabIndex(index) ? `slick-active` : ``}`}
                        key={course.id}
                        style={{ width: "216px" }} tabIndex={getTabIndex(index)} data-slick-index={index} aria-hidden={getAriaHidden(index)}
                        onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}
                      >
                        {index === customizedIndex ? (
                          // Render the custom course box for the 5th course
                          <Link href={course.url} className="has-popover" data-target={`webuiPopover${index}`} tabIndex="0">
                            <div className="course-box" style={{ width: "200px" }}>
                              <div className="course-image">
                                <img
                                  src={course.href}
                                  alt={course.title}
                                  width={248}
                                  height={140}
                                  className="img-fluid"
                                />
                              </div>
                              <div className="course-details" style={{
                                padding: "15px 10px 5px 15px",
                                position: "relative",
                              }}>
                                <h5 className="title" style={{
                                  color: "#29303b",
                                  fontFamily: "sans-serif",
                                  fontSize: "15px",
                                  fontWeight: "600",
                                }}>{course.title} <p className="instructors" style={{ color: "#2dc262" }}>Coming Soon</p></h5>

                                <p className="instructors">{course.description}</p>
                                <div className="rating">
                                  <span className="enrolled-num">{course.rating} </span>
                                  {[...Array(5)].map((star, i) => {
                                    const roundedRating = Math.floor(course.rating) || 0;
                                    return (
                                      <i
                                        key={i}
                                        className={i < roundedRating ? "fas fa-star filled" : "fas fa-star"}
                                      />
                                    );
                                  })}
                                  <span className="d-inline-block average-rating" style={{ color: "#000000", fontWeight: "bold" }}> 0</span>
                                </div>
                                <div className="d-block" >

                                  <p className="text-left  d-inline-block course-compare" style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "#4D98AD "
                                  }} redirect_to="https://www.ubcourse.com/home/compare?course-1=adsense-wordpress&amp;&amp;course-id-1=24">
                                    <i className="fas fa-balance-scale"></i> Compare </p>


                                  <p className="price text-right d-inline-block float-right">
                                    $0
                                  </p>
                                </div>
                              </div>
                            </div>

                          </Link>
                        ) : (
                          // Render the standard course box for other courses
                          <Link href={course.url} className="has-popover" data-target={`webuiPopover${index}`} tabIndex="0">
                            <div className="course-box" style={{ width: "200px" }}>
                              <div className="course-image">
                                <img
                                  src={course.href}
                                  alt={course.title}
                                  width={248}
                                  height={140}
                                  className="img-fluid"
                                />
                              </div>
                              <div
                                className="course-details"
                                style={{
                                  padding: "15px 10px 5px 15px",
                                  position: "relative",
                                }}
                              >
                                <h5
                                  className="title"
                                  style={{
                                    color: "#29303b",
                                    fontFamily: "sans-serif",
                                    fontSize: "15px",
                                    fontWeight: "600",
                                  }}
                                >
                                  <b>{course.title}</b>
                                </h5>
                                <p className="instructors">{course.description}</p>
                                <p className="instructors">
                                  Upbright{" "}
                                  <span className="" style={{ marginLeft: "45px" }}>
                                    <i className="fas fa-closed-captioning"></i>
                                    {course.language}
                                  </span>
                                </p>
                                <div className="rating">
                                  <span className="enrolled-num">{course.rating} </span>
                                  {[...Array(5)].map((star, i) => {
                                    const roundedRating = Math.floor(course.rating);
                                    return (
                                      <i
                                        key={i}
                                        className={i < roundedRating ? "fas fa-star filled" : "fas fa-star"}
                                      />
                                    );
                                  })}
                                  <span className="enrolled-num">{course.reviews}</span>
                                </div>
                                <div className="d-block">
                                  <p className="price text-right d-inline-block float-right">
                                    <small>{course.price.old}</small>${course.price.current}
                                  </p>
                                  <span className="course-badge best-seller">
                                    {course.level}
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/* <button className="slick-next slick-arrow " aria-label="Next" type="button" aria-disabled={`${getAriaHidden?`false`:``}`}>
                              Next
                            </button> */}
                          </Link>


                        )}
                        <div className={`webui-popover pop left-bottom ${hoveredIndex === index ? 'in' : 'pop-out'}`} id={`webuiPopover${index}`} style={{ width: "333.6px", top: "886.3px", left: "158px", display: hoveredIndex === index ? 'block' : 'none' }}>
                          <div className="webui-arrow" style={{ top: "176.5px" }}></div>
                          <div className="webui-popover-inner">
                            <div className="webui-popover-content">
                              <div className="">
                                <div class="course-popover-content">
                                  <div className="last-updated">
                                    Last Updated {course.lastUpdated}
                                  </div>

                                  <div className="course-title">
                                    <Link href={course.url} tabindex="0">
                                      {course.title}                     </Link  >
                                  </div>
                                  <div className="course-meta">
                                    <span className=""><i className="fas fa-play-circle"></i>
                                      {course.lessons} Lessons                                    </span>
                                    <span className=""><i className="far fa-clock"></i>
                                      {course.duration}                                     </span>
                                    <span className=""><i
                                      className="fas fa-closed-captioning"></i>{course.language}</span>
                                  </div>
                                  <div className="course-subtitle">{course.substring}</div>
                                  <div className="what-will-learn">
                                    <ul>
                                      {(course.subtittles || []).map((subtittle, index) => (
                                        <li key={index}>{subtittle}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="popover-btns">
                                    <button type="button"
                                      className={`btn add-to-cart-btn  big-cart-button-${course.id}`}
                                      id={course.id} onclick="handleCartItems(this)" tabindex="0">
                                      Add to cart                                    </button>
                                    <button type="button"
                                      className="wishlist-btn"
                                      title="Add to wishlist" onclick="handleWishList(this)"
                                      id={course.id} tabindex="0"><i className="fas fa-heart"></i></button>
                                  </div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </>
                  ))}
                </div>
              </div>


              {/* </Slider> */}

            </div>
          </div>
        </div>
      </div>
    </section >
  );
};


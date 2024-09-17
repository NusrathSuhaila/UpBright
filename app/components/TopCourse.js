"use client";
import React from "react";
import '../globals.css';
import Link from "next/link";
import Slider from 'react-slick';


export default function TopCourse() {
  
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
 const courses = [
    {
      id: 12,
      title: "Fiverr",
      description:
        "Fiverr freelancing guide from beginners to advanced & make more profit on Fiverr with skill and non-skill basis ideas.",
      href: "https://www.ubcourse.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_12.jpg",
      url: "https://www.ubcourse.com/home/course/fiverr/12",
      price: { old: "$182", current: 152 },
      rating: 5,
      reviews: "(37)",
      language: "Tamil",
      level: "beginner",
      lessons: 14,
      duration: "04:26:24 Hours",
      lastUpdated: "Wed, 04-Sep-2024",
      substring: "Fiverr freelancing guide from",
      subtittle: "Fiverr"
    },
    {
      id: 13,
      title: "eBay",
      description:
        "Learn how to sell on eBay in direct & drop shipping, create a side hustle and go on to create a full-time eBay business.",
      href: "https://www.ubcourse.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_13.jpg",
      url: "https://www.ubcourse.com/home/course/ebay/13",
      price: { old: "$182", current: 152 },
      rating: 5,
      reviews: "(35)",
      language: "Tamil",
      level: "beginner",
      lessons: 12,
      duration: "04:31:52 Hours",
      lastUpdated: "Sat, 07-Sep-2024",
      substring: "Learn how to sell on eBay in dire",
      subtittle: "eBay"
    },
    {
      id: 20,
      title: "Daraz",
      description:
        "Learn how to sell on Daraz, create a side hustle, and expand your sales to Sri Lankan customers.",
      href: "https://www.ubcourse.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_20.jpg",
      url: "https://www.ubcourse.com/home/course/daraz/20",
      price: { old: "$59", current: 29 },
      rating: 5,
      reviews: "(40)",
      language: "Tamil",
      level: "beginner",
      lessons: 10,
      duration: "03:45:00 Hours",
      lastUpdated: "Mon, 02-Sep-2024",
      substring: "Learn how to sell on Daraz, creat",
      subtittle: "The Complete Daraz Selling Master Class"
    },
    {
      id: 22,
      title: "SproutGigs",
      description:
        "An online marketplace that connects freelancers and business owners around the world with easy-to-do affordable tasks.",
      href: "https://www.ubcourse.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_22.jpg",
      url: "https://www.ubcourse.com/home/course/sproutgigs/22",
      price: { old: "$15", current: 10 },
      rating: 4.9,
      reviews: "(474)",
      language: "Tamil",
      level: "beginner",
      lessons: 8,
      duration: "03:00:12 Hours",
      lastUpdated: "Tue, 10-Sep-2024",
      substring: "An online marketplace that",
      subtittle: "Sprout Gigs offers an opportunity to learn and earn through accessible and cost-effective tasks."
    },
    {
      id: 24,
      title: "Adsense + WordPress",
      description:
        "Learn to monetize your WordPress blog using Google AdSense. Ideal for beginners looking to generate passive income from home.",
      href: "https://www.ubcourse.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_24.jpg",
      url: "https://www.ubcourse.com/home/construct",
      price: { current: 0 },
      language: "Tamil",
      level: "beginner",
      lessons: 0,
      duration: "Coming Soon",
      lastUpdated: "Coming Soon",
      substring: "Learn to monetize your",
      subtittle: ""
    },
  ];


  return (
     <section className="course-carousel-area">
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <h2 className="course-carousel-title">Top courses</h2>
            <div className="course-carousel shown-after-loading slick-initialized slick-slider">
            {/* <Slider {...settings}> */}
            {/* <button className="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" >Previous</button> */}
              <div className="slick-list draggable">
                <div className="slick-track">
                {courses.map((course, index) => (
                    <div
                      className="course-box-wrap slick-slide slick-current slick-active"
                      key={course.id}
                      style={{ width: "196px", margin: "0px 8px 0px 8px" }} tabIndex="0"data-slick-index={index} aria-hidden="false"
                    >
                      {index === 4 ? (
                        // Render the custom course box for the 5th course
                        <Link href={course.url} className="has-popover" data-target="webuiPopover0" tabIndex="0">
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
                                      color: "#4D98AD !important"
                                    }} redirect_to="https://www.ubcourse.com/home/compare?course-1=adsense-wordpress&amp;&amp;course-id-1=24">
                              <i className="fas fa-balance-scale"></i> Compare                                        </p>
                                 

                                
                                <p className="price text-right d-inline-block float-right">
                                  $0
                                </p>
                              </div>
                            </div>
                          </div>

                        </Link>
                      ) : (
                        // Render the standard course box for other courses
                        <Link href={course.url} className="has-popover" data-target="webuiPopover0">
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

                        </Link>
                        
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* <button className="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"> */}
  {/* Next */}
{/* </button> */}
{/* </Slider> */}

            </div>
          </div>
        </div>
      </div>
    </section> 
  );
};


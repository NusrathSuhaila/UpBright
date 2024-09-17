"use client";
import React from "react";
import Link from "next/link";

export function CourseSection({ title, courses, customizedIndex }) {
  return (
    <section className="course-carousel-area">
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <h2 className="course-carousel-title">{title}</h2>
            <div className="course-carousel">
              <div className="slick-list">
                <div className="slick-track">
                  {courses.map((course, index) => (
                    <div
                      className="course-box-wrap slick-slide slick-current slick-active"
                      key={course.id}
                      style={{ width: "200px", margin: "0px 8px 0px 8px" }}
                    >
                      {index === customizedIndex ? (
                        // Render the custom course box for the customizedIndex
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
                                {course.title}
                              </h5>
                              <p className="instructors" style={{ color: "#2dc262" }}>
                                Coming Soon
                              </p>
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
                                <span className="d-inline-block average-rating" style={{ color: "#000000", fontWeight: "bold" }}>
                                  0
                                </span>
                              </div>
                              <div className="d-block">
                                <Link href="https://www.ubcourse.com/home/compare?course-1=adsense-wordpress&&course-id-1=24">
                                  <p
                                    className="text-left  d-inline-block course-compare"
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "500",
                                      color: "#4D98AD !important",
                                    }}
                                  >
                                    <i className="fas fa-balance-scale" /> Compare
                                  </p>
                                </Link>
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
                                  <i className="fas fa-closed-captioning" />
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
                                <span className="course-badge best-seller">{course.level}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

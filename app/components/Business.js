

export default function Business() {
    return (

<section className="course-carousel-area ub-section" style={{ background: "#fff", padding: "80px" }}>
        <div className="container-lg mt-10px">
          <div className="row">
            <div className="col-lg-6">
              <p>
                <img
                  src="https://www.ubcourse.com/images/bss2.jpg"
                  alt="Image"
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                />
              </p>
            </div>

            <div className="col-lg-6 pl-md-2" id="paraImage" style={{ textAlign: "center" }}>
              <h2 style={{ marginBottom: "15px", marginTop: "15px", textAlign: "center",fontWeight: 650 }}>
                <span style={{ color: "#30c465" }}>UPBRIGHT</span> Business
              </h2>

              <h4 style={{ textAlign: "center" ,fontWeight: 650 }}>Upskill your team with Upbright Business</h4>

              <ul className="ul-check success mt-5 mobile-list" style={{ fontSize: "20px" }}>
                <li>Unlimited access to top Upbright courses, anytime, anywhere.</li>
                <li>International course collection in multiple languages.</li>
                <li>Top certifications in tech and business.</li>
              </ul>

              <div className="space" style={{ height: "20px" }}></div>
              <div
                className="wrap"
                style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "25px",
                  justifyContent: "center",
                }}
              >
                <a
                  href="https://www.upbright.lk/customer/enquiry"
                  className="button"
                  style={{
                    fontWeight: "200px",
                    border: "1px solid #000",
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "10px",
                  }}
                >
                  Get Upbright Business
                </a>
                <a
                  href="https://ubcourse.com/home/courses?category=all&&price=all&&level=all&&language=all&&rating=all"
                  className="button2"
                  style={{
                    fontWeight: "200px",
                    border: "1px solid #000",
                    backgroundColor: "#fff",
                    color: "#000",
                    padding: "10px",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}

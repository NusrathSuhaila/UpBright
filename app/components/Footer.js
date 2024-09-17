import Link from "next/link";
import '../bootstrap.min.css';
import '../globals.css';

export default function Footer() {
    return (
        <>
        <hr></hr>
        <div className="container-fluid bg-dark text-light footer mt-5 wow fadeIn d-none d-md-block" data-wow-delay="0.1s">
            <div className="container" style={{marginLeft:"80px",maxWidth:"1300px"}}>
                <div className="row g-5" >
                    <div className="col-lg-3 col-md-6"  >
                        <h4 className="text-white mb-3 d-none d-md-block">Courses</h4>
                        <Link className="btn btn-link d-none d-md-block" href="https://ubcourse.com/home/course/fiverr/12">Fiverr</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://ubcourse.com/home/course/daraz/20">Daraz</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://ubcourse.com/home/course/ebay/13">eBay</Link>
                        <Link className="btn btn-link mb-3 d-none d-md-block" href="https://ubcourse.com/home/course/sproutgigs/22">SpourtGigs</Link>
                        <h4 className="text-white mb-3 d-none d-md-block">Company</h4>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/Linkbout">About Us</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/contact">Contact Us</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/job">Apply for job</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.ubcourse.com/">UB Courses</Link>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3 d-none d-md-block">UB services</h4>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/ebay-tools">eBay tracking tool</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/shipping">eBay shipping tracking</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/free-tools">eBay SwiftShip / eBay Express</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/words">Fiverr test helper</Link>
                        <Link className="btn btn-link mb-3 d-none d-md-block" href="https://www.upbright.lk/free-tools">Fiverr online keeper</Link>
                        <h4 className="text-white mb-3 d-none d-md-block">Become a partner</h4>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/franchises">UB franchises</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/corporate">UB Corporates Partner</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/digital-partner">UB digital Partner</Link>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3 d-none d-md-block">Terms</h4>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/privacy-policy">Privacy Policy</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/terms-condition">Terms &amp; Condition</Link>
                        <Link className="btn btn-link mb-3 d-none d-md-block" href="https://www.upbright.lk/refunds">Refund &amp; Cancellation Policy</Link>
                        <h4 className="text-white mb-3 d-none d-md-block">Resource</h4>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/free-tools">Free Tools</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://ubkeys.com/blog">UB Blog</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/free-quiz">Free Quizzes</Link>
                        <Link className="btn btn-link d-none d-md-block" href="#">UB Services</Link>
                        <Link className="btn btn-link d-none d-md-block" href="https://www.upbright.lk/foundation">UB Foundation</Link>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3 d-none d-md-block">Live Support</h4>
                        <Link className="btn btn-link d-none d-md-block" href="https://t.me/upbright_customer_service">Customer Support</Link>
                        <Link className="btn btn-link mb-3 d-none d-md-block" href="https://t.me/upbright_intro">Earning Live Updates</Link>
                        <h4 className="text-white mb-3 d-none d-md-block">Social Media</h4>
                        <div className="d-flex" style={{ paddingBottom: "10px" }}>
                            <Link className="btn btn-outline-light btn-social" href="https://wa.me/94742427711"><i className="fab fa-whatsapp fab1"></i></Link>
                            <Link className="btn btn-outline-light btn-social" href="https://www.instagram.com/upbright.lk/"><i className="fab fa-instagram fab1"></i></Link>
                            <Link className="btn btn-outline-light btn-social" href="https://www.facebook.com/upbright.lk"><i className="fab fa-facebook-f fab1"></i></Link>
                            <Link className="btn btn-outline-light btn-social" href="https://www.youtube.com/@UPBRIGHTT"><i className="fab fa-youtube fab1"></i></Link>
                            <Link className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/upbright-pvt-ltd/?originalSubdomain=lk"><i className="fab fa-linkedin-in fab1"></i></Link>
                        </div>
                        <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                            <form action="#" method="POST">
                                <input className="form-control w-100 py-3 ps-4 pe-5" type="text" name="email" placeholder="Your email" required />
                                <button type="submit" className="btn btn-deflaut py-2 position-absolute top-0 end-0 mt-2 me-2">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container"style={{marginLeft:"80px"}}>
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-md-start mb-md-0" >
                            © <Link className="border-bottom" href="https://www.upbright.lk/">Upbright</Link>, All Right Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
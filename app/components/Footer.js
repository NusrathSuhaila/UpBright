"use client";
import { useState } from 'react';
import Link from "next/link";
import '../bootstrap.min.css';
import '../globals.css';

export default function Footer() {
    const [openDropdown, setOpenDropdown] = useState(null);

  // Function to handle the dropdown click
  const handleDropdownClick = (menuId) => {
    if (openDropdown === menuId) {
      // If the clicked dropdown is already open, close it
      setOpenDropdown(null);
    } else {
      // Open the clicked dropdown
      setOpenDropdown(menuId);
    }
  };
    const menuData = [
        {
            id: 1,
            title: 'Course',
            links: [
                { label: 'Fiverr', url: 'https://ubcourse.com/home/course/fiverr/12' },
                { label: 'Daraz', url: 'https://ubcourse.com/home/course/daraz/20' },
                { label: 'Ebay', url: 'https://ubcourse.com/home/course/ebay/13' },
                { label: 'SpourtGigs', url: 'https://ubcourse.com/home/course/sproutgigs/22' },
            ],
        },
        {
            id: 2,
            title: 'Company',
            links: [
                { label: 'About Us', url: 'https://www.upbright.lk/about' },
                { label: 'Contact Us', url: 'https://www.upbright.lk/contact' },
                { label: 'Apply for Job', url: 'https://www.upbright.lk/job' },
                { label: 'UB Courses', url: 'https://www.ubcourse.com/' },
            ],
        },
        {
            id: 3,
            title: 'UB Services',
            links: [
                { label: 'eBay tracking tool', url: 'https://www.upbright.lk/ebay-tools' },
                { label: 'eBay shipping tracking', url: 'https://www.upbright.lk/shipping' },
                { label: 'eBay SwiftShip / eBay Express', url: 'https://www.upbright.lk/free-tools' },
                { label: 'Fiverr test helper', url: 'https://www.upbright.lk/words' },
                { label: 'Fiverr online keeper', url: 'https://www.upbright.lk/free-tools' },
            ],
        },
        {
            id: 4,
            title: 'Become a partner',
            links: [
                { label: 'UB Franchises', url: 'https://www.upbright.lk/franchises' },
                { label: 'UB Corporate Partner', url: 'https://www.upbright.lk/corporate' },
                { label: 'UB Digital Partner', url: 'https://www.upbright.lk/digital-partner' },
            ],
        },
        {
            id: 5,
            title: 'Terms',
            links: [
                { label: 'Privacy Policy', url: 'https://www.upbright.lk/privacy-policy' },
                { label: 'Terms & Condition', url: 'https://www.upbright.lk/terms-condition' },
                { label: 'Refund & Cancellation Policy', url: 'https://www.upbright.lk/refunds' },
            ],
        },
        {
            id: 6,
            title: 'Resources',
            links: [
                { label: 'Free Tools', url: 'https://www.upbright.lk/free-tools' },
                { label: 'UB Blog', url: 'https://ubkeys.com/blog' },
                { label: 'Free Quizzes', url: 'https://www.upbright.lk/free-quiz' },
                { label: 'UB Services', url: '#' },
                { label: 'UB Foundation', url: 'https://www.upbright.lk/foundation' },
            ],
        },
        {
            id: 7,
            title: 'Live Support',
            links: [
                { label: 'Customer Support', url: 'https://t.me/upbright_customer_service' },
                { label: 'Earning Live Updates', url: 'https://t.me/upbright_intro' },
            ],
        },
       
    ];
    return (
        <>
            <hr></hr>
            <div className="container-fluid bg-dark text-light footer mt-5 wow fadeIn d-none d-md-block" data-wow-delay="0.1s">
                <div className="container" style={{ marginLeft: "80px", maxWidth: "1300px" }}>
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

                <div className="container" style={{ marginLeft: "80px" }}>
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-md-start mb-md-0" >
                                © <Link className="border-bottom" href="https://www.upbright.lk/">Upbright</Link>, All Right Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menus mobile-only">
                {menuData.map((menu) => (
                    <div className="drop-downz-menus mobile-only"key={menu.id}>
                        <input type="checkbox" className="activate" id={`accordion-${menu.id}`} name="accordion"checked={openDropdown === menu.id}onChange={() => handleDropdownClick(menu.id)} />
                        <label htmlFor={`accordion-${menu.id}`} className="menus-title">
                            {menu.title}
                            <span className="iconz">▼</span>
                        </label>
                        
                        {openDropdown === menu.id && (
                            <div className="drop-downz">
                            {menu.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className={index === menu.links.length - 1 ? 'last' : ''}
                                    style={{marginTop:"10px", marginBottom:"10px",display:"block"}}
>
                                    {link.label}
                                </Link> 
                               
                            ))}
                        </div>
                        )}
                    </div>
                ))}

                {/* Social Media Section */}
                <div className="drop-downz-menus mobile-only" style={{ borderBottom: 'none' }}>
                    <label className="menus-title">Social Media</label>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex" style={{ paddingBottom: '10px', gap: '30px' }}>
                            <Link className="btn btn-outline-light btn-social" style={{ paddingTop: '5px', paddingBottom: '5px', borderRadius: '10px' }} href="https://wa.me/94742427711">
                                <i className="fab fa-whatsapp fab1"></i>
                            </Link >
                            <Link className="btn btn-outline-light btn-social" style={{ paddingTop: '5px', paddingBottom: '5px', borderRadius: '10px' }} href="https://www.instagram.com/upbright.lk/">
                                <i className="fab fa-instagram fab1"></i>
                            </Link >
                            <Link className="btn btn-outline-light btn-social" style={{ paddingTop: '5px', paddingBottom: '5px', borderRadius: '10px' }} href="https://www.facebook.com/upbright.lk">
                                <i className="fab fa-facebook-f fab1"></i>
                            </Link >
                            <Link className="btn btn-outline-light btn-social" style={{ paddingTop: '5px', paddingBottom: '5px', borderRadius: '10px' }} href="https://www.youtube.com/@UPBRIGHTT">
                                <i className="fab fa-youtube fab1"></i>
                            </Link >
                            <Link className="btn btn-outline-light btn-social" style={{ paddingTop: '5px', paddingBottom: '5px', borderRadius: '10px' }} href="https://www.linkedin.com/company/upbright-pvt-ltd/?originalSubdomain=lk">
                                <i className="fab fa-linkedin-in fab1"></i>
                            </Link >
                        </div>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <form action="#" method="POST">
                                <input className="form-control w-100 py-3 ps-4 pe-5" type="text" name="email" placeholder="Your email" />
                                <button type="submit" className="btn btn-deflaut py-2 position-absolute top-0 end-0 mt-2 me-2">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="drop-downz-menus mobile-only" style={{ marginTop: '10px', borderBottom: 'none' }}>
                    <div className="container">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    © Upbright, All Right Reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
"use client";
import { useState } from 'react';
import Link from "next/link";
import '../globals.css';
import '../responsive.css';


export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open

  const toggleDropdown = (dropdownId) => {
    // Toggle the respective dropdown based on its ID
    if (openDropdown === dropdownId) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(dropdownId); // Open the clicked dropdown
    }
  };

  
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const [isForm, setisForm] = useState(false);

  // Function to toggle modal visibility
  const toggleForm = () => {
    setisForm(!isForm);
  };

  const [activeTab, setActiveTab] = useState(false);

  const toggleTab = () => {
    setActiveTab(!activeTab);
  };
  return (
    <>
      <div className="sign-in-box btn-group hide">
        <Link href="https://www.ubcourse.com/home" className="btn btn-sign-in gen"
          style={{ background: "transparent" }}>Home</Link >

        <div className={`btn-group ${openDropdown === 1 ? 'show' : ''}`}>
          <button type="button" className="btn dropdown-toggle" onClick={() => toggleDropdown(1)} data-toggle="dropdown" aria-haspopup="true" aria-expanded={openDropdown === 1} style={{ background: "none" }}>
            Resource
          </button>
          <div className={`dropdown-menu ${openDropdown === 1 ? 'show' : ''}`}>
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
        <div className={`btn-group ${openDropdown === 2 ? 'show' : ''}`}>
          <button type="button" className="btn dropdown-toggle" onClick={() => toggleDropdown(2)} data-toggle="dropdown" aria-haspopup="true" aria-expanded={openDropdown === 2} style={{ background: "none" }}>
            TeamUp
          </button>
          <div className={`dropdown-menu drop-list ${openDropdown === 2 ? 'show' : ''}`}>
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
        <div className={`btn-group ${openDropdown === 3 ? '' : 'show'}`}>
          <button type="button" className="btn dropdown-toggle" onClick={() => toggleDropdown(3)} data-toggle="dropdown" aria-haspopup="true" aria-expanded={openDropdown === 3} style={{ background: "none" }}>
            <i className="fa fa-language" aria-hidden="true"></i>
          </button>
          <div className={`dropdown-menu drop-list ${openDropdown === 3 ? 'show' : ''}`}>
            <div className="text">
              <Link className="dropdown-item" href="#">
                <input type="radio" id="language_english" name="language" className="languages custom-radio" value="english" />
                <label htmlFor="language_english">English</label>
              </Link >
            </div>
            <div className="text">
              <Link className="dropdown-item" href="#">
                <input type="radio" id="language_Tamil" name="language" className="languages custom-radio" value="Tamil" />
                <label htmlFor="language_Tamil">Tamil</label>
              </Link >
            </div>
          </div>
        </div>
        <button href="#" id="join-btn" className="btn btn-sign-in gen" data-toggle="modal" data-target="#exampleModal" onClick={toggleModal}
          style={{ background: "transparent", border: "1px solid #30c465 !important", padding: "5px 10px", borderRadius: "5px !important", width: "fit-content" }}>Join</button>
        
      </div>
      <div className={`modal fade ${isModalVisible ? 'show' : ''}`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" style={{ display: isModalVisible ? 'block' : 'none' }} aria-hidden={isModalVisible ? 'false' : 'true'}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleModal}>
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body signin_modal">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <Link className={`nav-link ${!activeTab ? `active ` : ``}show`} id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected={`${!activeTab ? `true` : `false`}`} onClick={toggleTab}  >Register</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${activeTab ? `active ` : ``}show`} id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected={`${activeTab ? `true` : `false`}`} onClick={toggleTab}>SignIn</Link>
                </li>
              </ul>

              <div className="social_login">
                <p style={{ marginTop: '10px', marginBottom: '10px' }}>with your social network</p>
                <div className="social-menu">
                  <ul className="social_log">
                    <li><Link href="#" className="fb"><i className="fa fa-facebook"></i></Link></li>
                    <li><Link href="https://www.ubcourse.com/login/google_login" className="google"><i className="fa fa-google"></i></Link></li>
                  </ul>
                </div>
                <p>or</p>
              </div>

              <div className="tab-content signin_tab" id="myTabContent">
                {/* Register Tab */}
                <div className={`tab-pane fade ${!activeTab ? `active show` : ``}`} id="signup" role="tabpanel" aria-labelledby="signup-tab" style={{ background: 'none !important' }}>
                  <form action="https://www.ubcourse.com/login/register" method="post" id="sign_up">
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" placeholder="First Name" name="first_name" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputText2" aria-describedby="emailHelp" placeholder="Last Name" name="last_name" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputText3" aria-describedby="emailHelp" placeholder="Name on Certificate" name="certificate_name" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="email" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Create An Account</button>
                    <p style={{ color: '#8c8c8c', textAlign: 'center', marginTop: '0.5rem' }}>
                      Already Have an account?
                      <Link style={{ fontWeight: 'bold' }} data-toggle="tab" href="#signin">SignIn</Link>
                    </p>
                  </form>
                </div>

                {/* SignIn Tab */}
                <div className={`tab-pane fade ${activeTab ? `active show` : ``}`} id="signin" role="tabpanel" aria-labelledby="signin-tab" style={{ background: 'none !important' }}>
                  <form action="https://www.ubcourse.com/login/validate_login/user" method="post" id="login">
                    <div className="form-group">
                      <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Email" name="email" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" name="password" />
                    </div>
                    <p className="forgot_link">
                      <Link href="" onClick={toggleForm}>Forgot password</Link>
                    </p>
                    <button type="submit" className="btn btn-primary btn-block">LogIn</button>
                    <p style={{ color: '#8c8c8c', textAlign: 'center', marginTop: '0.5rem' }}>Don't have an account?
                      <Link style={{ fontWeight: 'bold' }} data-toggle="tab" href="#signup">Register</Link>
                    </p>
                  </form>
                </div>

                {/* Forgot Password Form */}
                <div className="user-dashboard-content w-100 forgot-password-form hidden" style={{ display: isForm ? 'block' : 'none' }}>
                  <div className="content-title-box">
                    <div className="title">Forgot password</div>
                    <div className="subtitle">Provide your email address to get password.</div>
                  </div>
                  <form action="https://www.ubcourse.com/login/forgot_password/frontend" method="post" id="forgot_password">
                    <div className="content-box">
                      <div className="basic-group">
                        <div className="form-group">
                          <label htmlFor="forgot-email">
                            <span className="input-field-icon"><i className="fas fa-envelope"></i></span> Email:
                          </label>
                          <input type="email" className="form-control" name="email" id="forgot-email" placeholder="Email" required />
                          <small className="form-text text-muted">Provide your email address to get password.</small>
                        </div>
                      </div>
                    </div>
                    <div className="content-update-box">
                      <button className="btn" type="submit">Reset password</button>
                    </div>
                    <div className="forgot-pass text-center">
                      Want to go back? <Link href="" onClick={toggleForm}>Login</Link>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import "../globals.css";


export default function Banner() {
  return (
    <>
    <section
      className="home-banner-area">
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <div className="home-banner-wrap">
              <h2>Learn on your schedule</h2>
              <p>Study any topic, anytime. Explore more courses for the lowest price ever!</p>
              <form className="mobile-search-header" action="" method="get">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="query"
                    placeholder="What do you want to learn?"
                  />
                  <div className="input-group-append">
                    <button className="btn" type="submit">
                      <i className="fas fa-search" id="search-icon"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section className="home-fact-area">
     <div className="container-lg">
         <div className="row rows1">
             <div className="col-md-4 d-flex">
                 <div className="home-fact-box mr-md-auto mr-auto">
                     <i className="fas fa-bullseye float-left"></i>
                     <div className="text-box">
                         <h4>5 Online courses</h4>
                         <p>Explore a variety of fresh topics</p>
                     </div>
                 </div>
             </div>

             <div className="col-md-4 d-flex">
                 <div className="home-fact-box mr-md-auto mr-auto">
                     <i className="fa fa-check float-left" ></i>
                     <div className="text-box">
                         <h4>Expert instruction</h4>
                         <p>Find the right course for you</p>
                     </div>
                 </div>
             </div>

             <div className="col-md-4 d-flex">
                 <div className="home-fact-box mr-md-auto mr-auto">
                     <i className="fa fa-clock float-left" ></i>
                     <div className="text-box">
                         <h4>Lifetime access</h4>
                         <p>Learn on your schedule</p>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </section>
 </>
  );
}

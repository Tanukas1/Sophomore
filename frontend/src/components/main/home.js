import React from "react";
import "../stylesheets/home.css";
// import image from 'http://localhost:5000/images/home2.png';

export default function home() {
  return (
    <div>
      <div>
        <div className="card bg-dark text-white" />
        <div className="card-img-top">
          <img
            src="http://localhost:5000/images/home2.png"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="card-img-overlay d-flex align-items-end mt-5"></div>

        <section>
          <div className="container">
            <h1>Our Services</h1>

            <div className="row mbr-justify-content-center">
              <div className="col-lg-6 mbr-col-md-10">
                <div className="wrap">
                  <div className="ico-wrap">
                    <span className="mbr-iconfont fa-volume-up fa"></span>
                  </div>
                  <div className="text-wrap vcenter">
                    <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                      Stay <span>Successful</span>
                    </h2>
                    <p className="mbr-fonts-style text1 mbr-text display-6">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mbr-col-md-10">
                <div className="wrap">
                  <div className="ico-wrap">
                    <span className="mbr-iconfont fa-calendar fa"></span>
                  </div>
                  <div className="text-wrap vcenter">
                    <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                      Create
                      <span>An Effective Team</span>
                    </h2>
                    <p className="mbr-fonts-style text1 mbr-text display-6">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mbr-col-md-10">
                <div className="wrap">
                  <div className="ico-wrap">
                    <span className="mbr-iconfont fa-globe fa"></span>
                  </div>
                  <div className="text-wrap vcenter">
                    <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                      Launch
                      <span>A Unique Project</span>
                    </h2>
                    <p className="mbr-fonts-style text1 mbr-text display-6">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mbr-col-md-10">
                <div className="wrap">
                  <div className="ico-wrap">
                    <span className="mbr-iconfont fa-trophy fa"></span>
                  </div>
                  <div className="text-wrap vcenter">
                    <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                      Achieve <span>Your Targets</span>
                    </h2>
                    <p className="mbr-fonts-style text1 mbr-text display-6">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h2 className="mt-3 pb-3 mb-4 font-italic border-bottom">
          Featured Book
        </h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card bg-light">
              <img
                className="card-img-top"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2022%2F04%2F11%2Fbest-books-2022-2000.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title border-bottom pb-3">
                  Card title{" "}
                  <a
                    href="#"
                    className="float-right btn btn-sm btn-success d-inline-flex share"
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-sm btn-success float-right">
                  Add to Card<i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2022%2F04%2F11%2Fbest-books-2022-2000.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title border-bottom pb-3">
                  Card title{" "}
                  <a
                    href="#"
                    className="float-right btn btn-sm btn-success d-inline-flex share"
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-sm btn-success float-right">
                  Add to Card <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-light">
              <img
                className="card-img-top"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2022%2F04%2F11%2Fbest-books-2022-2000.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title border-bottom pb-3">
                  Card title{" "}
                  <a
                    href="#"
                    className="float-right btn btn-sm btn-success d-inline-flex share"
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-sm btn-success float-right">
                  Add to Card <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-light">
              <img
                className="card-img-top"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2022%2F04%2F11%2Fbest-books-2022-2000.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title border-bottom pb-3">
                  Card title{" "}
                  <a
                    href="#"
                    className="float-right btn btn-sm btn-success d-inline-flex share"
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-sm btn-success float-right">
                  Add to Card <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1>Client Review</h1>
      <div className="container mt-5 mb-5">
        <div className="row g-2">
          <div className="col-md-4">
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                {" "}
                <img
                  src="https://cdn5.vectorstock.com/i/1000x1000/50/29/avatar-icon-of-girl-in-a-wide-brim-felt-hat-vector-16225029.jpg"
                  className="rounded-circle"
                  width="80"
                />{" "}
              </div>
              <div className="user-content">
                <h5 className="mb-0">Bruce Hardy</h5>{" "}
                <span>Software Developer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="ratings">
                {" "}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                {" "}
                <img
                  src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png"
                  className="rounded-circle"
                  width="80"
                />{" "}
              </div>
              <div className="user-content">
                <h5 className="mb-0">Mark Smith</h5> <span>Web Developer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="ratings">
                {" "}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                <i className="fa fa-star"></i>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                {" "}
                <img
                  src="https://image.shutterstock.com/image-vector/face-happy-girl-avatar-laughing-260nw-1459862774.jpg"
                  className="rounded-circle"
                  width="80"
                />{" "}
              </div>
              <div className="user-content">
                <h5 className="mb-0">Veera Duncan</h5>{" "}
                <span>Software Architect</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="ratings">
                {" "}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

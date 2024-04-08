import React from 'react';
import fourNotFour from "../images/404-image.png";

function NotFoundPage() {
  return (
    <section id="home" className="d-flex align-items-center homePage">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <img className="fourNotFour" src={fourNotFour} />
                </div>
                <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1 className="fontColor-1">404 PAGE NOT FOUND</h1>
                </div>
            </div>
        </div>
  </section>
  )
}

export default NotFoundPage
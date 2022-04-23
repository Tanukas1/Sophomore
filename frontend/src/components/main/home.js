import React from 'react';
import image from '../images/home.jpg';
import "../stylesheets/home.css"

export default function home() {
  return (
  <div>
        <div class="card bg-dark text-white" style={{maxwidth: '30rem'}}/>
        <div class="card-img-top"><img src={image} className="img-fluid" /></div>
        <div class="card-img-overlay d-flex align-items-end"></div>
          
        <section>
<div class="container">
<h1>Our Services</h1>
	
		<div class="row mbr-justify-content-center">
            <div class="col-lg-6 mbr-col-md-10">
                <div class="wrap">
                    <div class="ico-wrap">
                        <span class="mbr-iconfont fa-volume-up fa"></span>
                    </div>
                    <div class="text-wrap vcenter">
                        <h2 class="mbr-fonts-style mbr-bold mbr-section-title3 display-5">Stay <span>Successful</span></h2>
                        <p class="mbr-fonts-style text1 mbr-text display-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mbr-col-md-10">
                <div class="wrap">
                    <div class="ico-wrap">
                        <span class="mbr-iconfont fa-calendar fa"></span>
                    </div>
                    <div class="text-wrap vcenter">
                        <h2 class="mbr-fonts-style mbr-bold mbr-section-title3 display-5">Create
                            <span>An Effective Team</span>
                        </h2>
                        <p class="mbr-fonts-style text1 mbr-text display-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mbr-col-md-10">
                <div class="wrap">
                    <div class="ico-wrap">
                        <span class="mbr-iconfont fa-globe fa"></span>
                    </div>
                    <div class="text-wrap vcenter">
                        <h2 class="mbr-fonts-style mbr-bold mbr-section-title3 display-5">Launch
                            <span>A Unique Project</span>
                        </h2>
                        <p class="mbr-fonts-style text1 mbr-text display-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mbr-col-md-10">
                <div class="wrap">
                    <div class="ico-wrap">
                        <span class="mbr-iconfont fa-trophy fa"></span>
                    </div>
                    <div class="text-wrap vcenter">
                        <h2 class="mbr-fonts-style mbr-bold mbr-section-title3 display-5">Achieve <span>Your Targets</span></h2>
                        <p class="mbr-fonts-style text1 mbr-text display-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </div>

</div>

</section>
<h3 class="mt-3 pb-3 mb-4 font-italic border-bottom">
      Featured Book
   </h3>
   <div class="row">
   <div class="col-md-3">
         <div class="card bg-light">
            <img class="card-img-top" src="//placeimg.com/280/180/tech" alt="Card image cap"/>
            <div class="card-body">
               <h5 class="card-title border-bottom pb-3">Card title <a href="#" class="float-right btn btn-sm btn-success d-inline-flex share"><i class="fas fa-share-alt"></i></a></h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-sm btn-success float-right">Add to Card<i class="fas fa-angle-double-right"></i></a>
            </div>
         </div>
      </div>  
      <div class="col-md-3">
         <div class="card">
            <img class="card-img-top" src="//placeimg.com/280/180/tech" alt="Card image cap"/>
            <div class="card-body">
               <h5 class="card-title border-bottom pb-3">Card title <a href="#" class="float-right btn btn-sm btn-success d-inline-flex share"><i class="fas fa-share-alt"></i></a></h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-sm btn-success float-right">Add to Card <i class="fas fa-angle-double-right"></i></a>
            </div>
         </div>
      </div>
      <div class="col-md-3">
         <div class="card bg-light">
            <img class="card-img-top" src="//placeimg.com/280/180/tech" alt="Card image cap"/>
            <div class="card-body">
               <h5 class="card-title border-bottom pb-3">Card title <a href="#" class="float-right btn btn-sm btn-success d-inline-flex share"><i class="fas fa-share-alt"></i></a></h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-sm btn-success float-right">Add to Card <i class="fas fa-angle-double-right"></i></a>
            </div>
         </div>
      </div>
   </div>
  </div>
  );
}

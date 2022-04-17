import React from 'react';
import "../stylesheets/home.css"

export default function home() {
  return (
//     <div class="home-content">
//     <div class="home-text">
//         <h1>Website Design</h1>
//         <p>Website design collection. You will get all type of website design here. Just select, add to cart, and enjoy you website. I hope you like this website tutorial Pure HTML and CSS.</p>
//     <a href="#" class="main-login">Log in</a>
//     </div>
//     <div class="home-img">
//         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6567561744825.5a78b485e9893.jpg"/>
//     </div>
// </div>
<section class="home" id="home">

<div class="row">

    <div class="content">
        <h3>upto 75% off</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
        <a href="#" class="btn">shop now</a>
    </div>

    <div class="swiper books-slider">
        <div class="swiper-wrapper">
            <a href="#" class="swiper-slide"><img src="images/book-1.png" alt=""/></a>
            <a href="#" class="swiper-slide"><img src="images/book-1.png" alt=""/></a>
            <a href="#" class="swiper-slide"><img src="images/book-1.png" alt=""/></a>
            <a href="#" class="swiper-slide"><img src="images/book-1.png" alt=""/></a>
            <a href="#" class="swiper-slide"><img src="images/book-1.png" alt=""/></a>
            <a href="#" class="swiper-slide"><img src="images/book-1.png" alt=""/></a>
        </div>
        <img src=".././images/stand.png" class="stand" alt=""/>
    </div>
</div>

</section>
  );
}

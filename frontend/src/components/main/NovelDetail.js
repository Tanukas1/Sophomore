import React from 'react'
import "../stylesheets/novelDetail.css"

export default function novelDetail() {
  return (
    <div class="container">
    <div class="col-lg-8 border p-3 main-section bg-white"/>
        <div class="row hedding m-0 pl-3 pt-0 pb-3">
            Novel Detail Page
        </div>
        <div class="row m-0">
            <div class="col-lg-4 left-side-product-box pb-3">
                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1437720702l/1425024._SY475_.jpg" class="border p-3"/>
                <span class="sub-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhFiYqPJGJAPghziREa1vqp7uJAoEaFZAz25t5LawzMn4VwZ_ewIeU4yjxCXE70ZerVs&usqp=CAU" class="border p-2"/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhFiYqPJGJAPghziREa1vqp7uJAoEaFZAz25t5LawzMn4VwZ_ewIeU4yjxCXE70ZerVs&usqp=CAU" class="border p-2"/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhFiYqPJGJAPghziREa1vqp7uJAoEaFZAz25t5LawzMn4VwZ_ewIeU4yjxCXE70ZerVs&usqp=CAU" class="border p-2"/>
                </span>
            </div>
            <div class="col-lg-8">
                <div class="right-side-pro-detail border p-3 m-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <span>Who What Wear</span>
                            <p class="m-0 p-0">Novels</p>
                        </div>
                        <div class="col-lg-12">
                            <p class="m-0 p-0 price-pro">$30</p>
                            <hr class="p-0 m-0"/>
                        </div>
                        <div class="col-lg-12 pt-2">
                            <h5>Product Detail</h5>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris.</span>
                            <hr class="m-0 pt-2 mt-2"/>
                        </div>
                        <div class="col-lg-12">
                            <p class="tag-section"><strong>Tag : </strong><a href=""></a><a href=""></a></p>
                        </div>
                        <div class="col-lg-12">
                            <h6>Quantity :</h6>
                            <input type="number" class="form-control text-center w-100" value="1"/>
                        </div>
                        <div class="col-lg-12 mt-3">
                            <div class="row">
                                <div class="col-lg-6 pb-2">
                                    <a href="#" class="btn btn-danger w-100">Add To Cart</a>
                                </div>
                                <div class="col-lg-6">
                                    <a href="#" class="btn btn-success w-100">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-center pt-3">
                <h4>More Novels</h4>
            </div>
        </div>
        <div class="row mt-3 p-0 text-center pro-box-section">
            <div class="col-lg-3 pb-2">
                <div class="pro-box border p-0 m-0">
                    <img src="https://s26162.pcdn.co/wp-content/uploads/2019/11/A1NfEjobJnL-691x1024.jpg"/>
                </div>
            </div>
            <div class="col-lg-3 pb-2">
                <div class="pro-box border p-0 m-0">
                    <img src="https://s26162.pcdn.co/wp-content/uploads/2019/11/A1NfEjobJnL-691x1024.jpg"/>
                </div>
            </div>
            <div class="col-lg-3 pb-2">
                <div class="pro-box border p-0 m-0">
                    <img src="https://s26162.pcdn.co/wp-content/uploads/2019/11/A1NfEjobJnL-691x1024.jpg"/>
                </div>
            </div>
            <div class="col-lg-3 pb-2">
                <div class="pro-box border p-0 m-0">
                    <img src="https://s26162.pcdn.co/wp-content/uploads/2019/11/A1NfEjobJnL-691x1024.jpg"/>
                </div>
            </div>
        </div>
    </div>

  )
}

import React from 'react'
import "./stylesheets/notfound.css"

export default function notfound() {
  return (
    <div class="page-not-found pt-5">
    <div class="bg-light shadow">
        <h2>404</h2>
        <h3 class="mt-4">Opps! Page Not Found</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and<br/>typesetting industry.</p>
        <div class="mt-5">
           <a href="/"> <button type="button" class="btn m-2 m-md-0 btn-success">Go Back to Homepage</button></a>
        </div>
    </div>
</div>
  )
}

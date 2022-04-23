import React from 'react'

export default function exchangenovel() {
  return (
    <form>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">  Previous Book Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Book Name.."/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Author</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Author Name.."/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Title of Book</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Title of Book.."/>
</div>
<div class="mb-3">
  <label for="formFile" class="form-label">Book Upload</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label ">New BookName</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name.."/>
</div>
<div class="col-12">
    <button type="submit" class="btn btn-success">Submit</button>
  </div>
</form>
  )
}

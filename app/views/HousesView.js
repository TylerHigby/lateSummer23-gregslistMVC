export const houseView = /*html*/`
<div class="container-fluid">
<section class="row">
<button class="btn btn-info col-1" data-bs-toggle="collapse" data-bs-target="#carFormCollapse">
  List House! <i class="mdi mdi-home"></i>
</button>

<div class="collapse" id="carFormCollapse">

  <form class="row p-2" onsubmit="app.CarsController.createCar()">

    <div class="form-floating mb-3 col-4">
      <input required type="text" class="form-control" id="houseYear" name="year" placeholder="houseYear">
      <label for="houseYear">House Year</label>
    </div>

    <div class="form-floating mb-3 col-4">
      <input required type="text" class="form-control" id="houseAddress" name="address" placeholder="houseAddress">
      <label for="houseAddress">House Address</label>
    </div>

    <div class="form-floating mb-3 col-4">
      <input  required type="number" class="form-control" min="1"  id="bedrooms" name="bedrooms" placeholder="bedrooms">
      <label for="bedrooms">Bedrooms</label>
    </div>

    <div class="form-floating mb-3 col-4">
      <input  required type="number" class="form-control" min="1"  id="bathrooms" name="bathrooms" placeholder="bathrooms">
      <label for="bathrooms">Bathrooms</label>
    </div>

    <div class="form-floating mb-3 col-4">
      <input required type="text" class="form-control" id="houseSqFt" name="sqft" placeholder="houseSqFt">
      <label for="houseSqFt">House square footage</label>
    </div>

    <div class="form-floating mb-3 col-4">
      <input required type="text" class="form-control" id="housePrice" name="price" placeholder="housePrice">
      <label for="housePrice">House price</label>
    </div>

    <div class="form-floating mb-3 col-12">
      <input  required type="text" class="form-control" id="houseImgUrl" name="imgUrl" placeholder="houseImgUrl">
      <label for="houseImgUrl">House Image Url</label>
    </div>

    <div class="form-floating">
      <textarea  required maxLength="144" class="form-control" placeholder="houseDescription" name="description" id="houseDescription"
        style="height: 100px"></textarea>
      <label for="houseDescription">House Description</label>
    </div>

    <!-- NOTE make sure that your submit button is INSIDE of your form tag -->
    <div class="text-end">
      <button type="submit" class="btn btn-info">Create Listing</button>

    </div>
  </form>
</div>
</section>

<section class="row justify-content-center" id="cars">
  <!-- STUB car template -->
  <!-- <div class="col-md-10 elevation-5 rounded-top">
    <div class="row">
      <div class="col-4 p-0">
        <img class="img-fluid rounded-start"
          src="https://bringatrailer.com/wp-content/uploads/2020/05/2011_bmw_335_15901301926d884f6124Photo-May-03-1-45-59-PM.jpg?fit=940%2C627"
          alt="make model">
      </div>
      <div class="col-8">
        <h2 class="text-center">Year Make Model</h2>
        <div class="d-flex justify-content-around pt-3">
          <span>$Price</span>
          <span>Date</span>
        </div>
        <p>Description</p>
      </div>
    </div>
  </div> -->

</section>


</div>`
import React from 'react'
import Cards from './Cards'

const Home = (props) => {

  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide mx-3">
  <div className="carousel-indicators">
    <button  type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
   
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/05adcdf765d309fd.jpg?q=20" className="d-block w-100" alt="Flipkart"/>
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0bf2958ea096d1f1.png?q=20" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6636e72eeb816708.jpg?q=20" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6338eb7ebef9d5b0.jpg?q=20" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/84ae27f93c14a4e3.jpg?q=20" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6636e72eeb816708.jpg?q=20" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div style={{backgroundColor : "white"}} className='box my-3 mx-4  '>
<h4 className='d-flex justify-content-left'>Best of Electronics</h4>
<div className='d-flex '>
<Cards />

</div>
</div>
    </div>
  )
}

export default Home

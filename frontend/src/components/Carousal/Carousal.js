// import React from 'react'
// import Carousal1a from '../../assets/Carousal 1a.jpg'
// import Carousal1b from '../../assets/Carousal 1b.jpg'
// import Carousal2 from '../../assets/Carousal 2.jpg'
// import Carousal3 from '../../assets/Carousal 3.jpg'

// export default function Carousal() {
//   return (
//     <>
//     <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" style={{height: '80vh'}} data-bs-touch="false" data-bs-ride="carousel">
//         <div className="carousel-indicators">
//             <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//             <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
//             <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         </div>
//         <div className="carousel-inner">
//             <div className="carousel-item d-flex active">
//             <img src={Carousal1a} style={{height: '80vh'}} className="d-block w-100 object-fit-sm-cover border rounded" alt="1" data-bs-interval="2000"/>
//             <img src={Carousal1b} style={{height: '80vh'}} className="d-block w-100 object-fit-sm-cover border rounded" alt="1" data-bs-interval="2000"/>
//             </div>
//             <div className="carousel-item" data-bs-interval="2000">
//             <img src={Carousal2} style={{height: '80vh'}} className="d-block w-100 object-fit-sm-cover border rounded" alt="2"/>
//             </div>
//             <div className="carousel-item" data-bs-interval="2000">
//             <img src={Carousal3} style={{height: '80vh'}} className="d-block w-100 object-fit-sm-cover border rounded" alt="3"/>
//                 <div className="carousel-caption d-none d-md-block">
//                     <h5>First slide label</h5>
//                     <p>Some representative placeholder content for the first slide.</p>
//                 </div>
//             </div>
//         </div>
//         {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//         </button> */}
//     </div>
//     </>
//   )
// }
import React from 'react'
import './Carousal.css';
import Carousal1 from '../../assets/Carousal 1.jpeg'
import Carousal2 from '../../assets/Carousal 2.jpg'
import Carousal3 from '../../assets/Carousal 3.jpg'
import Carousal4 from '../../assets/Carousal 4.jpg'
import Carousal5 from '../../assets/Carousal 5.jpg'

export default function Carousal() {
  return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" style={{height: '80vh'}} data-bs-touch="false" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
            <img src={Carousal1} style={{height: '80vh'}} className="d-block w-100 object-fit-sm-cover border rounded" alt="1"/>
            <div className="carousel-caption d-none d-md-block" style={{textShadow: '2px 2px 5px red'}}>
                    <h5>Multiple Delivery Options</h5>
                    <p>Get your car delivered at Doorstep, Airport, Hub or nearest SPOC location as per your convenience.</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src={Carousal2} style={{height: '80vh'}} className="d-block w-100 object-fit-sm-cover border rounded" alt="2"/>
            <div className="carousel-caption d-none d-md-block" style={{textShadow: '2px 2px 5px red'}}>
                    <h5>Flexible Kms options</h5>
                    <p>Drive our latest car models. Average age of our fleet is 20 months.</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src={Carousal3} style={{height: '80vh'}} className="d-block w-100 object-fit-sm-cover border rounded" alt="3"/>
            <div className="carousel-caption d-none d-md-block" style={{textShadow: '2px 2px 5px red'}}>
                    <h5>Multiple Car Varities</h5>
                    <p>Available all types of models from 2 seater to 8 seater.</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src={Carousal4} style={{height: '80vh'}} className="d-block w-100 object-fit-sm-cover border rounded" alt="4"/>
            <div className="carousel-caption d-none d-md-block" style={{textShadow: '2px 2px 5px red'}}>
            <h5>Secured & fast service</h5>
                    <p>Secure, swift, and stylish: our services offer the perfect blend of efficiency, elegance, and innovation for you</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src={Carousal5} style={{height: '80vh'}} className="d-block w-100 object-fit-sm-cover border rounded" alt="5"/>
                <div className="carousel-caption d-none d-md-block" style={{textShadow: '2px 2px 5px red'}}>
                <h5>Free to roam everywhere</h5>
                    <p>service is available everywhere and free to drive for long tours and trips</p>
                </div>
            </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button> */}
    </div>
    </>
  )
}
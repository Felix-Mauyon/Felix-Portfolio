import Nav from "./Nav";
import afroImg from '../assets/afroImg.png'
import bookImg from '../assets/bookImg.png'
import opImg from '../assets/opImg.png'
import ticImg from '../assets/ticImage.png'
import 'animate.css/animate.min.css'


export default function Portfolio({onclick}){
    return (
        <div className='h-screen flex space-y-[8%]'>
        <Nav click={onclick}/>
        <section id="portfolio" className="w-[80%] mx-auto mb-5 portfolio section bg-bgcol2 bg-opacity-20 p-10 rounded-lg shadow-lg animate__animated animate__fadeInLeft">

        <div className="container section-title " data-aos="fade-up">
          <h2>Portfolio</h2>
          <br />

        </div>

        <div className="container">

          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">Collaborations</li>
              {/* <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-product">Card</li>
              <li data-filter=".filter-branding">Web</li> */}
            </ul>
            <p className="text-red-500">Image Cards not clickable yet</p>

            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img src={afroImg} className="img-fluid" alt=""/>
                <div className="portfolio-info text-black">
                  <h4>Afrolodge</h4>
                  <p>African AirbnB</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src={opImg} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>OP Portfolio Site</h4>
                  <p>A Mock Portfolio Site</p>
                  <a href="https://felix-mauyon.github.io/OP-Portfolio-site/#" title="OP" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img src={ticImg} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Tic-Tac-Toe</h4>
                  <p>A Tic-Tac-Toe Game</p>
                  <a href='https://tic-tac-toe-gilt-mu.vercel.app/' title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img src={bookImg} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>BookShelf App</h4>
                  <p>A BookShelf App</p>
                  <a href="https://bookshelf-mbnb.onrender.com/" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
      </div>
    )
}
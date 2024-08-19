import img from '../assets/fpic.jpg'
import Nav from './Nav'
import 'animate.css/animate.min.css'


export default function About({onclick}){
    return (
<div className='h-screen flex space-y-[8%]'>
    <Nav click={onclick} />
    <section id="about" className="w-[80%] mx-auto mb-5 about section bg-bgcol2 bg-opacity-20 p-10 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>I'm Felix, an aspiring software developer. I love to see lines of code transform into real-life applications. Working towards becoming a fullstack software developer.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src={img} className="img-fluid border-rounded" alt=""></img>
            </div>
            <div className="col-lg-8 content">
              <h2>Web Developer.</h2>
              <p className="fst-italic py-3">
                Languages: HTML, CSS, JavaScript, Python
                <p>Frameworks: ReactJS, Flask Python</p>
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>08 April 2002</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+234 903 377 7308</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Lagos, Nigeria</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Diploma in Computer Science</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>akojenumauyon@gmail.com</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

    </section>
</div>
    )
}
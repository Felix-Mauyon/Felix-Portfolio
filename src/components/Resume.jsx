import Nav from "./Nav"
import 'animate.css/animate.min.css'

export default function Resume({onclick}){
    return (
      <div className='h-full flex space-y-[8%]'>
        <Nav click={onclick}/>
      <section id="resume" className="w-[80%] mx-auto mb-5 resume section bg-bgcol2 bg-opacity-20 p-10 rounded-lg shadow-lg animate__animated animate__fadeInRight">

        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
        </div>

        <div className="container">

          <div className="row">

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>


              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Secondary School</h4>
                <h5>2012 - 2018</h5>
                <p><em>Toyon High School, Ogun</em></p>
              </div>

              <div className="resume-item">
                <h4>Diploma in Computer Science</h4>
                <h5>2023 - 2024</h5>
                <p><em>Kibo School of Technology, NY</em></p>
              </div>

              <div className="resume-item">
                <h4>Bachelor of Electrical and Electronics Engineering</h4>
                <h5>2018 - Present</h5>
                <p><em>University of Lagos, Nigeria</em></p>
              </div>

            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Web Foundations Teaching Assistant</h4>
                <h5>Nov 2023 - Dec 2023</h5>
                <p><em>Kibo School of Technology, NY</em></p>
                <ul>
                  <li>Actively supported and assisted the instructor in teaching over 100 students the foundation of
                  web development.
                  </li>
                  <li> Solidified students' knowledge of HTML and CSS by hosting weekly office hours sessions leading
                  to successful program completion.
                  </li>
                  </ul>
              </div>

              <div className="resume-item">
                <h4>Open Source Frontend Intern</h4>
                <h5>April 2024 - June 2024</h5>
                <p><em>Oppia Foundation (Open Source), Remote
                  </em>
                </p>
                <ul>
                  <li> Improved user accessibility by fixing a bug causing an input text field to remain invisible until
                  clicked</li>
                  <li>
                  Enhanced user experience by implementing a feature that allows users to save their work outside
                  a translation RTE modal.
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </section>
    </div>
    )
}
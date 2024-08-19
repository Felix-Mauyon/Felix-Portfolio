import Nav from "./Nav"
import 'animate.css/animate.min.css'

export default function Contact({onclick}){
    return (
    <div className='h-screen flex space-y-[8%]'>
        <Nav click={onclick}/>
        <section id="contact" className="w-[80%] mx-auto mb-5 contact section bg-bgcol2 bg-opacity-20 p-10 rounded-lg shadow-lg animate__animated animate__fadeInLeft">

        <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        </div>
        <br />

        <div className="container" data-aos="fade" data-aos-delay="100">


        <div className="row gy-4">

            <div className="col-lg-4">

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                <h3>Call Me</h3>
                <p>+234 903 377 7308</p>
                </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                <h3>Email Us</h3>
                <p>akojenumauyon@gmail.com</p>
                </div>
            </div>

            </div>

            <div className="col-lg-8">
            <p className="text-red-500">This is not functional yet</p>
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">

                <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
                </div>

                <div className="col-md-6 ">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
                </div>

                <div className="col-md-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
                </div>

                <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                <button type="submit">Send Message</button>

                </div>
            </form>
            </div>

        </div>

        </div>

        </section>
    </div>
    )
}
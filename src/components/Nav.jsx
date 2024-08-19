import 'animate.css/animate.min.css'

export default function Nav({ click }){
    return(
        <nav className="bg-bgcol1 bg-opacity-90 h-[10%] shadow-md fixed w-full z-10 top-0 left-0 animate__animated animate__fadeInUp">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-primCol text-2xl font-bold no-underline">Felix  Akojenu</a>
          <div className="space-x-5">
            <a href="#home" className="text-primCol text-lg hover:text-accent no-underline" onClick={()=>click('home')}>Home</a>
            <a href="#about" className="text-primCol text-lg hover:text-accent no-underline" onClick={()=>click('about')}>About</a>
            <a href="#about" className="text-primCol text-lg hover:text-accent no-underline" onClick={()=>click('resume')}>Resume</a>
            <a href="#services" className="text-primCol text-lg hover:text-accent no-underline" onClick={()=>click('portfolio')}>Portfolio</a>
            <a href="#contact" className="text-primCol text-lg hover:text-accent no-underline" onClick={()=>click('contact')}>Contact</a>
          </div>
        </div>
      </nav>
    )
}
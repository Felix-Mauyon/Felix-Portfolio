import Home from "./components/Home";
import background from "./assets/background.jpg"
import About from "./components/About";
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import { useState } from "react";


function App() {

  const [page, setPage] = useState('home')

  function handleClick(pageVal){
    setPage((prevPage)=>{
      prevPage = pageVal
      return prevPage
    })
  }

  let renderPage = <Home onclick={handleClick}/>

  if (page === 'about'){
    renderPage = <About onclick={handleClick}/>
  }

  else if (page === 'resume'){
    renderPage = <Resume onclick={handleClick}/>
  }

  else if (page === 'portfolio'){
    renderPage = <Portfolio onclick={handleClick}/>
  }

  else if (page === 'contact'){
    renderPage = <Contact onclick={handleClick}/>
  }

  return (
    <div className="text-primCol exo-2-400 font-custom"
    style={{ backgroundImage: `url(${background})` }}
    >
      {renderPage}
    </div>
  );
}

export default App;

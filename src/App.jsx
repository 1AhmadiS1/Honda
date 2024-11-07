
import './App.css'
import bgbuildings from "./images/building2-DXkDzn_X.jpg"
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';


const bgimage={
  backgroundImage:`url(${bgbuildings})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",
}
function App() {

  return (
    <main style={bgimage} className=' bg-cover bg-center max-w-full overflow-x-hidden'>
<div className=' bg-gradient-to-r from-primary  to bg-primaryDark/90  h-[1280px]'>
  <div className='container'>
{/* navbar components */}
<Navbar/>
{/* Hero components */}
<Hero/>
  </div>
</div>
    </main>
  )
}

export default App

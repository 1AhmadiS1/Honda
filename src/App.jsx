
import './App.css'
import carimg from "./images/car-C1G8urFv.png"
import bgbuildings from "./images/building2-DXkDzn_X.jpg"
import { FaArrowRight } from 'react-icons/fa';
import Navbar from './Components/Navbar/Navbar';
import { motion } from "framer-motion"


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
<section className='grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px] h-[100%]'>
  
{/*text content section*/}
<div className='space-y-8 mt-[100px] md:mt-[20px]'>
<motion.div
   initial={{opacity:0,y:-100}}
   whileInView={{opacity:1,y:0}}
   transition={{
 type:"spring",
 stiffness:100,
 damping:10,
 delay:1.0,
 duration:0.5
 
 
   }}
   className='space-y-8'
   >
<h1 

  className='text-5xl lg:text-7xl font-bold leading-tight capitalize'>honda<br /><span className='uppercase text-transparent text-outline'> sports EV</span></h1>
  <button 
   className='outline-btn flex justify-center items-center gap-4 group'>Explore <FaArrowRight className='group-hover:translate-x-2 transition'/></button>
  
</motion.div>
  
  {/*features section here*/}

<motion.div
   initial={{opacity:0,y:100}}
   whileInView={{opacity:1,y:0}}
   transition={{
 type:"spring",
 stiffness:100,
 damping:10,
 delay:1.2,
 duration:0.5
 
 
   }} className='bg-black/40 p-6 space-y-2 lg:max-w-[350px] text-white'>
  <h1 className='text-xl uppercase'>Vehicle features</h1>
  <p className='text-xs leading-loose '>The car features rear-hinged suicide doors. Yuki Terai is credited with the exterior design. The interior fits four adults, with the front passengers seated on a single bench seat. The dashboard is decorated in wood trim with a long digital screen as the instrument and infotainment panel</p>
</motion.div>
</div>
<div className='relative'>
{/* image section */}
<motion.img
initial={{opacity:0,x:200}}
whileInView={{opacity:1,x:0,scale:1.4}}
transition={{
type:"spring",
stiffness:100,
damping:10,
delay:1.2,
duration:0.5


}}
src={carimg} alt="" className='w-full md:w-auto relative z-30' />
{/* glowing circle */}
<motion.div
initial={{opacity:0,y:0,scale:0.5}}
whileInView={{opacity:1,y:0,scale:1.2}}
transition={{
  type:"spring",
  stiffness:100,
  damping:10,
  delay:0.8,
  duration:0.8
  
  
  }}
className="absolute top-0 left-1/2 border-cyan-200 rounded-full h-[180px] w-[180px] md:h-[300px] md:w-[300px] border-[20px] glowing-shadow"></motion.div>
{/* bg text here */}


<motion.div
initial={{opacity:0,x:-100}}
whileInView={{opacity:1,x:0}}
transition={{
  type:"spring",
  stiffness:100,
  damping:10,
  delay:1.4,
  duration:0.8
  
  
  }}
className='absolute -top-40 left-0 z-[1]'>
  <h1 className='text-[120px] font-bold text-cyan-200/10'>Sport</h1>
</motion.div>
</div>

</section>
  </div>
</div>
    </main>
  )
}

export default App

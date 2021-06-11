import React, {useEffect, useRef} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import fclogo from './img/fclogo.png' 
import './App.css'

function App() {

//const header = useRef(null)
const logo = useRef(null)

gsap.registerPlugin(ScrollTrigger)

  // useEffect(() => {
  //   // Add animations to be played once page has loaded here
  //   gsap.to(header.current, {color: '#05F775', duration: 2})
  // }, [header])

  useEffect(() => {
    gsap.to(logo.current, {
      rotate: 360,
      scrollTrigger: {
        trigger: logo.current,
        markers: true,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1,
      },

    })
  }, [logo])

  return (
    <div className="App">
      { /* <h1 ref={header}>Hello GSAP World!</h1> */}
      <img className='fclogo' ref={logo} src={fclogo} />
    </div>
  );
}

export default App;

"use client"
import { useState } from 'react'
import '../companies/globals.css'
import {FaMeta} from 'react-icons/fa6'
import {FaXTwitter} from 'react-icons/fa6'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import {GrPrevious} from 'react-icons/gr'
import {GrNext} from 'react-icons/gr'
import Link from 'next/link'
import Image from 'next/image'


function App() {

  const content = ["Bal Raksha Bharat", "Child Help Foundation", "Child Rights And You", "Rocket Learning"]
  const [sliderIndex, setSliderIndex] = useState(0)

  function increment() {
    if (sliderIndex === content.length-1) {
      setSliderIndex(0)
    } else {
      setSliderIndex(sliderIndex => sliderIndex + 1)
    }
  }

  function decrement() {
    if (sliderIndex === 0) {
      setSliderIndex(content.length-1)
    } else {
      setSliderIndex(sliderIndex => sliderIndex - 1)
    }
  }

  return (
    <div className='thewholepage'>

      <div className='header'>
        <Link href="../" className='text-black'><AiOutlineArrowLeft size={25} className=' float-left'></AiOutlineArrowLeft></Link>
        <div className='languages'>
          <button>Hindi</button>
          <button>English</button>
          <button>Marathi</button>
        </div>
      </div>

      <div className='integrationswithorgs'>
        <h1 style={{color: "black"}}>Integration with Organizations</h1>
      </div>

      <div className="slider">
        <button onClick={decrement}><GrPrevious></GrPrevious></button>
        <h1 className=' text-2xl'>{content[sliderIndex]}</h1>
        <button onClick={increment}><GrNext ></GrNext></button>
      </div>
      
      <div className='more-info'>

        <div className='even-more-info'>
          <h1>Integration With Different Organizations</h1>
        </div>

        <div className='reach-out'>
          <h1>Reach out to the Organizations</h1>
        </div>

        <div className='images'>
          <Image src="/BalRakshaBharat.jpg" height={100} width={100}></Image>
          <Image src="/ChildHelpFoundation.jpg" height={100} width={100}></Image>
          <Image src="/ChildRightsAndYou.jpg" height={100} width={100}></Image>
          <Image src="/RocketLearning.png" height={100} width={100}></Image>
        </div>

      </div>

      <footer>
      <div className="footer-items">
        <ul>
          <h3>Get to Know Us</h3>
          <li><a href="#" className='flex flex-row justify-evenly py-2'>About us</a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-2'>Resources</a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-2'>Press Release</a></li>
        </ul>
        <ul>
          <h3>Connect with Us</h3>
          <li><a href="#" className='flex flex-row justify-evenly py-2'>Facebook<FaMeta></FaMeta></a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-2'>Twitter<FaXTwitter></FaXTwitter></a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-2'>Instagram<AiOutlineInstagram></AiOutlineInstagram></a></li>
        </ul>
        <ul>
          <h3>Let Us Help You</h3>
          <li><a href="#" className='flex flex-row justify-evenly py-1'>Your Account </a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-1'>COVID-19</a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-1'>Mental Support</a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-1'>Help</a></li>
        </ul>
      </div>
    </footer>


    </div>
  )
}

export default App
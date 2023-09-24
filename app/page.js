"use client"
import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaMeta} from 'react-icons/fa6'
import {FaXTwitter} from 'react-icons/fa6'
import { AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link'
import './i18n' 
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const loacales = {
  en: { title: 'English'},
  hi: {title: "Hindi"},
  ma:{title:"Marathi"}

}



export default function Home() {
  const { t, i18n } = useTranslation();
  
  return (
    <body>
    <header>
      <nav className="navbar">
        <div className="nav-logo">
          <a href="#"><Image src="/logo.jpg" width={500}
        height={500}></Image></a>
        </div>
        <div className="f">
          <a href="#" className="faq">{t('main.FAQ')}</a>
        </div>

        <div className="nav-search">
          <select className="select-search text-black">
            <option className='text-black'>{t('main.ALL')}</option>
            <option>{t('main.All Categories')}</option>
            <option>{t('main.Right 01')}</option>
            <option>{t('main.Right 02')}</option>
          </select>
          <input type="text" placeholder="Search " className="search-input"/>
          <div className="search-icon">
            <span className="material-symbols-outlined"><AiOutlineSearch></AiOutlineSearch></span>
          </div>
        </div>

        <div className="sign-in">
         <a href="#"> <p>{t('main.Register')}</p>
          <span>{t('main.Log in')}</span></a>
        </div>

        <div className="talk">
          <a href="#"><p>{t('main.Talk')}</p>
            <span> {t('main.With us')}</span></a>
        </div>

        <div className="no">
            <p>{t('main.Helpline')} <br/>
              1234567891
            </p>
        </div>
      </nav>
      
      <div className="banner">
        <div className="banner-content">
          <div className="panel">
            <span className="material-symbols-outlined"><AiOutlineMenu></AiOutlineMenu></span>
            {/* <a href="#">{t('main.ALL')}</a> */}
          </div>
  
          <ul className="links">
            <li><button className=' hover:text-blue-600' onClick={() => i18n.changeLanguage("en")}>English</button></li>
            <li><button className=' hover:text-blue-600' onClick={() => i18n.changeLanguage("hi")}>Hindi</button></li>
            <li><button className=' hover:text-blue-600' onClick={() => i18n.changeLanguage("ma")}>Marathi</button></li>
          </ul>
          <div className="vision">
            <button className=' hover:text-blue-600' href="#">{t('main.Our Vision')}</button>
          </div>
        </div>
      </div>
    </header>

    <section className=""><Image src="/background.jpg" height={100} width={1920} className=' bg-fixed'></Image></section>

    <section className="blursection flex flex-row justify-center bg-black" >
      <div className="blurimages"/>
        <div className="blurlink py-3 px-9 flex flex-col whitespace-nowrap hover:cursor-pointer hover:text-blue-700" id="1">
          <Link href="/chapter-1" className=' text-white hover:text-blue-700'>Current Module</Link>
          <a href="/chapter-1"><Image src="/chapter-1.jpg" alt="card" width={350} height={100}/></a>
          <Link href="/chapter-1" className=' text-white hover:text-blue-700'>Continue</Link>
        </div>
        <div className="blurlink py-3 px-9 flex flex-col whitespace-nowrap hover:cursor-pointer hover:text-blue-700" id="2">
          <h3 className=' text-white hover:text-blue-700'>Next Chapter</h3>
          <Image src="/chapter-2.jpg" alt="card" width={350} height={100}/>
          <a href="#" className=' text-white hover:text-blue-700'>Start</a>
        </div>
        <div className="blurlink py-3 px-9 flex flex-col whitespace-nowrap hover:cursor-pointer hover:text-blue-700" id="3">
          <h3 className=' text-white hover:text-blue-700'>Next Chapter</h3>
          <Image src="/chapter-3.jpg" alt="card" width={350} height={100}/>
          <a href="#" className=' text-white hover:text-blue-700'>Start</a>
        </div>
    </section>

    <section className="boxsection">
      <div className="boximages">
        <div className="boxlink">
          <h3>Integrations With Companies</h3>
          {/* <Image src="#" alt="card" width={500}
        height={500}/> */}
          <Link href='/companies'>Go</Link>
        </div>
        <div className="boxlink">
          <h3>Community and Collab</h3>
          {/* <Image src="#" alt="card" width={500}
        height={500}/> */}
          <a href="#">Go</a>
        </div>
        <div className="boxlink">
          <h3>Legal Support</h3>
          {/* <Image src="#" alt="card" width={500}
        height={500}/> */}
          <a href="#">Go</a>
        </div>
        <div className="boxlink">
          <h3>Articles/Newsletters</h3>
          {/* <Image src="#" alt="card" width={500}
        height={500}/> */}
          <a href="#">Go</a>
        </div>
        <div className="boxlink">
          <h3>Mental Health</h3>
          {/* <Image src="#" alt="card" width={500}
        height={500}/> */}
          <a href="#">Go</a>
        </div>
        <div className="boxlink">
          <h3>Support</h3>
          {/* <Image src="#" alt="card" width={500}
        height={500}/> */}
          <a href="#">Go</a>
        </div>
      </div>
    </section>

    <footer>
      <Link href="/" className="footer-title" scroll>
        Back to top
      </Link>
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

</body>
  )
}

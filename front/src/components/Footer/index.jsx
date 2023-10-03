import React from 'react'
import s from './style.module.css'
import GoogleMap from './GoogleMap'
import insta from '../../Media/insta.png'
import whatsapp from '../../Media/whatsapp.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
	<div className={s.wrapper}>
	<div className={s.text_container}> 
	  <div>
		<h1>Contact</h1>
		<p className={s.number}> <a href="+49 999 999 99 99"> +49 017636813732</a></p>
		<div className={s.social_media_content}>
		<div className={s.icon}>
		  <a href="https://www.instagram.com/tel_ran/">
		  <img src={insta} alt="" /></a>
		  <p>Instagram</p>
		</div>
		<div className={s.icon}>
		  <a href="https://api.whatsapp.com/send?phone=%2B493083797477&app=facebook&entry_point=page_cta&fbclid=IwAR3eUU2FYqyUPJNi23MAOH_es4Bg4zLhFCDPPH1volXz6W4XI9lfqXrgoBc">
		  <img src={whatsapp} alt="" />
		  </a>
		  <p>WhatsApp</p>
		</div>
		</div>
	  </div>
	  <div>
		<h1>Address</h1>
    <Link to={' '}>
    <div className={s.strasse}>
		  <p >Steinmetzstr. 17a,</p>
		  <p >Königswinter, Deutschland</p>
    </div>
    </Link>
		<p className={s.hours}>Working Hours:</p>
		<p className={s.time}>24 hours a day</p>
	  </div>
	</div>
	<div className={s.google}>
		<GoogleMap />
      {/* <div className={s.h5}>  <h6>The Best Shop For The Best goods (c)</h6>
    <h6>2023</h6>
     </div> */}
  </div>
  </div>
  
  )
}

import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import Swiper from "swiper"
import saurav from '../assets/images/saurav.jpg'
import happy from '../assets/images/happy.jpg'
import prabal from '../assets/images/prabal.jpg'
import kade from '../assets/images/kade.jpg'
import Avatar from '../assets/images/Avatar.png'
import { useEffect } from 'react'
import Image from 'next/image'
const Reviews = () => {
  
useEffect(()=>{
  var swiper = new Swiper(".Swiper", {
    slidesPerView: 2,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper1 = new Swiper(".Swiper1", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
},[])
  

  



  return (
    <div className="section reviews">
      <h1>Trainers</h1>
      <div className="scrollDown">
        <div className="scrollDown__wheel">
          <div className="scrollDown__wheel--inner"></div>
        </div>
        <div className="scrollDown__arrow">
          <span className="scrollDown__arrow"></span>
          <span className="scrollDown__arrow"></span>
          <span className="scrollDown__arrow"></span>
        </div>
      </div>
      <div className="swiper__wrapper">
        <div className="Swiper1">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><div className="reviews__header">
              <div className="instructor">
                <div className="instructor__curve"></div>
                <div className="instructor__infos">
                 <Image className="instructor__img" src={saurav}/>
                  <div className="instructor__col">
                    <div className="instructor__info">
                      <span>Boxing</span>
                    </div>
                    <div className="instructor__info">
                      <span>Callesthenics</span>
                    </div>
                    <div className="instructor__info">
                      <span>Parkour</span>
                    </div>
                    <div className="instructor__info">
                      <span>Body Building</span>
                    </div>
                    <div className="instructor__info">
                      <span>Gymnastics</span>
                    </div>
                    <div className="instructor__info">
                      <span>Animal Flow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
            <div className="swiper-slide"><div className="reviews__header">
              <div className="instructor">
                <div className="instructor__curve"></div>
                <div className="instructor__infos">
                  <Image
                    src={happy}
                    alt=""
                    className="instructor__img"
                  />
                  <div className="instructor__col">
                    <div className="instructor__info">
                      <span>Zumba</span>
                    </div>
                    <div className="instructor__info">
                      <span>Yoga</span>
                    </div>
                    <div className="instructor__info">
                      <span>Dance</span>
                    </div>
                    <div className="instructor__info">
                      <span>Body Weight Training </span>
                    </div>
                    <div className="instructor__info">
                      <span>Fat loss Expert </span>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
            <div className="swiper-slide"><div className="reviews__header">
              <div className="instructor">
                <div className="instructor__curve"></div>
                <div className="instructor__infos">
                  <Image
                    src={prabal}
                    alt=""
                    className="instructor__img"
                  />
                  <div className="instructor__col">
                    <div className="instructor__info">
                      <span>Yoga</span>
                    </div>
                    <div className="instructor__info">
                      <span>Fat loss Training</span>
                    </div>
                    <div className="instructor__info">
                      <span>Resistance Training</span>
                    </div>
                    <div className="instructor__info">
                      <span>Body Building</span>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
            <div className="swiper-slide"><div className="reviews__header">
              <div className="instructor">
                <div className="instructor__curve"></div>
                <div className="instructor__infos">
                  <Image
                    src={kade}
                    alt=""
                    className="instructor__img"
                  />
                  <div className="instructor__col">
                    <div className="instructor__info">
                      <span>Tabata Expert</span>
                    </div>
                    <div className="instructor__info">
                      <span>Callesthenics</span>
                    </div>
                    <div className="instructor__info">
                      <span>Kalari</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
          
          </div>
          
          </div>
      {/* <!-- Swiper --> */}
      <h1>Reviews</h1>
      <div className="scrollDown1">
        <div className="scrollDown__wheel">
          <div className="scrollDown__wheel--inner"></div>
        </div>
        <div className="scrollDown__arrow">
          <span className="scrollDown__arrow"></span>
          <span className="scrollDown__arrow"></span>
          <span className="scrollDown__arrow"></span>
        </div>
      </div>
      <div className="swiper__wrapper">
        <div className="Swiper">
          <div className="swiper-wrapper">
            
            <div className="swiper-slide">
              <div className="review">
                <div className="review__card">
                  <div className="review__topborder"></div>
                  <div className="review__text">
                    <span>S</span>
                    aurav is Very good trainer. He Never forces me to workout he make me enjoy the workout I do.Learn some new skills wish makes me fir on the way.
                  </div>
                  <Image src={Avatar} alt="" className="review__img"/>
                  <div className="review__profile">
                    <span>Adamya Kumar</span>
                    <span>Shivalik Nagar</span>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="swiper-slide">
              <div className="review">
                <div className="review__card">
                  <div className="review__topborder"></div>
                  <div className="review__text">
                    <span>P</span>
                    rabal Helped me get me confidence back .He helped me lose more than 30 kgs by Power Yoga.Thanks for all the help Prabal
                  </div>
                  <Image src={Avatar} alt="" className="review__img"/>
                  <div className="review__profile">
                    <span>Anshul Jha</span>
                    <span>Shivalik Nagar</span>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="swiper-slide">
              <div className="review">
                <div className="review__card">
                  <div className="review__topborder"></div>
                  <div className="review__text">
                    <span>S</span>
                    ubham choreographed my wedding dance. It was the best I could Have Imagine. Thanks Subham 
                  </div>
                  <Image src={Avatar} alt="" className="review__img"/>
                  <div className="review__profile">
                    <span>Arpita Goyal</span>
                    <span>Jwalapur</span>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="swiper-slide">
              <div className="review">
                <div className="review__card">
                  <div className="review__topborder"></div>
                  <div className="review__text">
                    <span>S</span>
                    ubham Helped me get my slim physique by Zumba after my first child. Thanks alot subham to help me getting into shape again And attend the parties confidently.
                  </div>
                  <Image src={Avatar} alt="" className="review__img"/>
                  <div className="review__profile">
                    <span>Aarti Arora</span>
                    <span>Jwalapur</span>
                  </div>
                </div>
              </div>
              
            </div>
            

        
          </div>
          <div className="swiper-pagination"></div>
        </div>
    
      </div>
    </div>
    </div>
    </div>
  )
}

export default Reviews
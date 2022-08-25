import React from 'react'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";
import "./Cards.css";
import cardBg from './card.png'
import {useState,  useEffect } from 'react';

const Cards = () => {
  const data = [
    {
              src:'images/img-9.jpg',
              title:"Home & interior images",
              id:1
            },
            {
              src:'images/img-8.jpg',
              title:"Enjoy Nature's serenity",
              id:2
            },
            {
              src:'images/img-5.jpg',
              title:"Beach and oceanic veiw",
              id:3
            },
            {
              src:'images/img-3.jpg',
              title:'Landscape Aesthetics',
              id:4
          },
            {
              src:'images/img-14.jpg',
              title:'Anime Themed images',
              id:5
          },
            {
              src:'images/img-13.jpg',
              title:'Abstract Aesthetics',
              id:6
            }
  ]
  const [scrolled , setScrolled] = useState(false)
  useEffect(() => {
    const scrollHandle = () => {
      if (window.scrollY > 60) setScrolled(true)
      else setScrolled(false);
    }
    window.addEventListener("scroll", scrollHandle)
    return ()=> window.removeEventListener("scroll",scrollHandle)
  })
  return (
    <div className='container'>
      <div className={scrolled ? 'skill in' : 'skill'}>
        <h1>Check out these Awesome Categories</h1>
        <div className='wrapper'>
          <Splide
            options={{
              perPage: 3,
              arrows: true,
              rewind: true,
              pagination: true,
              autoplay: true,
              pauseOnHover: false,
              resetProgress: true,
              drag: "free",
              gap: "3rem",
            }}
          >
            {data.map((image) => {
              return (
                <SplideSlide className='slide-card' key={image.id}>
                  <div className="card">
                    <Card>
                      <img src={image.src} alt={image.title} />
                      <Gradient />
                    </Card>
                    <P>{image.title}</P>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
      <img src={cardBg} alt="card-bg" className='card-bg'/>
    </div>
  );
}
const Card = styled.div`
  max-height: 20rem;
  height: 15rem;
  max-width: 100%;
  border-radius: 2px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 500ms ease-in-out;
  }
  &:hover img {
    transform: scale(1.05);
  }
  @media (max-width: 760px) {
    width: 100%;
    height: 7rem;
    border-radius: 8px;
    img {
      border-radius: 8px;
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    height: 5rem;
    border-radius: 8px;
    img {
      border-radius: 8px;
    }
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

const P = styled.p`
  position: relative;
  z-index: 1;
  bottom: 0%;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: #fff;
  @media (max-width: 760px) {
    top: 0;
    font-size: 0.62rem;
  }
`; 
export default Cards

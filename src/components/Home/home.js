import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './home.css';
import bg from '../../assets/foto-danis.jpg';

import { Link } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  useEffect(() => {
    const options = {
      strings: ['Danis Keysara Saputra'],
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 2000,
      smartBackspace: true,
      cursorChar: '_',
      loop: true,
    };
    const typed = new Typed('.typed-element', options);
    return () => {
      typed.destroy();
    };
    
  }, []);

  return (
    <section id='home'>
      <div className="home-container" data-aos="fade-down">
        <span className="hello">Hello!</span>
        <span className="introduction">Saya</span>
        <span className="typed-element"></span>
        <p className="deskripsi">
          Mahasiswa Pendidikan Ilmu Komputer A
          <br />
          Universitas Pendidikan Indonesia, angkatan tahun 2022
        </p>
        <Link to='/about' className="selengkapnya">
          <button className="button">Selengkapnya</button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Home;



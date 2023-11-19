import React, { useEffect } from "react";
import './galery.css';
import Foto1 from '../../assets/1-foto.jpg';
import Foto2 from '../../assets/2-foto.jpg';
import Foto3 from '../../assets/3-foto.jpg';
import Foto4 from '../../assets/4-foto.jpg';
import Foto5 from '../../assets/5-foto.jpg';
import Foto6 from '../../assets/6-foto.jpeg';

import AOS from "aos";
import "aos/dist/aos.css";

const Galery = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <section id='galery'>
      <h2 className="judul-galery" data-aos="fade-up">Galery</h2>
      <span className="deskripsi-galery" data-aos="fade-up" data-aos-delay="200">Dokumentasi selama menempuh pendidikan</span>
      <div className="galery-container" data-aos="fade-up" data-aos-delay="400">
        <img src={Foto1} alt="" className="foto" />
        <img src={Foto2} alt="" className="foto" />
        <img src={Foto3} alt="" className="foto" />
        <img src={Foto4} alt="" className="foto" />
        <img src={Foto5} alt="" className="foto" />
        <img src={Foto6} alt="" className="foto" />
      </div>
    </section>
  );
} 

export default Galery;

import React, { useEffect } from 'react';
import './about.css';
import webDesign from '../../assets/webDesign.jpg';
import pemograman from '../../assets/pemograman-logo.jpg';
import memancing from '../../assets/logo-almada.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <section id='about'>
      <span className="judul-about" data-aos="fade-up"> About </span>

      <span className="deskripsi-about" data-aos="fade-up" data-aos-delay="200">
        Perkenalkan nama saya Danis, Saya adalah seorang mahasiswa pendidikan ilmu komputer. Saya sangat senang berjemur di bawah sinar matahari. Berjemur membuat saya menjadi lelaki yang lebih matang.
      </span>

      <div className="about-content" data-aos="fade-up" data-aos-delay="200">
        <div className="about-container">
          <img src={webDesign} alt="webDesign" className="skillBarImg" />
          <div className="skillBarText">
              <h2 className="judul">Biodata</h2>
            <p className="deskripsi-singkat">Saya lahir di Bandung pada 24 Desember. Saya tinggal di Derwati Bandung.</p>
          </div>
        </div>

        <div className="about-container">
          <img src={pemograman} alt="pemograman" className="skillBarImg" />
          <div className="skillBarText">
              <h2 className="judul">Pendidikan</h2>
            <ul className="deskripsi-singkat-list">
              <li>SDN Rancasawo 02</li>
              <li>SMPN 48 Bandung</li>
              <li>SMAN 21 Bandung</li>
              <li>Universitas Pendidikan Indonesia S1 Pendidikan Ilmu Komputer</li>
            </ul>
          </div>
        </div>


        <div className="about-container">
          <img src={memancing} alt="memancing" className="skillBarImg" />
          <div className="skillBarText">
              <h2 className="judul">Hobi</h2>
            <p className="deskripsi-singkat">Di waktu senggang saya sangat suka menghabiskan waktu dengan mempelajari desain grafis, problem solving, dan sesekali pergi 'memancing'</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import './banner.css'
import SideMenu from "../../components/HeaderMenu/HeaderMenu";
import '@google/model-viewer';

const Banner: React.FC = () => {

  return (
    <>
        <section id="bannerSection" className="bannerSection">
            <SideMenu />
            <div className="conj-banner">
              <div className="panel-inclinado">

                <div className="tablet-v-bann">
                  <h1 className="nm-ban">Estudio Juridico Chizzini</h1>
                  <h1><span className="blue-color">Tus Abogados</span> De Confianza</h1>
                  <p>En Estudio Jurídico Contable M&L brindamos asesoramiento legal y contable integral a personas y empresas. Nos enfocamos en ofrecer soluciones claras, trato humano y un acompañamiento personalizado en cada etapa. Estamos ubicados en Avellaneda, a minutos de CABA.</p>
                  <div className="Contact-sectionBann">
                    <button onClick={() => location.href="#Contact-section"}>CONTACTAR</button>
                    <div className="Icons-ban">
                      <i className="fa-brands fa-instagram blue-background"></i>
                      <i className="fa-brands fa-linkedin blue-background"></i>
                      <i className="fa-regular fa-envelope blue-background"></i>
                      <i onClick={() => location.href="https://api.whatsapp.com/send?phone=541125491150"} className="fa-brands fa-whatsapp blue-background"></i>
                    </div>
                  </div>
                </div>

              </div>
              <div className="ab-bann">
                <h1 className="nm-ban">Estudio Juridico Contable ML</h1>
                <h1><span className="blue-color">Tus Abogados</span> De Confianza</h1>
                <p>En Estudio Jurídico Contable M&L brindamos asesoramiento legal y contable integral a personas y empresas. Nos enfocamos en ofrecer soluciones claras, trato humano y un acompañamiento personalizado en cada etapa. Estamos ubicados en Avellaneda, a minutos de CABA.</p>
                <div className="Contact-sectionBann">
                  <button onClick={() => location.href="#Contact-section"}>CONTACTAR</button>
                  <i className="fa-brands fa-instagram blue-background"></i>
                  <i className="fa-brands fa-linkedin blue-background"></i>
                  <i className="fa-regular fa-envelope blue-background"></i>
                  <i onClick={() => location.href="https://api.whatsapp.com/send?phone=541125491150"} className="fa-brands fa-whatsapp blue-background"></i>
                </div>
              </div>
            </div>
        </section>
    </>

  );
};

export default Banner;
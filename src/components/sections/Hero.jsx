import React from "react";
import Container from "../layout/Container";
import Ilustration from "../../assets/img/hero-ilustration.svg";

const Hero = () => {
  var Recaptcha = require("react-recaptcha");

  // specifying your onload callback function
  var callback = function () {
    console.log("Done!!!!");
  };

  // specifying verify callback function
  var verifyCallback = function (response) {
    console.log(response);
  };

  return (
    <section className="hero p-5 min-h-screen flex flex-col justify-center items-center">
      <Container myClass="space-y-5 lg:space-y-3">
        <div className="top-hero flex lg:justify-end">
          <div className="w-full lg:w-7/12 space-y-4">
            <h4 className="text-2xl font-bold text-primary">
              Wujudkan Indonesia Sehat Dengan Mengikuti Program Vaksinasi
              COVID-19
            </h4>
            <p className="text-gray-500 text-sm tracking-wide">
              Ayo dukung program pemerintah dalam menanggulangi pandemi COVID-19
              dengan ikut melaksanakn kegiatan vaksinasi yang telah disediakan
              oleh pemerintah, demi terwujudnya indonesia yang lebih baik
            </p>
          </div>
        </div>
        <div className="w-full h-60 bg-hero bg-cover rounded-lg relative">
          <img
            className="hidden absolute bottom-2 lg:block lg:w-5/12 h-customHero"
            src={Ilustration}
            alt=""
          />
          <div className="w-full absolute lg:-bottom-16 flex flex-col items-center">
            <div className="w-full lg:w-11/12 bg-white px-10 py-6 space-y-5 rounded-lg shadow-lg">
              <div className="w-full flex justify-center items-center">
                <h4 className="text-primary text-lg font-bold capitalize">
                  Periksa status vaksinasi anda
                </h4>
              </div>
              <div className="w-full rounded-lg flex flex-col space-y-2 lg:space-x-5 lg:flex-row lg:space-y-0">
                <div className="w-full lg:w-4/12 flex justify-center items-center">
                  <input
                    type="text"
                    className="w-full h-10 rounded-md border-none bg-blue-50 text-primary placeholder-blue-500 text-xs icon-user pl-10  py-2"
                    placeholder="Nama Lengkap"
                  />
                </div>
                <div className="w-full lg:w-4/12 flex justify-center items-center">
                  <input
                    type="text"
                    className="w-full h-10 rounded-md border-none bg-blue-50 text-primary placeholder-blue-500 text-xs icon-nik pl-10 py-2"
                    placeholder="Nomor KTP"
                  />
                </div>
                <div className="w-full lg:w-3/12">
                  <div className="capctha origin-left">
                    <Recaptcha
                      sitekey="6Le_aHwcAAAAAOJjQhT7lqab05ydRd1Fhk04BwlC"
                      render="explicit"
                      verifyCallback={verifyCallback}
                      onloadCallback={callback}
                    />
                  </div>
                </div>
                <div className=" w-full lg:w-2/12 flex justify-center items-center">
                  <button className="bg-secondary-color text-gray-100 w-full h-10 text-xs py-2 uppercase rounded-md font-bold tracking-wider">
                    cek
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

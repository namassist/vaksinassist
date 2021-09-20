import React from "react";
import Map from "../../assets/img/maps.png";
import Container from "../layout/Container";

const Faskes = () => {
  return (
    <section className="faskes py-5 bg-map bg-cover text-white">
      <Container>
        <div className="flex flex-col justify-center items-center space-y-10 lg:space-x-8 lg:flex-row lg:space-y-0">
          <div className="w-full lg:w-6/12 space-y-10 text-center lg:text-left">
            <h4 className="text-2xl font-bold lg:tracking-wider">
              Temukan Fasilitas Kesehatan yang Melayani Vaksinasi COVID-19
            </h4>
            <div className="flex items-center justify-center space-x-2 lg:justify-start">
              <div className="w-7/12">
                <input
                  type="text"
                  className="w-full h-10 rounded-md border-custom bg-blue-50 text-primary placeholder-blue-500 text-xs icon-search pl-10 py-2"
                  placeholder="Cth: Puskesmas Gempol"
                />
              </div>
              <div className="w-2/12 flex justify-center items-center">
                <button className="bg-secondary-color text-gray-100 w-full h-10 text-xs py-2 uppercase rounded-md font-bold tracking-wider">
                  Cari
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <img
              className="w-full rounded-md shadow-xl "
              src={Map}
              alt="gambar map"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faskes;

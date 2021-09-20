import React from "react";
import Container from "../layout/Container";
import { Line } from "react-chartjs-2";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import Dosis1 from "../../assets/img/dosis1.svg";
import Dosis2 from "../../assets/img/dosis2.svg";
import StatsBar from "../../assets/img/stats.svg";

const Vaccine = () => {
  const data = {
    labels: [
      "April 2021",
      "Mei 2021",
      "Juni 2021",
      "Juli 2021",
      "Agustus 2021",
      "September 2021",
    ],

    datasets: [
      {
        label: "Dosis 1",
        data: [10, 14, 25, 32, 45, 57],
        fill: false,
        backgroundColor: "#4f65e9",
        borderColor: "rgba(79, 101, 233,.5)",
      },
      {
        label: "Dosis 2",
        data: [4, 10, 19, 29, 30, 35],
        fill: false,
        backgroundColor: "#ab3adb",
        borderColor: "rgba(171, 58, 219, .5)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "rgb(255, 99, 132)",
        },
      },
    },
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          callback: function (value, index, values) {
            return `${value}%`;
          },
        },
      },
    },
  };

  return (
    <section className="vaccine p-5">
      <Container myClass="space-y-14">
        <div className="w-full text-center space-y-2">
          <h4 className="font-bold text-2xl text-primary uppercase tracking-wide">
            Update informasi vaksin
          </h4>
          <p className="text-sm text-primary font-bold animate-pulse tracking-wider">
            Kamis, 14 September 2021 | 19.00 WIB
          </p>
        </div>
        <div className="w-full flex flex-col items-center space-y-10 lg:space-x-5 lg:flex-row lg:space-y-0">
          <div className="w-full lg:w-4/12 flex flex-col font-bold items-center space-y-3 text-secondary">
            <img src={Dosis1} alt="gamabar suntikan" />
            <p className="text-3xl animate-pulse">53.947.124</p>
            <p className="text-sm">Total Vaksinasi Dosis 1</p>
          </div>
          <div className="w-full lg:w-4/12 flex flex-col font-bold items-center space-y-3 text-fifth">
            <img src={Dosis2} alt="gamabar suntikan" />
            <p className="text-3xl animate-pulse">23.652.087</p>
            <p className="text-sm">Total Vaksinasi Dosis 2</p>
          </div>
          <div className="w-full lg:w-4/12 flex flex-col font-bold items-center space-y-3 text-sixth">
            <img src={StatsBar} alt="gamabar suntikan" />
            <p className="text-3xl animate-pulse">84,6%</p>
            <p className="text-sm">Presentase Belum Divaksin</p>
          </div>
        </div>
        <div className="w-full h-chart">
          <Line data={data} options={options} />
        </div>
        <div className="w-full space-y-8">
          <div className="w-full font-bold text-primary text-lg">
            Top Vaksinasi Provinsi
          </div>
          <div className="w-full flex flex-col items-center space-y-10 lg:space-x-20  lg:flex-row lg:space-y-0">
            <div className="w-full lg:w-4/12 flex space-x-5 items-center justify-center p-5">
              <div className="w-6/12">
                <CircularProgressbarWithChildren
                  value={70}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#0b1469",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                  })}
                >
                  <div className="text-xs tracking-wide text-gray-200 flex flex-col justify-center items-center p-1">
                    <p className="-mt-2">70%</p>
                    <p>rata rata</p>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="w-6/12 tracking-wider text-xs text-primary">
                <h4 className="mb-2 text-sm font-bold ">DKI Jakarta</h4>
                <div className="progressbar-1 mb-2 leading-relaxed">
                  <p>Dosis 1 : 80%</p>
                  <div class="h-1 relative max-w-xl rounded-full overflow-hidden">
                    <div class="w-full h-full bg-gray-200 absolute"></div>
                    <div
                      class="h-full bg-primary-color absolute"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="progressbar-1 mb-2 leading-relaxed">
                  <p>Dosis 2 : 60%</p>
                  <div class="h-1 relative max-w-xl rounded-full overflow-hidden">
                    <div class="w-full h-full bg-gray-200 absolute"></div>
                    <div
                      class="h-full bg-fifth-color absolute"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 flex space-x-5 items-center justify-center p-5">
              <div className="w-6/12">
                <CircularProgressbarWithChildren
                  value={54}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#0b1469",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                  })}
                >
                  <div className="text-xs tracking-wide text-gray-200 flex flex-col justify-center items-center p-1">
                    <p className="-mt-2">54%</p>
                    <p>rata rata</p>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="w-6/12 tracking-wider text-xs text-primary">
                <h4 className="mb-2 text-sm font-bold ">NTB</h4>
                <div className="progressbar-1 mb-2 leading-relaxed">
                  <p>Dosis 1 : 68%</p>
                  <div class="h-1 relative max-w-xl rounded-full overflow-hidden">
                    <div class="w-full h-full bg-gray-200 absolute"></div>
                    <div
                      class="h-full bg-primary-color absolute"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                </div>
                <div className="progressbar-1 mb-2 leading-relaxed">
                  <p>Dosis 2 : 40%</p>
                  <div class="h-1 relative max-w-xl rounded-full overflow-hidden">
                    <div class="w-full h-full bg-gray-200 absolute"></div>
                    <div
                      class="h-full bg-fifth-color absolute"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 flex space-x-5 items-center justify-center p-5">
              <div className="w-6/12">
                <CircularProgressbarWithChildren
                  value={44}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#0b1469",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                  })}
                >
                  <div className="text-xs tracking-wide text-gray-200 flex flex-col justify-center items-center p-1">
                    <p className="-mt-2">44%</p>
                    <p>rata rata</p>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="w-6/12 tracking-wider text-xs text-primary">
                <h4 className="mb-2 text-sm font-bold ">Jawa Timur</h4>
                <div className="progressbar-1 mb-2 leading-relaxed">
                  <p>Dosis 1 : 52%</p>
                  <div class="h-1 relative max-w-xl rounded-full overflow-hidden">
                    <div class="w-full h-full bg-gray-200 absolute"></div>
                    <div
                      class="h-full bg-primary-color absolute"
                      style={{ width: "52%" }}
                    ></div>
                  </div>
                </div>
                <div className="progressbar-1 mb-2 leading-relaxed">
                  <p>Dosis 2 : 36%</p>
                  <div class="h-1 relative max-w-xl rounded-full overflow-hidden">
                    <div class="w-full h-full bg-gray-200 absolute"></div>
                    <div
                      class="h-full bg-fifth-color absolute"
                      style={{ width: "36%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-third-color px-4 py-3 text-gray-100 rounded-md w-full">
            Lihat Data Berdasarkan Provinsi Lainnya
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Vaccine;

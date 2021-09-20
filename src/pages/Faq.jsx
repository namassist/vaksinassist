import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Container from "../components/layout/Container";
import { Accordion } from "../components/Data";

const Faq = () => {
  const [clicked, setClicked] = useState(false);
  const toogle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <Layout>
      <Container>
        <section className="faq min-h-screen flex flex-col justify-center items-center py-10 space-y-10">
          <div className="w-full space-y-5 text-center">
            <h4 className="text-2xl font-bold lg:tracking-wider">
              Hai, Bagaimana kami bisa membantu anda?
            </h4>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6/12">
                <input
                  type="text"
                  className="w-full h-12 rounded-md border-custom  bg-blue-50 text-primary placeholder-blue-500 text-xs icon-search pl-10 py-2"
                  placeholder="cth: bagaimana cara mendaftar vaksinasi"
                />
              </div>
              <div className="w-1/12 flex justify-center items-center">
                <button className="bg-secondary-color text-gray-100 w-full h-12 text-xs py-2 uppercase rounded-md font-bold tracking-wider">
                  Cari
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-8/12 flex flex-col space-y-10">
              {Accordion.map((faq, index) => {
                return (
                  <div className="border-custom p-5 rounded space-y-3">
                    <div
                      className="wrapper-quest flex justify-between"
                      onClick={() => toogle(index)}
                      key={index}
                    >
                      <h4 className="font-bold text-secondary">
                        {faq.question} ?
                      </h4>
                      <span>
                        {clicked === index ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="#4f65e9"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="#4f65e9"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </span>
                    </div>
                    {clicked === index ? (
                      <p className="text-sm text-gray-600 transition-all duration-100">
                        {faq.answer}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default Faq;

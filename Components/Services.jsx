"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesContainer = useRef(null);
  // const servicesText = useRef([]);
  // const servicesText2 = useRef(null);
  const [isVideoVisible1, setIsVideoVisible1] = useState(false);
  const [isVideoVisible2, setIsVideoVisible2] = useState(false);
  const [isVideoVisible3, setIsVideoVisible3] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);

  useEffect(() => {
    const serviceTextRevel = () => {
      gsap.fromTo(
        ".smallAnimation",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          duration: 1,
          y: 0,
          ease: "ease.in",
        }
      );
    };
    const scrollTrigger = ScrollTrigger.create({
      trigger: servicesContainer.current,
      start: "top 40%",
      end: "top 50%",
      onEnter: () => {
        setServicesVisible(true);
        serviceTextRevel();
        scrollTrigger.kill();
      },
    });
  }, []);
  return (
    <>
      <div
        className={`services lg:px-16 md:px-10 md:py-10 lg:py-10 px-2 py-8  pt-16 pb-10 bg-[linear-gradient(135deg,#0077FF,#8E44AD)] w-full ${
          servicesVisible ? "visible" : "invisible"
        }`}
        ref={servicesContainer}
      >
        <div className=" heading lg:pb-24 lg:mb-20 pb-14 mb-14">
          <h6 className="text-[#F9F9F9] font-[rejoice-body] smallAnimation lg:text-[1vw] md:text-[2.2vw] text-sm font-light text-center p-2 relative overflow-hidden">
            Agency and Brands{" "}
            <span className="bg-black text-white rounded-full px-3 py-2 ">
              models
            </span>
          </h6>
          <div
            style={{ lineHeight: 1.05 }}
            className="text-[#F9F9F9] font-[rejoice-body] lg:text-[4.3vw] md:text-[5.7vw] text-6xl font-light text-center p-2 cursor-pointer relative "
          >
            <div className=" overflow-hidden relative">
              <span className=" overflow-y-hidden block lg:h-20 h-auto smallAnimation">
              Let’s Build Your
              </span>
            </div>
            <div className=" overflow-hidden relative">
              <span className=" overflow-y-hidden block lg:h-20 h-auto  smallAnimation">
              Digital Presence Together
              </span>
            </div>
          </div>
        </div>
        <div className="box-container">
          <div className="flex justify-between items-center mb-3">
            <div className=" overflow-hidden relative">
              <h6 className="text-[#F9F9F9] font-[rejoice-body] smallAnimation lg:text-[2vw] md:text-[2.5vw] md:p-2 text-sm font-light lg:text-center text-left  lg:py-3">
                Transforming visions into brands.
              </h6>
            </div>
            {/* <div className=" overflow-hidden relative">
              <h6 className="text-[#F9F9F9] font-[rejoice-body] smallAnimation lg:text-[2vw] md:text-[2.5vw] md:p-2  text-sm font-light lg:text-center text-right lg:py-3  ">
                ↵ See the work
              </h6>
            </div> */}
          </div>
        </div>
        <div className="box__wrapper lg:overflow-auto cursor-pointer overflow-scroll overflow-y-hidden">
          <div className="box flex lg:w-full w-[200%] h-auto justify-center items-center gap-4 relative">
            <div
              className="lg:h-[700px] h-[500px] lg:w-[33.3333333%] w-[60%] relative cursor-pointer"
              // onMouseEnter={() => setIsVideoVisible1(true)}
              // onMouseLeave={() => setIsVideoVisible1(false)}
            >
              <div
                className={`lg:h-[700px] h-[500px] w-full ${
                  isVideoVisible1 ? "hidden" : "relative"
                }`}
              >
                <Image
                  src="https://images.unsplash.com/photo-1512106374988-c95f566d39ef?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img-3"
                  layout="fill"
                  objectFit="cover"
                  className="cursor-pointer"
                />
                <div className=" flex justify-center items-center">
                  {/* <Image
                    src="/imgs/922bdc39-4619-4f3e-ad4d-0e68c4dc1ef4_Rivian_LogoLock-Up-Blanc.avif"
                    width={120}
                    alt="img-3"
                    height={120} // Provide height if necessary
                    className="cursor-pointer absolute bottom-20"
                  /> */}
                  <p className="font-semibold text-2xl absolute bottom-20">Promotional Services</p>
                </div>
              </div>
              <div
                className={`h-[700px] w-full ${
                  isVideoVisible1 ? "relative" : "hidden"
                }`}
              >
                {/* <video
                  loop
                  muted
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  <source
                    src="/imgs/Website-homepage-Work-01_1.mp4"
                    type="video/mp4"
                  />
                </video> */}
              </div>
              <div
                className={`flex justify-center items-center ${
                  isVideoVisible1 ? "hidden" : "relative"
                }`}
              >
                <Image
                  src="https://images.unsplash.com/photo-1646241651636-49549005a1a3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={150}
                  alt="img-3"
                  height={150} // Provide height if necessary
                  className="cursor-pointer absolute bottom-20"
                />
              </div>
            </div>
            <div
              className="lg:h-[700px] h-[500px] lg:w-[33.3333333%] w-[60%] relative cursor-pointer"
              // onMouseEnter={() => setIsVideoVisible2(true)}
              // onMouseLeave={() => setIsVideoVisible2(false)}
            >
              <div
                className={`lg:h-[700px] h-[500px] w-full ${
                  isVideoVisible2 ? "hidden" : "relative"
                }`}
              >
                <Image
                  src="https://images.unsplash.com/photo-1646241651636-49549005a1a3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img-1"
                  layout="fill"
                  objectFit="cover"
                  className="cursor-pointer"
                />
                <div className=" flex justify-center items-center">
                  {/* <Image
                    src="/imgs/oura.svg"
                    alt="img-1"
                    width={120}
                    height={120} // Provide height if necessary
                    className="cursor-pointer absolute bottom-20"
                  /> */}
                  <p className="font-semibold text-2xl absolute bottom-20">Breweries and restaurants</p>
                </div>
              </div>
              <div
                className={`h-[700px] w-full ${
                  isVideoVisible2 ? "relative" : "hidden"
                }`}
              >
                {/* <video
                  loop
                  muted
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  <source
                    src="/imgs/Website-homepage-Work-02_1.mp4"
                    type="video/mp4"
                  />
                </video> */}
              </div>
              <div
                className={`flex justify-center items-center ${
                  isVideoVisible2 ? "hidden" : "relative"
                }`}
              >
                <Image
                  src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=3705&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={150}
                  alt="img-2"
                  height={150} // Provide height if necessary
                  className="cursor-pointer absolute bottom-20"
                />
              </div>
            </div>
            <div
              className="lg:h-[700px] h-[500px] lg:w-[33.3333333%] w-[60%] relative cursor-pointer"
              // onMouseEnter={() => setIsVideoVisible3(true)}
              // onMouseLeave={() => setIsVideoVisible3(false)}
            >
              <div
                className={`lg:h-[700px] h-[500px] w-full ${
                  isVideoVisible3 ? "hidden" : "relative"
                }`}
              >
                <Image
                  src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=3705&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img-2"
                  layout="fill"
                  objectFit="cover"
                  className="cursor-pointer"
                />
                <div className=" flex justify-center items-center">
                  {/* <Image
                    src="/imgs/Logo.svg"
                    width={120}
                    alt="img-2"
                    height={120} // Provide height if necessary
                    className="cursor-pointer absolute bottom-20"
                  /> */}
                  <p className="font-semibold text-2xl absolute bottom-20">Business and Services</p>
                </div>
              </div>
              <div
                className={`h-[700px] w-full ${
                  isVideoVisible3 ? "relative" : "hidden"
                }`}
              >
                <video
                  loop
                  muted
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  <source
                    src="/imgs/Website-homepage-Work-03_1.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div
                className={`flex justify-center items-center ${
                  isVideoVisible3 ? "hidden" : "relative"
                }`}
              >
                <Image
                  src="/imgs/922bdc39-4619-4f3e-ad4d-0e68c4dc1ef4_Rivian_LogoLock-Up-Blanc.avif"
                  width={150}
                  alt="img-2"
                  height={150} // Provide height if necessary
                  className="cursor-pointer absolute bottom-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

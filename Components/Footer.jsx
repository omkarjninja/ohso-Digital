"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [footerVisible, setFooterVisible] = useState(false);
  const textAnimation = useRef([]);
  const footerTarget = useRef(null);

  const menuItems = ["home", "work", "services & models", "about", "contact"];
 // const text = ["r", "e", "j", "o", "u", "i", "c", "e"];
 const text = ["o", "h", "s", "o"];

  useEffect(() => {
    // Animation function
    const animateText = () => {
      gsap.fromTo(
        textAnimation.current,
        {
          y: "-100%",
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power.in",
        }
      );
    };
    ScrollTrigger.create({
      trigger: footerTarget.current,
      start: "top 10%",
      end: "top 20%",
      onEnter: () => {
        setFooterVisible(true);
        animateText();
      },
    });
  }, []);

  return (
    <>
      <div
        className="footer lg:px-12 md:px-10 md:py-10 lg:py-10 px-2 pt-8  bg-[#1A1A1A] w-full h-full"
        ref={footerTarget}
      >
        <div className="1 h-[300px] flex lg:justify-between items-start lg:flex-row flex-col justify-start lg:gap-0 gap-24 ">
          <div className="">
            <h6 className=" text-[#F9F9F9] font-[rejoice-body] lg:text-[1.8vw] md:text-[3vw] lg:p-2 text-2xl capitalize">
            Ready to Make Magic?
            </h6>
            <button onClick={()=>{window.open("https://www.instagram.com/direct/t/17843994255076762")}} className=" cursor-pointer  bg-transparent border border-white lg:px-8 px-3 mt-4 lg:py-5 py-2 lg:rounded-md rounded-[20px] text-[#F9F9F9] font-[rejoice-body] lg:text-[1vw] md:text-[1.8vw] text-sm capitalize ">
              take a seat
            </button>
          </div>
          <div className="flex justify-between items-start gap-20">
            <div>
              {menuItems.map((menu, i) => {
                return (
                  <li
                    key={i}
                    className="text-[#F9F9F9] font-[rejoice-body] lg:text-[1.2vw]  md:text-[2vw] lg:p-2 text-sm capitalize list-none decoration-none"
                  >
                    {menu}
                  </li>
                );
              })}
            </div>
            <div>
              {/* <li  className="text-[#F9F9F9] font-[rejoice-body] lg:text-[1.2vw] md:text-[2vw] text-sm lg:p-2  capitalize list-none decoration-none">
                x
              </li> */}
              <li onClick={()=>{window.open("https://www.instagram.com/weareohso?igsh=NGRoZXl2bHRwd2Vj")}} className=" cursor-pointer text-[#F9F9F9] font-[rejoice-body] lg:text-[1.2vw] md:text-[2vw] text-sm lg:p-2  capitalize list-none decoration-none">
                instagram
              </li>{" "}
              <li onClick={()=>{window.open("https://www.linkedin.com/company/weareohso/")}} className=" cursor-pointer text-[#F9F9F9] font-[rejoice-body] lg:text-[1.2vw] md:text-[2vw] text-sm lg:p-2  capitalize list-none decoration-none">
                linkedin
              </li>
            </div>
          </div>
        </div>
        <div className="flex my-12 justify-between items-center">
          <h6 className=" text-[#F9F9F9] w-[50%] lg:w-auto font-[rejoice-body] lg:text-[1.2vw] md:text-[2vw] lg:p-2 text-sm  capitalize">
            Bangalore , Karnataka India
          </h6>
          <div className="flex lg:gap-10 justify-between items-center flex-col lg:flex-row">
            <h6 onClick={()=>{window.open("https://www.linkedin.com/company/weareohso/")}} className=" cursor-pointer  text-[#F9F9F9] font-[rejoice-body] lg:text-[1.2vw] md:text-[2vw] text-sm lg:p-2 capitalize">
              ohso@digital.com
            </h6>
            <h6 onClick={()=>{window.open("https://webonism.vercel.app/")}} className=" cursor-pointer  text-[#F9F9F9] font-[rejoice-body] lg:text-[1.2vw] text-sm lg:p-2  capitalize">
              ©2025 Webonism Studio
            </h6>
          </div>
        </div>
        <div className={`${footerVisible ? "visible" : "invisible"}`}>
          <div className="relative overflow-hidden ">
            {text.map((word, i) => (
              <h6
                style={{ lineHeight: 0.8 }}
                ref={(el) => (textAnimation.current[i] = el)}
                key={i}
                className="inline-flex text-[#F9F9F9] lg:py-10 lg:pb-0 pb-3 text-[27vw] md:text-[25vw] overflow-hidden font-[rejoice-heading]"
              >
                {word}
              </h6>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

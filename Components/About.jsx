"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const cuttingText = useRef([]);
  const targetAbout = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  console.log(targetAbout);

  useEffect(() => {
    const AnimationHandler = () => {
      gsap.fromTo(
        ".text-reveal",
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
      trigger: targetAbout.current,
      start: "top 40%",
      end: "top 50%",
      onEnter: () => {
        setAboutVisible(true);
        AnimationHandler();
        scrollTrigger.kill();
      },
    });

    return () => scrollTrigger.kill(); // Cleanup
  }, []);
  const text =
    "Welcome to Ohso Your Growth Partner in the Digital World, we help businesses shine in the digital space. Whether you’re a startup, a local brand, or an established business looking to scale, we’ve got the strategies, creativity, and tools to take your brand to the next level.";

  const splitText = text.split(" ");

  return (
    <div
      className={`about lg:px-16 md:px-10 md:py-10 lg:py-10 px-2 py-8 bg-[#F9F9F9] ${
        aboutVisible ? "visible" : "invisible"
      } w-full h-auto`}
      ref={targetAbout}
    >
      <div className=" flex justify-between items-center">
        <div className=" overflow-hidden">
          <h3 className=" text-[#1A1A1A] font-[rejoice-body] lg:text-[1.5vw] md:text-[2.2vw] text-sm capitalize ">
            <span className=" inline-block text-reveal overflow-y-hidden lg:p-1">
            We don’t just market brands.
            </span>
            <br />
            <span className=" inline-block text-reveal overflow-y-hidden lg:p-2 lg:mt-1">
            We make them UNFORGETTABLE
            </span>
          </h3>
        </div>
        <div className=" overflow-hidden">
          <h3 className=" text-[#1A1A1A] text-reveal font-[rejoice-body] lg:text-[1.5vw] md:text-[2.2vw] text-sm capitalize">
            Bangalore , India
          </h3>
        </div>
      </div>
      <div className=" border-black border-t mt-5 pt-8 h-auto">
        <div className="">
          <div
            style={{ lineHeight: 1.05 }}
            className=" text-[#1A1A1A] lg:p-2 font-[rejoice-body] relative overflow-hidden lg:text-[4.3vw] md:text-[4.7vw] text-[1.6rem] font-light text-left"
          >
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {splitText.map((item, i) => {
              return (
                <div
                  style={{ lineHeight: 0.6 }}
                  className="inline-block overflow-hidden"
                  key={i}
                >
                  <span className="block lg:h-20 h-auto text-reveal lg:mr-4 mr-2 py-2 overflow-y-hidden">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default About;

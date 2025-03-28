import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const reviewContainer = useRef(null);
  const [reviewVisible, setreviewVisible] = useState(false);

  useEffect(() => {
    const AnimationHandler = () => {
      gsap.fromTo(
        ".text-reveal",
        {
          opacity: 1,
          y: 100,
        },
        {
          opacity: 1,
          duration: 1.2,
          y: 0,
          ease: "ease.in",
        }
      );
    };
    const scrollTrigger = ScrollTrigger.create({
      trigger: reviewContainer.current,
      start: "top 40%",
      end: "top 50%",
      onEnter: () => {
        setreviewVisible(true);
        AnimationHandler();
        scrollTrigger.kill();
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);
  const text =
    " We don’t do basic. We create digital experiences that grab attention, spark conversations, and leave an impact. From branding to promo videos to social media magic, we turn brands into CULTURE.";

  const splitText = text.split(" ");
  return (
    <>
      <div
        className={`reviews lg:px-16 md:px-10 md:py-10 lg:py-10 px-2 py-8 bg-[#F2F7FF] w-full h-auto ${
          reviewVisible ? "visible" : "invisible"
        } w-full h-auto`}
        ref={reviewContainer}
      >
        <div className="">
          <div className=" overflow-hidden">
            <h3 className=" text-[#1A1A1A] text-reveal font-[rejoice-body] lg:text-[1.5vw] md:text-[2.2vw] text-sm lg:leading-6  capitalize">
            We’re All About BIG IDEAS  <br /> & BOLD MOVES.
            </h3>
          </div>
        </div>
        <div className=" border-black border-t mt-5 pt-8 h-auto">
          <div
            style={{ lineHeight: 1.05 }}
            className=" text-[#1A1A1A] p-2 font-[rejoice-body] relative overflow-hidden lg:text-[4.3vw] md:text-[4.7vw] text-[1.8rem] font-light text-left"
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
                  <span className="block lg:h-20 h-auto text-reveal lg:mr-4 mr-2  py-2 overflow-y-hidden">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>{" "}
          <div className="poster relative mt-5 shadow-lg flex justify-center items-center overflow-y-hidden">
            <div className=" lg:w-[700px] md:w-[500px] md:h-[500px] w-full h-[350px] lg:h-[700px] my-10 z-10 flex justify-center items-center ">
              {/* <h3 className=" text-white font-[rejoice-body] text-[4vw] text-center ">
                4 seats
                <br />
                <span className=" text-[2vw]">available for 2024</span>
              </h3> */}
            </div>
            <Image
              src="/imgs/dm.jpg"
              alt="poster"
              width={100}
              height={800}
              className="cursor-pointer absolute w-[80%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

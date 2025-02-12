"use client";
import Image from "next/image";
import React from "react";
import image from "/public/prateek.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* <div className="bg-gray-200 flex justify-center items-center py-10">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-8"> */}
          {/* Text and Animation Section */}
          {/* <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="flex flex-col gap-3 text-3xl md:text-4xl lg:text-6xl font-semibold">
              <span>Hi</span>
              <span>I am</span>
              Pratik Aryal
            </p> */}

            {/* <div className="flex flex-col items-center lg:items-start gap-5 mt-4"> */}
              {/* Setting a min-width on the TypeAnimation wrapper to avoid layout shifts */}
              {/* <div style={{ minWidth: "300px", textAlign: "center" }}>
                <TypeAnimation
                  sequence={[
                    "I am a Front-End Developer",
                    1000,
                    "I am a UI/UX Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{
                    fontSize: "3em",
                    display: "inline-block",
                    color: "purple",
                  }}
                  repeat={Infinity}
                />
              </div> */}

              {/* Social Icons */}
              {/* <div className="flex items-center gap-4 mt-4">
              <a href="https://www.facebook.com/share/1A7jYC6rzo/">  <FaFacebook className="p-3 w-12 h-12 bg-black rounded-full text-white hover:scale-105 transition-all" /></a>
               <a href="https://x.com/i/flow/login?redirect_after_login=%2Fpratik799840648"> <FaTwitter className="p-3 w-12 h-12 bg-black rounded-full text-white hover:scale-105 transition-all" /></a>
                <a href="ttps://www.linkedin.com/in/pratik-aryal-256a79289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className="p-3 w-12 h-12 bg-black rounded-full text-white hover:scale-105 transition-all" /></a>
              </div> */}
            {/* </div> */}
          {/* // </div> */}

          {/* Image Section */}
          {/* <div className="mt-6 lg:mt-0 lg:justify-end lg:flex lg:fit lg:px-3 lg:py-3 border-2 border-black rounded-full">
            <Image
              src={image}
              alt="my image"
              width={300}
              height={300}
              className="rounded-full md:w-80 md:h-80 lg:w-64 lg:h-64"
              priority
            />
          </div>
        </div>
      </div> */}

      <h1 className="text-4xl line-clamp-4 px-32 font-bold">ON    BUILDING PHASE .We Will      BACK SOON . Thank YOU</h1>
    </>
  );
};

export default Home;

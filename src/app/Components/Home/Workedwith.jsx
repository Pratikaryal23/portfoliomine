import Marquee from "react-fast-marquee";

import Image from 'next/image';
import image1 from '/public/hubit.png';
import image2 from '/public/Csit Association Logo.png';
import React from 'react';

const companies = [
  { logo: image1 },
  { logo: image2 },
  { logo: image1 },
  { logo: image2 },
];

const Workedwith = () => {
  return (
    <div className="w-full overflow-hidden py-4 flex flex-col gap-12 ">
        <h1 className="flex justify-center items-center text-3xl  gap-2 font-bold"><span className="text-red-500 border-b-2 border-black py-1">Worked</span> With</h1>
      <Marquee speed={50}>
        {/* Map through the companies and render their logos */}
        {companies.map((company, index) => (
          <div key={index} className="flex-shrink-0 mx-12">
            <Image
              src={company.logo}
              alt="logo"
              width={100}
              height={100}
              className="h-12 w-12 rounded-full"
            />
          </div>
        ))}
        {/* Duplicate the logos for continuous scrolling */}
        {companies.map((company, index) => (
          <div key={index} className="flex-shrink-0 mx-12">
            <Image
              src={company.logo}
              alt="logo"
              width={100}
              height={100}
              className="h-12 w-12 rounded-full"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Workedwith;

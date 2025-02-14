import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { IoMdContact, IoMdMail } from "react-icons/io";

const ContactInformation = () => {
  const contactDetails = [
    {
      icon: <FaLocationPin />,
      title: "Location",
      detail: "Gulmi, Nepal",
    },
    {
      icon: <IoMdMail />,
      title: "Email",
      detail: "aryalpratik29@gmail.com",
    },
    {
      icon: <IoMdContact />,
      title: "Phone",
      detail: "+977-9845455112",
    },
  ];

  return (
    <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">My Contact Information</h2>
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="text-blue-600 text-3xl bg-blue-200 w-16 h-16 flex items-center justify-center rounded-full">
              {item.icon}
            </div>
            <div>
              <p className="text-gray-800 font-semibold">{item.title}</p>
              <p className="text-gray-600">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInformation;

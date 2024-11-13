"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContactInformation from "./ContactInfo";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  message: Yup.string().min(10, "Message should be at least 10 characters").required("Message is required"),
});

const Contact = () => {
  return (
    <>
      <div className="text-center py-4">
        <h1 className="text-3xl font-bold"><span className="text-red-400 border-b-2 border-black py-3">Contact </span> me</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-11/12 mx-auto">
        <ContactInformation />

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col items-center w-full max-w-md mx-auto">
              <div className="bg-[#BECDF0] p-4 rounded-lg w-full">
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-6">
                  {/* Name Field */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-black">Your Name</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="border-b-[1px] border-black outline-none w-full text-gray-600 p-2"
                    />
                    <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-black">Email</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="border-b-[1px] border-black outline-none w-full text-gray-600 p-2"
                    />
                    <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-black">Message</label>
                    <Field
                      as="textarea"
                      name="message"
                      rows="3"
                      placeholder="Enter Message"
                      className="w-full outline-none border-b-[1px] border-black text-gray-600 p-2 resize-none"
                    />
                    <ErrorMessage name="message" component="p" className="text-red-500 text-sm" />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-mainColor rounded-2xl w-full md:w-40 py-3 text-white bg-emerald-600 transition-all duration-300 hover:bg-opacity-90"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Contact;

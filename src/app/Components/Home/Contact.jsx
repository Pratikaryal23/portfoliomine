"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContactInformation from "./ContactInfo";


const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message should be at least 10 characters")
    .required("Message is required"),
});

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-[#141e30] to-[#243b55] py-16">
     

     
        <ContactInformation />

        {/* <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col space-y-6">
                <div>
                  <label htmlFor="name" className="text-gray-700 font-semibold">
                    Your Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage

                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-gray-700 font-semibold"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-gray-700 font-semibold"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    rows="4"
                    placeholder="Enter your message"
                    className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div> */}
      
    </section>
  );
};

export default Contact;

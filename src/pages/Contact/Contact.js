import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Form from "./Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/*Hero Section */}
      <div className="flex flex-col space-y-4 pb-10 pt-12 mb-8 md:pt-48">
        <p className="text-center text-3xl font-bold text-blue-shade-2 md:text-[48px] md:leading-10">
          Love to hear from you
        </p>
        <p className="mx-auto max-w-3xl text-center text-base text-gray-600 md:text-xl">
          Your questions spark innovation. Let's begin our journey today.
        </p>
      </div>

      {/* Map Section */}
      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <h1 className="mt-2 text-2xl font-bold text-blue-shade-2  md:text-3xl ">
              Get in touch
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span className="inline-block p-3 text-blue-shade-2 rounded-full bg-blue-100/60 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-2 text-lg font-medium text-blue-shade-1">
                  Email
                </h2>

                <p className="text-lg font-medium text-blue-500 ">
                  info@bluedataconsulting.in
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-shade-2 rounded-full bg-blue-100/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-2 text-lg font-medium text-blue-shade-1 ">
                  Office
                </h2>

                <p className="text-lg font-medium text-blue-500 ">
                  Blue Data Consulting
                  <br /> T10, Atlanta Business Hub, VIP Road, Surat, Gujarat
                  395007
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-shade-2  rounded-full bg-blue-100/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-2 text-lg font-medium text-blue-shade-1 ">
                  Phone
                </h2>
                <p className="text-md text-gray-500 ">
                  Mon-Fri from 8 AM to 5 PM.
                </p>
                <p className="text-lg font-medium text-blue-500 ">
                  +91 9104445059
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14884.813603759028!2d72.7893611!3d21.1443022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0533566cf49dd%3A0xdcb844e8eb1d921f!2sBlue%20Data%20Consulting!5e0!3m2!1sen!2sin!4v1704365547215!5m2!1sen!2sin"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;

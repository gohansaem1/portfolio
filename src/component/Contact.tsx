import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-50 max-w-4xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="contact-inner contact-left max-w-md text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800  mb-4">
              CONTACT ✉
            </h2>
            <p className="text-lg text-gray-700 mb-6">Thank you : )</p>
            <div className="img bg-gray-300 rounded-lg h-40 w-full"></div>
          </div>
          <div className="contact-inner contact-right max-w-md">
            <form
              action="mailto:gohansaem@gmail.com"
              method="post"
              encType="text/plain"
              className="flex flex-col space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                className="p-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                name="title"
                placeholder="Title"
                autoComplete="off"
                className="p-2 border border-gray-300 rounded-lg"
              />
              <textarea
                name="message"
                placeholder="Message"
                cols={30}
                rows={12}
                autoComplete="off"
                className="p-2 border border-gray-300 rounded-lg resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

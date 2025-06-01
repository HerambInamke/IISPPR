import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact IISPPR
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Get in touch with us to learn more about our initiatives or to get
            involved in our environmental conservation efforts.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="mx-20">
          {/* Contact Form */}
          <div>
            <ContactInfo />
          </div>

          {/* Contact Information */}
          <div className="w-screen">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

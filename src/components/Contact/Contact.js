import React from "react";
import ContactCard from "./ContactCard";
import ContactLinks from "./ContactLinks";
import ContactHeader from "../PageHeader/PageHeader";
import ContactFooter from "../PageHeader/PageFooter";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <ContactHeader title="Contact" />
      </div>
      <div className="contact__body">
        <div>
          <ContactCard />
          <ContactLinks />
        </div>
      </div>
      <div className="contact__footer">
        <ContactFooter />
      </div>
    </div>
  );
};

export default Contact;

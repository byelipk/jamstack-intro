import React from "react";

import "../global.css";

import Form from "../components/contactForm";

const IndexPage = () => {
  return (
    <>
      <main>
        <h1>Send a message:</h1>
        <Form />
      </main>
    </>
  );
};

export default IndexPage;

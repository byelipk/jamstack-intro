import React from "react";

import Form from "../components/contactForm";
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Send a message:</h1>
      <Form />
    </Layout>
  );
};

export default IndexPage;

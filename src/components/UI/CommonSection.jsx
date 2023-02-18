import React from "react";
import { Container } from "reactstrap";
import "../../style/common-section.scss";

//
function CommonSection({ title }) {
  return (
    <section className="common__section">
      <Container className="text-center text-white">
        <h1>{title}</h1>
      </Container>
    </section>
  );
}

export default CommonSection;

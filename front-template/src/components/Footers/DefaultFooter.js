/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
      <Container>
      <div className="pull-left">
      <div className="copyright" id="copyright">

          © <a
            href="https://www.hitema.fr/"
            target="_blank"
          >
            Hitema
          </a> {new Date().getFullYear()} 
          </div>
        </div>
        <div className="copyright" id="copyright">
          Projet de Asmaa ERRAHMANI
        </div>
      </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;

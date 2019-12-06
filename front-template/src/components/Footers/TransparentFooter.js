
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
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
  );
}

export default TransparentFooter;

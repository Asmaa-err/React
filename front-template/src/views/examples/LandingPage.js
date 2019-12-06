import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Bienvenue chez Swika !</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className=" img-fluid img-raised"
                      src={require("assets/img/vente.png")}
                    ></img>
                    <h4 className="title">Vendez</h4>
                    
                    <p>
                    Revendez vos produits d'occasion en toute sécurité !
                    Vous êtes asuré de recevoir l'argent de vos ventes.
                    </p>
                    
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className=" img-fluid img-raised"
                      src={require("assets/img/achat.png")}
                    ></img>
                    <h4 className="title">Achetez</h4>
                    
                    <p>
                    Achetez des produits d'occasion sans vous soucier !
                    Le vendeur recevra votre argent qu'après réception de votre achat.
                    </p>
                   
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className=" img-fluid img-raised"
                      src={require("assets/img/security.png")}
                    ></img>
                    <h4 className="title">Confidentialité et sécurité</h4>
                    
                    <p>
                    Pour votre sécurité, vos données restent confidentielles.
                    L'évaluation des internautes vous aide
                    dans votre démarche d'achat et de vente.
                    </p>
                    
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Souhaitez-vous nous rejoindre?</h2>
            
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
               
                
                
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Déposer une annonce
                  </Button>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://localhost:3000/Catalogue-page"
                    
                    size="lg"
                  >
                    Consulter les annonces 
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;

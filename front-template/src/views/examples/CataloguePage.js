import React, {Component} from 'react';
import Annonce from '../../components/Annonce';
import AnnonceService from '../../services/annonces.service';
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






class CataloguePage extends Component{

    constructor(props){
        super(props);
        
        //base de données interne
        this.state = {
            title: "Catalogue des annonces",
            annonces: []
        }


    }

    async componentDidMount(){   
        //Récupération des posts depuis l'API
        let response = await AnnonceService.list();
        console.log(response);
        if(response.ok){
            //La réponse est de type 200
            
            let data = await response.json();
            console.log(data);
            this.setState({annonces: data.annonces});
        } else {console.log("test");}
    }


    async detailsAnnonce(id){
      this.props.history.push(`/Catalogue-page/${id}`);
  }
    
    async deleteAnnonce(id){
        let response = await AnnonceService.delete(id);
        if(response.ok){
            let annonces = this.state.annonces;
            let index = annonces.findIndex(annonce => annonce.id === id);
            annonces.splice(index, 1);

            this.setState({annonces: annonces});
           
        }
        window.location.reload();
    }

    



    render(){
       
        //this.state.annonces.map((item, index) => {
         //  console.log(item);
       // })
        return (
            <>
              <ExamplesNavbar />
              <div className="wrapper">
                <LandingPageHeader />
                
                <div className="section section-team text-center">
                  <Container>
                    <h2 className="title">Bienvenue chez Swika !</h2>
                    <h4 className="title">Liste des annonces</h4>
                    <h4 className="title"></h4>
                    <div className="team">
                    <table className="table">
                      <thead>
                        
                      </thead>
                      <tbody>
                    
                        {
                            this.state.annonces.length !== 0 ?
                                this.state.annonces.map((item, index) => {
                                    return (
                                        <Annonce key={index} data={item} detailsAnnonce={(id) => this.detailsAnnonce(item._id)} deleteAnnonce={() => this.deleteAnnonce(item._id)}/>
                                    )
                                })
                            : <p>Il n'y a aucune annonce.</p>
                        }
                      </tbody>
                </table>
                     
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
                            href="http://localhost:3000/Depot-page"
                           
                            size="lg"
                          >
                            Déposer une annonce
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
}

export default CataloguePage;
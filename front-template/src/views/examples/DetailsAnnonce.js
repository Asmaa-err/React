import React, {Component} from 'react';
import AnnonceService from '../../services/annonces.service';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Row,
    UncontrolledTooltip
  } from "reactstrap";

  
  
  // core components
  import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

  import TransparentFooter from "components/Footers/TransparentFooter.js";
  



class DetailsAnnonce extends Component{

    constructor(props){
        
        super(props);
        this.state = {
            annonce: {
            dateA: null,
            
            title: null,
            description: null,
            selection: null,
            user_id: {
                
                firstname: null,
                lastname: null,
                email: null,
                mdp: null,
                mobile: null,
                bd: null,
                nbannonce:null,
                note: null,
                rue: null,
                ville: null,
                cp: null,
                type: null
            },
            rue: null,
            cp: null,
            ville: null} 
        }
       
    }

    
    async redirecting(){
      let status= localStorage.getItem('userId');
      if (status==='5de0ecf1246ac7096cda433e'){
        this.props.history.push(`/Catalogue-page`);
      }else {this.props.history.push(`/Catalogue-page-admin`);}
      
    }

    async componentDidMount(){
        let id = this.props.match.params.id;
        let response = await AnnonceService.details(id);
        if(response.ok){
            let data = await response.json();
            this.setState({annonce: data.annonce});
            console.log(this.state);
        }
        

    }

    async iDeleteThisAnnonceActually(id){
        let response = await AnnonceService.delete(id);
        if(response.ok){
            this.props.history.push('/');
        }
    }



    render(){
        
        
        return (
            
            <>
            
              <ExamplesNavbar />
            <div className="wrapper">
            <div
                className="page-header clear-filter page-header-small"
                filter-color="blue"
              >
                <div
                  className="page-header-image "
                  style={{
                    backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")"
                  }}
                  
                ></div>
                <Container>
                  <div className="photo-container ">
                    <img alt="..." src={require("assets/img/avatar.png")}></img>
                  </div>
                  <h3 className="title">{this.state.annonce ? this.state.annonce.user_id.firstname : null } {this.state.annonce ? this.state.annonce.user_id.lastname : null }</h3>
                  <p className="category">{this.state.annonce ? this.state.annonce.user_id.email : null }</p>
                  <p className="category">{this.state.annonce ? this.state.annonce.user_id.mobile : null }</p>
                  <div className="content">
                    <div className="social-description ">
                      <h2>{this.state.annonce ? this.state.annonce.user_id.note : null }<b>/10</b></h2>
                      <p>Note</p>
                    </div>
                    <div className="social-description ">
                      <h2>{this.state.annonce ? this.state.annonce.user_id.nbannonce : null }</h2>
                      <p>Annonces</p>
                    </div>
                    
                  </div>
                </Container>
              </div>

                <div><br></br><br></br><br></br></div>
              
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <div className="shadow-lg p-3 mb-5 bg-white rounded section section-team text-center">
                  <Container>
                    <div className="title">
                      Détails de l'annonce
                    </div>
                    <h3 className="title">{this.state.annonce ? this.state.annonce.title : null }</h3>
                    <div><b>Catégorie {this.state.annonce ? this.state.annonce.selection : null }</b></div>
                    <div ><b>Prix : </b> {this.state.annonce ? this.state.annonce.prix : null }</div>
                    <div><b>Localisation : </b>{this.state.annonce ? this.state.annonce.cp : null }, {this.state.annonce ? this.state.annonce.ville : null }</div>
                    <div><b>Description : </b>{this.state.annonce ? this.state.annonce.description : null }</div>
                    
                    
                  </Container>
                 
                </div>
                <div className="send-button">
                  <Button
                   
                    className="btn btn-round btn-success"
                    color="info"
                    onClick={() => this.redirecting()}
                    
                    size="lg"
                  >
                   Retour au catalogue
                  </Button>
                  
                </div>
             </Col>
                <TransparentFooter />
              </div>
            </>
          );
    }


}

export default DetailsAnnonce;





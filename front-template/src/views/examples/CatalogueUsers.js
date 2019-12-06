import React, {Component} from 'react';
import User from '../../components/User';
import UserService from '../../services/users.service';
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






class CatalogueUsers extends Component{

    constructor(props){
        super(props);
        
        //base de données interne
        this.state = {
            title: "Liste des utilisateurs",
            users: []
        }


    }

    async componentDidMount(){   
        //Récupération des posts depuis l'API
        let response = await UserService.list();
        console.log(response);
        if(response.ok){
            //La réponse est de type 200
            
            let data = await response.json();
            console.log(data);
            this.setState({users: data.users});
        } else {console.log("test");}
    }


    async updateUser(id){
        this.props.history.push(`/Catalogue-users/${id}`);
    }
    
    async deleteUser(id){
        let response = await UserService.delete(id);
        if(response.ok){
            let users = this.state.users;
            let index = users.findIndex(user => user.id === id);
            users.splice(index, 1);

            this.setState({users: users});
           
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
                    <h2 className="title">Cher Administrateur !</h2>
                    <h4 className="title">Liste des utilisateurs</h4>
                    <h4 className="title"></h4>
                    <div className="team">
                    <table className="table">
                      <thead>
                        
                      </thead>
                      <tbody>
                        <tr>
                            <th>Nom complet</th>
                            <th>E-mail</th>
                            <th>Tél</th>
                            <th>Date de naissance</th>
                            <th>Adresse</th>
                            <th>Nombre d'annonces</th>
                            <th>Note</th>
                            <th>Action</th>
                        </tr>
                    
                        {
                            this.state.users.length !== 0 ?
                                this.state.users.map((item, index) => {
                                    return (
                                        <User key={index} data={item} updateUser={(id) => this.updateUser(item._id)} deleteUser={() => this.deleteUser(item._id)}/>
                                    )
                                })
                            : <p>Il n'y a aucun user.</p>
                        }
                      </tbody>
                </table>
                     
                </div>
                  </Container>
                </div>
                <div className="section section-contact-us text-center">
                  <Container>
                    <h2 className="title">Souhaitez-vous gérer les annonces ?</h2>
                    
                    <Row>
                      <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                       
                        
                        
                        <div className="send-button">
                          <Button
                            block
                            className="btn-round"
                            color="info"
                            href="http://localhost:3000/Catalogue-page-admin"
                           
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
}

export default CatalogueUsers;
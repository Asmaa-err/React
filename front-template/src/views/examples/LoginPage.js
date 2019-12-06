import React, {Component} from 'react';
import UserService from '../../services/users.service';



// reactstrap components
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
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

class LoginPage extends Component{

  constructor(props){
      super(props);
      this.state = {
          _id: null,
          email: '',
          mdp: '',
          success: false,
          msgSuccess: '',
          users: []
      }  
  }

  async componentDidMount(){   
    //Récupération des posts depuis l'API
    let response = await UserService.list();
    
    if(response.ok){
            
        let data = await response.json();
        console.log(data);
        this.setState({users: data.users});
    } 
  }

			

  handleChange(e){
    //change state
    this.setState({
        [e.target.id]: e.target.value
    });
  }

  async redirecting(status){
    if (status==='user'){
      this.props.history.push(`/Catalogue-page`);
    }else {this.props.history.push(`/Catalogue-page-admin`);}
    
  }

  async submit(e){
    e.preventDefault();
    this.setState({success: false});
    let body = {
        _id: this.state._id,
        email: this.state.email,
        mdp: this.state.mdp
        
    }; 
    let user= await this.state.users.find(user => user.email === body.email);
    let user1= await this.state.users.find(user => user.mdp === body.mdp);
   
    console.log(user);
    console.log(user1);

    if(user == null){
        this.setState({
        success: false,
        msgSuccess: 'User inexistant, Inscrivez-vous!'});
    } else if (user!==user1){
        this.setState({
        success: false,
        msgSuccess: 'Identifiants incorrectes'});
    } else if (user===user1){
        this.setState({
        success: true,
        msgSuccess: 'Compte existant'});
        let key=localStorage.setItem('userId', user.type);
        console.log(user.type);
        if(user.type==='5de0ecf1246ac7096cda433e'){
          {this.redirecting('user')}
        }else{
          {this.redirecting('admin')}
        }
      
    }  
    

  }
 
 

  render(){
    return (
      <>
        <ExamplesNavbar />
        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/login1.jpg") + ")"
            }}
          ></div>
          <div className="content">
            <Container>
            <form onSubmit={(e) => this.submit(e)}>
              <Col className="ml-auto mr-auto" md="4">
                <Card className="card-login card-plain">
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      
                        <img
                          
                          alt="..."
                          src={require("assets/img/block.png")}
                        ></img>
                      
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={
                          "no-border input-lg"
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input className="form-control" required id="email" value={this.state.email} onChange={(e) => this.handleChange(e)}
                              placeholder="E-mail..."
                              type="email"
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg"
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_lock-circle-open"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input className="form-control" required id="mdp" value={this.state.mdp}  onChange={(e) => this.handleChange(e)}
                            placeholder="Mot de passe..."
                            type="password"
                        ></Input>
                      </InputGroup>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        type="submit"
                        color="info"
                        size="lg"
                      >
                        Connexion 
                      </Button>
                      <div >
                          <b> {this.state.success === false ? <p>{this.state.msgSuccess}</p> : null }</b>
                      </div>
                      <div className="pull-center">
                        <h6>
                          <a
                            className="link"
                            href="http://localhost:3000/Inscription-page"
                            
                          >
                            Créer un compte
                          </a>
                        </h6>
                      </div>
                      
                    </CardFooter>
                  </Form>
                </Card>
              </Col>
            </form>
            </Container>
          </div>
          <TransparentFooter />
        </div>
      </>
    );
  }

}


export default LoginPage;



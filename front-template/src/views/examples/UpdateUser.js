import React, {Component} from 'react';
import UserService from '../../services/users.service';

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



  class UpdateUser extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: "user",
            user: []
        }  
    }


    handleChange(e){
        //change state
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async componentDidMount(){
       
        let id = this.props.match.params.id;
        let response = await UserService.details(id);
        if(response.ok){
            let data = await response.json();
            this.setState({
                user:data.user
            });
            console.log(data);
        }
    }   

   

    async submit(e){
        e.preventDefault();
        let id = this.props.match.params.id;
        let response = await UserService.details(id);
        if(response.ok){
            let data = await response.json();
            this.setState({
                user:data.user
            });
            console.log(data);
        
      
        this.setState({success: false});
        let body = {
            type:{
                pers: data.user.type.pers,
                _id:data.user.type.pers
            },
             lastname: data.user.lastname,
             firstname: data.user.firstname,
             email: data.user.email,
             mdp: data.user.mdp,
             mobile: data.user.mobile,
             rue: data.user.rue,
             cp: data.user.cp,
             ville: data.user.ville,
             bd: data.user.bd,
             nbannonce: 0,
             note: this.state.note
           
        }; 
        console.log(body);
        console.log(body.type.pers);
        
  
        
         if (body.type.pers == 'admin') {
        this.setState({
            type:{
                pers: 'admin',
                _id:'55de0efb918baf43568f59693'
            }
        })
      } else {
        this.setState({
            type:{
                pers: 'user',
                _id:'5de0ecf1246ac7096cda433e'
            }
        })
      }

      let response1 = await UserService.update(id,body);
        console.log(response1); 

        if(response1.ok){
                this.setState({
                    success: true,
                    msgSuccess: "User updated"
                })
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
              <div className="container">
              <Container>
               <form onSubmit={(e) => this.submit(e)}>
               
           <Col className="ml-auto mr-auto" md="4">
             <Card className="card-login card-plain">
               
               <CardHeader className="text-center">
                  
                   <img
                       alt="..."
                       src={require("assets/img/registration.png")}
                     ></img>
                 </CardHeader>
                 
                 <CardBody>
        
        
                   <InputGroup
                     className={
                       "no-border input-lg " 
                     }
                   >
                     <InputGroupAddon addonType="prepend">
                       <InputGroupText>
                         <i className="now-ui-icons users_circle-08"></i>
                       </InputGroupText>
                     </InputGroupAddon>
                     <Input  className="form-control"  id="firstname" defaultValue={this.state.user.firstname} Value={this.state.firstname} onChange={(e) => this.handleChange(e)}
                       placeholder="Lastname..."
                       type="text"
                      
                      
                     ></Input>
                   </InputGroup>
        
        
                   <InputGroup
                     className={
                      "no-border input-lg "
                     }
                   >
                     <InputGroupAddon addonType="prepend">
                       <InputGroupText>
                         <i className="now-ui-icons business_badge"></i>
                       </InputGroupText>
                     </InputGroupAddon>
                     <Input className="form-control"  id="lastname" defaultValue={this.state.user.lastname}  Value={this.state.lastname} onChange={(e) => this.handleChange(e)}
                       placeholder="Lastname..."
                       type="text"
                      
                     ></Input>
                   </InputGroup>
        
        
                   <InputGroup
                     className={
                       "no-border input-lg"
                     }
                   >
                     <InputGroupAddon addonType="prepend">
                       <InputGroupText>
                         <i className="now-ui-icons ui-1_email-85"></i>
                       </InputGroupText>
                     </InputGroupAddon>
                     <Input className="form-control"  id="email" defaultValue={this.state.user.email}  Value={this.state.email} onChange={(e) => this.handleChange(e)}
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
                         <i className="now-ui-icons ui-1_calendar-60"></i>
                       </InputGroupText>
                     </InputGroupAddon>
                     <Input className="form-control" required id="bd" defaultValue={this.state.user.bd}  Value={this.state.bd} onChange={(e) => this.handleChange(e)}
                       placeholder="Date de naissance..."
                       type="date"
                       
                     ></Input>
                   </InputGroup>
        
                   <InputGroup
                     className={
                       "no-border input-lg"
                     }
                   >
                     <InputGroupAddon addonType="prepend">
                       <InputGroupText>
                         <i className="now-ui-icons tech_mobile"></i>
                       </InputGroupText>
                     </InputGroupAddon>
                     <Input className="form-control" required id="mobile" defaultValue={this.state.user.mobile}  Value={this.state.mobile} onChange={(e) => this.handleChange(e)}
                       placeholder="Mobile..."
                       type="tel"
                      
                     ></Input>
                   </InputGroup>
        
                   <InputGroup
                     className={
                       "no-border input-lg" 
                     }
                   >
                     <InputGroupAddon addonType="prepend">
                       <InputGroupText>
                         <i className="now-ui-icons location_pin"></i>
                       </InputGroupText>
                     </InputGroupAddon>
                     <Input className="form-control" required id="rue" defaultValue={this.state.user.rue}  Value={this.state.rue} onChange={(e) => this.handleChange(e)}
                       placeholder="Rue..."
                       type="text"
                       
                     ></Input>
                   </InputGroup>
        
                   <InputGroup
                     className={
                       "no-border input-lg" 
                     }
                   >
                     <InputGroupAddon addonType="prepend">
                       <InputGroupText>
                         <i className="now-ui-icons ui-1_zoom-bold"></i>
                       </InputGroupText>
                     </InputGroupAddon>
                     <Input className="form-control" required id="cp" defaultValue={this.state.user.cp}  Value={this.state.cp} onChange={(e) => this.handleChange(e)}
                       placeholder="Code postal..."
                       type="number"
                       
                     ></Input>
                   </InputGroup>
        
                   <InputGroup
                     className={
                       "no-border input-lg" 
                     }
                   >
                     <InputGroupAddon addonType="prepend">
                       <InputGroupText>
                         <i className="now-ui-icons location_world"></i>
                       </InputGroupText>
                     </InputGroupAddon>
                     <Input className="form-control" required id="ville" defaultValue={this.state.user.ville}  Value={this.state.ville} onChange={(e) => this.handleChange(e)}
                       placeholder="Ville..."
                       type="text"
                       
                     ></Input>
                   </InputGroup>
       
                   
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
                        <Input className="form-control"  id="note" defaultValue={this.state.user.note}  Value={this.state.note} onChange={(e) => this.handleChange(e)}
                              placeholder="Note..."
                              type="number"
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
                        <Input  id="type.pers" defaultValue='user'  onChange={(e) => this.handleChange(e)}
                            placeholder="Statut..."
                            type="text"
                        ></Input>
                      </InputGroup>
                   <Button
                     block
                     className="btn-round"
                     type="submit"
                     color="info"
                     
                     size="lg"
                   >
                     Effectuer les modifications
                   </Button>
                   <div >
                      <b> {this.state.success === true ? <p>{this.state.msgSuccess}</p> : null }</b>
                    </div>
                    
                   <div className="pull-center">
                     <h6>
                       <a
                         className="link"
                         href="http://localhost:3000/catalogue-users"
                         
                       >
                         Retour à la liste  
                       </a>
                     </h6>
                   </div>
        
                 </CardBody>
                 <CardFooter className="text-center">
                   
                   
                   
                 </CardFooter>
               
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
  export default UpdateUser;


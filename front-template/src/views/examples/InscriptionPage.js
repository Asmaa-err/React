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

class AddUser extends Component{

  constructor(props){
      super(props);
      this.state = {
          firstname: '',
          lastname: '',
          email: '',
          mdp: '',
          mobile: '',
          rue:'',
          cp: '',
          ville:'',
          bd:'',
          nbannonce:'',
          note: null,
          success: false,
          confirm: null,
          confpass: null,
          msgConfpass:'',
          msgSuccess: ''
      }  
  }

  //Change value instead of id state
  handleChange(e){
      //change state
      this.setState({
          [e.target.id]: e.target.value
      });
  }

  handlePasswordChange = event => {
    this.setState({
      mdp: event.target.value,
    });
  };
  handleConfirmPassword = event => {
    this.setState({
      confirm: event.target.value,
    });
    if (event.handleConfirmPassword !== event.handlePasswordChange) {
      this.setState({
        confpass: false,
        msgConfpass: "Mot de passe non identique"
    })
    }
  };
  
  async submit(e){
      e.preventDefault();
      this.setState({success: false});
      let body = {
          lastname: this.state.lastname,
          firstname: this.state.firstname,
          email: this.state.email,
          mdp: this.state.mdp,
          mobile: this.state.mobile,
          rue: this.state.rue,
          cp: this.state.cp,
          ville: this.state.ville,
          bd: this.state.bd,
          nbannonce: 0,
          type: '5de0ecf1246ac7096cda433e',
          note: 10
          
      }; 
      console.log(body);
      let response = await UserService.create(body);
      console.log(response);

      console.log(this.state.confirm);
      if (body.mdp !== this.state.confirm) {
        this.setState({
          confpass: false,
          msgConfpass:'Passwords dont match'
      })
    } else {
        
      if(response.ok){
          this.setState({
              success: true,
              msgSuccess: "User created"
          })
          window.location.reload(); 
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
                   "no-border input-lg " /*+
                   (firstFocus ? " input-group-focus" : "")*/
                 }
               >
                 <InputGroupAddon addonType="prepend">
                   <InputGroupText>
                     <i className="now-ui-icons users_circle-08"></i>
                   </InputGroupText>
                 </InputGroupAddon>
                 <Input  className="form-control" required id="firstname" value={this.state.firstname} onChange={(e) => this.handleChange(e)}
                   placeholder="Firstname..."
                   type="text"
                   
                   //onFocus={() => setFirstFocus(true)}
                   //onBlur={() => setFirstFocus(false)}
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
                 <Input className="form-control" required id="lastname" value={this.state.lastname} onChange={(e) => this.handleChange(e)}
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
                     <i className="now-ui-icons ui-1_calendar-60"></i>
                   </InputGroupText>
                 </InputGroupAddon>
                 <Input className="form-control" required id="bd" value={this.state.bd} onChange={(e) => this.handleChange(e)}
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
                 <Input className="form-control" required id="mobile" value={this.state.mobile} onChange={(e) => this.handleChange(e)}
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
                 <Input className="form-control" required id="rue" value={this.state.rue} onChange={(e) => this.handleChange(e)}
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
                 <Input className="form-control" required id="cp" value={this.state.cp} onChange={(e) => this.handleChange(e)}
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
                 <Input className="form-control" required id="ville" value={this.state.ville} onChange={(e) => this.handleChange(e)}
                   placeholder="Ville..."
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
                     <i className="now-ui-icons ui-1_lock-circle-open"></i>
                   </InputGroupText>
                 </InputGroupAddon>
                 <Input className="form-control" required id="mdp" value={this.state.mdp} onChange={this.handlePasswordChange}
                   placeholder="Mot de passe..."
                   type="password"
                   
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
                 <Input
                   placeholder="Confirmez votre mot de passe..."  required id="confirm" value={this.state.confirm} onChange={this.handleConfirmPassword}
                   type="password"
                   
                 ></Input>
               </InputGroup>
               <Button
                 block
                 className="btn-round"
                 type="submit"
                 color="info"
                 
                 size="lg"
               >
                 Inscription 
               </Button>
               <div >
                  <b> {this.state.success === true ? <p>{this.state.msgSuccess}</p> : null }</b>
                </div>
                <div >
                  <b> {this.state.confpass === false ? <p>{this.state.msgConfpass}</p> : null }</b>
                </div>
                
               <div className="pull-center">
                 <h6>
                   <a
                     className="link"
                     href="http://localhost:3000/login-page"
                     
                   >
                     Vous avez déja un compte ?  
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

export default AddUser;




































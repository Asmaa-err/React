import React, {Component} from 'react';
import AnnonceService from '../../services/annonces.service';

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

class DepotPage extends Component{

  constructor(props){
      super(props);
      this.state = {
          title: '',
          description: '',
          prix: '',
          selection: '',
          dateA: '',
          user_id:'',
          cp: '',
          ville:''
          
      }  
  }

  //Change value instead of id state
  handleChange(e){
      //change state
      this.setState({
          [e.target.id]: e.target.value
      });
  }

 

  
  async submit(e){
           
      e.preventDefault();
      this.setState({success: false});
      let body = {
          title: this.state.title,
          description: this.state.description,
          prix: this.state.prix,
          selection: this.state.selection,
          rue: this.state.rue,
          cp: this.state.cp,
          ville: this.state.ville,
          dateA: this.state.dateA,
          user_id: this.state.user_id,
          success: false,
          msgSuccess: ''
          
      }; 

      let status= localStorage.getItem('userId');
      if (status==='5de0ecf1246ac7096cda433e'){
        this.setState({
          user_id: '5de0ecf1246ac7096cda433e',
           })
      }else {
        this.setState({
          user_id: '5de0efb918baf43568f59693',
           })
      }
      console.log(body);
      let response = await AnnonceService.create(body);
      console.log(response);    
        
      if(response.ok){
          this.setState({
              success: true,
              msgSuccess: "Annonce created"
          })
          window.location.reload(); 
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
                   src={require("assets/img/plus.png")}
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
                     <i className="now-ui-icons location_bookmark"></i>
                   </InputGroupText>
                 </InputGroupAddon>
                 <Input  className="form-control" required id="title" value={this.state.title} onChange={(e) => this.handleChange(e)}
                   placeholder="Title..."
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
                     <i className="now-ui-icons files_paper"></i>
                   </InputGroupText>
                 </InputGroupAddon>
                 <Input className="form-control"  id="description" value={this.state.description} onChange={(e) => this.handleChange(e)}
                   placeholder="Description..."
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
                     <i className="now-ui-icons business_money-coins"></i>
                   </InputGroupText>
                 </InputGroupAddon>
                 <Input className="form-control" required id="prix" value={this.state.prix} onChange={(e) => this.handleChange(e)}
                   placeholder="Prix..."
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
                     <i className="now-ui-icons business_chart-pie-36"></i>
                   </InputGroupText>
                 </InputGroupAddon>
                 <Input className="form-control" required id="selection" value={this.state.selection} onChange={(e) => this.handleChange(e)}
                   placeholder="Catégorie..."
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
                   "no-border input-lg" 
                 }
               >
                 <InputGroupAddon addonType="prepend">
                   <InputGroupText>
                     <i className="now-ui-icons tech_watch-time"></i>
                   </InputGroupText>
                 </InputGroupAddon>
                 <Input className="form-control" required id="dateA" value={this.state.dateA} onChange={(e) => this.handleChange(e)}
                   placeholder="Date..."
                   type="date"
                   
                 ></Input>
               </InputGroup>

              
  
               <Button
                 block
                 className="btn-round"
                 type="submit"
                 color="info"
                 
                 size="lg"
               >
                 Déposer l'annonce
               </Button>
               <div >
                  <b> {this.state.success === true ? <p>{this.state.msgSuccess}</p> : null }</b>
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

export default DepotPage;




































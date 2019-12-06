import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import CataloguePage from "views/examples/CataloguePage.js";
import CataloguePageAdmin from "views/examples/CataloguePageAdmin.js";
import InscriptionPage from "views/examples/InscriptionPage.js";
import DepotPage from "views/examples/DepotPage.js";
import DetailsAnnonce from "views/examples/DetailsAnnonce.js";
import CatalogueUsers from "views/examples/CatalogueUsers.js";
import UpdateUser from "views/examples/UpdateUser.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route 
          path="/index" 
          render={props => <Index {...props} />} 
        />
        <Route
          path="/landing-page"
          render={props => <LandingPage {...props} />}
        />
        <Route
          path="/Depot-page"
          render={props => <DepotPage {...props} />}
        />
        <Route
          path="/Inscription-page"
          render={props => <InscriptionPage {...props} />}
        />
          <Route 
          path="/Catalogue-users/:id" exact component={UpdateUser} 
        />
        
        <Route
          path="/Catalogue-users"
          render={props => <CatalogueUsers {...props} />}
        />
      
        <Route
          path="/Catalogue-page-admin"
          render={props => <CataloguePageAdmin {...props} />}
        />
        
        <Route 
          path="/Catalogue-page/:id" exact component={DetailsAnnonce} 
        />
         
         <Route
          path="/Catalogue-page"
          render={props => <CataloguePage {...props} />}
        />
        <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        />
        <Route 
          path="/login-page" 
          render={props => <LoginPage {...props} />} 
        />
        <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        />
        {/*<Redirect to="/landing-page" />*/}
        <Redirect from="/" to="/landing-page" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

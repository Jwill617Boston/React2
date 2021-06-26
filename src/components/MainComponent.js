import React, { Component } from "react";
// Component IMPORT
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
// Router IMPORTS
import { Switch, Route, Redirect } from "react-router-dom";
// Shared Data Folder
import { CAMPSITES } from "../shared/campsites";
import { COMMENTS } from "../shared/comments";
import { PARTNERS } from "../shared/partners";
import { PROMOTIONS } from "../shared/promotions";

class Main extends Component {
   constructor(props) {
      super(props);
      // Data Container = APP
      this.state = {
         campsites: CAMPSITES,
         comments: COMMENTS,
         partners: PARTNERS,
         promotions: PROMOTIONS,
      };
   }

   render() {
      // Home Component Function
      const HomePage = () => {
         return (
            // Home PROPS = campsite, promtion, partner
            <Home
               campsite={
                  this.state.campsites.filter(
                     (campsite) => campsite.featured
                  )[0]
               }
               promotion={
                  this.state.promotions.filter(
                     (promotion) => promotion.featured
                  )[0]
               }
               partner={
                  this.state.partners.filter((partner) => partner.featured)[0]
               }
            />
         );
      };

      // Campsiteinfo Component Function
      const CampsiteWithId = ({ match }) => {
         return (
            // Campsite PROP = campsite, comments
            <CampsiteInfo
               campsite={
                  this.state.campsites.filter(
                     (campsite) => campsite.id === +match.params.campsiteId
                  )[0]
               }
               comments={this.state.comments.filter(
                  (comment) => comment.campsiteId === +match.params.campsiteId
               )}
            />
         );
      };

      return (
         <div>
            {/* Nav Bar */}
            <Header />
            {/* where paths are made */}
            <Switch>
               <Route path="/home" component={HomePage} />
               <Route
                  exact
                  path="/directory"
                  // Directory PROPS = campsites
                  render={() => <Directory campsites={this.state.campsites} />}
               />
               <Route
                  path="/directory/:campsiteId"
                  component={CampsiteWithId}
               />
               <Route
                  exact
                  path="/aboutus"
                  // About PROPS = partners
                  render={() => <About partners={this.state.partners} />}
               />
               <Route exact path="/contactus" component={Contact} />
               <Redirect to="/home" />
            </Switch>
            <Footer />
         </div>
      );
   }
}

export default Main;

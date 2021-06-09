import "./App.css";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./components/DirectoryComponent";
import { CAMPSITES } from "./shared/campsites";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         // imported campsites object data from shared folder
         campsites: CAMPSITES,
      };
   }
   render() {
      return (
         <div className="App">
            {/* navbar */}
            <Navbar dark color="primary">
               <div className="container">
                  <NavbarBrand href="/">NuCamp</NavbarBrand>
               </div>
            </Navbar>
            {/* campsite state data is passed to directory component  */}
            <Directory campsites={this.state.campsites} />
         </div>
      );
   }
}

export default App;

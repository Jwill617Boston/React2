import React, { Component } from "react";
import {
   Card,
   CardImg,
   CardImgOverlay,
   CardText,
   CardBody,
   CardTitle,
} from "reactstrap";
import CampsiteInfo from "./CampsiteInfoComponent";

// One component
class Directory extends Component {
   constructor(props) {
      super(props);
      this.state = {
         //   state initial state set to null (falsey value)
         selectedCampsite: null,
      };
   }

   //    campsite object gets passed into the method (campsite of card UI)
   onCampsiteSelect(campsite) {
      //    trigger change of state. Use setState outside of constructor
      this.setState({ selectedCampsite: campsite });
   }

   render() {
      //    mapping of cards to UI
      //   where the campsites data from parent comp enters (this.props.campsite)
      const directory = this.props.campsites.map((campsite) => {
         return (
            <div key={campsite.id} className="col-md-5 m-1">
               {/* click function to render for each card */}
               {/* hold data for campsite that is picked  */}
               <Card onClick={() => this.onCampsiteSelect(campsite)}>
                  <CardImg
                     width="100%"
                     src={campsite.image}
                     alt={campsite.name}
                  />
                  <CardImgOverlay>
                     <CardTitle>{campsite.name}</CardTitle>
                  </CardImgOverlay>
               </Card>
            </div>
         );
      });

      return (
         //   send data back to parent component app comp
         <div className="container">
            {/* UI render of map array */}
            <div className="row">{directory}</div>
            {/* selected card data passed to campsiteinfo comp */}
            <CampsiteInfo campsite={this.state.selectedCampsite} />
         </div>
      );
   }
}

export default Directory;

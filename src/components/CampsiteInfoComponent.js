import React, { Component } from "react";
import {
   Card,
   CardImg,
   CardImgOverlay,
   CardText,
   CardBody,
   CardTitle,
} from "reactstrap";

class CampsiteInfo extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   renderCampsite(campsite) {
      return (
         //   data returned into card and info is parse
         <Card>
            <CardImg top src={campsite.image} alt={campsite.name} />
            <CardBody>
               <CardTitle>{campsite.name}</CardTitle>
               <CardText>{campsite.description}</CardText>
            </CardBody>
         </Card>
      );
   }

   render() {
      //    if campsites prop is true
      if (this.props.campsite) {
         return (
            <div className="col-md-5 m-1">
               {/* return what card is clicked */}
               {this.renderCampsite(this.props.campsite)}
            </div>
         );
      }
      return <div />;
   }
}

export default CampsiteInfo;

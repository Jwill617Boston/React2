import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

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
      //    if campsites prop is true then..
      if (this.props.campsite) {
         return (
            <div className="col-md-5 m-1">
               {/* return what card is clicked */}
               {/* clicked data stored in directory comp state */}
               {this.renderCampsite(this.props.campsite)}
            </div>
         );
      }
      return <div />;
   }
}

export default CampsiteInfo;

import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfo extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   renderComments(comments) {
      if (comments) {
         return (
            <div className="col-md-5 m-1">
               <h4>Comments</h4>
               {comments.map((comment) => (
                  <div>
                     <p>
                        {comment.text}
                        <br />
                        --{" "}
                        {new Intl.DateTimeFormat("en-US", {
                           year: "numeric",
                           month: "short",
                           day: "2-digit",
                        }).format(new Date(Date.parse(comment.date)))}
                        ,
                     </p>
                  </div>
               ))}
            </div>
         );
      }
   }

   renderCampsite(campsite) {
      return (
         //   data returned into card and info is parse
         <div className="col-md-5 m-1">
            <Card>
               <CardImg top src={campsite.image} alt={campsite.name} />
               <CardBody>
                  <CardTitle>{campsite.name}</CardTitle>
                  <CardText>{campsite.description}</CardText>
               </CardBody>
            </Card>
         </div>
      );
   }

   render() {
      //    if campsites prop is true then..
      if (this.props.campsite) {
         return (
            <div className="row">
               {/* return what card is clicked */}
               {/* clicked data stored in directory comp state */}
               {this.renderCampsite(this.props.campsite)}
               {this.renderComments(this.props.campsite.comments)}
            </div>
         );
      }
      return <div />;
   }
}

export default CampsiteInfo;

import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// PROPS Parent = Home()
// item = object array
function RenderCard({ item }) {
   return (
      <Card>
         <CardImg src={item.image} alt={item.name} />
         <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardText>{item.description}</CardText>
         </CardBody>
      </Card>
   );
}

// PROP Parent = Home = campsite, promotion, partner
function Home(props) {
   return (
      <div className="container">
         <div className="row">
            {/* Col1 = Campsite */}
            <div className="col-md m-1">
               <RenderCard item={props.campsite} />
            </div>
            {/* Col2 = promotion  */}
            <div className="col-md m-1">
               <RenderCard item={props.promotion} />
            </div>
            {/* Col3 = partner */}
            <div className="col-md m-1">
               <RenderCard item={props.partner} />
            </div>
         </div>
      </div>
   );
}

export default Home;

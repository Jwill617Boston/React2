import React from "react";
import {
   Card,
   CardImg,
   CardImgOverlay,
   CardTitle,
   Breadcrumb,
   BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDirectoryItem({ campsite }) {
   return (
      <Card>
         {/* Create link:ID */}
         <Link to={`/directory/${campsite.id}`}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
               <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
         </Link>
      </Card>
   );
}

// PROPS Parent = Main = campsites
function Directory(props) {
   const directory = props.campsites.map((campsite) => {
      return (
         // Array Mapping = Campsites
         <div key={campsite.id} className="col-md-5 m-1">
            {/* Functional Comp */}
            <RenderDirectoryItem campsite={campsite} />
         </div>
      );
   });

   return (
      <div className="container">
         {/* ROW 1 */}
         <div className="row">
            <div className="col">
               <Breadcrumb>
                  <BreadcrumbItem>
                     <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Directory</BreadcrumbItem>
               </Breadcrumb>
               <h2>Directory</h2>
               <hr />
            </div>
         </div>
         {/* ROW 2 */}
         <div className="row">
            {/* CONST */}
            {directory}
         </div>
      </div>
   );
}

export default Directory;

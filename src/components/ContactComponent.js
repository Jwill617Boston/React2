import React, { Component } from "react";
import {
   Breadcrumb,
   BreadcrumbItem,
   Button,
   Label,
   Col,
   Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm } from "react-redux-form";

class Contact extends Component {
   constructor(props) {
      super(props);

      this.state = {
         firstName: "",
         lastName: "",
         phoneNum: "",
         email: "",
         agree: false,
         contactType: "By Phone",
         feedback: "",
         touched: {
            firstName: false,
            lastName: false,
            phoneNum: false,
            email: false,
         },
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   validate(firstName, lastName, phoneNum, email) {
      const errors = {
         firstName: "",
         lastName: "",
         phoneNum: "",
         email: "",
      };

      if (this.state.touched.firstName) {
         if (firstName.length < 2) {
            errors.firstName = "First name must be at least 2 characters.";
         } else if (firstName.length > 15) {
            errors.firstName = "First name must be 15 or less characters.";
         }
      }

      if (this.state.touched.lastName) {
         if (lastName.length < 2) {
            errors.lastName = "Last name must be at least 2 characters.";
         } else if (lastName.length > 15) {
            errors.lastName = "Last name must be 15 or less characters.";
         }
      }

      const reg = /^\d+$/;
      if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
         errors.phoneNum = "The phone number should contain only numbers.";
      }

      if (this.state.touched.email && !email.includes("@")) {
         errors.email = "Email should contain a @";
      }

      return errors;
   }

   handleBlur = (field) => () => {
      this.setState({
         touched: { ...this.state.touched, [field]: true },
      });
   };

   handleInputChange(event) {
      const target = event.target;
      const name = target.name;
      // if target type is checkbox then use checked if not use value
      const value = target.type === "checkbox" ? target.checked : target.value;

      this.setState({
         [name]: value,
      });
   }

   handleSubmit(values) {
      console.log("Current state is: " + JSON.stringify(values));
      alert("Current state is: " + JSON.stringify(values));
   }

   render() {
      const errors = this.validate(
         this.state.firstName,
         this.state.lastName,
         this.state.phoneNum,
         this.state.email
      );

      return (
         <div className="container">
            <div className="row row-content">
               {/* Col 1 */}
               <div className="col-12">
                  <Breadcrumb>
                     <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                     </BreadcrumbItem>
                     <BreadcrumbItem active>Contact</BreadcrumbItem>
                  </Breadcrumb>
                  <h2>Send us your Feedback</h2>
                  <hr />
               </div>
               {/* Col 2 */}
               <div className="col-md-10">
                  {/* Form Submits to handleSubmit alert*/}
                  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                     {/* Row 1 - First Name */}
                     <Row className="form-group">
                        <Label htmlFor="firstName" md={2}>
                           First Name
                        </Label>
                        <Col md={10}>
                           <Control.text
                              model=".firstName"
                              id="firstName"
                              name="firstName"
                              placeholder="First Name"
                              className="form-control"
                           />
                        </Col>
                     </Row>
                     {/* Row 2 - Last Name */}
                     <Row className="form-group">
                        <Label htmlFor="lastName" md={2}>
                           Last Name
                        </Label>
                        <Col md={10}>
                           <Control.text
                              model=".lastName"
                              id="lastName"
                              name="lastName"
                              placeholder="Last Name"
                              className="form-control"
                           />
                        </Col>
                     </Row>
                     {/* Row 3 - Phone */}
                     <Row className="form-group">
                        <Label htmlFor="phoneNum" md={2}>
                           Phone
                        </Label>
                        <Col md={10}>
                           <Control.text
                              model=".phoneNum"
                              id="phoneNum"
                              name="phoneNum"
                              placeholder="Phone number"
                              className="form-control"
                           />
                        </Col>
                     </Row>
                     {/* Row 4 - Email */}
                     <Row className="form-group">
                        <Label htmlFor="email" md={2}>
                           Email
                        </Label>
                        <Col md={10}>
                           <Control.text
                              model=".email"
                              id="email"
                              name="email"
                              placeholder="Email"
                              className="form-control"
                           />
                        </Col>
                     </Row>
                     {/* Row 5- Check */}
                     <Row className="form-group">
                        <Col md={{ size: 4, offset: 2 }}>
                           <div className="form-check">
                              <Label check>
                                 <Control.checkbox
                                    model=".agree"
                                    name="agree"
                                    className="form-check-input"
                                 />{" "}
                                 <strong>May we contact you?</strong>
                              </Label>
                           </div>
                        </Col>
                        <Col md={4}>
                           <Control.select
                              model=".contactType"
                              name="contactType"
                              className="form-control"
                           >
                              <option>By Phone</option>
                              <option>By Email</option>
                           </Control.select>
                        </Col>
                     </Row>
                     {/* Row 6 - Your Feedback */}
                     <Row className="form-group">
                        <Label htmlFor="feedback" md={2}>
                           Your Feedback
                        </Label>
                        <Col md={10}>
                           <Control.textarea
                              model=".feedback"
                              id="feedback"
                              name="feedback"
                              rows="12"
                              className="form-control"
                           />
                        </Col>
                     </Row>
                     {/* Row 7 - Button */}
                     <Row className="form-group">
                        <Col md={{ size: 10, offset: 2 }}>
                           <Button type="submit" color="primary">
                              Send Feedback
                           </Button>
                        </Col>
                     </Row>
                  </LocalForm>
               </div>
            </div>
         </div>
      );
   }
}

export default Contact;

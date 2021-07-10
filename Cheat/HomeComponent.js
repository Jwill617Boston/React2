import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>;
    }
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

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                        <BreadcrumbItem><Link to="/aboutus">About Us</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Home</h2>
                    <RenderCard
                        item={props.campsite}
                        isLoading={props.campsitesLoading}
                        errMess={props.campsitesErrMess}
                    />                   
                    <hr />
                </div>
            </div>
        </div>
    );
}


export default Home;  

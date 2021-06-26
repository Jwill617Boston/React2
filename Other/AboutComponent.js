import React from 'react';
import { Media } from 'reactstrap';

function RenderPartner({name, image, description}) {   

    return (
        <React.Fragment>
            <Media object width="150" src={image} alt={name} />
                <Media body className="ml-5 mb-4">
                <Media heading>{name}</Media>
                {description}
            </Media>
        </React.Fragment>
        );
    }


function About({partners}) { 

    render() {
        return (            
                <Media tag="li" key={partners.id}>
                <RenderPartner />
                </Media>            
        );
    }  
}




export default About;
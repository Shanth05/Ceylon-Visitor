import React from 'react';
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png"
import guideImg from "../assets/images/guide.png"
import CustomizationImg from "../assets/images/customization.png"

const serviceData =[
    {
        imgUrl: weatherImg,
        title : "Calculate Weather",
        desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quis nisi ipsum neque excepturi voluptatem. Qui sit blanditiis beatae veniam eos voluptatum accusantium nam molestias temporibus. Alias dignissimos impedit ipsum!",
    },
    {
        imgUrl: guideImg,
        title : "Best Tour Guide",
        desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quis nisi ipsum neque excepturi voluptatem. Qui sit blanditiis beatae veniam eos voluptatum accusantium nam molestias temporibus. Alias dignissimos impedit ipsum!",
    },
    {
        imgUrl: CustomizationImg,
        title : "Customization",
        desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quis nisi ipsum neque excepturi voluptatem. Qui sit blanditiis beatae veniam eos voluptatum accusantium nam molestias temporibus. Alias dignissimos impedit ipsum!",
    },
]


const ServiceList = () => {
  return (
    <>
        {serviceData.map((item,index) => (
            <Col lg="3" md="6" sm="12" className='mb-4' key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
    </>
 );
};

export default ServiceList;
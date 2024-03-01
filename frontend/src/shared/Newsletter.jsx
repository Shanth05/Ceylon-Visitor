import React from 'react'
import "./newsletter.css"

import { Container, Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
  <section className="newsletter">
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful traveling information.</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder="Enter your email" />
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, corporis? Consectetur magni veniam velit deserunt adipisci? Quis reprehenderit culpa quia minus dolorum soluta aliquam, placeat aperiam eius harum hic natus.</p>
                </div>
            </Col>
            <Col lg="6">
                <div className="newsletter_img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  );
};

export default Newsletter
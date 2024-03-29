import React from 'react'
import '../styles/home.css'

import { Container, Row,Col} from 'reactstrap' ;
import sigiriya from '../assets/images/sigiriya.jpg';
import galle from '../assets/images/galle.jpg';
import Ceylon from '../assets/images/Ceylon.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>

  {/*====== hero section start ===== */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle  d-flex align-items-center ">
              <Subtitle subtitle={'Know Before You Go'}/>
              <img src={worldImg} alt='' />
            </div>
            <h1>
              Traveling opens the door to creating{" "} 
              <span className="highlight"> memories</span>
            </h1>
            <p>Each place, and each smile in Sri Lanka has a story to tell.
            We have so much to share with you, so come along to our island in paradise! 
            </p>
          </div>
        </Col>
        <Col lg='2'>
            <div className='hero__img-box'> 
              <img src={sigiriya} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box hero__video-box mt-4'> 
              <video src={Ceylon} alt="" controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-5'> 
              <img src={galle} alt="" />
            </div>
          </Col>
          <SearchBar />
      </Row>
    </Container>
  </section>
    {/*====== hero section start ===== */}
    <section>
      <Container>
        <Row>
            <Col lg='3'>
              <h5 className="services__subtitle"> What we serve </h5>
              <h2 className="services__title"> We Offer our best services</h2>
            </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

      {/*========== featured tour section start ========== */}

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title"> Our featured tours </h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>
      {/*========== featured tour section end ============ */}
  
      {/*========== experience section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>

                <h2>Plan Your Dream Holiday </h2>
                <p>
                Each day on this island promises new experiences, discoveries, and life-long memories. 
                <br/>
                With so much to do,let us help you with these itineraries created just for you! 
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experince__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*========== experience section end ============ */}
     
     
      {/*========== gallery section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
            <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/*========== gallery section end ============ */}

      {/*========== testimonial section end ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className="testimonial__title">
              What our fancs say about us
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      {/*========== testimonial section end ============ */}
      <Newsletter />
  </>
  );
};

export default Home;
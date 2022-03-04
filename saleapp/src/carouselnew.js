import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


class Caroselslide extends React.Component{
    render(){
        return(
        
        <Carousel>
            <Carousel.Item interval={2500}>
                <img width={900} height={200}  className="d-block w-100 h-200" src="/images/image1.png" alt="Image One"/>
                <Carousel.Caption>
                    <h3>PRODUCT DASHBOARD</h3>
                    <p>simple dashboard for sale survey</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                <img width={900} height={200} className="d-block w-100" src="/images/react.png" alt="Image Two"/>
                <Carousel.Caption>
                    <h3>BUY THE PRODUCT</h3>
                    <p>simple dashboard for sale survey</p>
                </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
      
        )
    }
}

export {Caroselslide}
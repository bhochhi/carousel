import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from './slide.component';
import axios from 'axios';
import Carousel from 'react-responsive-carousel';

class CarouselContainer extends Component {
  constructor(props){
    super(props);
  }


componentWillMount() {
       
        // axios.get(url)
        //     .then(response => {
        //         this.setState({
        //             data: response.data.data
        //         });
        //         console.log(response.data.data);
        //     })
        //     .catch(err => {
        //         alert(err);
        //     });

    }


  render() {
 
    //var slides = this.props.slides.map((slide, idx) => <Slide key={idx} slide={slide} />);
      var slides = this.props.slides.map((slide, idx) =>   <img key={idx} alt={slide.title} src={slide.imgUrl} height="600" width="auto" />);
    
    
    return (
      <Carousel axis="horizontal" showThumbs={false} showArrows={false} autoPlay={true} interval={4000} showIndicators={false} infiniteLoop={true}>
                {/*{this.slides}*/}
      </Carousel>
    );

    /*return (
      <ul className="container">
        {slides}
      </ul>

    );*/

  }
}

CarouselContainer.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CarouselContainer;

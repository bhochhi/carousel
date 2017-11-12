import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from './slide.component';

class Carousel extends Component {
  render() {
    var slides = this.props.slides.map((slide, idx) => <Slide slide={slide} />);
    
    return (
      <ul className="container">
        {slides}
      </ul>

    );

  }
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Carousel;

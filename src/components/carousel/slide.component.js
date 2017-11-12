
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Slide extends Component {
    


    render(){
        const slide = this.props.slide;
        return (
            <img alt={slide.title} src={slide.imgUrl} height="600" width="auto" />
        )
    }

}


Slide.propTypes = {
    slide: PropTypes.object.isRequired
}

export default Slide;



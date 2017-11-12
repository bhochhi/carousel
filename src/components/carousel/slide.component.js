
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Slide extends Component {

    render(k){
        console.log('kkk',k);
        return (
            <li>{this.props.slide.title}</li>
        )
    }

}


Slide.propTypes = {
    slide: PropTypes.object.isRequired
}

export default Slide;



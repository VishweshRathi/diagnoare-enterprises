import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Carousel from '../Carousel/Carousel'
// import classes from './Home.css'
class Home extends Component {
    render() {
        let imageInfoForCarouse = {
            "slideshow_1.jpg": "Meril Diagnostic Kit",
            "slideshow_2.jpg": "Pathozyme Daignostics",
            "slideshow_3.jpg": "Agappe Diagnostics LTD"
        }
        return (
            <Aux>
                <Carousel imageInfoForCarouse={ imageInfoForCarouse }/>
            </Aux >
        );
    };

}

export default Home
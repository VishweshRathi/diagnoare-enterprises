import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
// import classes from './Home.css'
class Carousel extends Component {

    getCarouselIndicator = (imageInfoForCarouse) => {
        return (
            Object.keys(imageInfoForCarouse).map((val, index) => {
                return <li key={index} data-target="#myCarousel" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
            })
        )
    }

    getCarouselItem = (imageInfoForCarouse) => {
        let element = []
        let firstImage = true
        for (let key in imageInfoForCarouse) {
            element.push(
                <div key={key} className={firstImage ? "item active" : "item"}>
                    <img src={require("../../../public/images/Carousel/" + key)} alt="Los Angeles" style={{ margin: "0 auto", width: "70%" }} />
                    <div className="carousel-caption">
                        <p style={{ fontWeight: "bold" }}>{imageInfoForCarouse[key]}</p>
                    </div>
                </div>
            )
            firstImage = false
        }
        return element
    }
    render() {
        const { imageInfoForCarouse } = this.props;
        return (
            <Aux>
                <div className="container" style={{ width: "40%" }}>
                    <h2 style={{ textAlign: "center" }}>Our Products</h2>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {this.getCarouselIndicator(imageInfoForCarouse)}
                        </ol>
                        <div className="carousel-inner">
                            {this.getCarouselItem(imageInfoForCarouse)}
                        </div>
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </Aux >
        );
    };

}

export default Carousel
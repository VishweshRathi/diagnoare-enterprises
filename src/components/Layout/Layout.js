import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
// import classes from './Layout.css'
// import logo from '../../../public/images/logo_dia.png'
class Layout extends Component {
    render() {
        return (
            <Aux>
                {/* <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <button type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="www.google.com">DIAGNOCARE ENTERPRISES</a>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="active"><a href="/home" > Home</a></li>
                                { <li ><a href="/products" > Products</a></li> }

                                <li className="dropdown">
                                
                                </li>
                                <li ><a href="/contactus" > Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
 */}

                <main>
                    {this.props.children}
                </main>
            </Aux >
        );
    };

}

export default Layout
import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import * as classes from './Layout.css'
import logo from '../../../public/main_logo.jpg'
class Layout extends Component {
    render () {
        return (
            <Aux>
                <div className={classes.main_frame}>
                    <div className={classes.header}>
                    <img className={classes.Logo} src={logo} alt="Diagnocare" />                    
                    <div className={classes.header_text}>DIAGNOCARE ENTERPRISES</div>
                    </div>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </Aux>
        );
    };

}

export default Layout
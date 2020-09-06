import React, { Component } from 'react';
import "../App.css"

class Header extends Component {
    render() {
        return (
            <div className="header text-center fixed-top" 
            style={{backgroundColor: "black",color:"white",paddingTop:"1%",overflow:"hidden",textAlign:"center"}}>
                <h2>GitHub User Profile Search</h2>
            </div>
        );
    }
}


export default Header;
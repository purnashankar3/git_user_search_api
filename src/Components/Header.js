import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header text-center fixed-top" 
            style={{backgroundColor: "black",color:"white",paddingTop:"2%",overflow:"hidden"}}>
                <h2>GitHub User Profile Search</h2>
            </div>
        );
    }
}


export default Header;
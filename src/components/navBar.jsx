import React, { Component } from 'react';

class NavBar extends Component {

    render() { 
        return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <a className="navbar-brand" href="https://www.google.com">
                NavBar{" "}
                <span className="badge badge-pill badge-secondary">
                    {this.props.totalCounters}
                </span>
            </a>
            
        </nav>
          );
    }
}
 
export default NavBar;

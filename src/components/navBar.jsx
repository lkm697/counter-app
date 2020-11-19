import React, { Component } from 'react';

class NavBar extends Component {

    render() { 
        return (
<<<<<<< HEAD
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
=======
        <nav className="navbar navbar-light bg-light">
>>>>>>> 5329c3db4033b55f9eaa3fc35033cc9bdbd869ff
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

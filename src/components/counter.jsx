import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        //console.log(this.props);

        return(
        <React.Fragment>
            {this.props.children}
            <span className= {this.getBadgeClasses()} >  {this.formatCount()}  </span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm"> Increment </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn-danger btn-sm m-2">Delete</button>
        </React.Fragment> 
        );
    }



    getBadgeClasses(){
        let classes = "badge m-2";
        if (this.props.counter.value === 0) {
            classes += " badge-warning";
        } else {
            classes += " badge-primary";
        }
        return classes;
    }

    formatCount(){
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }
}
 
export default Counter;
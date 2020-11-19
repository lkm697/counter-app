import React, { Component } from 'react';   
import Counter from "./counter";

class Counters extends Component {
    state = {  
        counters: [
            {id: 1, value: 3},
            {id: 2, value: 2},
            {id: 3, value: 6},
            {id: 4, value: 8},
            {id: 5, value: 6},
            
        ]
    }

    handleDelete =  (counterId) =>{
        console.log('Delete Handler Called on: ', counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
        let items = counters.length;
        this.props.upNode(items);

    }

    componentDidMount = () =>{
        let items = this.state.counters.length;
        this.props.upNode(items);
    }
    handleReset = () => {
        console.log('Counters reset');
        let counters = [...this.state.counters];
        counters.forEach(counter => { counter.value = 0; });
        this.setState({counters});
    }

    onIncrement = counter =>{
        console.log("Increment counter :", counter.id);
        let counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index].value++;
        this.setState({counters});
    }

    render() { 
        return ( 
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NUYvbT6vTPs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br></br>
                <button className="btn-primary btn-sm m-2"onClick={this.handleReset}
>
                    Reset
                </button>
                {
                    this.state.counters.map( mcounter =>(<Counter 
                        key={mcounter.id} 
                        onDelete={this.handleDelete} 
                        onIncrement={this.onIncrement}
                        counter={mcounter}
                        selected={true}>
                            <h4>Counter # {mcounter.id}</h4>
                            </Counter>
                        ))    
                }   
            </div>
         );
    }
}
 
export default Counters;
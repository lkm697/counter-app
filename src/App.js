import React, { Component } from 'react';
import NavBar from './components/navBar';
import Counters from './components/counters';

class App extends Component {
    state = {
        itemsCount: 0
      }
    render() { 
        return (  
            <React.Fragment>
                <NavBar  totalCounters={this.state.itemsCount}/>
                <br></br>
                <main className="container">
                    <Counters upNode={this.onUpNode} />
                </main>
                
            </React.Fragment>
            
        );
    }

    onUpNode = (numberOfCounters) => {
        this.setState({itemsCount:numberOfCounters}, console.log(this.state) );
    }
}
 
export default App;
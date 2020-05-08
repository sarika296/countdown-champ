import React, { Component } from 'react';
import './index.css';
import Clock from './Clock';

class App extends Component {

    state = {
        deadline:"May 25, 2020",
        newDeadline:""
    }

    changeDeadline = () => {
        this.setState({ deadline:this.state.newDeadline});
    }

    render() {
        return(
            <div className='App'>
                <div 
                    className="App-title">
                    Countdown to {this.state.deadline}
                </div>
                <Clock 
                    deadline={this.state.deadline}
                />
                <div>
                    <input 
                        className="Deadline-input"
                        placeholder="new date"
                        onChange={event => this.setState({newDeadline:event.target.value}) }
                    />
                    <button 
                        className="button"  
                        onClick={this.changeDeadline}>Submit</button>
                </div>
            </div>
        )
    }
}



export default App;
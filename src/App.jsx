import React, { Component } from 'react';
import './index.css';

class App extends Component {

    state = {
        deadline:"November 25, 2020"
    }
    render() {
        return(
            <div className='App'>
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <div>
                    <div className='clock-days'>14 days</div>
                    <div className='clock-hours'>30 hours</div>
                    <div className='clock-minutes'>15 minutes</div>
                    <div className='clock-seconds'>20 seconds</div>
                </div>
                <div>
                    <input placeholder="new date" />
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}



export default App;
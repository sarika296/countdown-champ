import React, { Component } from 'react';
import './App';

class Clock extends Component {
    state = {
        days:0,
        hours:0,
        minutes:0,
        seconds:0
    }


    getTimeUtil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log('time',time)
    }

    render() {
        this.getTimeUtil(this.props.deadline);
        return(
            <div>
                 <div>
                    <div className='clock-days'>{this.state.days} days</div>
                    <div className='clock-hours'>{this.state.hours} hours</div>
                    <div className='clock-minutes'>{this.state.minutes} minutes</div>
                    <div className='clock-seconds'>{this.state.seconds} seconds</div>
                </div>
            </div>
        )
    }
}
export default Clock;
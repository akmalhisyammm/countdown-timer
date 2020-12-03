import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: parseInt(props.startMinutes),
            seconds: parseInt(props.startSeconds)
        };
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }));
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval);
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }));
                }
            }
        }, 1000);
    }

    render() {
        const { minutes, seconds } = this.state;

        return (
            <div style={{textAlign: "center"}}>
                <h1>Time Remaining</h1>
                <h1>{ minutes < 10 ? `0${minutes}` : minutes }:{ seconds < 10 ? `0${ seconds }` : seconds }</h1>
            </div>
        )
    }
}
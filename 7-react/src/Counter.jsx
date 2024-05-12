import React from 'react'

export default class Counter extends React.Component {
    state = {
        counter: 0
    }

    render() {
        return (
        <div>
            <span className='value'>{this.state.counter}</span>
            <button
                style={{ marginLeft: '5px' }}
                onClick={() => this.setState({ counter: this.state.counter + 1 })}
            >
                Increase
            </button>
            <button
            style={{ marginLeft: '5px'}}
                onClick={() => this.setState({ counter: this.state.counter - 1 })}
            >
                Decrease
            </button>
        </div>

        )
    }
}


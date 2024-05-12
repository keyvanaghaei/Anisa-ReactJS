const rootContainer = document.getElementById('root')

class Counter extends React.Component {

    state = {
        counter: 0
    }
    


valueElement = () => {
    return React.createElement('span', {}, this.state.counter)
}

increaseElement = () => {
    return React.createElement('button', {
        style: {margin: '5px'},
        onClick: () => {
            this.setState({counter: this.state.counter + 1})
        }

    }, 
    'Increase'
    )
}

decreaseElement = () => {
    return React.createElement('button', {
        style: {margin: '5px'},
        onClick: () => {
            this.setState({counter: this.state.counter - 1})
        }
    }, 
    'Decrease'
    )
}

    render() {
        console.log('render');
        return React.createElement (
        'div', 
        {}, 
        this.valueElement(),
        this.increaseElement(), 
        this.decreaseElement()
        )
    }
}

const el = React.createElement(
'div',
{},
React.createElement(Counter),
React.createElement(Counter),
React.createElement(Counter),
React.createElement(Counter),
React.createElement(Counter)
)

// const el = React.createElement(Counter)
// const span = React.createElement('span', {}, 'Salam')
// const div = React.createElement('div', {}, 'Keyvan')
// const el = React.createElement('div', {}, span, div)

const root = ReactDOM.createRoot(rootContainer)

root.render(el)



import React from "react";

class NewCounter extends React.Component {
    constructor () {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        const reduceCounter = () => {
            this.setState({ count: this.state.count - 1})
        }

        const increaseCounter = () => {
            this.setState({ count: this.state.count + 1 })
        }

        const counterValue = () => {
        }

        return (
            <article>
                <button onClick={reduceCounter}>-</button>
                <span>{ this.state. count }</span>
                <button onClick={increaseCounter}>+</button>
            </article>
        )
    }
}

export default NewCounter;
import React from "react";

class NewCounter extends React.Component {
    constructor () {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        const count = this.state.count;

        const reduceCounter = () => {
            this.setState({ count: count - 1})
        }

        const increaseCounter = () => {
            this.setState({ count: count + 1 })
        }

        return (
            <article>
                <p>sss { this.props.id }</p>
                <button onClick={reduceCounter}>-</button>
                <span>{ this.state.count }</span>
                <button onClick={increaseCounter}>+</button>
                <button className="close"
                    onClick={() => this.props.onDelete(this.props.id)}
                    >x</button>
            </article>
        )
    }
}

export default NewCounter;
import React, { Component } from 'react'

export default class AddCountItem extends Component {
    render() {
        const { id, value } = this.props;

        return (
            <article key={ id }>
                <button onClick={() => this.props.onReduce(id, value)}>-</button>
                <span>{ value }</span>
                <button onClick={() => this.props.onIncrease(id, value)}>+</button>
                <button className="close"
                onClick={() => this.props.onDelete(id)}
                    >x</button>
            </article>
        )
    }
}

import React, { Component } from 'react'
import AddCountItem from "./countItem";

export default class counter extends Component {
    state = {
        countList: [],
        count: 0
    }

    checkArrayAvailability = () => {
        if (this.state.countList.length === 0) {
            return <div>Press + to start</div>
        }
    }

    addNewCounter = () => {
        const { countList, count } = this.state;

        this.setState({
            count: count + 1,
            countList: countList.concat({id: count, value: 0})
        })
    }

    removeCounter = (countItemID) => {
        const { countList } = this.state;
        const countLists = countList.filter(countItem => countItem.id !== countItemID);
        this.setState({ countList: countLists });
    }

    increaseCounter = (id, value) => {
        const { countList } = this.state;

        countList.map(item => {
            if(item.id == id) {
                item.value = item.value + 1;
            }
            this.setState({value: value})
        })
    }

    reduceCounter = (id, value) => {
        const { countList } = this.state;

        countList.map(item => {
            if(item.id == id) {
                item.value = item.value - 1;
            }
            this.setState({value: value})
        })
    }
    
    render() {
        return (
            <>
                <main>
                { this.checkArrayAvailability() }
                { this.state.countList.map((counterData) => 
                    <AddCountItem 
                        onDelete={ this.removeCounter }  
                        remove={ this.remove } 
                        onIncrease={ this.increaseCounter }
                        onReduce={ this.reduceCounter }
                        {...counterData } />) }
                </main>
                <footer>
                    <button onClick={() => this.addNewCounter()}> + </button>  
                </footer>
            </>
        )
    }
}

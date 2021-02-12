import React from "react";
import NewCounter from "./newCounter";

class AddNewCounter extends React.Component {   
    constructor(){
        super();
        this.state = {
            countList: []
        }
    }
    
    render() {
        const addNewCounter = () => {
            const countList = this.state.countList;

            this.setState({
                countList: countList.concat(<NewCounter /> )
            })
        }

        return (
            <React.Fragment>
                <main>
                { this.state.countList.map(function(counterRow, key) {
                    return counterRow;
                }) }
                </main>
                <footer>
                    <button onClick={addNewCounter}> + </button>  
                </footer>
            </React.Fragment>
        )
    }
}

export default AddNewCounter;
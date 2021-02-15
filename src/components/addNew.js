import React from "react";
import NewCounter from "./newCounter";

class AddNewCounter extends React.Component {   
    constructor(){
        super();
        this.state = {
            countList: [],
            countID: 0
        }
    }
    
    render() {
        const {countList, countID} = this.state;

        const addNewCounter = () => {
            
            this.setState({
                countID: countID + 1,
                countList: countList.concat(<NewCounter key={countID} id={countID} onDelete={handleDelete} />)             
            });
            console.log('countList', countList)
        }

        const checkArrayAvailability = () => {
            if (this.state.countList.length === 0) {
                return <div>Press + to start</div>
            }
        }

        const handleDelete = countItemID => {
            console.log('Delete clicked', countItemID);
            console.log('countList.key', countList.length);
            // const items = this.state.items.filter(item => item.id !== itemId);
            // this.setState({ items: items });
            // debugger;
            const countLists = countList.filter(countItem => countItem.length !== countItemID);
            this.setState({ countList: countLists });
            console.log('countLists', countList.filter(countItem => countItem.length !== countItemID))
        }

        return (
            <>
                <main>
                { checkArrayAvailability() }
                { this.state.countList.map(function(counterRow) {
                    return counterRow;
                }) }
                </main>
                <footer>
                    <button onClick={() => addNewCounter()}> + </button>  
                </footer>
            </>
        )
    }
}

export default AddNewCounter;
import React, { Component } from "react";

export default class Cell extends Component {
    constructor(props) {
        super(props)
        // ...define initial state with a key of 'color' set to the 'value' prop
        //initial state
        this.state = {
            //key of color => set to props.value
            color: this.props.value
        }
    }

    //click handler that sets the state with this.setState and sets the key of color to '#333'
    //handleClick is passed to the onClick listener as a callback
    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }

    // render a single div with className = cell
    // add style ={{backgroundColor:this.state.color}} attribute
    // create a click listener, which when triggered will update the state to the following hex value '#333'

    render() {
        return (
            <div
                className="cell"
                style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick}
            >

            </div>
        )
    }

}
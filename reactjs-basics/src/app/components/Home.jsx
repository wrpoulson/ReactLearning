import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        }
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age - 1
        });
    }

    render(){
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}.</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me younger!</button>
            </div>
        );
    }
}

Home.propTypes = {
    name : React.PropTypes.string,
    age : React.PropTypes.number,

};
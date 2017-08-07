import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() =>  {
            this.setState({
                status: 1
            });
        }, 3000);
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age - 1
        });
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
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
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input 
                    type="text" 
                    value={this.state.homeLink} 
                    onChange={(event) => this.onHandleChange(event)}
                />
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name : React.PropTypes.string,
    age : React.PropTypes.number,
    greet: React.PropTypes.func,
    changeLink: React.PropTypes.func,
    initialLinkName : React.PropTypes.string

};
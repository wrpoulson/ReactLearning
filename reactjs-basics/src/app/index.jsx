import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    render(){
        var user = {
            name: "William",
            hobbies:["dogs", "programming", "general smartassery"]
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Bill"} age={30} user={user}>
                            <p>This is a paragraph!</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, window.document.getElementById("app"));
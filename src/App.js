import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Home";
import dangerData from "./dangerData";

import {firestore} from "./firebase";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const dangerDB = firestore.collection("dangerDB");

        // firebase 데이터 입력

        // for (var i = 0; i <= dangerData.length; i++) {
        //     var n = i + '';
        //     var idx = n.length >= 3 ? n : new Array(3 - n.length + 1).join('0') + n;
        //     dangerDB.doc(`${idx}`).set(dangerData[i]);
        // }

    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        )
    }
}

export default App;
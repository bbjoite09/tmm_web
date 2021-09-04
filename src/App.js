import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// DB
import dangerData from "./dangerData";

import {firestore} from "./firebase";
import logo from "./image/tmm_logo_2.svg";
import divider from "./image/divider.svg";
import styled from "styled-components";

import Home from "./Home";
import None from "./None";
import TmmInfo from "./TmmInfo";

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
                <RowAlign style={{marginTop: "2%", marginBottom: "1%"}}>
                    <Link to={"/"}>
                        <img style={{marginTop: "7px", width: "130px"}} src={logo}/></Link>
                    <InputBox type="text" placeholder={"지하철 단차 검색하기"} ref={this.text}/>
                </RowAlign>
                <img style={{width: "100%"}} src={divider}/>

                {/*<Route path="/" exact render={(props) => (<Home/>)}/>*/}
                <Route path="/" exact component={Home}/>
                <Route path="/searchNone" component={None}/>
                <Route path="/info" component={TmmInfo}/>
            </div>

        )
    }
}

const Box = styled.div`
    width: 50vw;
    height: 50vh;
    background-color: black;
    color: black;
`;
const RowAlign = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: row;
`;

const ColAlign = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
`;

const InputBox = styled.input`
width: 40%;
height: 55px;
margin-left: 25px;
background-color: #F2F2F2;
border-radius: 10px;
border: 0;
text-align: center;
font-size: 20px;
&: focus
{
    outline: none;
    border: 1
    px
    solid
    #dadbdb;
}
`;

const NoneImg = styled.img`
width: 40%;
position: absolute;
top: 55%;
left: 50%;
transform: translate(-50%, -50%);
`;

export default App;
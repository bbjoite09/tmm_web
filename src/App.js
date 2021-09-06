import React, {useRef, useState} from 'react';
import {withRouter} from "react-router";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {connect} from 'react-redux';

// DB
import dangerData from "./dangerData";
import {firestore} from "./firebase";
import logo from "./image/tmm_logo_2.svg";
import divider from "./image/divider.svg";
import styled from "styled-components";
import Divider from '@material-ui/core/Divider';

import Home from "./Home";
import None from "./None";
import Details from "./Details"
import TmmInfo from "./TmmInfo";
import {loadDanger} from "./redux/modules/danger";

import line1 from "./image/selected_line1.svg"
import line2 from "./image/selected_line2.svg"
import line3 from "./image/selected_line3.svg"
import line4 from "./image/selected_line4.svg"
import line5 from "./image/selected_line5.svg"
import line6 from "./image/selected_line6.svg"
import line7 from "./image/selected_line7.svg"
import line8 from "./image/selected_line8.svg"
import line9 from "./image/selected_line9.svg"

import Search from "./Search";

import name_list from "./mystation.json"
import {useSelector} from "react-redux";
import * as Hangul from 'hangul-js';

// 스토어가 가진 상태값을 props로 받아오기 위한 함수
const mapStateTopProps = (state) => ({
    danger_list: state.danger.list,
    is_loaded: state.danger.is_loaded,
});

// 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수
const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(loadDanger());
        },
    }

};

const search_list = [...name_list];
// console.log(search_list[0])


// object에 초성필드 dissembled 추가
search_list.forEach(function (item) {
    var dis = Hangul.disassemble(item.stationName, true);
    var cho = dis.reduce(function (prev, elem) {
        elem = elem[0] ? elem[0] : elem;
        return prev + elem;
    }, "");
    item.diassembled = cho;
});

// console.log(search_list);


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {search:null, lineNum: "line"};

        this.text = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.text.current.focus();
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({search: keyword})
    }

    componentDidMount() {
        this.props.load();
        // const dangerDB = firestore.collection("dangerDB");

        // firebase 데이터 입력

        // for (var i = 0; i <= dangerData.length; i++) {
        //     var n = i + '';
        //     var idx = n.length >= 3 ? n : new Array(3 - n.length + 1).join('0') + n;
        //     dangerDB.doc(`${idx}`).set(dangerData[i]);
        // }

        console.log(this.text);
        console.log(this.text.current);

    }


    render() {
        const items = search_list.filter((data) => {
            var str = ""
            if(this.state.search == null){return 0}
            else if(data.stationName.includes(this.text.current.value) || data.diassembled.includes(Hangul.disassemble(this.text.current.value).join(""))){return data}
        })
            .map(data => {
            return (
                <div>
                    <ul>
                        <Link to="/details" style={{color: "#616161", textDecoration: "none"}}>
                            <li style={{position: 'relative', left: '10vh'}}>
                            <span style={{marginLeft: "10px"}}>{data.lineNum} - {data.stationName}</span>
                        </li>
                        </Link>

                    </ul>
                </div>
            )
        })

        return (

            <div className="App">
                <RowAlign style={{marginTop: "2%", marginBottom: "1%"}}>
                    <Link to={"/"}>
                        <img style={{marginTop: "3px", width: "130px"}} src={logo}/></Link>
                    <InputBox type="text"
                              ref={this.text}
                              placeholder={"지하철 단차 검색하기"}
                              onChange={(e) => this.searchSpace(e)}
                              onClick={this.focusTextInput}
                    />

                </RowAlign>
                <Divider style={{width: "100%"}}/>
                {items}

                {/*-------------------------------------------------*/
                }


                {/*<Route path="/" exact render={(props) => (<Home/>)}/>*/
                }
                <Route path="/" exact render={(props) => (
                    <Home
                        list={this.props.danger_list}
                        history={this.props.history}
                    />
                )}/>
                <Route path="/searchNone" component={None}/>
                <Route path="/info" component={TmmInfo}/>
                <Route path="/details" component={Details}/>
            </div>

        )
    }
}


const RowAlign = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: row;
`;

const InputBox = styled.input`
width: 40%;
height: 44px;
margin-left: 25px;
background-color: #F2F2F2;
border-radius: 10px;
border: 0;
text-align: center;
font-size: 15px;
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


export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
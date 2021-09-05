import React from 'react';
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

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.text = React.createRef();
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

    }


    render() {
        return (
            <div className="App">
                <RowAlign style={{marginTop: "2%", marginBottom: "1%"}}>
                    <Link to={"/"}>
                        <img style={{marginTop: "3px", width: "130px"}} src={logo}/></Link>
                    <InputBox type="text" placeholder={"지하철 단차 검색하기"} ref={this.text}/>
                </RowAlign>
                <Divider style={{width: "100%"}}/>

                {/*<Route path="/" exact render={(props) => (<Home/>)}/>*/}
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
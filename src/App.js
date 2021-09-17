import React from 'react';
import {withRouter} from "react-router";
import {Route, Link} from "react-router-dom";
import {connect} from 'react-redux';

// DB
import logo from "./image/tmm_logo_2.svg";
import styled from "styled-components";
import Divider from '@material-ui/core/Divider';

import Home from "./Home";
import None from "./None";
import Details from "./Details"
import TmmInfo from "./TmmInfo";
import {loadDanger} from "./redux/modules/danger";


import name_list from "./mystation.json"
import * as Hangul from 'hangul-js';

// image
import selected1 from "./image/selected_line1.svg"
import selected2 from "./image/selected_line2.svg"
import selected3 from "./image/selected_line3.svg"
import selected4 from "./image/selected_line4.svg"
import selected5 from "./image/selected_line5.svg"
import selected6 from "./image/selected_line6.svg"
import selected7 from "./image/selected_line7.svg"
import selected8 from "./image/selected_line8.svg"
import selected9 from "./image/selected_line9.svg"


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

function getImage(line) {
    switch (line) {
        case "1호선" :
            return selected1;
        case "2호선" :
            return selected2;
        case "3호선" :
            return selected3;
        case "4호선" :
            return selected4;
        case "5호선" :
            return selected5;
        case "6호선" :
            return selected6;
        case "7호선" :
            return selected7;
        case "8호선" :
            return selected8;
        case "9호선" :
            return selected9;
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {search: null, lineNum: "line", showDiv: false, isMystation: false};

        this.text = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.text.current.focus();
        <items/>
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({search: keyword})
    }

    componentDidMount() {
        this.props.load();
    }


    render() {
        const items = search_list.filter((data) => {
            var str = ""
            if (this.state.search == null) {
                return
            } else if (data.stationName.includes(this.text.current.value) || data.diassembled.includes(Hangul.disassemble(this.text.current.value).join(""))) {
                return data
            } else if (this.state.search === "") {
                this.props.history.push("/searchNone")
            }

        })
            .map(data => {
                return (
                    <div>
                        <div style={{
                            height: "41px",
                            display: "flex",
                            alignItems: "center"
                        }} onClick={() => {
                            this.props.history.push('/details=' + data.lineNum[0] + data.stationName)
                        }}>
                            <RowAlign style={{width: "50%", justifyContent: "flex-start", alignItems: "center"}}>
                                <img src={getImage(data.lineNum)} style={{width: "25px", marginLeft: "5%"}}/>
                                <p style={{ marginLeft: "3%",}}>{data.stationName}</p>
                            </RowAlign>
                        </div>
                        <Divider/>
                    </div>
                )
            })

        return (

            <div className="App">
                <RowAlign style={{marginTop: "2%", marginBottom: "1%"}}>
                    <Link to={"/"}>
                        <img style={{marginTop: "5px", width: "100px"}} src={logo}/></Link>
                    <InputBox type="text"
                              ref={this.text}
                              placeholder={"지하철 단차 검색하기"}
                              onChange={(e) => this.searchSpace(e)}
                    />

                </RowAlign>
                <Divider style={{width: "100%"}}/>
                {items}

                <Route path="/" exact render={(props) => (
                    <Home
                        list={this.props.danger_list}
                        history={this.props.history}
                    />
                )}/>

                <Route path="/searchNone" component={None}/>
                <Route path="/info" component={TmmInfo}/>
                <Route path="/details=:index" component={Details}/>
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
    width: 60%;
    height: 44px;
    margin: 0 0 1% 25px;
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


export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
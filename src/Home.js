import React from "react";
import styled from "styled-components";
import tmm_info from "./image/tmm_info.svg"
import NestedList from "./components/NestedList";
import ControlledAccordions from "./components/ControlledAccordions"
import Divider from '@material-ui/core/Divider';
import {withRouter} from "react-router";

import mystation1 from "./image/mystation_1.svg"
import mystation2 from "./image/mystation_2.svg"
import mystation3 from "./image/mystation_3.svg"
import mystation4 from "./image/mystation_4.svg"
import mystation5 from "./image/mystation_5.svg"
import mystation6 from "./image/mystation_6.svg"
import mystation7 from "./image/mystation_7.svg"
import mystation8 from "./image/mystation_8.svg"
import mystation9 from "./image/mystation_9.svg"

import {useSelector, useDispatch} from "react-redux";

const Home = (props) => {
    const myStationList = useSelector(state => state.danger.myStationList);

    function getImage(line) {
        switch (line) {
            case "1" :
                return mystation1;
            case "2" :
                return mystation2;
            case "3" :
                return mystation3;
            case "4" :
                return mystation4;
            case "5" :
                return mystation5;
            case "6" :
                return mystation6;
            case "7" :
                return mystation7;
            case "8" :
                return mystation8;
            case "9" :
                return mystation9;
        }
    }


    return (
        <ColAlign>
            {/* 좌측 - 틈 배너, 자주찾는 역*/}
            {/*<Box>*/}

            <h3 style={{margin: "10% 0 5% 0"}}>자주 찾는 역</h3>
            <Divider style={{width: "100%", margin: "0 0 5% 0", overflowX: "hidden", overflowY: "auto"}}/>

            <MyStation>


                {myStationList.map((l, idx) => {
                    if (l.checkState === true) {
                        return (
                            <ColAlign2>
                                <img src={getImage(l.lineNum[0])} style={{width: "50dp"}} onClick={() => {
                                    props.history.push("/details=" + l.lineNum[0] + l.stationName)
                                }}/>
                                <text style={{fontSize: "0.9375em"}}>{l.stationName}</text>
                            </ColAlign2>
                        )
                    }

                })}


            </MyStation>
            <img src={tmm_info} style={{width: "100%", marginTop: "5%"}}
                 onClick={() => {
                     props.history.push('/info')
                 }}
            />

            {/*</Box>*/}

            {/* 우측 - 단차 위험 호선*/}
            {/*<Box style={{background: "white"}}>*/}
            <h3 style={{margin: "5% 0 0 3%"}}>단차 위험 호선</h3>
            <NestedList {...props}/>

            {/*</Box>*/}
        </ColAlign>
    )
};

const ColAlign = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 7% 5% 7%;

`;

const ColAlign2 = styled.div`
    width: 15%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 3% 3% 3%;

`;

const RowAlign = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

const MyStation = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    margin-left: 20%;
    margin-bottom: 10px;
    flex-wrap: wrap;
`;

const Box = styled.div`
    width: 30vw;
    background-color: none;
    color: black;
`;

export default withRouter(Home);
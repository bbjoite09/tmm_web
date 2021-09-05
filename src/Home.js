import React from "react";
import styled from "styled-components";
import tmm_info from "./image/tmm_info.svg"
import NestedList from "./NestedList";
import ControlledAccordions from "./ControlledAccordions"
import mystation1 from "./image/mystation_1.svg"
import Divider from '@material-ui/core/Divider';

import {useSelector, useDispatch} from "react-redux";

const Home = (props) => {
    const danger_list = useSelector(state => state.danger.list);

    return (
        <RowAlign>
            {/* 좌측 - 틈 배너, 자주찾는 역*/}
            <Box>
                <img src={tmm_info} style={{marginLeft: "20%", width: "60%", marginTop: "5%"}}
                     onClick={() => {
                         props.history.push('/info')
                     }}
                />
                <h3 style={{margin: "10% 0 5% 20%"}}>자주 찾는 역</h3>
                <Divider style={{width: "60%", margin: "0 0 5% 20%", overflowX:"hidden", overflowY: "auto"}}/>
                <MyStation>
                    <ColAlign>
                        <img src={mystation1} style={{width: "80%"}}/>
                        <text style={{fontSize: "0.9375em"}}>서울역</text>
                    </ColAlign>
                </MyStation>

            </Box>

            {/* 우측 - 단차 위험 호선*/}
            <Box style={{background: "white"}}>
                <h3 style={{margin: "5% 0 0 3%"}}>단차 위험 호선</h3>
                <NestedList/>

            </Box>
        </RowAlign>
    )
};

const ColAlign = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 7% 5% 7%;

`;

const RowAlign = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

const MyStation = styled.div`
    width: 60%;
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

export default Home;
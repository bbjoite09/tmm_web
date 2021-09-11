import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

// image resource
import selected1 from "./image/selected_line1.svg"
import selected2 from "./image/selected_line2.svg"
import selected3 from "./image/selected_line3.svg"
import selected4 from "./image/selected_line4.svg"
import selected5 from "./image/selected_line5.svg"
import selected6 from "./image/selected_line6.svg"
import selected7 from "./image/selected_line7.svg"
import selected8 from "./image/selected_line8.svg"
import selected9 from "./image/selected_line9.svg"
import checked from "./image/checked.svg"
import unchecked from "./image/unchecked.svg"


// components
import MsgModal from "./components/MsgModal";
import CallModal from "./components/CallModal";
import {updateCheck} from "./redux/modules/danger";
import stationDB from "./station.json"

const Details = (props) => {
    const dispatch = useDispatch();
    const myStationList = useSelector((state) => state.danger.myStationList);
    const stationList = [...stationDB]

    const NumName = props.match.params.index;
    const name = NumName.substring(1);
    const line = NumName[0] + "호선";


    // console.log(index)

    function index(name_, line_) {
        let tempIdx = -1
        myStationList.map((l, idx) => {
            if ((l.stationName === name_) && (l.lineNum === line_)) {
                tempIdx = idx;
            }
        })
        return tempIdx;
    }

    const nowIdx = index(name, line)

    function getImage(line) {
        switch (line) {
            case "1" : return selected1;
            case "2" : return selected2;
            case "3" : return selected3;
            case "4" : return selected4;
            case "5" : return selected5;
            case "6" : return selected6;
            case "7" : return selected7;
            case "8" : return selected8;
            case "9" : return selected9;
        }
    }


    return (
        <div style={{margin: "1% 0 0 5%"}}>
            <RowAlign>
                <h1 style={{marginRight: "1%"}}>{line} {name}</h1>
                <img src={getImage(line[0])} style={{margin: "1% 1% 1% 0"}}/>

                <img style={{margin: "1% 1% 1% 0"}}
                     onClick={() => {
                         dispatch(updateCheck(name, line))
                     }}
                     src={myStationList[nowIdx].checkState ? checked : unchecked}
                />
            </RowAlign>
            <div>
                <h3>정보</h3>
                <></>
            </div>
            <div>
                <h3>헬프콜 서비스</h3>
                <p>역무원에게 안전발판을 요청할 수 있는 서비스입니다.</p>
                <MsgModal/>
                <CallModal/>
            </div>
        </div>

    )
}

const ColAlign = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 7% 5% 7%;

`;

const RowAlign = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
`;

export default Details;
import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import selected_line1 from "./image/selected_line1.svg"
import selected_line2 from "./image/selected_line2.svg"
import selectedX_line2 from "./image/selectedX_line2.svg"
import unchecked from "./image/unchecked.svg"

import MsgModal from "./MsgModal";
import CallModal from "./CallModal";

const Details = (props) => {
    const dispatch = useDispatch();
    const danger_list = useSelector((state) => state.danger.list);

    return (
        <div style={{margin: "1% 0 0 5%"}}>
            <RowAlign>
                <h1 style={{marginRight: "1%"}}>합정역</h1>
                <img src={selected_line1} style={{margin: "1% 1% 1% 0"}}/>
                <img src={selectedX_line2} style={{margin: "1% 1% 1% 0"}}/>

                <img src={unchecked} style={{margin: "1% 1% 1% 0"}}/>
            </RowAlign>
            <div>
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


export default Details
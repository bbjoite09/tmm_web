import React from "react";
import styled from "styled-components";
import logo from "./image/tmm_logo_2.svg"
import divider from "./image/divider.svg"

const Home = (props) => {
    return (
        <ColAlign>
            <RowAlign style={{marginTop: "3%", marginBottom: "2%"}}>
                <img style={{width: "150px"}} src={logo}/>
                <InputBox style={{marginLeft: "25px"}}/>
            </RowAlign>
            <img style={{width: "100%"}} src={divider}/>

        </ColAlign>

)
};

const Box = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    color: black;
`;

const RowAlign = styled.div`
    width: 100%;
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
    background-color: #F2F2F2;
    border-radius: 10px;
    border: 0;
    text-align: center;
    font-size: 20px;
    &: focus{
        outline: none;
        border: 1px solid #dadbdb;
    }
`;

export default Home;
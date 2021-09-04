import React from "react";
import styled from "styled-components";
import tmm_info from "./image/tmm_info.svg"



const Home = (props) => {
    return (
        <RowAlign>
            {/* 좌측 - 틈 배너, 자주찾는 역*/}
            <Box>
                <img src={tmm_info} style={{marginLeft: "12%",width: "30vw", marginTop: "10%"}}
                    onClick={()=> {
                        props.history.push('/info')
                    }}
                />
            </Box>

            {/* 우측 - 단차 위험 호선*/}
            <Box style={{background: "gray"}}>
                <h2 style={{margin: "10% 0 0 5%"}}>단차 위험 호선</h2>
            </Box>
        </RowAlign>
    )};

const RowAlign = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

const Box = styled.div`
    width: 40vw;
    height: 100vh;
    background-color: black;
    color: black;
`;

export default Home;
import React from "react";
import styled from "styled-components";
import noneImg from "./image/noneImg.svg"

const None = () => {
    return(
        <div>
          <NoneImg src={noneImg}/>
        </div>

    )
}

const NoneImg = styled.img`
    width: 40%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export default None;
import React from "react";
import styled from "styled-components";
import noneImg from "./image/noneImg.svg";

const None = () => {
  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto",
          backgroundColor: "white",
          height: "90vh",
        }}
      >
        <NoneImg src={noneImg} />
      </div>
    </div>
  );
};

const NoneImg = styled.img`
  width: 70%;
`;

export default None;

/* eslint-disable array-callback-return */
import Divider from "@material-ui/core/Divider";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import styled from "styled-components";
import NestedList from "./components/NestedList";
import mystation1 from "./image/mystation_1.svg";
import mystation2 from "./image/mystation_2.svg";
import mystation3 from "./image/mystation_3.svg";
import mystation4 from "./image/mystation_4.svg";
import mystation5 from "./image/mystation_5.svg";
import mystation6 from "./image/mystation_6.svg";
import mystation7 from "./image/mystation_7.svg";
import mystation8 from "./image/mystation_8.svg";
import mystation9 from "./image/mystation_9.svg";
import mystationNone from "./image/mystation_none.svg";

import tmm_info from "./image/tmm_info.svg";
import { myStateCheck } from "./redux/modules/danger";

const Home = (props) => {
  const myStationList = useSelector((state) => state.danger.myStationList);
  const nowMyStationState = useSelector(
    (state) => state.danger.isMystationState
  );
  const dispatch = useDispatch();

  function getImage(line) {
    switch (line) {
      case "1":
        return mystation1;
      case "2":
        return mystation2;
      case "3":
        return mystation3;
      case "4":
        return mystation4;
      case "5":
        return mystation5;
      case "6":
        return mystation6;
      case "7":
        return mystation7;
      case "8":
        return mystation8;
      case "9":
        return mystation9;
      default:
        return null;
    }
  }

  return (
    <div style={{ width: "100%" }}>
      <h3 style={{ margin: "5% 0 5% 10%" }}>자주 찾는 역</h3>
      <ColAlign>
        <Divider style={{ width: "100%", margin: "0 0 3% 0" }} />
        <img
          src={nowMyStationState ? null : mystationNone}
          style={{ width: "100%" }}
          alt="my station List"
        />

        <MyStation>
          {myStationList.map((l, idx) => {
            if (l.checkState === true) {
              dispatch(myStateCheck(true));
              return (
                <ColAlign2>
                  <img
                    src={getImage(l.lineNum[0])}
                    style={{ width: "50dp", marginTop: "15%" }}
                    onClick={() => {
                      props.history.push(
                        "/details=" + l.lineNum[0] + l.stationName
                      );
                    }}
                    alt="search station list"
                  />
                  <text style={{ fontSize: "0.9375em", textAlign: "center" }}>
                    {l.stationName}
                  </text>
                </ColAlign2>
              );
            }
          })}
        </MyStation>

        <Divider style={{ width: "100%", margin: "1% 0 5% 0" }} />

        <img
          src={tmm_info}
          style={{ width: "100%", marginTop: "5%" }}
          onClick={() => {
            props.history.push("/info");
          }}
          alt="tmm webpage information banner"
        />
        <br />
        <br />

        {/*</Box>*/}

        {/* 우측 - 단차 위험 호선*/}
        {/*<Box style={{background: "white"}}>*/}

        {/*</Box>*/}
      </ColAlign>
      <h3 style={{ margin: "5% 0 0 10%", justifyContent: "flex-start" }}>
        단차 위험 호선
      </h3>
      <NestedList {...props} />
    </div>
  );
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

export default withRouter(Home);

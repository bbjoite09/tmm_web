/* eslint-disable no-useless-concat */
/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";

// image resource
import selected1 from "./image/selected_line1.svg";
import selected2 from "./image/selected_line2.svg";
import selected3 from "./image/selected_line3.svg";
import selected4 from "./image/selected_line4.svg";
import selected5 from "./image/selected_line5.svg";
import selected6 from "./image/selected_line6.svg";
import selected7 from "./image/selected_line7.svg";
import selected8 from "./image/selected_line8.svg";
import selected9 from "./image/selected_line9.svg";
import selectedElse from "./image/selected_lineElse.svg";

import checked from "./image/checked.svg";
import unchecked from "./image/unchecked.svg";
import yes from "./image/yes.svg";
import no from "./image/no.svg";
import good from "./image/good.svg";
import danger from "./image/danger.svg";
import veryDanger from "./image/veryDanger.svg";
import safe from "./image/safe.svg";
import service from "./image/safeService.svg";
import noService from "./image/noService.JPG";
import Divider from "@material-ui/core/Divider";

// components
import MsgModal from "./components/MsgModal";
import CallModal from "./components/CallModal";
import { safeCheck, updateCheck } from "./redux/modules/danger";
import stationDB from "./station.json";

const Details = (props) => {
  const dispatch1 = useDispatch();
  const dispatch2 = useDispatch();
  const myStationList = useSelector((state) => state.danger.myStationList);
  const safeState = useSelector((state) => state.danger.safeState);
  const stationList = [...stationDB];

  const NumName = props.match.params.index;
  const name = NumName.substring(1);
  const line = NumName[0] + "호선";
  const lineNum = parseInt(NumName[0]);

  // console.log(index)

  function index(name_, line_) {
    let tempIdx = -1;
    myStationList.map((l, idx) => {
      if (l.stationName === name_ && l.lineNum === line_) {
        tempIdx = idx;
      }
    });
    return tempIdx;
  }

  function phoneForSub(name_, line_) {
    let phone = "전화번호 정보 없음";
    stationDB.map((l, idx) => {
      if (l.stationName === name_ && l.lineNum === line_) {
        phone = l.phone;
      }
    });
    return phone;
  }

  const phone = phoneForSub(name, lineNum);
  // console.log(phone)

  const nowIdx = index(name, line);

  function getImage(line) {
    switch (line) {
      case "1":
        return selected1;
      case "2":
        return selected2;
      case "3":
        return selected3;
      case "4":
        return selected4;
      case "5":
        return selected5;
      case "6":
        return selected6;
      case "7":
        return selected7;
      case "8":
        return selected8;
      case "9":
        return selected9;
      default:
        return selectedElse;
    }
  }

  function getGapImg(now) {
    switch (now) {
      case 1:
        return good;
      case 2:
        return danger;
      case 3:
        return veryDanger;

      default:
        return veryDanger;
    }
  }

  function getGapText(now) {
    switch (now) {
      case 1:
        return "양호";
      case 2:
        return "다소위험";
      case 3:
        return "매우위험";
      default:
        return "정보 없음";
    }
  }

  function safeCheckFun(state) {
    if (state === true) {
      return safe;
    } else {
      return null;
    }
  }

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <div
        style={{
          marginTop: "5%",
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto",
          backgroundColor: "white",
        }}
      >
        <RowAlign style={{ marginTop: "2%", marginLeft: "9%" }}>
          <img
            src={getImage(line[0])}
            style={{ margin: "1% 3% 1% 0" }}
            alt="line number"
          />
          <img
            style={{ margin: "1% 0 1% 0" }}
            onClick={() => {
              dispatch1(updateCheck(name, line));
            }}
            src={myStationList[nowIdx].checkState ? checked : unchecked}
            alt="book mark"
          />
        </RowAlign>

        <h1 style={{ marginLeft: "9%" }}>
          {line} {name}
        </h1>
        {safeCheckFun(safeState) ? (
          <img
            src={safeCheckFun(safeState)}
            style={{ width: "100%" }}
            alt="safe check"
          />
        ) : null}

        {stationList.map((l, i) => {
          if (l.stationName === name && l.lineNum === lineNum) {
            dispatch2(safeCheck(false));

            return (
              <div>
                <RowAlign
                  style={{
                    height: "180px",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    backgroundColor: "#F8F8F8",
                  }}
                >
                  <ColAlign>
                    <img
                      src={getGapImg(l.gap)}
                      style={{ width: "50px", marginRight: "5%" }}
                      alt="gap check"
                    />
                    <p style={{ textAlign: "center", marginBottom: 0 }}>
                      연단거리
                      <br />
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        {getGapText(l.gap)}
                      </span>
                    </p>
                  </ColAlign>
                  <ColAlign>
                    <img
                      src={l.step ? yes : no}
                      style={{ width: "50px", marginRight: "5%" }}
                      alt="step check"
                    />
                    <p style={{ textAlign: "center", marginBottom: 0 }}>
                      단차
                      <br />
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        {l.step ? "있음" : "없음"}
                      </span>
                    </p>
                  </ColAlign>
                  <ColAlign>
                    <img
                      src={l.ramp === 1 ? service : noService}
                      style={{
                        width: "5" + "0px",
                      }}
                      alt="safe step service"
                    />
                    <p style={{ textAlign: "center", marginBottom: 0 }}>
                      안전발판
                      <br />{" "}
                      <span
                        style={{
                          color: l.ramp === 1 ? "#4378FF" : "red",
                          fontWeight: "bold",
                        }}
                      >
                        {l.ramp === 1 ? "서비스 제공" : "서비스 미제공"}
                      </span>
                    </p>
                  </ColAlign>
                </RowAlign>
                <br />
                <div>
                  <h3 style={{ marginLeft: "9%" }}>정보</h3>
                  <p style={{ marginLeft: "9%" }}>
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {getGapText(l.gap)}
                    </span>
                    으로 지정된 역입니다.
                  </p>
                  <Divider />
                  <RowAlign style={{ width: "100%" }}>
                    <p
                      style={{
                        marginLeft: "9%",
                        width: "25%",
                        marginBottom: 0,
                      }}
                    >
                      <b>안전승강장</b>
                    </p>
                    <div
                      style={{
                        width: "75%",
                        marginLeft: "3%",
                        paddingRight: "9%",
                      }}
                    >
                      <RowAlign style={{ justifyContent: "space-between" }}>
                        <p style={{ marginBottom: 0 }}>상행</p>
                        <p style={{ marginBottom: 0 }}>{l.dir1Position}</p>
                      </RowAlign>
                      <RowAlign style={{ justifyContent: "space-between" }}>
                        <p>하행</p>
                        <p>{l.dir2Position}</p>
                      </RowAlign>
                    </div>
                  </RowAlign>
                  <Divider />
                  <RowAlign>
                    <p style={{ marginLeft: "9%", width: "25%" }}>
                      <b>교통약자 탑승</b>
                    </p>
                    <p
                      style={{
                        width: "75%",
                        textAlign: "right",
                        paddingRight: "9%",
                        wordBreak: "keep-all",
                      }}
                    >
                      {l.accessPosition}
                    </p>
                  </RowAlign>
                  <Divider />
                </div>
              </div>
            );
          }
        })}

        <br />

        <h3 style={{ marginLeft: "9%" }}>헬프콜 서비스</h3>
        <p style={{ marginLeft: "9%" }}>
          역무원에게 안전발판을 요청할 수 있는 서비스입니다.
        </p>
        <ColAlign
          style={{
            justifyContent: "center",
            backgroundColor: "#F5F5F5",
            height: 200,
            marginTop: "7%",
          }}
        >
          <MsgModal name={name} line={line} phone={phone} />
          <CallModal name={name} line={line} phone={phone} />
        </ColAlign>
      </div>
    </div>
  );
};

const ColAlign = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const RowAlign = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

export default withRouter(Details);

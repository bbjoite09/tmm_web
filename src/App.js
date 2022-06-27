import Divider from "@material-ui/core/Divider";
import * as Hangul from "hangul-js";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import allStationDB from "./allStation.json";
import Details from "./Details";
import Home from "./Home";
// image
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
// DB
import logo from "./image/tmm_logo_2.svg";
import None from "./None";
import { loadDanger } from "./redux/modules/danger";
import stationDB from "./station.json";
import TmmInfo from "./TmmInfo";

// 스토어가 가진 상태값을 props로 받아오기 위한 함수
const mapStateTopProps = (state) => ({
  danger_list: state.danger.list,
  is_loaded: state.danger.is_loaded,
});

// 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수
const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(loadDanger());
    },
  };
};

allStationDB.forEach(function (item) {
  var dis = Hangul.disassemble(item.stationName, true);
  var cho = dis.reduce(function (prev, elem) {
    elem = elem[0] ? elem[0] : elem;
    return prev + elem;
  }, "");
  item.diassembled = cho;
});

//이미지 반환 함수 (stationDB 에 있는 역만)
function getImage(line) {
  switch (line) {
    case 1:
      return selected1;
    case 2:
      return selected2;
    case 3:
      return selected3;
    case 4:
      return selected4;
    case 5:
      return selected5;
    case 6:
      return selected6;
    case 7:
      return selected7;
    case 8:
      return selected8;
    case 9:
      return selected9;
    default:
      return selectedElse;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      lineNum: "line",
      showDiv: false,
      isMystation: false,
      isSelect: false,
      isSearch: false,
    };

    this.text = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.text.current.focus();
    this.setState({ isSelect: true });
    <items />;
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ isSelect: true });
    this.setState({ search: keyword });
  };

  componentDidMount() {
    this.props.load();
  }

  render() {
    // const items = search_list.filter((data) => {
    const items = allStationDB
      .filter((data) => {
        if (this.state.search == null) {
          return null;
        } else if (
          data.stationName.includes(this.text.current.value) ||
          data.diassembled.includes(
            Hangul.disassemble(this.text.current.value).join("")
          ) ||
          data.stationNameE.includes(this.text.current.value)
        ) {
          return data;
        } else if (this.state.search === "") {
          this.props.history.push("/searchNone");
        }
        return null;
      })
      .map((data) => {
        return (
          <div>
            <div
              style={{
                height: "41px",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => {
                // this.props.history.push('/details=' + data.lineNum[0] + data.stationName)
                this.setState({ isSelect: false, isSearch: true });
                this.text.current.value = "";

                const detailData = stationDB.find((myDetailData) => {
                  if (myDetailData.stationName === data.stationName) {
                    return {
                      stationName: myDetailData.stationName,
                      lineNum: myDetailData.lineNum,
                    };
                  } else {
                    return null;
                  }
                });
                detailData
                  ? this.props.history.push(
                      "/details=" + data.lineNum + data.stationName
                    )
                  : this.props.history.push("/searchNone");
              }}
            >
              <RowAlign
                style={{
                  width: "50%",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <img
                  src={getImage(data.lineNum)}
                  style={{ width: "25px", marginLeft: "5%" }}
                  alt="line information"
                />
                <p style={{ marginLeft: "3%" }}>{data.stationName}</p>
              </RowAlign>
            </div>
            <Divider />
          </div>
        );
      });

    return (
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <div
          className="App"
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            backgroundColor: "white",
          }}
        >
          <RowAlign style={{ paddingTop: "3%", marginBottom: "2%" }}>
            <Link
              to={"/"}
              onClick={() => {
                this.text.current.value = "";
                this.setState({ isSelect: false });
              }}
              style={{ width: "20%" }}
            >
              <img style={{ width: "100%" }} src={logo} alt="main logo" />
            </Link>
            <InputBox
              type="text"
              ref={this.text}
              placeholder={"지하철 단차 검색하기"}
              onChange={(e) => this.searchSpace(e)}
            />
          </RowAlign>
          <Divider style={{ width: "100%" }} />
          {this.state.isSelect ? items : null}

          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                list={this.props.danger_list}
                history={this.props.history}
              />
            )}
          />

          <Route path="/info" component={TmmInfo} />

          <Route path="/details=:index" component={Details} />
          <Route path="/searchNone" component={None} />
        </div>
      </div>
    );
  }
}

const RowAlign = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const InputBox = styled.input`
  width: 60%;
  height: 44px;
  margin: 0 0 1% 25px;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: 0;
  text-align: center;
  font-size: 15px;
  &: focus {
    outline: none;
    border: 1 px solid #dadbdb;
  }
`;

export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));

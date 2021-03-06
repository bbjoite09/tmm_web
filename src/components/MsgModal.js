import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import styled from "styled-components";
import msgButton from "../image/msgButton.svg";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MsgModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function checkMobile() {
    var varUA = navigator.userAgent.toLowerCase();
    //userAgent 값 얻기
    if (varUA.indexOf("android") > -1) {
      // 안드로이드
      return "android";
    } else if (
      varUA.indexOf("iphone") > -1 ||
      varUA.indexOf("ipad") > -1 ||
      varUA.indexOf("ipod") > -1 ||
      varUA.indexOf("ios")
    ) {
      // IOS
      return "ios";
    } else {
      // IOS, 안드로이드 외
      return "other";
    }
  }

  function nowHref(phone_) {
    const href =
      "sms:0215771234" +
      (checkMobile() === "ios" ? "&" : "?") +
      "body=" +
      props.name +
      " / 출발시간 / 요청역 / 탑승 위치";
    return href;
  }

  return (
    <div>
      <img onClick={handleOpen} src={msgButton} alt="button" />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} style={{ borderRadius: "5%", border: "0" }}>
          <div
            className={classes.paper}
            style={{
              width: window.innerWidth > 500 ? "300px" : "70%",
              height: "50%",
            }}
          >
            <ColAlign>
              <h3 id="transition-modal-title">헬프콜 서비스 문자로 요청하기</h3>
              <div
                style={{
                  backgroundColor: "#F2F2F2",
                  width: "105%",
                  height: "90%",
                  borderRadius: "20px",
                  margin: "0 3% 0 3%",
                }}
              >
                <ColAlign>
                  <text
                    id="transition-modal-description"
                    style={{
                      fontWeight: "bolder",
                      color: "#4378FF",
                      fontSize: "12sp",
                    }}
                  >
                    요청역
                  </text>
                  <text
                    id="transition-modal-description"
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    <b>
                      {props.name} {props.line}
                    </b>
                    <br />
                    <br />
                    서울교통공사
                    <br />
                    02-1577-1234
                  </text>
                  <text
                    id="transition-modal-description"
                    style={{
                      fontWeight: "bolder",
                      color: "#4378FF",
                      fontSize: "12sp",
                    }}
                  >
                    보낼내용
                  </text>
                  <text
                    id="transition-modal-description"
                    style={{ fontSize: "14px" }}
                  >
                    출발역 / 출발시간 / 요청역 / 탑승 위치
                  </text>
                </ColAlign>
              </div>
              <text
                id="transition-modal-description"
                style={{ fontSize: "14px", marginTop: "20px" }}
              >
                문자 요청의 경우 담당자에게
              </text>
              <text
                id="transition-modal-description"
                style={{ fontSize: "14px" }}
              >
                확인 전화가 올 수 있습니다.
              </text>
              <text
                id="transition-modal-description"
                style={{ fontSize: "14px", marginBottom: "20px" }}
              >
                기본 문자 서비스로 연결됩니다.
              </text>

              {/*<Button>*/}

              <A href={nowHref(props.phone)}>요청하기</A>

              {/*</Button>*/}
            </ColAlign>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const ColAlign = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const A = styled.a`
  width: 105%;
  height: 60px;
  line-height: 60px;
  background: #4378ff;
  text-decoration: none;
  border-radius: 27px;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export default MsgModal;

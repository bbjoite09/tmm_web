import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";
import callButton from "../image/callButton.svg";

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

const CallModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img onClick={handleOpen} src={callButton} alt="call button" />
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
              <h3 id="transition-modal-title">헬프콜 서비스 전화로 요청하기</h3>
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
                    style={{ fontWeight: "bolder", color: "#4378FF" }}
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
                    {props.phone}
                  </text>
                  <text
                    id="transition-modal-description"
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    출발역 / 출발시간 / 요청역 / 탑승 위치를
                    <br />
                    확인해주세요 :)
                  </text>
                </ColAlign>
              </div>
              <text
                id="transition-modal-description"
                style={{ fontSize: "14px", marginTop: "20px" }}
              >
                전화걸기 버튼을 누르시면
              </text>
              <text
                id="transition-modal-description"
                style={{ fontSize: "14px", marginBottom: "20px" }}
              >
                기본 전화 서비스로 연결됩니다.
              </text>

              <A href={"TEL:" + props.phone}>요청하기</A>
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

export default CallModal;

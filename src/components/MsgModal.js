import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from "styled-components";
import msgButton from "../image/msgButton.svg"
import stationList from "../station.json"

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
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

    // function getPhone(line, name) {
    //     stationList.map((l) => {
    //         if(l.stationName === name && l.lineNum === line){
    //             return l.phone;
    //         }
    //     })
    // }

    // const phone = "sms:"+ getPhone(lineNum, name)+ "?body=출발역 / 출발시간 / 요청역 / 탑승 위치"

    function checkMobile() {
        var varUA = navigator.userAgent.toLowerCase();
        //userAgent 값 얻기
        if (varUA.indexOf('android') > -1) { // 안드로이드
            return "android";
        } else if (varUA.indexOf('iphone') > -1 || varUA.indexOf('ipad') > -1 || varUA.indexOf('ipod') > -1 || varUA.indexOf('ios')) { // IOS
            return "ios"; }
        else { // IOS, 안드로이드 외
            return "other";
        }}

        function nowHref(phone_) {
            phone_ = phone_.split('-').join("")
            const href = 'sms:' + phone_ +(checkMobile() === 'ios' ? '&' : '?') + 'body=' + "출발역 / 출발시간 / 요청역 / 탑승 위치"
            return href;
        }

        return (
            <div>
                <img onClick={handleOpen} src={msgButton}/>
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
                    <Fade in={open}>
                        <div className={classes.paper} style={{width: "70%", height: "50%"}}>
                            <ColAlign>
                                <h3 id="transition-modal-title">헬프콜 서비스 문자로 요청하기</h3>
                                <div style={{
                                    backgroundColor: "#F2F2F2",
                                    width: "105%",
                                    height: "90%",
                                    borderRadius: "20px",
                                    margin: "0 3% 0 3%"
                                }}>
                                    <ColAlign>
                                        <text id="transition-modal-description"
                                              style={{fontWeight: "bolder", color: "#4378FF", fontSize: "12sp"}}>요청역
                                        </text>
                                        <text id="transition-modal-description"
                                              style={{fontSize: "14px", textAlign: "center"}}>
                                            <b>{props.name} {props.line}</b><br/>{props.phone}</text>
                                        <text id="transition-modal-description"
                                              style={{fontWeight: "bolder", color: "#4378FF", fontSize: "12sp"}}>보낼내용
                                        </text>
                                        <text id="transition-modal-description" style={{fontSize: "14px"}}>출발역 / 출발시간 /
                                            요청역 / 탑승 위치
                                        </text>
                                    </ColAlign>
                                </div>
                                <text id="transition-modal-description" style={{fontSize: "14px", marginTop: "20px"}}>문자
                                    요청의 경우 담당자에게
                                </text>
                                <text id="transition-modal-description" style={{fontSize: "14px"}}>확인 전화가 올 수 있습니다.
                                </text>
                                <text id="transition-modal-description"
                                      style={{fontSize: "14px", marginBottom: "20px"}}>기본 문자 서비스로 연결됩니다.
                                </text>

                                <Button><a href={nowHref(props.phone)}
                                           style={{textDecoration: "none", color: "white"}}>요청하기</a></Button>
                            </ColAlign>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }

    const ColAlign = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`;


    const Button = styled.button`
    width: 105%;
    height: 20%;
    border: 0;
    background: #4378FF;
    box-shadow: 0px 0px 11px rgba(175, 175, 175, 0.25);
    border-radius: 27px;
    color: white;
    font-weight: bold;
`;

    export default MsgModal;
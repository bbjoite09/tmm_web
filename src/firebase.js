import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // config 정보
    apiKey: "AIzaSyA16oVFJ4dKPMIbrfyJQ9o63dFZ_cz37FA",
    authDomain: "tmm-web-67a2f.firebaseapp.com",
    databaseURL: "https://tmm-web-67a2f-default-rtdb.firebaseio.com",
    projectId: "tmm-web-67a2f",
    storageBucket: "tmm-web-67a2f.appspot.com",
    messagingSenderId: "257906377885",
    appId: "1:257906377885:web:c137c702917bcea25b4074",
    measurementId: "G-CHJKEG2BDR"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export {firestore};
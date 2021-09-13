import React from 'react';
import Divider from '@material-ui/core/Divider';
import * as Hangul from 'hangul-js';
import name_list from "./mystation.json";


const Search = (props) => {
    const search_list = [...name_list];

    const items = search_list.filter((data) => {
        var str = ""
        if (props.search == null) {
            return
        } else if (data.stationName.includes(props.text.current.value) || data.diassembled.includes(Hangul.disassemble(this.text.current.value).join(""))) {
            return data
        } else if (props.state.search === "") {
            this.props.history.push("/searchNone")
        }

    })
        .map(data => {
            return (
                <div>
                    <div style={{
                        width: "100%",
                        height: "41px",
                        display: "flex",
                        alignItems: "center"
                    }} onClick={() => {
                        this.props.history.push('/details=' + data.lineNum[0] + data.stationName)
                    }}>
                        <p style={{
                            alignmentBaseline: "center",
                            position: 'relative',
                            left: "10vh",
                            marginLeft: "20%"
                        }}>{data.lineNum} - {data.stationName}</p>

                    </div>
                    <Divider/>
                </div>
            )
        })


};


export default Search;
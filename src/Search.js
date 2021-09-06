import React from "react";
import styled from "styled-components";
import line1 from "./image/selected_line1.svg"
import line2 from "./image/selected_line2.svg"
import line3 from "./image/selected_line3.svg"
import line4 from "./image/selected_line4.svg"
import line5 from "./image/selected_line5.svg"
import line6 from "./image/selected_line6.svg"
import line7 from "./image/selected_line7.svg"
import line8 from "./image/selected_line8.svg"
import line9 from "./image/selected_line9.svg"
import {Link} from "react-router-dom";

import name_list from "./mystation.json"
import {useSelector} from "react-redux";
import * as Hangul from 'hangul-js';
import {render} from "react-dom";

const Search = () => {
    const danger_list = useSelector(state => state.danger.list);

    const search_list = [...name_list];
    // console.log(search_list[0])


    // object에 초성필드 dissembled 추가
    search_list.forEach(function (item) {
        var dis = Hangul.disassemble(item.stationName, true);
        var cho = dis.reduce(function (prev, elem) {
            elem = elem[0] ? elem[0] : elem;
            return prev + elem;
        }, "");
        item.diassembled = cho;
    });

    // console.log(search_list);

    const items = search_list.map(data => {
        return (
            <div>
                <ul>
                    <li style={{position: 'relative', left: '10vh'}}>
                        <span>{data.stationName}</span>
                    </li>
                </ul>
            </div>
        )
    })


    return (
        <div>
            <input type="text" placeholder="Enter item to be searched" onChange={(e) => this.searchSpace(e)}/>
            {
                search_list.map(data => {
                    return (
                        <div>
                            {items}
                        </div>
                    )
                })}
        </div>
    )


};


export default Search;
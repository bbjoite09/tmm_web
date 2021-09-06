import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
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
import {useSelector} from "react-redux";

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const NestedList = (props) => {
    const classes = useStyles();
    const danger_list = useSelector(state => state.danger.list);
    const [open, setOpen] = React.useState(true);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    function dangerStation(line) {
        line = line + "호선"
        var dangerList = []

        for (var i = 0; i < danger_list.length; i++) {
            // console.log(danger_list[i].stationName)
            if (danger_list[i].lineNum == line) {
                if (danger_list[i].danger == "위험" || danger_list[i].danger == "매우위험") {
                    var stationName = danger_list[i].stationName
                    dangerList = [...dangerList, stationName]
                }
            }
        }
        const temp = new Set(dangerList)
        var dangerNameList = [...temp];

        dangerNameList = dangerNameList.sort()

        return dangerNameList
    }

    const dangerNameList1 = dangerStation(1)
    const dangerNameList2 = dangerStation(2)
    const dangerNameList3 = dangerStation(3)
    const dangerNameList4 = dangerStation(4)
    const dangerNameList5 = dangerStation(5)
    const dangerNameList6 = dangerStation(6)
    const dangerNameList7 = dangerStation(7)
    const dangerNameList8 = dangerStation(8)
    const dangerNameList9 = dangerStation(9)

    return (
        <div className={classes.root} style={{margin: "5% 0 0 3%", width: "90%"}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <ListItemIcon><img src={line1}/></ListItemIcon>
                    <text style={{fontSize: "0.9375em", color: "#616161", marginRight: "auto", marginLeft: "-15px"}}>1호선</text>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#F2F2F2"}}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to="/details" style={{color: "#616161", textDecoration: "none"}}>
                                {dangerNameList1.map((list, index) => {
                                    return (
                                        <ListItem button className={classes.nested} key={index}>
                                            <text style={{fontSize: "0.9375em", color: "#616161"}}>{list}</text>
                                        </ListItem>
                                    )
                                })}
                            </Link>
                        </List>
                    </Collapse>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <ListItemIcon><img src={line2}/></ListItemIcon>
                    <text style={{fontSize: "0.9375em", color: "#616161", marginRight: "auto", marginLeft: "-15px"}}>2호선</text>

                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#F2F2F2"}}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to="/details" style={{color: "#616161", textDecoration: "none"}}>
                                {dangerNameList2.map((list, index) => {
                                    return (
                                        <ListItem button className={classes.nested} key={index}>
                                            <text style={{fontSize: "0.9375em", color: "#616161"}}>{list}</text>
                                        </ListItem>
                                    )
                                })}
                            </Link>
                        </List>
                    </Collapse>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <ListItemIcon><img src={line3}/></ListItemIcon>
                    <text style={{fontSize: "0.9375em", color: "#616161", marginRight: "auto", marginLeft: "-15px"}}>3호선</text>

                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#F2F2F2"}}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to="/details" style={{color: "#616161", textDecoration: "none"}}>
                                {dangerNameList3.map((list, index) => {
                                    return (
                                        <ListItem button className={classes.nested} key={index}>
                                            <text style={{fontSize: "0.9375em", color: "#616161"}}>{list}</text>
                                        </ListItem>
                                    )
                                })}
                            </Link>
                        </List>
                    </Collapse>
                </AccordionDetails>
            </Accordion>



            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel4bh-content"
                    id="panel3bh-header"
                >
                    <ListItemIcon><img src={line4}/></ListItemIcon>
                    <text style={{fontSize: "0.9375em", color: "#616161", marginRight: "auto", marginLeft: "-15px"}}>4호선</text>

                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#F2F2F2"}}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to="/details" style={{color: "#616161", textDecoration: "none"}}>
                                {dangerNameList4.map((list, index) => {
                                    return (
                                        <ListItem button className={classes.nested} key={index}>
                                            <text style={{fontSize: "0.9375em", color: "#616161"}}>{list}</text>
                                        </ListItem>
                                    )
                                })}
                            </Link>
                        </List>
                    </Collapse>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <ListItemIcon><img src={line5}/></ListItemIcon>
                    <text style={{fontSize: "0.9375em", color: "#616161", marginRight: "auto", marginLeft: "-15px"}}>5호선</text>

                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#F2F2F2"}}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to="/details" style={{color: "#616161", textDecoration: "none"}}>
                                {dangerNameList5.map((list, index) => {
                                    return (
                                        <ListItem button className={classes.nested} key={index}>
                                            <text style={{fontSize: "0.9375em", color: "#616161"}}>{list}</text>
                                        </ListItem>
                                    )
                                })}
                            </Link>
                        </List>
                    </Collapse>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                >
                    <ListItemIcon><img src={line6}/></ListItemIcon>
                    <text style={{fontSize: "0.9375em", color: "#616161", marginRight: "auto", marginLeft: "-15px"}}>6호선</text>

                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#F2F2F2"}}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to="/details" style={{color: "#616161", textDecoration: "none"}}>
                                {dangerNameList6.map((list, index) => {
                                    return (
                                        <ListItem button className={classes.nested} key={index}>
                                            <text style={{fontSize: "0.9375em", color: "#616161"}}>{list}</text>
                                        </ListItem>
                                    )
                                })}
                            </Link>
                        </List>
                    </Collapse>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel7bh-content"
                    id="panel7bh-header"
                >
                    <ListItemIcon><img src={line7}/></ListItemIcon>
                    <text style={{fontSize: "0.9375em", color: "#616161", marginRight: "auto", marginLeft: "-15px"}}>7호선</text>

                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#F2F2F2"}}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to="/details" style={{color: "#616161", textDecoration: "none"}}>
                                {dangerNameList7.map((list, index) => {
                                    return (
                                        <ListItem button className={classes.nested} key={index}>
                                            <text style={{fontSize: "0.9375em", color: "#616161"}}>{list}</text>
                                        </ListItem>
                                    )
                                })}
                            </Link>
                        </List>
                    </Collapse>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel8bh-content"
                    id="panel8bh-header"
                >
                    <ListItemIcon><img src={line8}/></ListItemIcon>
                    <text style={{fontSize: "0.9375em", color: "#616161", marginRight: "auto", marginLeft: "-15px"}}>8호선</text>

                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#F2F2F2"}}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to="/details" style={{color: "#616161", textDecoration: "none"}}>
                                {dangerNameList8.map((list, index) => {
                                    return (
                                        <ListItem button className={classes.nested} key={index}>
                                            <text style={{fontSize: "0.9375em", color: "#616161"}}>{list}</text>
                                        </ListItem>
                                    )
                                })}
                            </Link>
                        </List>
                    </Collapse>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel9bh-content"
                    id="panel9bh-header"
                >
                    <ListItemIcon><img src={line9}/></ListItemIcon>
                    <text style={{fontSize: "0.9375em", color: "#616161", marginRight: "auto", marginLeft: "-15px"}}>9호선</text>

                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#F2F2F2"}}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to="/details" style={{color: "#616161", textDecoration: "none"}}>
                                {dangerNameList9.map((list, index) => {
                                    return (
                                        <ListItem button className={classes.nested} key={index}>
                                            <text style={{fontSize: "0.9375em", color: "#616161"}}>{list}</text>
                                        </ListItem>
                                    )
                                })}
                            </Link>
                        </List>
                    </Collapse>
                </AccordionDetails>
            </Accordion>



        </div>

    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         maxWidth: 360,
//         backgroundColor: theme.palette.background.paper,
//     },
//     nested: {
//         paddingLeft: theme.spacing(4),
//     },
// }));

export default NestedList;
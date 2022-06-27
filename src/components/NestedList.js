/* eslint-disable no-useless-concat */
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Collapse from "@material-ui/core/Collapse";
// resource
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { withRouter } from "react-router";
import line1 from "../image/selected_line1.svg";
import line2 from "../image/selected_line2.svg";
import line3 from "../image/selected_line3.svg";
import line4 from "../image/selected_line4.svg";
import line5 from "../image/selected_line5.svg";
import line6 from "../image/selected_line6.svg";
import line7 from "../image/selected_line7.svg";
import line8 from "../image/selected_line8.svg";
import line9 from "../image/selected_line9.svg";
import station from "../station.json";

const NestedList = (props) => {
  const classes = useStyles();
  const [open] = React.useState(true);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const tempDangerDB = [...station];

  function dangerStation(line) {
    var dangerList = [];

    for (var i = 0; i < tempDangerDB.length; i++) {
      // console.log(danger_list[i].stationName)
      if (tempDangerDB[i].lineNum === line) {
        if (
          tempDangerDB[i].step === 1 ||
          tempDangerDB[i].gap === 1 ||
          tempDangerDB[i].gap === 2
        ) {
          var stationName = tempDangerDB[i].stationName;
          dangerList = [...dangerList, stationName];
        }
      }
    }

    dangerList = dangerList.sort();

    return dangerList;
  }

  const dangerNameList1 = dangerStation(1);
  const dangerNameList2 = dangerStation(2);
  const dangerNameList3 = dangerStation(3);
  const dangerNameList4 = dangerStation(4);
  const dangerNameList5 = dangerStation(5);
  const dangerNameList6 = dangerStation(6);
  const dangerNameList7 = dangerStation(7);
  const dangerNameList8 = dangerStation(8);
  const dangerNameList9 = dangerStation(9);

  return (
    <div className={classes.root} style={{ margin: "5% 0 0 0" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{ padding: "0 10%" }}
        >
          <ListItemIcon>
            <img src={line1} alt="line1" />
          </ListItemIcon>
          <text
            style={{
              fontSize: "0.9375em",
              color: "#616161",
              marginRight: "auto",
              marginLeft: "-15px",
            }}
          >
            1호선
          </text>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#F2F2F2", padding: "3% 10%" }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dangerNameList1.map((list, index) => {
                return (
                  <ListItem
                    button
                    className={classes.nested}
                    key={index}
                    onClick={() => {
                      props.history.push("/details=" + "1" + list);
                    }}
                  >
                    <text
                      style={{
                        fontSize: "0.9375em",
                        color: "#616161",
                        width: "400px",
                      }}
                    >
                      {list}
                    </text>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          style={{ padding: "0 10%" }}
        >
          <ListItemIcon>
            <img src={line2} alt="line2" />
          </ListItemIcon>
          <text
            style={{
              fontSize: "0.9375em",
              color: "#616161",
              marginRight: "auto",
              marginLeft: "-15px",
            }}
          >
            2호선
          </text>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#F2F2F2", padding: "3% 10%" }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dangerNameList2.map((list, index) => {
                return (
                  <ListItem
                    button
                    className={classes.nested}
                    key={index}
                    onClick={() => {
                      props.history.push("/details=" + "2" + list);
                    }}
                  >
                    <text
                      style={{
                        fontSize: "0.9375em",
                        color: "#616161",
                        width: "400px",
                      }}
                    >
                      {list}
                    </text>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          style={{ padding: "0 10%" }}
        >
          <ListItemIcon>
            <img src={line3} alt="line3" />
          </ListItemIcon>
          <text
            style={{
              fontSize: "0.9375em",
              color: "#616161",
              marginRight: "auto",
              marginLeft: "-15px",
            }}
          >
            3호선
          </text>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#F2F2F2", padding: "3% 10%" }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dangerNameList3.map((list, index) => {
                return (
                  <ListItem
                    button
                    className={classes.nested}
                    key={index}
                    onClick={() => {
                      props.history.push("/details=" + "3" + list);
                    }}
                  >
                    <text
                      style={{
                        fontSize: "0.9375em",
                        color: "#616161",
                        width: "400px",
                      }}
                    >
                      {list}
                    </text>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel3bh-header"
          style={{ padding: "0 10%" }}
        >
          <ListItemIcon>
            <img src={line4} alt="line4" />
          </ListItemIcon>
          <text
            style={{
              fontSize: "0.9375em",
              color: "#616161",
              marginRight: "auto",
              marginLeft: "-15px",
            }}
          >
            4호선
          </text>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#F2F2F2", padding: "3% 10%" }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dangerNameList4.map((list, index) => {
                return (
                  <ListItem
                    button
                    className={classes.nested}
                    key={index}
                    onClick={() => {
                      props.history.push("/details=" + "4" + list);
                    }}
                  >
                    <text
                      style={{
                        fontSize: "0.9375em",
                        color: "#616161",
                        width: "400px",
                      }}
                    >
                      {list}
                    </text>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          style={{ padding: "0 10%" }}
        >
          <ListItemIcon>
            <img src={line5} alt="line5" />
          </ListItemIcon>
          <text
            style={{
              fontSize: "0.9375em",
              color: "#616161",
              marginRight: "auto",
              marginLeft: "-15px",
            }}
          >
            5호선
          </text>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#F2F2F2", padding: "3% 10%" }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dangerNameList5.map((list, index) => {
                return (
                  <ListItem
                    button
                    className={classes.nested}
                    key={index}
                    onClick={() => {
                      props.history.push("/details=" + "5" + list);
                    }}
                  >
                    <text
                      style={{
                        fontSize: "0.9375em",
                        color: "#616161",
                        width: "400px",
                      }}
                    >
                      {list}
                    </text>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
          style={{ padding: "0 10%" }}
        >
          <ListItemIcon>
            <img src={line6} alt="line6" />
          </ListItemIcon>
          <text
            style={{
              fontSize: "0.9375em",
              color: "#616161",
              marginRight: "auto",
              marginLeft: "-15px",
            }}
          >
            6호선
          </text>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#F2F2F2", padding: "3% 10%" }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dangerNameList6.map((list, index) => {
                return (
                  <ListItem
                    button
                    className={classes.nested}
                    key={index}
                    onClick={() => {
                      props.history.push("/details=" + "6" + list);
                    }}
                  >
                    <text
                      style={{
                        fontSize: "0.9375em",
                        color: "#616161",
                        width: "400px",
                      }}
                    >
                      {list}
                    </text>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
          style={{ padding: "0 10%" }}
        >
          <ListItemIcon>
            <img src={line7} alt="line7" />
          </ListItemIcon>
          <text
            style={{
              fontSize: "0.9375em",
              color: "#616161",
              marginRight: "auto",
              marginLeft: "-15px",
            }}
          >
            7호선
          </text>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#F2F2F2", padding: "3% 10%" }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dangerNameList7.map((list, index) => {
                return (
                  <ListItem
                    button
                    className={classes.nested}
                    key={index}
                    onClick={() => {
                      props.history.push("/details=" + "7" + list);
                    }}
                  >
                    <text
                      style={{
                        fontSize: "0.9375em",
                        color: "#616161",
                        width: "400px",
                      }}
                    >
                      {list}
                    </text>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
          style={{ padding: "0 10%" }}
        >
          <ListItemIcon>
            <img src={line8} alt="line8" />
          </ListItemIcon>
          <text
            style={{
              fontSize: "0.9375em",
              color: "#616161",
              marginRight: "auto",
              marginLeft: "-15px",
            }}
          >
            8호선
          </text>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#F2F2F2", padding: "3% 10%" }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dangerNameList8.map((list, index) => {
                return (
                  <ListItem
                    button
                    className={classes.nested}
                    key={index}
                    onClick={() => {
                      props.history.push("/details=" + "8" + list);
                    }}
                  >
                    <text
                      style={{
                        fontSize: "0.9375em",
                        color: "#616161",
                        width: "400px",
                      }}
                    >
                      {list}
                    </text>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
          style={{ padding: "0 10%" }}
        >
          <ListItemIcon>
            <img src={line9} alt="line9" />
          </ListItemIcon>
          <text
            style={{
              fontSize: "0.9375em",
              color: "#616161",
              marginRight: "auto",
              marginLeft: "-15px",
            }}
          >
            9호선
          </text>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#F2F2F2", padding: "3% 10%" }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dangerNameList9.map((list, index) => {
                return (
                  <ListItem
                    button
                    className={classes.nested}
                    key={index}
                    onClick={() => {
                      props.history.push("/details=" + "9" + list);
                    }}
                  >
                    <text
                      style={{
                        fontSize: "0.9375em",
                        color: "#616161",
                        width: "400px",
                      }}
                    >
                      {list}
                    </text>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default withRouter(NestedList);

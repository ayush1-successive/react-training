import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../Styles.css";

const Task9 = () => {
  const [drawerState, setDrawerState] = useState(false);

  const navigate = useNavigate();

  const toggleDrawerState = (newState) => {
    setDrawerState(newState);
  };

  const handleDrawerButton = (page) => {
    navigate(page);
  };

  return (
    <>
      <button onClick={() => toggleDrawerState(true)}>Open Drawer</button>

      <Drawer open={drawerState} onClose={() => toggleDrawerState(false)}>
        <List>
          <ListItem button onClick={() => handleDrawerButton("/home")}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleDrawerButton("/about")}>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Task9;

import React from "react";
import { Button } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ListItem, ListItemText } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/core/styles";
const DrawersButton = ({ open, handleDrawerClose, setOpen, setSearch }) => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        open={open}
        anchor="top"
        backgroundColor="black"
        className="drawer"
      >
        <ListItem button onClick={handleDrawerClose}>
          <ArrowForwardIosIcon />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"API"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Form"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={<FacebookIcon />} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={<TwitterIcon />} />
        </ListItem>
        <ListItem button>
          <input
            className={classes.navsearchbar}
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </ListItem>
        <ListItem button></ListItem>
      </Drawer>
    </>
  );
};
const useStyles = makeStyles((theme) => ({}));
export default DrawersButton;

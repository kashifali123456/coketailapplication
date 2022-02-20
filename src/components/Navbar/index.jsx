import React from "react";
import Logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useMediaQuery } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import Drawers from "../../Drawers";
const Navbar = ({ setSearch }) => {
  const [open, setOpen] = React.useState(false);
  const hanleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const match = useMediaQuery("(max-width: 800px)");
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <Grid
        container
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid
          item
          container
          xs={4}
          md={3}
          justifyContent="center"
          className={classes.innernavbar}
        >
          <Link to="/" className={classes.home1}>
            <img src={Logo} className={classes.logo} />
          </Link>
        </Grid>
        <Grid item xs={0} md={3}></Grid>
        <Grid
          item
          container
          xs={4}
          justifyContent="flex-end"
          alignItems="center"
          className={classes.rightnavbar}
        >
          {match ? (
            <IconButton
              color="inherit"
              aria-label="opendrawer"
              onClick={hanleDrawerOpen}
              edge="start"
              style={{ color: "white" }}
            >
              <Menu />
            </IconButton>
          ) : (
            <>
              <Grid
                item
                container
                justifyContent="space-evenly"
                alignItems="center"
                className={classes}
                xs={12}
                sm={12}
              >
                <Link className={clsx(classes.home1)} to="/home">
                  Home
                </Link>
                <Link className={classes.home1} to="api">
                  API
                </Link>
                <Link className={classes.home1} to="form">
                  Form
                </Link>
                <Link to="https://www.facebook.com/">
                  <FacebookIcon variant="contained" color="primary" />
                </Link>
                <Link to="/twitter.com">
                  <TwitterIcon variant="contained" color="primary" />
                </Link>
                <input
                  className={classes.navsearchbar}
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </Grid>
            </>
          )}
          <Grid className="Menu-button">
            <Drawers open={open} handleDrawerClose={handleDrawerClose} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "100%",
    backgroundColor: theme.palette.primary1.main,
    padding: "15px 0px",
  },
  navsearchbar: {
    width: "30%",
    height: 35,
  },
  logo: {
    width: "80%",
    height: 35,
  },
  // rightnavbar: {
  //   [theme.breakpoints.down("md")]: {
  //     display: "none",
  //   },
  // },

  home1: {
    color: theme.palette.primary1.bright,
    textDecoration: "none",
  },
}));

export default Navbar;

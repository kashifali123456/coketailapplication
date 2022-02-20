import React from "react";
import Gb from "../../Assets/Images/gb.png";
import logotsdb from "../../Assets/Images/logo-tsdb.png";
import logotadb from "../../Assets/Images/logo-tadb.png";
import logotmdb from "../../Assets/Images/logo-tmdb.png";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.footer}
      >
        <Grid item xs={2}>
          <Typography
            variant="body1"
            components="p"
            className={classes.flagpart}
          >
            © 2021 The CocktailDB. Proudly built in the UK{" "}
            <img src={Gb} className={classes.flag} />
          </Typography>
        </Grid>

        <Grid
          item
          container
          xs={5}
          justifyContent="space-evenly"
          alignItems="center"
          className={classes.footerlogo}
        >
          <img src={logotsdb} />
          <img src={logotadb} />
          <img src={logotmdb} />
        </Grid>
        <Grid
          item
          container
          xs={2}
          justifyContent="space-evenly"
          className={classes.footerpage}
        >
          <Typography variant="h4" className={classes.footerlink}>
            Missing
          </Typography>
          <Typography variant="h4" className={classes.footerlink}>
            {" "}
            About
          </Typography>
          <Typography variant="h4" className={classes.footerlink}>
            Faq{" "}
          </Typography>
          <Typography variant="h4" className={classes.footerlink}>
            {" "}
            Contact
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary1.main,
    padding: "30px 0px",
  },
  footerlink: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9em",
    },
  },
  footerpage: {
    [theme.breakpoints.down("md")]: {
      direction: "column",
    },
  },
  flagpart: {
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
export default Footer;
{
  /* <Grid className="footer-upper">
          <h3>Browse By Name</h3>
          <p>A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/V/W/X/Y/Z</p>
        </Grid> */
}

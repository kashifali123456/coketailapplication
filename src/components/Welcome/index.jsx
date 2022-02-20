import React from "react";
import { Link } from "react-router-dom";
import Cocktailright from "../../Assets/Images/cocktail_right.png";
import Patreon from "../../Assets/Images/patreon_logo.png";
import Cocktailleft from "../../Assets/Images/cocktail_left.png";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const Welcome = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.welcome}
    >
      <Grid
        item
        container
        justifyContent="center"
        xs={3}
        alignItems="center"
        className={classes.outerwelcome}
      >
        <img src={Cocktailleft} />
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        xs={6}
        className={classes.welcomecard}
      >
        <Typography variant="h2">Welcome to TheCocktailDB</Typography>
        <Typography variant="body1" className={classes.welcomecontent}>
          An open, crowd-sourced database of drinks and cocktails from around
          the world <br /> We also offer a
          <span className={classes.wellcomespan}>free JSON API </span>for anyone
          wanting to use it. <br /> If you like the site, please consider
          supporting us on Patreon by clicking the link below...
        </Typography>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
          <img className={classes.wellcomecenter} src={Patreon} />
        </Grid>
        <Link to="/" className={classes.wellcomecenter1}>
          <span className={classes.wellcomespan}>
            Click to Support: Currently 650 supporters
          </span>
        </Link>
      </Grid>
      <Grid item container justifyContent="center" alignItems="center" xs={3}>
        <img src={Cocktailright} />
      </Grid>

      <hr className={classes.wellcomebottom} />
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  wellcome: {
    padding: "10px 0px",
  },
  welcomecontent: {
    width: "70%",
    height: "auto",
    textAlign: "center",
  },
  wellcomespan: {
    color: theme.palette.primary1.dark,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary1.light,
    },
    fontSize: 15,
    padding: "13px 5px",
  },
  wellcomecenter: {
    height: "20vh",
    width: "50%",
    padding: "10px 0px",
  },
  wellcomecenter1: {
    marginTop: 10,
    textDecoration: "none",
  },
  wellcomebottom: {
    marginTop: 30,
    width: "90%",
  },
}));
export default Welcome;

import { useHistory } from "react-router";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(8),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const history = useHistory();
  const classes = useStyles();
  const homeButton = () => {
    history.replace("/");
  };
  return (
    <div>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Typography
            variant="h4"
            className={classes.logo}
            onClick={() => homeButton()}
          >
            Corono++
          </Typography>
          <div className={classes.navlinks}>
            <Link to="/Global" className={classes.link}>
              Global
            </Link>
            <Link to="/Country" className={classes.link}>
              Country Wise
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

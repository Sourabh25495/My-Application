import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUniversity,
  faBriefcase,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { deepOrange } from "@material-ui/core/colors";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Profile from "./pages/Profile";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const PortfolioApplication = (props) => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dr. Sourabh Kulkarni
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faUserCircle} size="2x" />
                </ListItemIcon>
                <ListItemText primary={"My Profile"} />
              </ListItem>
            </Link>
            <Link to="/sk/education">
              <ListItem button>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faUniversity} size="2x" />
                </ListItemIcon>
                <ListItemText primary={"Education"} />
              </ListItem>
            </Link>
            <Link to="/sk/work-exp">
              <ListItem button>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faBriefcase} size="2x" />
                </ListItemIcon>
                <ListItemText primary={"Work Experience"} />
              </ListItem>
            </Link>
            <Link to="/sk/projects">
              <ListItem button>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faProjectDiagram} size="2x" />
                </ListItemIcon>
                <ListItemText primary={"Personal Projects"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            {/* <Switch>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/education">
                users
              </Route>
              <Route path="/work-exp">
                Work Exp
              </Route>
              <Route path="/projects">
                Personal projects
              </Route>
            </Switch> */}
          </Typography>
          <Typography paragraph></Typography>
        </main>
      </Router>
    </div>
  );
};

export default PortfolioApplication;

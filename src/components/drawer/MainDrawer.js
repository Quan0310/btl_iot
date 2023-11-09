import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header from '../header/Header';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Badge from '@material-ui/core/Badge';
import Main from '../Main';
import { Routes, Route, Link } from "react-router-dom";
import { Grid, CardContent, Container } from '@material-ui/core';
import HomePage from '../pages/HomePage';
import History from '../pages/History';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  noStyles: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 1
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginLeft: '330px',
  },
}));
const MainDrawer = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Header />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <Link to="/" className={classes.noStyles}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>

          <Link to="/history" className={classes.noStyles}>
            <ListItem button>
              <ListItemIcon>
                <BorderAllIcon />
              </ListItemIcon>
              <ListItemText primary="Sensor History" />
            </ListItem>
          </Link>
          <Link to="/onoffhistory" className={classes.noStyles}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="On Off History" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Container className={classes.content}>
        <div className={classes.toolbar} />
        <Main />
      </Container>
    </div>
  );
}
export default MainDrawer;
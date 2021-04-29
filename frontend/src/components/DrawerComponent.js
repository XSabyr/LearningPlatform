import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { fade } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  loginButton: {
    color: 'inherit',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

export default function DrawerComponent({ open, handleDrawerClose }) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const sections = useSelector((state) => state.sections.sections);

  const classes = useStyles();
  const theme = useTheme();

  const drawerUnauthorisedList = [
    {
      index: 1,
      text: 'All Courses',
      to: '/courses',
    },
    {
      index: 2,
      text: 'The most popular courses',
      to: '/courses',
    },
    {
      index: 3,
      text: 'Editors choice',
      to: '/courses',
    },
  ];

  const drawerAuthorisedList = [
    {
      index: 1,
      text: 'Started Courses',
      to: '/courses/started',
    },
    {
      index: 2,
      text: 'My courses',
      to: '/courses/creator',
    },
    {
      index: 3,
      text: 'Account Settings',
      to: '/account/settings',
    },
    {
      index: 4,
      text: 'Create new course',
      to: '/account/createcourse',
    },
  ];

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      {sections && (
        <div>
          <Divider />
          <List>
            {sections.map(({ text, index, to }) => (
              <ListItem button key={index}>
                <Link to={{ pathname: to }} className={classes.link}>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      )}
      <Divider />
      <List>
        {drawerUnauthorisedList.map(({ text, index, to }) => (
          <ListItem button key={index}>
            <Link to={{ pathname: to }} className={classes.link}>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
      {isAuthenticated && (
        <div>
          <Divider />
          <List>
            {drawerAuthorisedList.map(({ text, index, to }) => (
              <ListItem button key={index}>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <Link to={to} className={classes.link}>
                  <ListItemText primary={text} />{' '}
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </Drawer>
  );
}

import React, { Component } from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function CustomHeader(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          CRUD Operation
        </Typography>
        <Link to={"/"} ><Button ><span  className="NavbarD">Lists</span></Button></Link>
        <Link to={"/add-item"} ><Button ><span  className="NavbarD">Add Details</span></Button></Link>
        <Link to={"/country"} ><Button ><span  className="NavbarD">Country</span></Button></Link>
      </Toolbar>
    </AppBar>
  </div>
  );
}

class Header extends Component {
    render() {
      return (
        <div>
          <CustomHeader />
        </div>
      );
    }
}
export default Header;

import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,IconButton,Menu,MenuItem} from '@material-ui/core/';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Tooltip from "@material-ui/core/Tooltip";


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





const SimplyBar = () => {
     const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <img style={{width:140}} src="https://deabit.net/wp-content/uploads/2020/03/logoDeaBit-e1585610189252.png"/>
                    <Typography variant="h6" className={classes.title}>
                        Loans Industry
                    </Typography>


                </Toolbar>
            </AppBar>
        </div>
    );
}
export default SimplyBar;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    color:'white'
  },
}));

export default function InsetList(props) {
  const classes = useStyles();

  return (
    <List component="nav" className={ classes.root } aria-label="contacts">
      { props.data.map(item => (
        <ListItem button>
          <ListItemIcon>
          {item.icon}
          </ListItemIcon>
          <ListItemText primary={ item.text } />
        </ListItem>
      )) }

    </List>
  );
}
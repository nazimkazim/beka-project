import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
      { props.data.map((item, index) => (
        <ListItem key={index} button>
          <ListItemIcon>
          {item.icon}
          </ListItemIcon>
          <ListItemText primary={ item.text } />
        </ListItem>
      )) }

    </List>
  );
}
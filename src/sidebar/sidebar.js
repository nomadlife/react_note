import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';
import SidebarItemComponent from '../sidebaritem/sidebaritem'

class SidebarComponent extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                hello from the sidebar
            </div>
        )
    }
}

export default withStyles(styles)(SidebarComponent);
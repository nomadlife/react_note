import React, { Component } from 'react';
import './sidebaritem.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';

class SidebarItemComponent extends Component {

    
    render() {
        const { _index, _note, classes, selectedNoteIndex } = this.props;

        return (
            <div key={_index}>
                <ListItem className="listItem"
                selected={selectedNoteIndex===_index}
                alignItems='flex-start'
                onClick={()=>{this.selectNote(_note,_index)}}>
                <div className="textSection">
                    <ListItemText primary={_note.title}
                    secondary={removeHTMLTags(_note.body.substring(0,30)) + '...'}></ListItemText>
                </div>
                <DeleteIcon onClick={(e) => {
                    if(window.confirm(`Are you sure you want to delete: ${_note.title}`)) {
                        this.props.deleteNote(_note);
                    }else {
                        e.stopPropagation();
                    }}}
                className="deleteIcon"></DeleteIcon>
                </ListItem>
            </div>
        )
    }

    selectNote = (n,i) => this.props.selectNote(n,i);
    // deleteNote = (note) => {
    //     if(window.confirm(`Are you sure you want to delete: ${note.title}`)) {
    //         this.props.deleteNote(note);
    //     }else {

    //     }
    // }
}

export default SidebarItemComponent;

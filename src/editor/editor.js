import React, { Component } from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import "./editor.css";

class EditorComponent extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      title: '',
      id: ''
    };
  }

  componentDidMount = () => {
    this.setState({
      text : this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id
    })
  }

  componentDidUpdate = () => {
    if(this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text : this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id
      })
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="editorContainer">
        <BorderColorIcon className="editIcon"></BorderColorIcon>
        <input
        className="titleInput"
        placeholder='Note title...'
        value={this.state.title ? this.state.title : ''}
        onChange={(e) => this.updateTitle(e.target.value)}
        onKeyUp={(e)=>{
          if(e.key === 'Enter'){
            this.handleFocus('quill_tab')
          }
        }}>
        </input>
        <ReactQuill
          value={this.state.text}
          onChange={this.updateBody}
          ref='quill_tab'
        ></ReactQuill>
      </div>
    );
  }

  handleFocus = (value) => {
    this.refs[value].focus();
  } 

  updateBody = async val => {
    await this.setState({ text: val });
    this.update();
  };

  updateTitle = async (txt) => {
    await this.setState({ title: txt });
    this.update();
  }

  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title:this.state.title,
      body:this.state.text
    })
  }, 1500);
}

export default EditorComponent;

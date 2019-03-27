// @flow

import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from './actionCreators';

class AddPost extends React.Component {
  state: {
    title: "Title",
    html: ""
  };
  componentDidMount() {
    document.getElementById("editor").focus();
  }  
  handleContentSave(event) {
    this.setState({html: event.data})
  };
  goToSearch = event => {
    event.preventDefault();
  };
  render() {
    return (
        <main className="container">
            <div className="row" style={{marginTop: "40px", paddingLeft: "40px"}}>
                <div className="col-md-9">
                    <p className="title" style={{fontSize: "2.8rem", fontWeight: 100, color: "#757474"}}>
                        Title
                    </p>    
                </div>
                <div className="col-md-3" style={{display: "block"}}>
                    <div className="secondary-info" style={{display: "inline-block"}}>
                        <p><a className="btn btn-outline-success" style={{color: "#28a745"}}>Save</a></p>
                    </div>
                    <div className="secondary-info" style={{display: "inline-block"}}>
                        <p><a className="btn btn btn-outline-info" style={{marginLeft: "10px", color: "#17a2b8"}}>Publish</a></p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 single-content">
                    <p>
                        <div id="editor" contentEditable 
                        onChange={this.handleContentSave} 
                        html={this.state.html} 
                        style={{border: "0px solid #000000", minWidth: "200px", outline: "none"}} />
                    </p>
                </div>
            </div>
        </main>        
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);

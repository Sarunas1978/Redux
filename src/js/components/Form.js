import React from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
  }

  class ConnectedForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ title: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const { title } = this.state;
      // the longest writing
      this.props.addArticle( { title : ({ title }).title} );
      // or more shortly this.props.addArticle( { title } );
      // or slightly longer this.props.addArticle( { title : title } ); 
      this.setState({ title: "" });
    }
    render() {
      const { title } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">SAVE</button>
        </form>
      );
    }
  }
  
  const Form = connect(
    null,
    mapDispatchToProps
  )(ConnectedForm);
  
  export default Form;
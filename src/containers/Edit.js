import React, { Component } from 'react';
import API from '../api';




class NameForm extends React.Component {

    componentDidMount() {
    
        API.get(`topics/${this.props.match.params.topicId}`)
          .then(res => {
            const value = res.data;
            this.setState({ value });
            console.log(value)
          })
    }

    
    constructor(props) {
      super(props);
      this.state = {value: {}};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }


    handleSubmit(event) {
        event.preventDefault();
        const topics = {
            name: this.state.value
          };

          API.patch(`topics/${this.props.match.params.topicId}`, [topics])
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  


    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" defaultValue={this.state.value.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm;
import React, { Component } from 'react';
import API from '../api';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withRouter } from "react-router-dom";

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
    button: {
        margin: theme.spacing.unit,
      },
      input: {
        display: 'none',
      },
  });

const userId = '5b6c5b64ac07a71b48f47dc4';


class CreateResources extends React.Component {
constructor(props){
    super(props);
    this.state = {
        topicInfo : [],
        name: '',
        description : '',
        url : '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
}
  

handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const description = target.description;
    const url = target.url;

    this.setState({
      name: name,
      description: description,
      url: url
    });
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
         <h1>Create Resource</h1>

         <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            
            <label>
            Resource Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
            

            {/* onClick= {this.backToPrevious()} */}
            <Button  type="submit" variant="contained" className={classes.button}>
                Create
            </Button>
            <Link to={`/topics/${this.props.match.params.topicId}`}>
                <Button variant="contained" className={classes.button}>
                    Cancel
                </Button>
            </Link>
            
         </form>
      
      </div>
    );
  }

}

export default withRouter (withStyles(styles)(CreateResources));



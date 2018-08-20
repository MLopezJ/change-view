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


class EditTopic extends Component {

  state = {
    topicInfo : [],
    name: '',
  }

  /*
  backToPrevious(){
    this.props.history.push("/");
  }*/

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const topics = {
      name: this.state.name
    };

    //API.post(`users`, { user })
    API.post(`topics/`+userId, topics)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
         <h1>Create Topic</h1>

         <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            {/*<TextField
            id="name"
            label="Name"
            className={classes.textField}
            onChange={this.handleChange('name')}
            margin="normal"
            />*/}
            <label>
            Topic Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
            

            {/* onClick= {this.backToPrevious()} */}
            <Button  type="submit" variant="contained" className={classes.button}>
                Create
            </Button>
            <Link to="/">
                <Button variant="contained" className={classes.button}>
                    Cancel
                </Button>
            </Link>
            
         </form>
      
      </div>
    );
  }

}

export default withRouter (withStyles(styles)(EditTopic));



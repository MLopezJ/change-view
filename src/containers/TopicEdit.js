import React, { Component } from 'react';
import API from '../api';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


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


class EditTopic extends Component {


  constructor(props){
    super(props);
    this.state = {
      topicInfo : {},
      name: 'dfsdf',
      
    }

    this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  componentDidMount() {
    
    API.get(`topics/${this.props.match.params.topicId}`)
      .then(res => {
        const topicInfo = res.data;
        this.setState({ topicInfo });
        console.log(topicInfo)
      })
  }

  _id(){
    console.log(this.props.match.params.topicId)
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
  }
  

  render() {
    
    const { classes } = this.props;

    
    
    return (
      <div>
         <h1>Edit Topic</h1>

         <form className={classes.container} noValidate autoComplete="off">
            <TextField
            id="name"
            label= 'Name'
            className={classes.textField}
            value={this.state.topicInfo.name}
            onChange={this.handleChange('name')}
            margin="normal"
            />
            

            <Button  variant="contained" className={classes.button}>
            {this._id()}
            Save
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

export default withStyles(styles)(EditTopic);



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

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});





class Resources extends Component{
  state = {
    topicResources : {resources:[]}
  }


  componentDidMount() {
    API.get(`topics/${this.props.match.params.topicId}`)
      .then(res => {
        const topicResources = res.data;
        this.setState({ topicResources });
        console.log(topicResources)
        console.log(this.state.topicResources.resources);
      })
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render(){



  return (
    <div>

    
    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <CustomTableCell>ID</CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Options</CustomTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {this.state.topicResources.resources.map(resource => {
            return (
              <TableRow  key={resource._id}>
                <CustomTableCell component="th" scope="row">
                  {resource._id}
                </CustomTableCell>
                <CustomTableCell >{resource.name}</CustomTableCell>
                <CustomTableCell >

                <Link to={`/edit`}>
                  <Button variant="contained">
                    Edit 
                  </Button>
                </Link>
                
                <Link to="/resources">
                  <Button variant="contained" color="primary" >
                    View
                  </Button>
                </Link>
                  
                <Button  variant="contained" color="secondary" >
                  Delete
                </Button>

                </CustomTableCell>

              </TableRow>
            );
          })}
        </TableBody>
        
 
        
        
      </Table>

      <Link to={`${this.props.match.params.topicId}/create`}>
        <Button variant="contained" color="primary" >
        Create Resource
        </Button>
      </Link>
      <Link to="/">
                <Button variant="contained" >
                    Back
                </Button>
            </Link>
    </Paper>
    </div>
  );
}
}


export default withStyles(styles)(Resources);
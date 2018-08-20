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
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },

});

const userId = '5b6c5b64ac07a71b48f47dc4';

class Topics extends Component {
  state = {
    info : {topics:[]}
  }

  componentDidMount() {
    API.get(`user/`+userId)
      .then(res => {
        const info = res.data;
        this.setState({ info });
        console.log(res.data)
      })
  }

  delete(_id) {
    API.delete(`topics/${_id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      const topics = this.state.info.topics.filter(topic => topic._id != _id)
      this.setState({info: {topics}})
    })
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
         <h1>My Topics</h1>
      
    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <CustomTableCell>ID</CustomTableCell>
            <CustomTableCell >Name</CustomTableCell>
            <CustomTableCell >Options</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(this.state.info.topics)}
          {/*console.log(this.state.info.userName)*/}
           
          {this.state.info.topics.map(inf => {
            return (
              <TableRow  key={inf._id}>
                <CustomTableCell component="th" scope="row">
                  {inf._id}
                </CustomTableCell>
                <CustomTableCell component="th" scope="row">
                  {inf.name}
                </CustomTableCell>
                <CustomTableCell component="th" scope="row">
                
                <Link to={`/edit/${inf._id}`}>
                  <Button variant="contained">
                    Edit 
                  </Button>
                </Link>
                
                <Link to={`/topics/${inf._id}`}>
                  <Button variant="contained" color="primary" >
                    Resources
                  </Button>
                </Link>
                  
                <Button onClick={()=>this.delete(inf._id)} variant="contained" color="secondary" >
                  Delete
                </Button>
                  
                </CustomTableCell>
                
              </TableRow>
            );
          })}
         
        </TableBody>
      </Table>
      <Link to="/create">
        <Button variant="contained" color="primary" >
        Create Topic
        </Button>
      </Link>
    </Paper>
    </div>
    );
  }

}

//export default Topics;
export default withStyles(styles)(Topics);



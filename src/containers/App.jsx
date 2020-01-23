import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import FormContainer from './forms'
import {calculateQuota} from '../utils/calculations'

import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: 0
    }
  }

  handleSubmit = data => {
    console.log(data)

    const rest = calculateQuota(data.amount, data.quota, data.interest)

    this.setState({
      result: rest
    })
      
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          calculalacuota.cl
        </header>
        <div className='App-Content' >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormContainer onSubmit={this.handleSubmit} />
              <p>{this.state.result}</p>
            </Grid>
            <Grid item xs={6}>Title</Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Grid } from '@material-ui/core'
import FormContainer from './forms'

import './App.css';



function App() {
  return (
    <div className="App">
      <header className='App-header'>
        calculalacuota.cl
      </header>
      <div className='App-Content' >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormContainer />
          </Grid>
          <Grid item xs={6}>Title</Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;

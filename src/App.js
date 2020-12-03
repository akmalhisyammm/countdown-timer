import React, { Component } from 'react';
import Timer from './components/Timer';
import { Container, Box } from '@material-ui/core/'
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <Timer startMinutes="3" startSeconds="0" />
        </Box>
      </Container>
    );
  }
}

export default App;

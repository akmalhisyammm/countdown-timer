import { Container, Grid, Divider, Typography } from '@material-ui/core'
import Countdown from './components/Countdown';
import './App.css';

function App() {
    return (
      <div className="App">
        <Container maxWidth="xs">
          <Grid container direction="column" alignItems="center">
            <Grid item style={{marginBottom: 4}}>
              <Typography variant="h5" className="Header" gutterBottom>
                <strong>COUNTDOWN TIMER</strong>
              </Typography>
            </Grid>
            <Countdown />
          </Grid>
        </Container>
      </div>
    );
}

export default App;

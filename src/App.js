
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Carousel from './components/carousel/Carousel'

function App() {
  return (
    <div className="App">
    
      <CssBaseline />
      <Container fixed>
      <h2 style={{textAlign: 'center'}}>Carousel</h2>
        <Carousel />
      </Container>
    </div>
  );
}

export default App;

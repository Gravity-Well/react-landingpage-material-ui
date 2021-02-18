

import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline' // helps on different browsers
import NavigationBar from './NavigationBar'
import GridLayout from './GridLayout'
import Container from '@material-ui/core/Container'

function App() {
  return (
   <div className='App'>
    <CssBaseline/>
    <NavigationBar/>
    <Container>
      <main>
         <GridLayout/>
      </main>
      
    </Container>
   
   </div>
  );
}

export default App;

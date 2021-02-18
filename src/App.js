

import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline' // helps on different browsers
import { NavigationBar } from './NavigationBar'

function App() {
  return (
   <div className='App'>
    <CssBaseline/>
    <NavigationBar/>
   </div>
  );
}

export default App;

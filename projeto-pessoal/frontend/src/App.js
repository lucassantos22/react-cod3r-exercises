import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/templates/navbar/Navbar';
import Routes from './routes';

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar title='HR Admin'/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;

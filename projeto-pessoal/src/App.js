import Navbar from './components/templates/Navbar';
import Footer from './components/templates/Footer';
import Routes from './routes';

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar title='TODO' subtitle='App'/>
        <Routes/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
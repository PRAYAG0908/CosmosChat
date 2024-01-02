import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Chat from './pages/Chat';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path='/Home' element = {<Home/>}/>
        <Route path='/Chat' element = {<Chat/>}/>
        <Route path='/Dashboard' element = {<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

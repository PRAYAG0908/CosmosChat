import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Chat from './pages/Chat';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Setting from './pages/Setting';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path='/Home' element = {<Home/>}/>
        <Route path='/Chat' element = {<Chat/>}/>
        <Route path='/Dashboard' element = {<Dashboard/>}/>
        <Route path='/Setting' element = {<Setting/>}/>
        <Route path='/SignIn' element = {<SignIn/>}/>
        <Route path='/SignUp' element = {<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

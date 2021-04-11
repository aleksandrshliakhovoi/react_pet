import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import {BrowserRouter, Route} from 'react-router-dom'



function App() {
  return (
  <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div class='app-wrapper-content'>
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/news' component={News}/>
        <Route path='music' component={Music}/>
      </div>
    </div>
  </BrowserRouter>
  );
}


export default App;

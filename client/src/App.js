import TopBar from './components/topbar/TopBar.jsx'
import Header from './components/header/Header.jsx'
import Home from './pages/home/home.jsx'
import Write from './pages/write/Write.jsx'
import Settings from './pages/settings/Settings.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import Single from './components/singlePost/SinglePost.jsx'
import { useContext } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import {Context} from './context/Context'

function App() {
  const {user} = useContext(Context)
  return (
    <div className="App">
    <Router>
    <TopBar/>
      <Routes>
        <Route exact path="/" element={ <Home/> }/>
        <Route exact path="/register" element={user ? <Home/> : <Register/>}/>
        <Route exact path="/login" element={user ? <Home/> : <Login/>}/>
        <Route exact path="/write" element={user ? <Write/> : <Register/>}/>
        <Route exact path="/settings" element={user ? <Settings/> : <Register/>}/>
        <Route  path="post/:postId" element={user ? <Single/> : <Login/>} />
      </Routes>
  </Router>
    </div>
  );
}

export default App;

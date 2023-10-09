import './App.css';


//Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Register from './pages/Register/index';
import Profile from './pages/ProfileUser';
import SharePhoto from './pages/SharePhoto';
import UpdateUser from './pages/UpdateUser';
import UpdatePassword from './pages/UpdatePassword';
import PagePhotoPosted from './pages/PagePhotoPosted';



function App() {

  
  return (
    <>
      <Router>
      <Routes>

      <Route path="/home" element={ !localStorage.getItem("token") ? (<Login />) : ( <Home />)}/>
      <Route path="/:id" element={!localStorage.getItem("token") ? (<Login />) : ( <Profile />)}/>
      <Route path="/share" element={!localStorage.getItem("token") ? (<Login />) : ( <SharePhoto />)}/>
      <Route path="/update" element={!localStorage.getItem("token") ? (<Login />) : ( <UpdateUser />)}/>
      <Route path="/updatePassword" element={!localStorage.getItem("token") ? (<Login />) : ( <UpdatePassword />)}/>
      <Route path="/photos/:idPhotoPosted" element={<PagePhotoPosted />}/>

      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      </Routes>
      </Router>
  </>
  );
}

export default App;

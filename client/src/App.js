import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import FindHostel from './containers/FindHostel';
import FindRoomMate from './containers/FindRoomMate';
import Neccessary from './containers/Neccessary';
import Forum from './containers/Forum';
import Login from './containers/Login';
import Register from './containers/Register';
import Post from './containers/Post';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="FindHostel" element={<FindHostel />} />
            <Route path="FindRoomMate" element={<FindRoomMate />} />
            <Route path="Neccessary" element={<Neccessary />} />
            <Route path="Forum" element={<Forum />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="Post" element={<Post />} />
          </Routes>
        </BrowserRouter>   
  );
}

export default App;

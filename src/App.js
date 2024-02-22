
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/home/Home";
import TopBar from "./components/topBar/TopBar";
import Single from "./Pages/home/single/Single";
import Write from "./Pages/write/Write";

import Settings from "./Pages/settings/Settings";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";


function App(){
  const user = true;
  return(
    <BrowserRouter>
    <TopBar/>
    <Routes>
      <Route exact path="/"  element={<Home />} />
      <Route  path="register" element={user ? <Home/> : <Register />} />
      <Route  path="/login" element={user ? <Home/> :<Login/>} />
          <Route path="/write" element={user? <Write/>:<Register/>} />
          <Route path="/settings" element={user ?<Settings/>:<Register/>} />
          <Route path="/post/:postId" element={<Single/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

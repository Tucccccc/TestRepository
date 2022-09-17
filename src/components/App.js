import '../App.css';
import '../style.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "./Login"
import { AuthContextProvider } from '../context/AuthContext';
import Chat from './Chat';
import Protected from './Protected';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}></Route>
            <Route exact path="/chat" element={
              <Protected>
                <Chat></Chat>
              </Protected>}>  
            </Route>
          </Routes>
        </Router>
      </AuthContextProvider>
  </div>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import './App.css';
import Layout from "./components/Layout/Layout";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Profile/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='dialogues/:id' element={<DialoguesContainer/>}/>
          <Route path='dialogues' element={<DialoguesContainer/>}/>
          <Route path='users' element={<UsersContainer/>}/>
          <Route path='news' element={
            <div>
              <p>Here will be News-component!</p>
            </div>
          }/>
          <Route path='music' element={
            <div>
              <p>Here will be Music-component!</p>
            </div>
          }/>
          <Route path='settings' element={
            <div>
              <p>Here will be Settings-component!</p>
            </div>
          }/>
          <Route path="*" element={
            <div>
              <p>There's nothing here!</p>
            </div>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

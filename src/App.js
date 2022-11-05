import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import './App.css';
import Layout from "./components/Layout/Layout";


const App = (props) => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Profile state={props.state.profilePage}/>}/>
          <Route path='profile' element={<Profile state={props.state.profilePage}/>}/>
          <Route path='dialogues' element={<Dialogues state={props.state.dialoguesPage}/>}/>
          <Route path='dialogues/:id' element={<Dialogues state={props.state.dialoguesPage}/>}/>
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
      };
    </BrowserRouter>
  );
};

export default App;

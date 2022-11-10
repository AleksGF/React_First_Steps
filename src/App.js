import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import './App.css';
import Layout from "./components/Layout/Layout";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";


const App = (props) => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Profile store={props.store}/>}/>
          <Route path='profile' element={<Profile store={props.store}/>}/>
          <Route path='dialogues' element={<DialoguesContainer store={props.store}/>}/>
          <Route path='dialogues/:id' element={<DialoguesContainer store={props.store}/>}/>
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

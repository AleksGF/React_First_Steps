import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import './App.css';



const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <main className="content_wrapper">
                    <Routes>
                        <Route path='/' element={<Profile posts={props.data.posts}/>}/>
                        <Route path='profile' element={<Profile posts={props.data.posts}/>}/>
                        <Route path='dialogues' element={<Dialogues dialogues={props.data.dialogues} messages={props.data.messages}/>}/>
                        <Route path='dialogues/*' element={<Dialogues dialogues={props.data.dialogues} messages={props.data.messages}/>}/>   {/* Temp link */}
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
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;

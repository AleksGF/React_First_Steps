import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";



const App = () => {
  return (
      <div className="app-wrapper">
          <Header />
          <Navbar />
          <MainContent />
      </div>
  );
};

export default App;

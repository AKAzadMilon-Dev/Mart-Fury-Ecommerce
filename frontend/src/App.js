
import './App.css';
import Header from './components/Header/Header';
import HeaderTop from './components/Header/HeaderTop';
import {Routes,Route,} from "react-router-dom";
import Home from './components/Home';
import Banner from './components/banner/Banner'


function App() {
  return (
    <>
      <HeaderTop></HeaderTop>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/banner" element={<Banner />}></Route>
      </Routes>
    </>
  );
}

export default App;

import './App.css';
import AppBar from './features/common/AppBar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './features/home/Home';
import Dogs from './features/dogs/Dogs';
import CatFacts from './features/catFacts/CatFacts';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar></AppBar>
        <Routes>
          <Route index element={<Home />} />
          <Route path='dogs' element={<Dogs />} />
          <Route path='dogs/:id' element={<Dogs />} />
          <Route path='catfacts' element={<CatFacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

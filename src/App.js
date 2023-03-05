import logo from './logo.svg';
// import './App.css';

import { Routes, Route } from "react-router-dom";
import HomePage1 from './components/homepage1/HomePage1';

function App() {
  return (
    <Routes>
          <Route exact path ="/" element={<HomePage1 />} />

    </Routes>
  );
}

export default App;
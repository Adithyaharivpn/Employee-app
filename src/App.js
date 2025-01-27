import './App.css';
import Empadd from './components/EmpForm';
import Emsearch from './components/EmpSearch';
import Delemp from './components/EmpDel';
import Emptable from './components/EmpTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Empadd />}></Route>
        <Route path="/search" element={<Emsearch />}></Route>
        <Route path="/del" element={<Delemp />}></Route>
        <Route path="/table" element={<Emptable />}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
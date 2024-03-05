import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';
import Movies from './routes/Movies';
import ToDoList from './routes/ToDoList';
import Coins from './routes/Coins';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/toDoList' element={<ToDoList />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

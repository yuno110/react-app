import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Movie from './componet/Movie';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';

// // Coins
// interface CoinInfo {
//   name: string
//   symbol: string
//   quotes: {
//     USD: {
//       price: number
//     }
//   }
// }

function App() {

  // // toDoList
  // const [toDo, setToDo] = useState<string>('');
  // const [toDos, setToDos] = useState<string[]>([]);

  // const onChange = (event: ChangeEvent<HTMLInputElement>) => setToDo(event.target.value);
  // const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (toDo === '') {
  //     return;
  //   }
  //   setToDos((toDos) => [toDo, ...toDos]);
  //   setToDo('');
  // }

  // // Coins
  // const [loading, setLoading] = useState<boolean>(true);
  // const [coins, setCoins] = useState<CoinInfo[]>([]);

  // useEffect(() => {
  //   fetch('https://api.coinpaprika.com/v1/tickers')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setCoins(json);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

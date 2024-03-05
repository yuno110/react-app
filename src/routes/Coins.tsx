import { useEffect, useState } from "react";
import { ICoin } from "../interface/ICoin";

function Coins() {

  const [loading, setLoading] = useState<boolean>(true);
  const [coins, setCoins] = useState<ICoin[]>([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);


  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ul>
            {coins.map((coin: ICoin) => (
              <li>
                {coin.name} ({coin.symbol}) ${coin.quotes.USD.price} USD
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
export default Coins;
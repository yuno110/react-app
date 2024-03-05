import { Link } from "react-router-dom";

function Home(){

  return (
    <ul>
      <li><Link to={'/toDoList'}>TodoList</Link></li>
      <li><Link to={'/coins'}>Coins</Link></li>
      <li><Link to={'/movies'}>Movies</Link></li>
    </ul>
  )
}

export default Home;
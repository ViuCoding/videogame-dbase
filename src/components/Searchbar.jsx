import { useState } from "react";
import useFetch from "../hooks/useFetch";

// styles
import "./Searchbar.scss";

export default function Searchbar() {
  const RAWG_KEY = "71806925a6f940ec8cf552ed24cf8b1a";
  const [url, setUrl] = useState(
    `https://api.rawg.io/api/games?key=${RAWG_KEY}&search=`
  );
  const { data, error, loading } = useFetch(url);

  function handleChange(e) {
    
    if (e.target.value === "") {
      setUrl(`https://api.rawg.io/api/games?key=${RAWG_KEY}&search=`);
    } else {
      setUrl(
        `https://api.rawg.io/api/games?key=${RAWG_KEY}&search=${e.target.value}`
      );
    }
  }

  console.log("i am DATA", data);

  return (
    <div className='searchbar'>
      <form>
        <label htmlFor='game-query'>Search Games: </label>
        <input
          type='text'
          name='game-query'
          id='game-query'
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

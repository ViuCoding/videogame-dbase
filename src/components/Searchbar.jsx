import { useState } from "react";
import useFetch from "../hooks/useFetch";

// styles
import "./Searchbar.scss";

// components
import SearchPreview from "./SearchPreview";

export default function Searchbar() {
  const RAWG_KEY = "71806925a6f940ec8cf552ed24cf8b1a";
  const [url, setUrl] = useState("");
  const { data, error, loading } = useFetch(url);

  function handleChange(e) {
    if (e.target.value.trim() === "") {
      setUrl("");
    } else {
      setTimeout(() => {
        setUrl(
          `https://api.rawg.io/api/games?key=${RAWG_KEY}&search=${e.target.value.trim()}`
        );
      }, 1500);
    }
  }

  return (
    <div className='searchbar'>
      <form>
        <input
          type='text'
          name='game-query'
          id='game-query'
          onChange={handleChange}
          placeholder='Search games'
        />
      </form>

      {data && <SearchPreview payload={data} loading={loading} error={error} />}
    </div>
  );
}

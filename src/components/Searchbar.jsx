import { useState } from "react";
import useFetch from "../hooks/useFetch";

// styles
import "./Searchbar.scss";

// components
import SearchPreview from "./SearchPreview";

export default function Searchbar() {
  const RAWG_KEY = "71806925a6f940ec8cf552ed24cf8b1a";
  const [url, setUrl] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { data, error, loading } = useFetch(url);

  function handleChange(e) {
    if (e.target.value.trim() === "") {
      setUrl("");
      setIsVisible(false);
    } else {
      setIsVisible(true);
      setTimeout(() => {
        setUrl(
          `https://api.rawg.io/api/games?key=${RAWG_KEY}&search=${e.target.value.trim()}`
        );
      }, 1500);
    }
  }

  // Passing this function to the child component, when we click on any link the SearchPreview will be toggled off.
  function handleClick() {
    setIsVisible(!isVisible);
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

      {data && isVisible && (
        <SearchPreview
          payload={data}
          loading={loading}
          error={error}
          onClick={handleClick}
        />
      )}
    </div>
  );
}

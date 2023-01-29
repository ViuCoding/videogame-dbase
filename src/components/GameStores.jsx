// hooks
import useFetch from "../hooks/useFetch";

// styles
import "./GameStores.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSteam,
  faXbox,
  faPlaystation,
  faApple,
  faGooglePlay,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons";

// components
import LoadingSpinner from "./LoadingSpinner";

export default function GameStores({ id }) {
  const RAWG_KEY = "71806925a6f940ec8cf552ed24cf8b1a";

  let url = `https://api.rawg.io/api/games/${id}/stores?key=${RAWG_KEY}`;

  const { data, error, loading } = useFetch(url);

  return (
    <section className='stores margin-bot'>
      <h2 className='sub-heading'>AVAILABLE STORES</h2>

      <div className='game-stores '>
        {loading && <LoadingSpinner />}
        {data &&
          data.map(store => {
            if (store.store_id === 1) {
              return (
                <div className='url' key={store.id}>
                  <a href={store.url} target='_blank'>
                    <FontAwesomeIcon icon={faSteam} />
                  </a>
                </div>
              );
            } else if (store.store_id === 2) {
              return (
                <div className='url' key={store.id}>
                  <a href={store.url} target='_blank'>
                    <FontAwesomeIcon icon={faXbox} />
                  </a>
                </div>
              );
            } else if (store.store_id === 3) {
              return (
                <div className='url' key={store.id}>
                  <a href={store.url} target='_blank'>
                    <FontAwesomeIcon icon={faPlaystation} />
                  </a>
                </div>
              );
            } else if (store.store_id === 4) {
              return (
                <div className='url' key={store.id}>
                  <a href={store.url} target='_blank'>
                    <FontAwesomeIcon icon={faApple} />
                  </a>
                </div>
              );
            } else if (store.store_id === 5) {
              return (
                <div className='url' key={store.id}>
                  <a href={store.url} target='_blank'>
                    GOG
                  </a>
                </div>
              );
            } else if (store.store_id === 6) {
              return (
                <div className='url' key={store.id}>
                  <a href={store.url} target='_blank'>
                    Nintendo
                  </a>
                </div>
              );
            } else if (store.store_id === 7) {
              return (
                <div className='url' key={store.id}>
                  <a href={store.url} target='_blank'>
                    <FontAwesomeIcon
                      icon={faXbox}
                      style={{ color: "#119910" }}
                    />
                    <span>360</span>
                  </a>
                </div>
              );
            } else if (store.store_id === 8) {
              return (
                <div className='url' key={store.id}>
                  <a href={store.url} target='_blank'>
                    <FontAwesomeIcon icon={faGooglePlay} />
                  </a>
                </div>
              );
            } else if (store.store_id === 9) {
              return (
                <div className='url' key={store.id}>
                  <a href={store.url} target='_blank'>
                    <FontAwesomeIcon icon={faItchIo} />
                  </a>
                </div>
              );
            } else if (store.store_id === 11) {
              return (
                <div className='url' key={store.id}>
                  <a href={store.url} target='_blank'>
                    Epic
                  </a>
                </div>
              );
            }
          })}
      </div>
    </section>
  );
}

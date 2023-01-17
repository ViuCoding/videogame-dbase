import "./SearchPreview.scss";

export default function SearchPreview({ payload, loading, error }) {
  return (
    <div className='search-preview'>
      {loading && <div>Loading</div>}
      {payload.map(game => {
        return (
          <div className='game' key={game.id}>
            <div
              className='icon-box'
              style={{
                backgroundImage: `url(${game.background_image})`,
              }}></div>
            <div className='game-info'>
              {/* <p
                className='game-metacritic'
                style={{
                  backgroundColor:
                    game.metacritic > 75
                      ? "green"
                      : game.metacritic < 75 && game.metacritic > 50
                      ? "yellow"
                      : "crimson",
                }}></p> */}
              <h3 className='game-name'>{game.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

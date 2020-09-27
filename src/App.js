import React, { Component } from "react";
import ArtistCard from "./components/artist-card.js";
import SearchBar from "./components/search-bar.js";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <div className="container">
          <div className="row">
            <ArtistCard
              img="https://i.pinimg.com/originals/4e/bf/70/4ebf70d9447dfe69545299b845b58bdf.jpg"
              titulo="Iron Maiden"
            />
            <ArtistCard
              img="https://www.rock-progresivo.com/wp-content/uploads/2013/07/Dream-Theater-Dream-Theater-2013.jpg"
              titulo="Dream Theater"
            />
            <ArtistCard
              img="https://i.pinimg.com/originals/c7/3e/d2/c73ed276f63f14332eddd0a4afea1eaf.png"
              titulo="Slayer"
            />
            <ArtistCard
              img="https://lh3.googleusercontent.com/proxy/Br5nF0dGdP0CqjlXgj76eSQ3L0Nvh0yOpxS_Ez9zh7s0KouYgKKFWQYZ2wThjsQ6HbvqqI30IzBdRhlOi5lmR532qxMvGBkp3l0IWeCoKW8EohlzqbmSGonvfEL75x4la6up88Euysm7IQ"
              titulo="Fear Factory"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

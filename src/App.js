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
              img="https://i.ebayimg.com/images/g/PQQAAOSwL-9cdEK2/s-l300.jpg"
              titulo="Fear Factory"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

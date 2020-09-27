import React from "react";
import "./artist-card.css";
class ArtistCard extends React.Component {
  render() {
    return (
      <div className="col-3">
        <div className="item">
          <img
            src={this.props.img}
            alt=""
            className="pic img-fluid" /*llamo a la clase que está dentro del css*/
          />
          <p className="titulo">{this.props.titulo}</p>
        </div>
      </div>
    );
  }
}

export default ArtistCard;

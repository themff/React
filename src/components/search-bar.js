import React from "react";
import "./search-bar.css";
import logo from "../logo.svg";

class SearchBar extends React.Component {
  state = {
    busqueda: "", //init la variable busqueda para que funcione el value=this.state.busqueda.
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name, "Pressed");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <img src={logo} alt="logo" className="logo-barra" />
          </div>
          <div className="col-md-4">
            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="Form"
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.busqueda} //importante para tener la variable controlada
                  placeholder="Busca una banda"
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;

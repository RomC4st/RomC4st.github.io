import React, { Component } from "react";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      nom: "",
      photo: "",
      prenom: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }
  componentDidUpdate() {
    this.getInfo();
  }

  getInfo = () => {
    fetch("https://walkingdeadperso.firebaseio.com/perso.json")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nom: this.state.nom,
        prenom: this.state.prenom,
        photo: this.state.photo
      })
    };

    const url = "https://walkingdeadperso.firebaseio.com/perso.json";

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        res.error
          ? alert(res.error)
          : alert(`Le perso a été ajouté avec l'ID ${res}!`);
      })
      .catch(e => {
        console.error(e);
        alert("Erreur lors de l'ajout d'un perso");
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="FormPerso">
            <h1>Ajoutez un Perso de WalkingDead</h1>
            <form onSubmit={this.submitForm}>
              <fieldset>
                <legend>Walking Dead</legend>
                <div className="form-data">
                  <label htmlFor="nom">Nom du Perso : </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    onChange={this.onChange}
                    value={this.state.nom}
                    required
                  />
                </div>
                <div className="form-data">
                  <label htmlFor="photo">Image du Perso : </label>
                  <input
                    type="text"
                    id="photo"
                    name="photo"
                    onChange={this.onChange}
                    value={this.state.photo}
                    required
                  />
                </div>
                <div className="form-data">
                  <label htmlFor="prenom">Prenom du Perso : </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    onChange={this.onChange}
                    value={this.state.prenom}
                    required
                  />
                </div>

                <hr />
                <div className="form-data">
                  <input
                    type="submit"
                    value="Envoyer"
                    onClick={() => this.componentDidUpdate}
                  />
                </div>
              </fieldset>
            </form>
          </div>
          <ul>
            {Object.keys(items).map((item, i) => (
              <li key={i}>
                <p>
                  {items[item].nom} {items[item].prenom}
                </p>
                <img src={items[item].photo} alt={items[item].nom} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Api;

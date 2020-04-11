import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from '../../actions/index';
import { addArticle } from '../../actions/index';
import { NavLink } from 'react-router-dom';
import './Buscador.css';


function mapStateToProps(state) {
  return {
    articles: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    getData: title => dispatch(getData(title))
  };
}

export class Post extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   title: ""
    // };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
  }
  // handleChange(event) {
  //   this.setState({ [event.target.id]: event.target.value });
  // }
  handleSubmit(event) {
    event.preventDefault();
    const inputText = this.myRef.current.value
    this.props.getData(inputText);
  }

  render() {
    // const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              // value={title}
              // onChange={this.handleChange}
              ref={this.myRef}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.articles && this.props.articles.map((el, i) => (
            <div key={i} className="row cnt" onClick={this.handleButton}>
              <NavLink className="col-4" to={`/movie/${el.imdbID}`} >
                {el.Title}
              </NavLink>
              <button className="col-1" onClick={() => this.props.addArticle({title: el.Title, id: el.imdbID})}>Fav</button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

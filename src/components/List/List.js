import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle } from "../../actions/index";
import { Link } from 'react-router-dom';
import './List.css';

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeArticle: article => dispatch(removeArticle(article))
  };
}

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.articles && this.props.articles.map(el => (
            <div className="row cnt">
              <Link className="col-3" to={`/movie/${el.imdbID}`}>
              {el.title}
              </Link>
              <button className="col-1" onClick={() => this.props.removeArticle({title: el.title})}>X</button>
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
)(ConnectedList);

import React, { Component } from "react";

import ArticleList from "./ArticleList";

import DataApi from "../DataApi";
import { data } from "../testdata.json";

const api = new DataApi(data);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}
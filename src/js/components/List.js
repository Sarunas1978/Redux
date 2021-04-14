import React from 'react';
import { connect } from 'react-redux';

const select = state => {
    return { articles: state.articles };
  };

  const ConnectedList = ({ articles }) => (
      <ul>
          {articles.map((el, index) => (
              <li key={index}>{el.title}</li>
          ))}
      </ul>
  )

const List = connect(select)(ConnectedList);

export default List;
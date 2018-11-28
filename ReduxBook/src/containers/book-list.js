import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList(){
  return this.props.books.map((book) => {
    return (
      <li
       key={book.title}
       onClick={() => this.props.selectBook(book)}
       className="list-group-item">
       {book.title}
      </li>
    )
  })
}

  render () {
    return (
      <ul className="lists-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned shows as props inside bookList
  return {
    books : state.books
  }
}
//Anything returned from this function ends up as
//props on the BookList container
function mapDispatchToProps(dispatch){
  //Whenever selectbook should be called ,the result
  //should be passed to all of our reducers
  return bindActionCreators({selectBook : selectBook}, dispatch);
}

//Promote bookList from a component to a container it needs to know
//about this new dispatch method select book make it available as a prop
export default connect (mapStateToProps, mapDispatchToProps) (BookList);

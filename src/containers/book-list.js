import React,{ Component } from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
	constructor(props) {
		super(props);
	}

	renderList()
	{
		return this.props.books.map((book) => {
			return <li key={book.title} className="list-group-item">{book.title}</li>;
		});
	}

	render() {
		return (
			<ul className="list-group col-sm04">
				{this.renderList()}
			</ul>

			);
	}
}

function mapStateToProps(state) {

	return {
		books: state.books
	};
}
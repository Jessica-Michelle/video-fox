import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onInputChange = (e) => {
		this.setState({ term: e.target.value });
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<h1 className="ui header">Video Fox</h1>
						<div className="ui search">
							<div className="ui icon input">
								<input
									type="text"
									value={this.state.term}
									onChange={this.onInputChange}
									placeholder="Search videos"
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;

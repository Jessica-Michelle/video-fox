import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	// this will show the user some data before a user
	// has searched so there's isn't a blank screen
	componentDidMount() {
		this.onTermSubmit('houseplants');
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		this.setState({
			videos: response.data.items,
			// when a user makes a search, this will take the
			// first video from the list and set it as the selected video
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={this.onVideoSelect}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

export default App;

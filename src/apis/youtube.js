import axios from 'axios';

const KEY = 'AIzaSyB2RB1YooDM4owyKUrRmSZCALmVSRw_IWk';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		type: 'video',
		key: KEY,
	},
});

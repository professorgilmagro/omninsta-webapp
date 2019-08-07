const dotenv = require('dotenv');
dotenv.config();

const config = {
	host: process.env.REACT_APP_API_HOST || 'http://localhost',
	port: process.env.REACT_APP_API_PORT,
	getURL(...pathSegments) {
		let path = '';
		if (pathSegments.length > 0) {
			path = '/' + pathSegments.join('/', path);
		}

		if (this.port !== undefined) {
			return `${this.host}:${this.port}${path}`;
		}

		return `${this.host}${path}`;
	}
};

export default config;

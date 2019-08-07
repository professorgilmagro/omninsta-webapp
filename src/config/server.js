const dotenv = require('dotenv');
dotenv.config();

const config = {
	host: process.env.API_HOST || 'http://10.86.52.104',
	port: process.env.API_PORT || 3333,
	getURL(...pathSegments) {
		let path = '';
		if (pathSegments.length > 0) {
			path = '/' + pathSegments.join('/', path);
		}

		return `${this.host}:${this.port}${path}`;
	}
};

export default config;

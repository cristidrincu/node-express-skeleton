const config = {
	production: {
		database: {
			client: '',
			connection: {
				host: '',
				user: '',
				password: '',
				name: '',
				socketPath: ''
			}
		},
		server: {
			host: 'localhost',
			port: 8080
		}
	},
	development: {
		database: {
			client: '',
			connection: {
				host: '',
				user: '',
				password: '',
				name: '',
				socketPath: ''
			}
		},
		server: {
			host: 'localhost',
			port: 8080
		}
	},
	test: {
		database: {
			client: '',
			connection: {
				host: '',
				user: '',
				password: '',
				name: '',
				socketPath: ''
			}
		},
		server: {
			host: 'localhost',
			port: 8080
		}
	}
};

module.exports = config;


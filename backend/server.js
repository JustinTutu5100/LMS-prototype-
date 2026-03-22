const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/mongo'); // Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json());


// Root route for backend confirmation
app.get('/', (req, res) => {
	res.send('<h2>✅ Backend server is running and MongoDB is connected!</h2>');
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/lessons', require('./routes/lessons'));

const os = require('os');
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	const interfaces = os.networkInterfaces();
	let network = '';
	for (const name of Object.keys(interfaces)) {
		for (const iface of interfaces[name]) {
			if (iface.family === 'IPv4' && !iface.internal) {
				network = `http://${iface.address}:${PORT}`;
				break;
			}
		}
		if (network) break;
	}
	console.log('  ➜  Local:   http://localhost:' + PORT + '/');
	if (network) {
		console.log('  ➜  Network: ' + network + '/');
	} else {
		console.log('  ➜  Network: use --host to expose');
	}
	console.log('  ➜  press h + enter to show help');
	console.log('✅ Backend server is running!');
});
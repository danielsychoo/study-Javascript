import io from 'socket.io-client';

const TEST_API = 'http://localhost:8080'

const socket = io(TEST_API, { path: '/socket' });

export default socket;
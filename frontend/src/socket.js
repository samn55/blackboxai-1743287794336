import { io } from 'socket.io-client';

// Create Socket.IO client instance
const socket = io('http://localhost:5000', {
  transports: ['websocket'],
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

// Socket event listeners for debugging
socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('connect_error', (error) => {
  console.error('Connection error:', error);
});

socket.on('disconnect', (reason) => {
  console.log('Disconnected:', reason);
});

export default socket;
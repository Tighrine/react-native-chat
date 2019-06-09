import io from 'socket.io-client';

const socket = io('http://192.168.1.1:3000');
socket.connect();

export default socket;
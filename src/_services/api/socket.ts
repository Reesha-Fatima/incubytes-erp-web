import { SOCKET_URL } from '@settings';
import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(`${SOCKET_URL}`);
  }
  return socket;
};

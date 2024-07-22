import { io } from "socket.io-client";

const URL = "ws://192.168.5.57:8001";

export const socket = io(URL, {
    transports: ['websocket'],
    autoConnect: false,
});
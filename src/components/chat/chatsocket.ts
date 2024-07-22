import { io } from "socket.io-client";

const URL = process.env.NEXT_PUBLIC_SOCKET_URL || "ws://192.168.5.57:8002";

export const socket = io(URL, {
    transports: ['websocket'],
    autoConnect: false,
});